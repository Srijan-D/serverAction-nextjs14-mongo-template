import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col w-screen h-[70vh] justify-center items-center">
      <h2 className="text-center text-green-400 font-bold absolute top-24">
        Add Todo
      </h2>
      <form
        action=""
        className="flex flex-col w-1/4 mx-auto mt-2 border-2 p-5 rounded-lg border-violet-500"
      >
        <label htmlFor="todo" className="py-2">
          Todo
        </label>
        <input type="text" name="todo" className="mb-2 w-62 h-10 p-2" />
        <label htmlFor="Deadline" className="py-2">
          Deadline
        </label>
        <input type="text" name="todoDeadline" className="w-62 h-10 p-2" />
        <button
          type="submit"
          className="bg-violet-400 h-10 w-62 p-2 mt-10 rounded text-white font-bold shadow-md shadow-white 
          hover:bg-violet-500 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
