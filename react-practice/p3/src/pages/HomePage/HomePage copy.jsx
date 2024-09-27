import { useEffect } from "react";
import axios from "axios";

export const HomePage = () => {
  useEffect(() => {
    // Salesforce OAuth 2.0 configuration
    const config = {
      clientId:
        "3MVG9HB6vm3GZZR9BkkPcu_RaejpIVVpzx7qR_li.xOuJUEEwP.L_nK4oqqI5hOqj2pq3BDfSKyNzSfRaLMFV",
      clientSecret:
        "E1B5F79261A03E4DC5FD6C680B3B394D6E0BD0A9C78F15030C21110F1758B6CE",
      redirectURL: "http://localhost:5173/test",
      tokenUrl:
        "https://test-18d-dev-ed.develop.my.salesforce.com/services/oauth2/token",
      authorizeUrl:
        "https://test-18d-dev-ed.develop.my.salesforce.com/services/oauth2/authorize",
      code_challenge: "47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU",
      code_verifier: "I3PQSCHTrtiK_Co0rf2lZvmGy6Yyxl2PWGJvvg9kg-w",
    };

    // Function to get Salesforce access token
    async function getAccessToken() {
      try {
        const response = await axios.post(
          // config.tokenUrl,
          config.authorizeUrl,
          new URLSearchParams({
            grant_type: "authorization_code",
            client_id: config.clientId,
            // client_secret: config.clientSecret,
            // code: config.code_challenge,
            response_type: "code",
            redirect_uri: config.redirectURL,
            code_challenge: config.code_challenge,
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
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

    // Example usage
    (async () => {
      try {
        const accessToken = await getAccessToken();
        console.log("Access Token:", accessToken);
        // You can now use this token to make authenticated requests to Salesforce
      } catch (error) {
        console.error("Failed to get access token:", error.message);
      }
    })();
  }, []);
  return <div>HomePage</div>;
};
