let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let studentScores = {
  math: 30,
  english: 70,
  tech: 100,
};

// Start coding here
let {name,age,scores} = studentProfile;
scores = {...scores,...studentScores};
const newStudentProfile = {name,age,scores};
console.log(newStudentProfile);
