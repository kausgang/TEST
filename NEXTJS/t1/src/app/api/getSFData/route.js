// app/api/getSFData/route.js
import { getAccessToken } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const res = new NextResponse();

    const { accessToken } = await getAccessToken(req, res);
    console.log(accessToken);

    const response = await fetch(`${process.env.SF_GETTEST_ENDPOINT}`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error fetching Salesforce data:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch Salesforce data" }),
      { status: 500 }
    );
  }
}
