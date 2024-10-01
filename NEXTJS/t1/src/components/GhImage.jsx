import React from "react";

const GhImage = ({ imageUrl }) => {
  console.log(process.env.GITHUB_TOKEN);

  return (
    <div>
      <h1>Image from GitHub</h1>
      <img src={imageUrl} alt="GitHub Image" />
    </div>
  );
};

export async function getServerSideProps() {
  const token = process.env.GITHUB_TOKEN; // Set this in your .env.local
  const repo = "kausgang/test-private"; // Replace with your username/repo
  const path = "image/pic.png"; // Replace with the path to your image

  console.log(token);

  const response = await fetch(
    `https://api.github.com/repos/${repo}/contents/${path}`,
    // `https://raw.githubusercontent.com/kausgang/test-private/main/image/pic.png`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        // Accept: "application/vnd.github.v3.raw",
      },
    }
  );

  if (!response.ok) {
    console.error("Failed to fetch image:", response.statusText);
    return { notFound: true };
  }

  const data = await response.json();

  console.log(data);
  const imageUrl = data.download_url;

  return {
    props: {
      imageUrl,
    },
  };
}

export default GhImage;
