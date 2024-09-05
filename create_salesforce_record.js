const axios = require('axios');
const { execSync } = require('child_process');

async function getSalesforceAccessToken() {
  const params = new URLSearchParams();
  params.append('grant_type', 'password');
  params.append('client_id', process.env.SF_CLIENT_ID);
  params.append('client_secret', process.env.SF_CLIENT_SECRET);
  params.append('username', process.env.SF_USER_NAME);
  params.append('password', process.env.SF_PASSWORD + process.env.SF_SECURITY_TOKEN);
  params.append('redirect_uri', process.env.SF_CALLBACK_URL);

  try {
    const response = await axios.post(process.env.SF_TOKEN_URL, params);
    return response.data.access_token;
  } catch (error) {
    console.error('Error obtaining Salesforce access token:', error);
    throw error;
  }
}

async function createSalesforceRecord(accessToken, fileName, filePath) {
  const record = {
    Document_Name__c: fileName,
    Document_Path__c: filePath
  };

  try {
    await axios.post(
      `${process.env.SF_INSTANCE_URL}/services/data/v56.0/sobjects/techdoc__c`,
      record,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(`Record created for ${fileName}`);
  } catch (error) {
    console.error(`Error creating Salesforce record for ${fileName}:`, error);
  }
}

async function main() {
  const accessToken = await getSalesforceAccessToken();
  
  // Get the list of files in the latest commit
  const output = execSync('git diff-tree --no-commit-id --name-only -r ${{ github.sha }}');
  const files = output.toString().split('\n').filter(file => file);

  for (const file of files) {
    const fileName = file.split('/').pop();
    const filePath = `${process.env.GITHUB_REPOSITORY}/blob/${process.env.GITHUB_SHA}/${file}`;
    await createSalesforceRecord(accessToken, fileName, filePath);
  }
}

main().catch((error) => {
  console.error('Error in Salesforce integration:', error);
  process.exit(1);
});
