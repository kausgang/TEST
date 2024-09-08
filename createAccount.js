const axios = require("axios");
const qs = require("qs");

// Salesforce OAuth 2.0 configuration
const authConfig = {
  instanceUrl: "https://test-18d-dev-ed.develop.my.salesforce.com", // Replace with your Salesforce instance URL
  authUrl: "https://login.salesforce.com/services/oauth2/authorize", // Use 'https://test.salesforce.com/services/oauth2/token' for sandbox
  clientId:
    "3MVG9HB6vm3GZZR9BkkPcu_Raenzdn.wiKJGpBHKhpsjCMwhkYIAkmQ0du99AwQBf_8549KiqAVAww58V8TlN", // Replace with your Consumer Key
  clientSecret:
    "7C928FF64B227019C9064200BC3E4F7FFA48E071929D14345D3D94622A9B0FD9", // Replace with your Consumer Secret
  username: "sfdcad2023@gmail.com", // Replace with your Salesforce username
  password: "Kolkata#1pYkMQp3YYLAaCGBlduTbekvy", // Replace with your Salesforce password and security token
};

// Function to get Salesforce access token
async function getAccessToken() {
  const params = {
    grant_type: "client_credentials",
    response_type: "token",
    // scope: "api",
    redirect_uri: "https://oauth.pstmn.io/v1/browser-callback",
    client_id: authConfig.clientId,
    client_secret: authConfig.clientSecret,
    // username: authConfig.username,
    // password: authConfig.password,
  };

  try {
    const response = await axios.post(
      authConfig.authUrl,
      qs.stringify(params),
      {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error(
      "Error getting access token:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
}

// Function to create an account record
async function createAccount(accessToken) {
  const accountData = {
    Name: "New Account", // Replace with the data you want to send
    Phone: "123-456-7890",
    Website: "http://www.example.com",
  };

  try {
    const response = await axios.post(
      `${authConfig.instanceUrl}/services/data/v57.0/sobjects/Account/`,
      accountData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Account created:", response.data);
  } catch (error) {
    console.error(
      "Error creating account:",
      error.response ? error.response.data : error.message
    );
  }
}

// Main function to execute the flow
async function main() {
  try {
    const accessToken = await getAccessToken();
    await createAccount(accessToken);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
