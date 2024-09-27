import { useState, useEffect } from "react";
import {
  getPublicResource,
  updatePublicResource,
} from "../../services/json-server.service";
import { useCount, useMessage } from "../../context";

import { Button } from "flowbite-react";

// import { useEffect } from "react";
import axios from "axios";
import qs from "querystring";
import fs from "fs";
import path from "path";

export const HomePage = () => {
  //   const [message, setMessage] = useState("");

  // const { message, updateMessage } = useMessage();
  const { count, addOne } = useCount();

  // useEffect(() => {
  //   const getNumber = async () => {
  //     const { data } = await getPublicResource();

  //     console.log(data);
  //     // updateMessage(data);
  //     // if (data) setMessage(JSON.stringify(data, null, 2));
  //   };

  //   getNumber();
  // }, []);

  const updateNumber = async () => {
    // addOne(count);
    addOne();
    const newTitle = count;
    await updatePublicResource(newTitle);
    // console.log(count);
  };

  useEffect(() => {
    async function sendToSalesforce() {
      try {
        // Get OAuth token
        const authResponse = await axios.post(
          "https://enterprise-java-7413-dev-ed.scratch.lightning.force.com/services/oauth2/token",
          qs.stringify({
            grant_type: "password",
            client_id: import.meta.env.SF_CONSUMER_KEY,
            client_secret: import.meta.env.SF_CONSUMER_SECRET,
            username: import.meta.env.SF_USERNAME,
            password: import.meta.env.SF_PASSWORD,
          })
        );

        console.log(authResponse);

        // const accessToken = authResponse.data.access_token;
        // const instanceUrl = authResponse.data.instance_url;

        // // Read the list of changed .docx files
        // // const docxFiles = fs.readFileSync('changed_docx_files.txt', 'utf8').split('\n').filter(line => line.trim() !== '');

        // // Create Salesforce records for each changed .docx file

        //   const fileName = path.basename(file);

        //   const config = {
        //     url:'https://enterprise-java-7413-dev-ed.scratch.lightning.force.com/services/data/v56.0/sobjects/Account',
        //     method:'POST',
        //     headers: {
        //       "Authorization": `Bearer ${accessToken}`,
        //       'Content-Type': 'application/json',
        //     },
        //     data:{
        //       "Name": fileName,

        //     },
        //   }
        //   // Create a record in Salesforce
        //   const createResponse = await axios ()

        //     }
        //   );

        //   console.log('Salesforce Response for', fileName, ':', createResponse.data);
      } catch (error) {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
      }
    }

    sendToSalesforce();
  }, []);

  return (
    <div>
      {/* <div>{message}</div> */}
      {/* <button onClick={updateNumber}>+1</button> */}
      {/* <Button onClick={updateNumber}>+1</Button> */}
      {/* <p>{count}</p> */}
      {/* <button onClick={() => setMessage("")}>Clear message</button> */}
    </div>
  );
};
