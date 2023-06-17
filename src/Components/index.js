// import React from 'react';
// import Quiz from 'react-quiz-component';
// import quiz from './quiz';

// const Form = ({ selectedQuiz }) => {

//   const setResult = (values) => {
//     // قم بتنفيذ العمليات اللازمة على القيمة المرجعة
//     console.log(JSON.stringify(values, null, 2));
//     console.log(selectedQuiz , 'hhhhhhhhhhhhh')
//   };

//   return (
//     <div className="App">
//       <Quiz
//         quiz={selectedQuiz ? selectedQuiz : quiz} // استخدم onQuizSelect إذا كانت قيمته غير فارغة، وإلا استخدم quiz الافتراضي
//         shuffle
//         onQuestionSubmit={(obj) => console.log('user question results:', obj)}
//         onComplete={setResult}
//         disableSynopsis
//       />
//     </div>
//   );
// };

// export default Form;










import React from 'react';
import Quiz from 'react-quiz-component';

const Form = ({ selectedQuiz }) => {
  const setResult = (values) => {
    console.log(JSON.stringify(values, null, 2));
    console.log(selectedQuiz, 'hhhhhhhhhhhhh');
  };

  return (
    <div className="App">
      <Quiz
        quiz={selectedQuiz}
        shuffle
        onQuestionSubmit={(obj) => console.log('user question results:', obj)}
        onComplete={setResult}
        disableSynopsis
      />
    </div>
  );
};

export default Form;
