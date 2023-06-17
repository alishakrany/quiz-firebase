import React, { useEffect, useState } from 'react';
import { firestore } from '../Services/firebaseConfig';

const QuizList = ({ onQuizSelect }) => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const quizCollection = await firestore.collection('quizzes').get();
        const quizList = quizCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQuizzes(quizList);
      } catch (error) {
        console.error('حدث خطأ ما أثناء استرجاع قائمة الاختبارات:', error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div>
      <h2>قائمة الاختبارات</h2>
      {quizzes.map((quiz) => (
        <p key={quiz.id} onClick={() => onQuizSelect(quiz)}>
          {quiz.quizTitle}
      
        </p>
      ))}
    </div>
  );
};

export default QuizList;
