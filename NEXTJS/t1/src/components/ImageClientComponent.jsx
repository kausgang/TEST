"use client";
// import { revalidatePath } from "next/cache";
// import { getAccessToken, getSession } from "@auth0/nextjs-auth0";
import { markFavoriteAction } from "@/app/actions/markFavorite";

import Image from "next/image";
import { useEffect, useState } from "react";

// const markFavorite = async (formData) => {
//   "use server";
//   // get the user id
//   // const session = await getSession();
//   // const { user } = session || false;

//   // console.log("user=", user.email, "iSF Image Id=", formData.get("SF_ImageId"));

//   const userId = formData("userId");
//   const SF_ImageId = formData.get("SF_ImageId");

// };

const ImageClientComponent = ({ userId, SF_ImageId, url, favorite }) => {
  const [fav, setFav] = useState(false);

  useEffect(() => setFav(favorite), []);

  const markFavorite = async (e) => {
    setFav(true);
    // call the server action with userid and image id
    markFavoriteAction(userId, SF_ImageId);
  };

  return (
    <div className="flex flex-col mt-4 space-y-2">
      <form action={markFavorite}>
        <input type="hidden" name="userId" value={userId} />
        <input type="hidden" name="SF_ImageId" value={SF_ImageId} />
        {/* {!favorite ? ( */}
        {!fav ? (
          <button
            type="submit"
            className="btn btn-secondary w-24"
            // onClick={(e) => {
            //   e.preventDefault();
            //   setFav(true);
            // }}
          >
            {/* // <button className="btn btn-secondary w-24" onClick={markFavorite}> */}
            Favorite
          </button>
        ) : (
          <p>already a favorite</p>
        )}
      </form>
      <Image
        src={url}
        width={800}
        height={800}
        alt="Picture of the author"
        // unoptimized
      />
    </div>
  );
};

export default ImageClientComponent;
