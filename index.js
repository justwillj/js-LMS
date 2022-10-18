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