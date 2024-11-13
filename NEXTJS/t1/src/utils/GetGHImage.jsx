"use server";

const GetGHImage = async (image_location) => {
  try {
    const token = process.env.GITHUB_TOKEN; // Set this in your .env.local
    const owner = process.env.OWNER;
    const repo = process.env.REPO;
    // const image_location = process.env.IMAGE_LOCATION;

    // const repo = "kausgang/test-private"; // Replace with your username/repo
    // const path = "image/pic.png"; // Replace with the path to your image

    const URL = `https://api.github.com/repos/${owner}/${repo}/contents/${image_location}`;

    // console.log(URL);
    const response = await fetch(
      //   `https://api.github.com/repos/${repo}/contents/${path}`,
      URL,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          // Accept: "application/vnd.github.v3.raw",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error("Failed to fetch image:", response.statusText);
      return { notFound: true };
    }

    const data = await response.json();

    // console.log("github data = ", data.download_url);

    return data.download_url;
  } catch (error) {
    console.error("failed to get GH Image", error.message);
  }
};

export default GetGHImage;
