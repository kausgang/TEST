// // Assuming you have fetched the data and it's stored in 'fetchedData'
// const fetchedData = [
//     {
//         "tests": ["Test 1", "Test 2"],
//         "teacher": "Neal",
//         "course": "AWS - Cloud Practitioner"
//     },
//     {
//         "tests": ["Test 1", "Test 2", "Test 3"],
//         "teacher": "Stephane",
//         "course": "AWS - Cloud Practitioner"
//     }
// ];

// // Transform the data
// const transformedData = transformData(fetchedData);

// // Now you can use transformedData in your component
// console.log(transformedData);

function transformData(originalData) {
  const result = [];

  // Iterate through each record in the original data
  originalData.forEach((item) => {
    // Find or create the course entry
    let courseEntry = result.find((course) => course.label === item.course);

    if (!courseEntry) {
      courseEntry = {
        label: item.course,
        value: item.course,
        children: [],
      };
      result.push(courseEntry);
    }

    // Find or create the teacher entry
    let teacherEntry = courseEntry.children.find(
      (teacher) => teacher.label === item.teacher
    );

    if (!teacherEntry) {
      teacherEntry = {
        label: item.teacher,
        value: `${item.course}/${item.teacher}`,
        children: [],
      };
      courseEntry.children.push(teacherEntry);
    }

    // Add tests to the teacher's children
    // item.tests.forEach((test) => {
    //   teacherEntry.children.push({
    //     label: test,
    //     value: `${item.course}/${item.teacher}/${test}`,
    //   });
    // });

    // item.tests((test) => {
    teacherEntry.children.push({
      label: item.test,
      value: `${item.course}/${item.teacher}/${item.test}`,
    });
    // });
  });

  return result;
}

const fetchedData = [
  { test: "Test 1", teacher: "Stephane", course: "AWS - Cloud Practitioner" },
  { test: "Test 1", teacher: "Neal", course: "AWS - Cloud Practitioner" },
  { test: "Test 2", teacher: "Neal", course: "AWS - Cloud Practitioner" },
];

// Transform the data
const transformedData = transformData(fetchedData);

// Now you can use transformedData in your component
console.log(transformedData);
