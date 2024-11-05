import getSalesforceToken from "@/utils/getSalesforceToken";
import axios from "axios";
import { NextResponse } from "next/server";
export async function POST(req) {
  const data = await req.json();
  //   get access token
  const accessToken = await getSalesforceToken();

  const response = await axios({
    url: process.env.SF_GETEXAM_EP,
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    // data: { tests: JSON.stringify(data) },
    data: { tests: data },
  });

  console.log(response.data);

  //   return new Response(JSON.stringify(response.data), {
  //     status: 200,
  //     headers: { "Content-Type": "application/json" },
  //   });

  // Return the Salesforce data using NextResponse
  return NextResponse.json(response.data, {
    status: 200, // HTTP Status Code
  });
}
