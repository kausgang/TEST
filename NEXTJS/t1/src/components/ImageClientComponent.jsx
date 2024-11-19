// "use client";
// import { revalidatePath } from "next/cache";
import { getAccessToken, getSession } from "@auth0/nextjs-auth0";

import Image from "next/image";

const markFavorite = async (formData) => {
  "use server";
  // get the user id
  const session = await getSession();
  const { user } = session || false;

  console.log("user=", user.email, "iSF Image Id=", formData.get("SF_ImageId"));
};

const ImageClientComponent = ({ SF_ImageId, url, favorite }) => {
  // console.log("SF_ImageId=", SF_ImageId);

  return (
    <div className="flex flex-col mt-4 space-y-2">
      <form action={markFavorite}>
        <input type="hidden" name="SF_ImageId" value={SF_ImageId} />
        {!favorite ? (
          <button className="btn btn-secondary w-24">Favorite</button>
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
