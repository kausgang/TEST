import axios from "axios";
import { redirect } from "next/navigation";

const getExam = async (tests) => {
  try {
    // extract course name, teacher name and test name from the input string
    // console.log(tests);

    const response = await axios({
      url: "/api/getExam",
      method: "POST",
      data: tests,
    });
    console.log(response.data);
    redirect("/exam");
  } catch (error) {}

  return <div>getExam</div>;
};

export default getExam;
