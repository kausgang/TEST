"use server";

// export const markFavoriteAction = async (formData) => {
//passing formData didn't work as formData was undefined if passed to server action from client component
export const markFavoriteAction = async (userId, SF_ImageId) => {
  console.log("userId=", userId);
  console.log("SF_ImageId=", SF_ImageId);
  //   const userId = formData.get("userId");
  //   const SF_ImageId = formData.get("SF_ImageId");

  //   console.log("user=", userId, "SF Image Id=", SF_ImageId);
};

// export default markFavorite;
