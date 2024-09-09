const axios = require("axios");

// Repository details and commit SHA
const REPO_OWNER = "kausgang"; // Replace with your GitHub repository owner (username or organization)
const REPO_NAME = "TechLearning"; // Replace with your GitHub repository name
const COMMIT_SHA = "888d9c143752f76eaab9ade834a0b7b4661c976f";
GITHUB_TOKEN = "";

// Function to get changed files in a commit
async function getChangedFiles(commitSha) {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/commits/${commitSha}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    const files = response.data.files.map((file) => file.filename);
    return files;
  } catch (error) {
    console.error(
      "Error fetching commit details:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}

// Execute the function and print the result
getChangedFiles(COMMIT_SHA)
  .then((files) => {
    console.log("Changed files:", files);
  })
  .catch((error) => {
    console.error("Failed to get changed files:", error);
  });
