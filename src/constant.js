export const QuizQ = {
    questions: [
      
      {
          "id": 1,
          "question": "Which company developed ReactJS?",
          "choices": [
              "Facebook",
              "Google",
              "Microsoft",
              "Apple"
          ],
          "type": "MCQs",
          "correctAnswer": "Facebook"
      },
      {
        "id": 2,
        "question": "What is ReactJS?",
        "choices": [
            "A server-side framework",
            "A front-end JavaScript library",
            "A back-end JavaScript framework",
            "A database management system"
        ],
        "type": "MCQs",
        "correctAnswer": "A front-end JavaScript library"
    },
      {
          "id": 3,
          "question": " What is the purpose of React state?",
          "choices": [
              "To store static data",
              "To store styles",
              "To store dynamic data",
              "To store function"
          ],
          "type": "MCQs",
          "correctAnswer": "To store dynamic data"
      },
      {
          "id": 4,
          "question": " What is the use of React hooks?",
          "choices": [
              "To manage state and side effects in functional components",
              "To manage styles in functional components",
              "To manage state and side effects in class components",
              "To manage styles in class components"
          ],
          "type": "MCQs",
          "correctAnswer": "To manage state and side effects in functional components"
      },
      {
          "id": 5,
          "question": "What is the purpose of the virtual DOM in React?",
          "choices": [
              "To improve website security",
              "To optimize database queries",
              "To improve performance by minimizing DOM manipulation",
              "To handle server-side rendering"
          ],
          "type": "MCQs",
          "correctAnswer": "To improve performance by minimizing DOM manipulation"
      },
      {
        "id": 6,
        "question": " What is a Redux store?",
        "choices": [
            "A single state tree in a Redux application",
            "A collection of multiple state trees in a Redux application",
            "A component in a Redux application",
            "A stylesheet in a Redux application"
        ],
        "type": "MCQs",
        "correctAnswer": "A single state tree in a Redux application"
    }
    ]
    };
    export const resultInitialState = {
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0
    }