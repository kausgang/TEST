// "use client";

import { getAccessToken, getSession } from "@auth0/nextjs-auth0";

const GetSFData = async (req, res) => {
  const { accessToken } = await getAccessToken(req, res);
  const response = await fetch(`${process.env.SF_GETTEST_ENDPOINT}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  console.log(response.body);
  return response;

export default GetSFData;
