// // import React, { useEffect, useState } from 'react';
// // import { firestore } from '../Services/firebaseConfig';
// // import Quiz from 'react-quiz-component';

// // const MainPage = ({ onQuizSelect }) => {
// //   const [collections, setCollections] = useState([]);
// //   const [selectedCollection, setSelectedCollection] = useState(null);
// //   const [quizzes, setQuizzes] = useState([]);

// //   useEffect(() => {
// //     const fetchCollections = async () => {
// //       try {
// //         const collectionSnapshot = await firestore.collection('collections').get();
// //         const collectionList = collectionSnapshot.docs.map((doc) => ({
// //           id: doc.id,
// //           ...doc.data(),
// //         }));
// //         setCollections(collectionList);
// //       } catch (error) {
// //         console.error('حدث خطأ أثناء استرجاع المجموعات:', error);
// //       }
// //     };

// //     fetchCollections();
// //   }, []);

// //   useEffect(() => {
// //     const fetchQuizzes = async () => {
// //       if (selectedCollection) {
// //         try {
// //           const quizCollection = await firestore.collection(selectedCollection).get();
// //           const quizList = quizCollection.docs.map((doc) => ({
// //             id: doc.id,
// //             ...doc.data(),
// //           }));
// //           setQuizzes(quizList);
// //         } catch (error) {
// //           console.error('حدث خطأ أثناء استرجاع الاختبارات:', error);
// //         }
// //       }
// //     };

// //     fetchQuizzes();
// //   }, [selectedCollection]);

// //   const handleCollectionSelect = (collection) => {
// //     setSelectedCollection(collection);
// //   };

// //   const handleQuizSelect = (quiz) => {
// //     onQuizSelect(quiz);
// //   };

// //   return (
// //     <div>
// //       <h2>المجموعات</h2>
// //       <select value={selectedCollection} onChange={(e) => handleCollectionSelect(e.target.value)}>
// //         <option value="">اختر مجموعة</option>
// //         {collections.map((collection) => (
// //           <option key={collection.id} value={collection.id}>
// //             {collection.name}
// //           </option>
// //         ))}
// //       </select>

// //       {selectedCollection && (
// //         <div>
// //           <h2>الاختبارات</h2>
// //           <select onChange={(e) => handleQuizSelect(e.target.value)}>
// //             <option value="">اختر اختبار</option>
// //             {quizzes.map((quiz) => (
// //               <option key={quiz.id} value={quiz}>
// //                 {quiz.quizTitle}
// //               </option>
// //             ))}
// //           </select>
// //         </div>
// //       )}

// // <Quiz
// //         quiz={` `} // استخدم onQuizSelect إذا كانت قيمته غير فارغة، وإلا استخدم quiz الافتراضي
// //         shuffle
// //         onQuestionSubmit={(obj) => console.log('user question results:', obj)}
// //         //onComplete={setResult}
// //         disableSynopsis
// //       />
// //     </div>
// //   );
// // };

// // export default MainPage;


// import React, { useEffect, useState } from 'react';
// import { firestore } from '../Services/firebaseConfig';
// import Quiz from 'react-quiz-component';
// import Form from './index'

// const MainPage = ({ onQuizSelect }) => {
//   const [collections, setCollections] = useState([]);
//   const [selectedCollection, setSelectedCollection] = useState('');
//   const [selectedQuiz, setSelectedQuiz] = useState('');
//   const [quizzes, setQuizzes] = useState([]);

//   useEffect(() => {
//     const fetchCollections = async () => {
//       try {
//         const collectionSnapshot = await firestore.collection('collections').get();
//         const collectionList = collectionSnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setCollections(collectionList);
//       } catch (error) {
//         console.error('حدث خطأ أثناء استرجاع المجموعات:', error);
//       }
//     };

//     fetchCollections();
//   }, []);

//   useEffect(() => {
//     const fetchQuizzes = async () => {
//       if (selectedCollection) {
//         try {
//           const quizCollection = await firestore.collection(selectedCollection).get();
//           const quizList = quizCollection.docs.map((doc) => ({
//             id: doc.id,
//             ...doc.data(),
//           }));
//           setQuizzes(quizList);
//         } catch (error) {
//           console.error('حدث خطأ أثناء استرجاع الاختبارات:', error);
//         }
//       }
//     };

//     fetchQuizzes();
//   }, [selectedCollection]);

//   const handleCollectionSelect = (collection) => {
//     setSelectedCollection(collection);
//     setSelectedQuiz('');
//   };

//   const handleQuizSelect = (quiz) => {
//     setSelectedQuiz(quiz);
//   };

//   const handleNext = () => {
//     if (selectedQuiz) {
//       // تم اختيار الاختبار، يمكنك تنفيذ الإجراءات اللازمة هنا (مثل حفظ البيانات وتحميل المكون القادم)
//       console.log('تم اختيار الاختبار:', selectedQuiz);
//     } else {
//       console.log('يرجى اختيار اختبار');
//     }
//   };

//   return (
//     <div>
//       <h2>المجموعات</h2>
//       <select value={selectedCollection} onChange={(e) => handleCollectionSelect(e.target.value)}>
//         <option value="">اختر مجموعة</option>
//         {collections.map((collection) => (
//           <option key={collection.id} value={collection.id}>
//             {collection.name}
//           </option>
//         ))}
//       </select>

//       {selectedCollection && (
//         <div>
//           <h2>الاختبارات</h2>
//           <select value={selectedQuiz} onChange={(e) => handleQuizSelect(e.target.value)}>
//             <option value="">اختر اختبار</option>
//             {quizzes.map((quiz) => (
//               <option key={quiz.id} value={quiz}>
//                 {quiz.quizTitle}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}

//       {selectedQuiz && (
//         <div>
//           <h2>الاختبار</h2>
//           {/* يمكنك تمرير بيانات الاختبار إلى المكون Form هنا */}
//           <Form selectedQuiz={handleQuizSelect} />
//           <button onClick={handleNext}>التالي</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MainPage;










import React, { useEffect, useState } from 'react';
import { firestore } from '../Services/firebaseConfig';
import Form from './index';

const MainPage = () => {
  const [collections, setCollections] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState('');
  const [selectedQuiz, setSelectedQuiz] = useState('');
  const [quizzes, setQuizzes] = useState([]);
  const [quizData, setQuizData] = useState(null);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const collectionSnapshot = await firestore.collection('collections').get();
        const collectionList = collectionSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCollections(collectionList);
      } catch (error) {
        console.error('حدث خطأ أثناء استرجاع المجموعات:', error);
      }
    };

    fetchCollections();
  }, []);

  useEffect(() => {
    const fetchQuizzes = async () => {
      if (selectedCollection) {
        try {
          const quizCollection = await firestore.collection(selectedCollection).get();
          const quizList = quizCollection.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setQuizzes(quizList);
        } catch (error) {
          console.error('حدث خطأ أثناء استرجاع الاختبارات:', error);
        }
      }
    };

    fetchQuizzes();
  }, [selectedCollection]);

  useEffect(() => {
    const fetchQuizData = async () => {
      if (selectedQuiz) {
        try {
          const quizDoc = await firestore.collection(selectedCollection).doc(`${selectedQuiz}`).get();
          const quizData = quizDoc.data();
          setQuizData(quizData);
        } catch (error) {
          console.error('حدث خطأ أثناء استرجاع بيانات الاختبار:', error);
        }
      }
    };
  
    fetchQuizData();
  }, [selectedCollection, selectedQuiz]);
  

  const handleCollectionSelect = (collection) => {
    setSelectedCollection(collection);
    setSelectedQuiz('');
  };

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz);
  };

  const handleNext = () => {
    if (selectedQuiz) {
      console.log('تم اختيار الاختبار:', selectedQuiz);
    } else {
      console.log('يرجى اختيار اختبار');
    }
  };

  return (
    <div>
      <h2>المجموعات</h2>
      <select value={selectedCollection} onChange={(e) => handleCollectionSelect(e.target.value)}>
        <option value="">اختر مجموعة</option>
        {collections.map((collection) => (
          <option key={collection.id} value={collection.id}>
            {collection.name}
          </option>
        ))}
      </select>

      {selectedCollection && (
        <div>
          <h2>الاختبارات</h2>
          <select value={selectedQuiz} onChange={(e) => handleQuizSelect(e.target.value)}>
            <option value="">اختر اختبار</option>
            {quizzes.map((quiz) => (
              <option key={quiz.id} value={quiz.id}>
                {quiz.quizTitle}
              </option>
            ))}
          </select>
        </div>
      )}
      {quizData && (
        <div>
          <h2>الاختبار</h2>
          <Form selectedQuiz={quizData} />
          <button onClick={handleNext}>التالي</button>
        </div>
      )}
    </div>
  );
};

export default MainPage;

