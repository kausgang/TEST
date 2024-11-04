import axios from "axios";

const reviewTests = async (tests) => {
  console.log(tests);

  //   const response = await fetch("/api/UNUSED_getSFData");
  //   const response = await fetch("/api/getAll", {
  //     method: "POST",
  //     body: {
  //       tests,
  //     },
  //   });

  const res = await axios({
    url: "/api/getAll",
    method: "POST",
    data: {
      tests,
    },
  });
  return <div>reviewTests</div>;
};

export default reviewTests;
