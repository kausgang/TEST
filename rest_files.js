const axios = require("axios");

// Repository details and commit SHA
const REPO_OWNER = "kausgang"; // Replace with your GitHub repository owner (username or organization)
const REPO_NAME = "test"; // Replace with your GitHub repository name
const COMMIT_SHA = "6ef2482f79976566ef99fccc8199ff77e2b869ae";

// Function to get changed files in a commit
async function getChangedFiles(commitSha) {
  try {
    const response = await axios.get(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/commits/${commitSha}`,
      {
        headers: {
          //   Authorization: `token ${GITHUB_TOKEN}`,
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

  //   try {
  //     const response = axios({
  //       url: "https://api.github.com/repos/kausgang/test/commits/846b934d5ecd8418ddcce150d6de37a047781460",
  //       method: "GET",
  //     });
  //   } catch (error) {}
}

// Execute the function and print the result
getChangedFiles(COMMIT_SHA)
  .then((files) => {
    console.log("Changed files:", files);
  })
  .catch((error) => {
    console.error("Failed to get changed files:", error);
  });
