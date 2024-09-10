export const createRecord = async (accessToken, filename, status) => {
  if (status === "added") {
    // separate the filename and path
    let only_filename = filename.substring(
      filename.length,
      filename.lastIndexOf("/") + 1
    );

    const record = {
      name__c: only_filename,
      path__c: filename,
    };

    try {
      await axios.post(
        `${process.env.SF_DOMAIN}/services/data/v61.0/sobjects/techdoc__c`,
        record,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(`Record created for ${filename}`);

      //   return "Ok";
    } catch (error) {
      console.error(`Error creating Salesforce record for ${filename}:`, error);
    }
  }
};
