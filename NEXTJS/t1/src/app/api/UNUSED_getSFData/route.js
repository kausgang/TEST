import getSalesforceToken from "@/utils/getSalesforceToken";
import axios from "axios";
import { NextResponse } from "next/server";

// export default async function handler(req, res) {
export async function GET(req) {
  const res = new NextResponse();

  try {
    const accessToken = await getSalesforceToken();

    console.log("printing now", accessToken);

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

    console.log(salesforceResponse.data);

    // return new NextResponse(JSON.stringify(salesforceResponse), {
    //   status: 200,
    // });

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
}
