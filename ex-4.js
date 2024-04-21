let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
  hobbies: ["Football", "Coding"],
};

let additionalHobbies = ["Painting", "Yoga"];

// Start coding here
let {name,age,scores,hobbies} = studentProfile;
hobbies = [...hobbies,...additionalHobbies];
const newStudentProfile = {name,age,scores,hobbies}
console.log(newStudentProfile);
