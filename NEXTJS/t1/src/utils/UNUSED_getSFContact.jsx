import React from "react";

const getSFContact = async (accessToken, email) => {
  const query = `SELECT ID FROM CONTACT where email='${email}'`;
  const response = await fetch(
    `${process.env.SF_DOMAIN}/services/data/v62.0/query/?q=${query}`
  );

  return <div>getSFContact</div>;
};

export default getSFContact;
