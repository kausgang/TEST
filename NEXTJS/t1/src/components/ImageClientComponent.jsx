// "use client";
// import { revalidatePath } from "next/cache";
import Image from "next/image";

const ImageClientComponent = ({ url }) => {
  return (
    <Image
      src={url}
      width={800}
      height={800}
      alt="Picture of the author"
      // unoptimized
    />
  );
};

export default ImageClientComponent;
