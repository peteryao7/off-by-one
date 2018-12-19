// retrieve question to show in QuestionShow
export const selectQuestion = ({questions}, questionId) => {
  return questions[questionId] || { questionId: ["none found"] }
}

// export function millisecsToTime(duration) {
//   var milliseconds = parseInt((duration % 1000) / 100),
//     seconds = parseInt((duration / 1000) % 60),
//     minutes = parseInt((duration / (1000 * 60)) % 60),
//     hours = parseInt((duration / (1000 * 60 * 60)) % 24);
//
//   hours = (hours < 10) ? "0" + hours : hours;
//   minutes = (minutes < 10) ? "0" + minutes : minutes;
//   seconds = (seconds < 10) ? "0" + seconds : seconds;
//
//   return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
// }
//
//
// export function timeSinceUpdate(update_time){
//   return millisecsToTime(Date.now() - Date.parse(update_time));
// }

export const questionsArray = (questions) => (
  Object.values(questions)
);

export const answersArray = ({ answers }) => (
  Object.values(answers)
);
