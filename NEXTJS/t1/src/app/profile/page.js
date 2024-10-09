import React from "react";
import { getSession } from "@auth0/nextjs-auth0";

const ProfilePage = async () => {
  const session = await getSession();

  if (!session) {
    throw new Error(`Requires authentication`);
  }

  const { user } = session;

  //   see it on server console
  console.log(user);
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <p>User email is - {user.email}</p>
      <a href="/" className="p-4 bg-pink-700 rounded-xl hover:scale-110">
        Go Back
      </a>
    </div>
  );
};

export default ProfilePage;
