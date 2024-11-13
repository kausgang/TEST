import { revalidatePath } from "next/cache";

const testSA = async () => {
  "use server";

  try {
    const response = await fetch(
      "www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    );

    console.log(response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const page = async () => {
  const data = await testSA();

  //   revalidatePath("/exam");
  return (
    <>
      {/* {data.drinks.map((element: { strImageSource: string | undefined }) =>
        // <img key={index} src={element.strImageSource} />
        console.log(element)
      )} */}
    </>
  );
};

export default page;
