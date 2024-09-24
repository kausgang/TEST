// const axios = require("axios");
import axios from "axios";

// Repository details and commit SHA
const REPO_OWNER = process.env.OWNER; // Replace with your GitHub repository owner (username or organization)
const REPO_NAME = process.env.REPO; // Replace with your GitHub repository name
const COMMIT_SHA = process.env.GITHUB_SHA;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const SF_OBJECT = "PracticeTest__c";

// Function to get changed files in a commit
async function getChangedFiles(commitSha) {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/commits/${COMMIT_SHA}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    const files = response.data.files.map((file) => {
      return {
        filename: file.filename,
        status: file.status,
        previous_filename: file.previous_filename,
      };
    });
    // const files = response.data.files.map((file) => file.filename);
    return files;
  } catch (error) {
    console.error(
      "Error fetching commit details:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}

async function getSalesforceAccessToken() {
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  params.append("client_id", process.env.SF_CLIENT_ID);
  params.append("client_secret", process.env.SF_CLIENT_SECRET);

  try {
    const response = await axios.post(process.env.SF_TOKEN_URL, params);
    return response.data.access_token;
  } catch (error) {
    console.error("Error obtaining Salesforce access token:", error);
    throw error;
  }
}

async function newSFRecord(accessToken, filename) {
  // separate the filename and path
  let only_filename = filename.substring(
    filename.length,
    filename.lastIndexOf("/") + 1
  );

  const record = {
    Quesion_Number__c: only_filename,
    Github_URL__c: filename,
  };

  try {
    await axios.post(
      `https://${process.env.SF_DOMAIN}/services/data/v61.0/sobjects/${SF_OBJECT}`,
      record,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(`Record created for ${filename}`);
  } catch (error) {
    console.error(`Error creating Salesforce record for ${filename}:`, error);
  }
}

async function createSalesforceRecord(accessToken, file, filePath) {
  // if added or renamed, create salesforce record
  //   if modified or removed status - delete the record
  // [
  //     { filename: 'rest_files.js', status: 'modified' },
  //     { filename: 'test/a.docx', status: 'added' },
  //     { filename: 'test/a.docx', status: 'removed' }
  //     { filename: 'test/12.md', status: 'renamed' }
  // ]

  const { filename, status, previous_filename } = file;

  //   IF NEW FILE ADDED

  if (status === "added") {
    await newSFRecord(accessToken, filename);
  }
}

// define the main function
const main = async () => {
  // get the updated files
  const files = await getChangedFiles(COMMIT_SHA);

  //   get access token
  const accessToken = await getSalesforceAccessToken();

  console.log(accessToken);

  files.map(
    async (file) => await createSalesforceRecord(accessToken, file, "")
  );

  console.log(files);
};

// call the main function
main().catch((error) => {
  console.error("Error in Salesforce integration:", error);
  process.exit(1);
});
