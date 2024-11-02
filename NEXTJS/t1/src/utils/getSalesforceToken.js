import jwt from "jsonwebtoken";
import axios from "axios";

export default async function getSalesforceToken() {
  const privateKey = process.env.SF_PRIVATE_KEY;
  const clientId = process.env.NEXT_PUBLIC_SF_CLIENT_ID;
  const userEmail = process.env.SF_USER_EMAIL;
  const loginUrl = process.env.SF_LOGIN_URL;

  // Set the JWT payload
  const payload = {
    iss: clientId, // Client ID from Salesforce
    sub: userEmail, // The Salesforce username
    aud: `${loginUrl}`, // Audience is Salesforce login URL
    exp: Math.floor(Date.now() / 1000) + 300, // Token expiration (5 minutes)
  };

  // Sign the JWT with the private key
  const token = jwt.sign(payload, privateKey, { algorithm: "RS256" });

  //   console.log("token is = ", token);

  // Make the request to get the Salesforce access token
  try {
    const response = await axios.post(
      `${loginUrl}/services/oauth2/token`,
      null,
      {
        params: {
          grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
          assertion: token,
        },
      }
    );

    // Salesforce returns an access token if successful
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching Salesforce token:", error.response.data);
    throw error;
  }
}
