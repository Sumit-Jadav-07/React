import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddQuestion = () => {
  const { register, handleSubmit, } = useForm();
  const [questions, setQuestions] = useState([]);

  const onSubmit = (data) => {
    setQuestions([...questions, data]);
    console.log(questions)
  };

  return (
    <div className="bg-slate-300 p-2 h-[778px] grid grid-cols-2 gap-2">
      {/* First Column */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full h-full gap-4 p-4 rounded-md bg-slate-400"
      >
        <h1 className="text-[25px]">Add Question</h1>

        <div className="flex flex-col gap-2">
          <label>Question :</label>
          <input
            type="text"
            placeholder="Enter your question"
            {...register("question")}
            className="p-2 rounded-lg"
          />
        </div>

        <span className="border-[1px] border-slate-700 rounded-lg"></span>

        <div className="flex flex-col gap-1">
          <label>A)</label>
          <input
            type="text"
            placeholder="Option 1"
            {...register("option1")}
            className="p-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>B)</label>
          <input
            type="text"
            placeholder="Option 2"
            {...register("option2")}
            className="p-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>C)</label>
          <input
            type="text"
            placeholder="Option 3"
            {...register("option3")}
            className="p-2 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>D)</label>
          <input
            type="text"
            placeholder="Option 4"
            {...register("option4")}
            className="p-2 rounded-lg"
          />
        </div>

        <span className="border-[1px] border-slate-700 rounded-lg"></span>

        <div className="flex flex-col gap-2">
          <label>Correct Answer :</label>
          <input
            type="text"
            placeholder="Enter correct answer"
            {...register("correctAnswer")}
            className="p-2 rounded-lg"
          />
        </div>

        <span className="border-[1px] border-slate-700 rounded-lg"></span>

        <button
          type="submit"
          className="p-4 text-white transition-colors rounded-md bg-slate-700 hover:bg-slate-800"
        >
          Add Question
        </button>
      </form>

      {/* Second Column */}

      <div className="w-full h-full p-4 overflow-y-auto rounded-md bg-slate-400 ">
        <h2 className="mb-4 text-xl font-bold">Added Questions</h2>
        {questions.length === 0 ? (
          <p>No questions added yet.</p>
        ) : (
          <div className="space-y-4">
            {questions.map((q, index) => (
              <div
                key={index}
                className="p-4 bg-white border rounded shadow-md"
              >
                <p className="font-bold">
                  Q{index + 1}: {q.question}
                </p>
                <ul className="list-disc list-inside">
                  <li
                    className={`p-2 ${
                      q.option1 === q.correctAnswer ? "text-[#22b904]" : ""
                    }`}
                  >
                    A) {q.option1}
                  </li>
                  <li
                    className={`p-2 ${
                      q.option2 === q.correctAnswer ? "text-[#22b904]" : ""
                    }`}
                  >
                    B) {q.option2}
                  </li>
                  <li
                    className={`p-2 ${
                      q.option3 === q.correctAnswer ? "text-[#22b904]" : ""
                    }`}
                  >
                    C) {q.option3}
                  </li>
                  <li
                    className={`p-2 ${
                      q.option4 === q.correctAnswer ? "text-[#22b904]" : ""
                    }`}
                  >
                    D) {q.option4}
                  </li>
                </ul>
                <p className="mt-2">
                  <span className="font-medium">Correct Answer:</span>{" "}
                  {q.correctAnswer}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddQuestion;
