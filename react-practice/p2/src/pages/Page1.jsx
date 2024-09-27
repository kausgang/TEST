import { getCount, postCount, putCount } from "../services/json-server.service";

// import { useState } from "react";
export const Page1 = () => {
  // const [count, setCount] = useState(0);

  const handleGet = async () => {
    const { data, error } = await getCount();
    if (data) console.log(data);
    if (error) console.error(error);
  };

  const handlePost = async () => {
    const payload = 116;

    const { data, error } = await postCount(payload);

    console.log(data);
  };

  const handlePut = async () => {
    const payload = 2438;

    const { data, error } = await putCount(payload);

    console.log(data);
  };

  return (
    <>
      <section>
        <button className="border-2" onClick={handleGet}>
          Get Data
        </button>
        <br></br>
        <button className="border-4" onClick={handlePost}>
          Post
        </button>
        <br></br>
        <button className="border-4" onClick={handlePut}>
          Put
        </button>
      </section>
    </>
  );
};
