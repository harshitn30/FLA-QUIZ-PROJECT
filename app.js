

    var quizData = [
        {
          question: "Ques 1: Which of the following is not a part of 5-tuple finite automata? ?",
          a: " Input alphabet",
          b: "Transition function",
          c: "Initial State",
          d: "Output Alphabet",
          correct: "d",
        },
        {
          question: "Ques 2: P, O, R be regular expression over ∑, P is not ε, then R=Q + RP has a unique solution:",
          a: "Q*P",
          b: "QP*",
          c: "Q*P*",
          d: "(P*Q*)*",
          correct: "b",
        },
        {
          question: "Ques 3: Arden’s theorem is true for ?",
          a: "More than one initial states",
          b: "Null transitions",
          c: "Non-null transitions",
          d: "None of the mentioned",
          correct: "c",
        },
        {
          question: "Ques 4: The following is/are an approach to process a regexp:",
          a: "Construction of NFA and subsequently, a DFA",
          b: "Thompson’s Contruction Algorithm & Construction of NFA and subsequently, a DFA",
          c: "Thompson’s Contruction Algorithm",
          d: "None of the mentioned",
          correct: "b",
        },
        {
          question: "Ques 5: Which of the following statement is false?",
          a: "Context free language is the subset of context sensitive language",
          b: "Regular language is the subset of context sensitive language",
          c: "Recursively ennumerable language is the super set of regular language",
          d: "Context sensitive language is a subset of context free language",
          correct: "d",
        },
        {
            question: "Ques 6: The Grammar can be defined as: G=(V, ∑, p, S) In the given definition, what does S represents? ",
            a: "Starting Variable",
            b: "Accepting State",
            c: "Sensitive Grammar",
            d: "Transition function",
            correct: "a",
          },
          {
            question: "Ques 7: Which of the following can accept even palindrome over {a,b}",
            a: "Push down Automata",
            b: "Turing Machine",
            c: "NDFA",
            d: "All of the above",
            correct: "c",
          },
          {
            question: "Ques 8: Which of the following correctly recognize the symbol ‘|-‘ in context to PDA?",
            a: " or/not symbol",
            b: "transition function",
            c: "Moves",
            d: "next state",
            correct: "c",
          },
          {
          question: "Ques 9: A turing machine that is able to simulate other turing machines:",
          a: "Nested Turing machines",
          b: "Universal Turing machine",
          c: "Counter machine",
          d: "Multi stack machine",
          correct: "b",
        },
        {
            question: "Ques 10: The number of states required to automate the last question i.e. {a,b}*{aba}{a,b}* using finite automata:",
            a: "4",
            b: "3",
            c: "5",
            d: "6",
            correct: "a",
          },
      ];
      
      var answerEls = document.querySelectorAll(".answer");
      var aText = document.getElementById("aText");
      var bText = document.getElementById("bText");
      var cText = document.getElementById("cText");
      var dText = document.getElementById("dText");
      var questionEl = document.getElementById("question");
      var submitBtn = document.getElementById("submit");
      
      var currentQuiz = 0;
      var score = 0;
      
      quizLoad();
      
      function quizLoad() {
        deSelectInput();
      
        var currentQuizData = quizData[currentQuiz];
      
        questionEl.innerText = currentQuizData.question;
        aText.innerText = currentQuizData.a;
        bText.innerText = currentQuizData.b;
        cText.innerText = currentQuizData.c;
        dText.innerText = currentQuizData.d;
      }
      
      function getSelection() {
        var answer = undefined;
      
        answerEls.forEach((answerEl) => {
          if (answerEl.checked) {
            answer = answerEl.id;
          }
        });
        return answer;
      }
      
      function deSelectInput() {
        answerEls.forEach((answer) => {
          answer.checked = false;
        });
      }
      
      submitBtn.addEventListener("click", () => {
        var answer = getSelection();
      
        if (answer) {
          if (answer === quizData[currentQuiz].correct) {
            score++;
          }
      
          currentQuiz++;
      
          if (currentQuiz < quizData.length) {
            quizLoad();
          } else {
            alert(`You've scored ${score} / ${quizData.length}`);
            location.reload();
          }
        }
      });
      