import React from "react";
import getSalesforceToken from "./getSalesforceToken";
import axios from "axios";
import { NextResponse } from "next/server";

const getSFTests = async (accessToken) => {
  try {
    // https://help.salesforce.com/s/articleView?id=mktg.mc_overview_limits_api.htm&type=5
    // Don’t request a new token with every API request. Instead, use the expires_in parameter in the response to a token request to determine how long an existing access token remains valid. Request a new token only when the existing token expires.
    // const accessToken = await getSalesforceToken();

    console.log(accessToken);

    // Use the access token to make an API call to Salesforce
    const salesforceResponse = await axios.get(
      //   "https://test-18d-dev-ed.develop.my.salesforce.com/services/data/v54.0/sobjects/Account", // Example endpoint
      process.env.SF_GETTEST_ENDPOINT,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // console.log(salesforceResponse);

    // return salesforceResponse.data;

    return new NextResponse(JSON.stringify(salesforceResponse.data), {
      status: 200,
    });

    // return res.status(200).json(salesforceResponse.data);
  } catch (error) {
    console.error("Error fetching Salesforce data:");
    // res.status(500).json({ error: "Error fetching Salesforce data" });
    return new Response(
      JSON.stringify({ error: "Failed to fetch Salesforce data" }),
      { status: 500 }
    );
  }

  return <div>getSFTests</div>;
};

export default getSFTests;
