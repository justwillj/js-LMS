//Data Model for a Submission
const test1 = [
  {
    quizName: "Javascript",
    quizModule: "Statistics",
    quizScore: 88.2,
    studentId: 10,
    studentName: "Justin",
    submissionDate: "10/16/2022",
  },

  {
    quizName: "Javascript",
    quizModule: "Statistics",
    quizScore: 94.7,
    studentId: 12,
    studentName: "Jake",
    submissionDate: "10/16/2022",
  },

  {
    quizName: "Javascript",
    quizModule: "Statistics",
    quizScore: 70.3,
    studentId: 14,
    studentName: "Bob",
    submissionDate: "10/15/2022",
  },
  {
    quizName: "HTML",
    quizModule: "CS",
    quizScore: 73.2,
    studentId: 10,
    studentName: "Justin",
    submissionDate: "10/17/2022",
  },

  {
    quizName: "HTML",
    quizModule: "CS",
    quizScore: 82.2,
    studentId: 12,
    studentName: "Jake",
    submissionDate: "10/18/2022",
  },
  {
    quizName: "HTML",
    quizModule: "CS",
    quizScore: 66.1,
    studentId: 14,
    studentName: "Bob",
    submissionDate: "10/18/2022",
  },

  {
    quizName: "PHP",
    quizModule: "Database",
    quizScore: 77.2,
    studentId: 8,
    studentName: "Chris",
    submissionDate: "10/20/2022",
  },

  
   {
    quizName: "PHP",
    quizModule: "Database",
    quizScore: 82.7,
    studentId: 6,
    studentName: "Ryan",
    submissionDate: "10/20/2022",
  },

  {
    quizName: "PHP",
    quizModule: "Database",
    quizScore: 99.1,
    studentId: 22,
    studentName: "Chad",
    submissionDate: "10/21/2022",
  },

  {
    quizName: "Servers",
    quizModule: "Database",
    quizScore: 80.1,
    studentId: 8,
    studentName: "Chris",
    submissionDate: "10/25/2022",
  },
  {
    quizName: "Servers",
    quizModule: "Database",
    quizScore: 80.1,
    studentId: 6,
    studentName: "Ryan",
    submissionDate: "10/28/2022",
  },

  {
    quizName: "Servers",
    quizModule: "Database",
    quizScore: 60.1,
    studentId: 22,
    studentName: "Chad",
    submissionDate: "10/25/2022",
  },
 
];

const test2 = [
  {
    quizName: "CSS",
    quizModule: "Algebra",
    quizScore: 88.1,
    studentId: 10,
    studentName: "Justin",
    submissionDate: "10/16/2022",
  },

  {
    quizName: "CSS",
    quizModule: "Algebra",
    quizScore: 94,
    studentId: 12,
    studentName: "Jake",
    submissionDate: "10/16/2022",
  },

  {
    quizName: "CSS",
    quizModule: "Algebra",
    quizScore: 70,
    studentId: 14,
    studentName: "Bob",
    submissionDate: "10/16/2022",
  },
];

/**
 * loops through the submission array and returns the test that were done on a specified date
 * @param {string} date - the date the user wants to see submitted tests
 * @param {object []} submissionArray - object array of submission test   
 * @returns {array[]} - the test that were done on that specified date
 */
const inputDate = "10/19/2022" ;
const filterByDate = (date,submissionArray) => {
  const dateArray = [];
  for (const array of submissionArray) {
    if (array.submissionDate === date) {
      dateArray.push(array);
    }
  }return dateArray;
 
};
filterByDate(inputDate,test1);


/**
 * loops through the submission array and returns the test that was done by the specified student ID
 * @param {number} studentId - the student ID the user wants to see submitted tests 
 * @param {object []} submissionArray - object array of submission test   
 * @returns {array[]} - the test that were done by the specified student ID
 */
const inputStudentId = 6;
const filterByStudentId = (studentId, submissionArray) => {
  const idArray = [];
  for (const array of submissionArray) {
    if (array.studentId === studentId) {
      idArray.push(array);
    }
  }
  return idArray;
};
filterByStudentId(inputStudentId, test1);



/**
 * loops through the submission array and names of students to see if a student has not turned in a test on a specified date      
 * @param {string} date - the date the user wants to see submitted tests
 * @param {array[]} names - names of the student they want to check 
 * @param {object []} submissionArray - object array of submission test 
 * @returns {array} - of the names of the student that have not completed the test on the specified date 
 */
const namesOfStudent = ["Justin", "Jake", "Bob", "Chris", "Ryan", "Chad"];
const testNamesOfStudent = ["Not in the class", "Hello"];
const findUnsubmitted = (date,names,submissionArray) => {
  const unSubmittedArray = [];

  for(const name of names){
    let id = [];
    id.push(name); 

    for (const array of submissionArray) {
      if (array.submissionDate !== date && array.studentName == id) {
        unSubmittedArray.push(array.studentName);  
      }
    }
  } return unSubmittedArray;
};
findUnsubmitted(inputDate, namesOfStudent, test1);




/**
 * loops through the submission array and adds up the quiz scores to get a average
 * @param {object[]} submissionArray - object array of submission test  
 * @returns {string} - the average of the quiz score for that submission array
 */
const getAverageScore = (submissionArray) => {
  let total = 0;
  let count = 0;

  for(const array of submissionArray){
    total += array.quizScore
}

for (var array in submissionArray) {
  if (submissionArray.hasOwnProperty(array)) count++;
}
let average = total/count;
return average.toFixed(1);
} 
getAverageScore(test2);