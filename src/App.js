// import React, { useState } from 'react';
// import Form from './Components';
// import QuizDetails from './Components/test';
// import QuizList from './Components/menu';
// import MainPage from './Components/1'
// import './App.css';

// const App = () => {
//   const [onQuizSelect, setSelectedQuiz] = useState(null);

//   // const handleQuizSelection = (quiz) => {
//   //   setSelectedQuiz(quiz);
//   // };

//   return (
//     <div className="App">
//       <MainPage/>
//       {/* <Form onQuizSelect={onQuizSelect} />
//       <QuizDetails onQuizSelect={onQuizSelect} />
//       <QuizList /> */}
//     </div>
//   );
// };

// export default App;



import React from 'react';
import MainPage from './Components/1';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
};

export default App;
