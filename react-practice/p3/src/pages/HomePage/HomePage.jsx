import { useState, useEffect } from "react";
import axios from "axios";
import { code_verifier, code_challenge } from "../../utils/oauth";

export const HomePage = () => {
  const VITE_CLIENTID =
    "3MVG9HB6vm3GZZR9BkkPcu_RaejpIVVpzx7qR_li.xOuJUEEwP.L_nK4oqqI5hOqj2pq3BDfSKyNzSfRaLMFV";
  const VITE_CLIENTSECRET =
    "E1B5F79261A03E4DC5FD6C680B3B394D6E0BD0A9C78F15030C21110F1758B6CE";
  const VITE_REDIRECTURL = "http://localhost:5173";
  // const VITE_REDIRECTURL = "http://localhost:5173";
  const VITE_TOKENURL =
    "https://test-18d-dev-ed.develop.my.salesforce.com/services/oauth2/token";
  const VITE_AUTHORIZEURL =
    "https://test-18d-dev-ed.develop.my.salesforce.com/services/oauth2/authorize";

  const clientId = VITE_CLIENTID;
  const redirectUri = VITE_REDIRECTURL;
  const authorizationUrl = VITE_AUTHORIZEURL;
  const tokenUrl = VITE_TOKENURL;
  const apiUrl = "http://localhost:5000/proxy/api";
  // const apiUrl =
  //   "https://test-18d-dev-ed.develop.my.salesforce.com/services/data/v52.0/query";
  const proxyURL = "http://localhost:5000/proxy/token";
  const code_challenge = "97xzcrOkgufHPJoyEgMJbMGe6nPkOPCdCFvygujkAAY";
  const code_verifier =
    "cuQN1u2srxly-l2vlS3hM6L5xj_UjGO1xbRGT2ZqxNbUDFrrU0G0nlkaLx3t2qHcoV4Xwmx62_q5gr5Eb8hqFI0v2Bm0sI9iV6zO9FbfgRBmlj36bAnpESPrT23vaadg";
  // const clientId = import.meta.env.VITE_CLIENTID;
  // const redirectUri = import.meta.env.VITE_REDIRECTURL;
  // const authorizationUrl = import.meta.env.VITE_AUTHORIZEURL;
  // const tokenUrl = import.meta.env.VITE_TOKENURL;
  // const apiUrl = "https://login.salesforce.com/services/data/v52.0/query";

  const [authCode, setAuthCode] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [accountCount, setAccountCount] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.has("code")) {
      setAuthCode(queryParams.get("code"));
    }
  }, []);

  useEffect(() => {
    console.log(authCode);
    if (authCode) {
      // Exchange authorization code for access token
      axios
        .post(
          proxyURL,
          new URLSearchParams({
            grant_type: "authorization_code",
            code: authCode,
            redirect_uri: redirectUri,
            client_id: clientId,
            code_verifier: code_verifier,
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          setAccessToken(response.data.access_token);
        })
        .catch((error) => {
          console.error("Error getting access token:", error);
        });
    }
  }, [authCode]);

  useEffect(() => {
    if (accessToken) {
      // Fetch the number of accounts
      axios
        .get(apiUrl, {
          // headers: {
          //   Authorization: `Bearer ${accessToken}`,
          // },
          params: {
            q: "SELECT COUNT() FROM Account",
            accessToken: accessToken,
          },
        })
        .then((response) => {
          setAccountCount(response.data.totalSize);
        })
        .catch((error) => {
          console.error("Error fetching accounts:", error);
        });
    }
  }, [accessToken]);

  const handleLogin = () => {
    console.log(authorizationUrl);

    // Redirect user to Salesforce authorization endpoint
    const loginUrl = `${authorizationUrl}?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=full&code_challenge=${code_challenge}&code_challenge_method=S256`;
    window.location.href = loginUrl;
  };

  return (
    <div className="App">
      {!authCode ? (
        <button onClick={handleLogin}>Login with Salesforce</button>
      ) : (
        <div>
          <p>Fetching account data...</p>
          {accountCount !== null && <p>Number of accounts: {accountCount}</p>}
        </div>
      )}
    </div>
  );
};
