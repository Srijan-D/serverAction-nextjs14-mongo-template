"use client";

import { createTodos } from "@/lib/action";
import { useRef } from "react";
import SubmitButton from "./SubmitButton";

export default function Forms() {
  // we are using useRef to reset the form after submission
  const ref = useRef<HTMLFormElement>(null);
  return (
    <main className="flex flex-col w-screen h-[70vh] justify-center items-center">
      <h2 className="text-center text-green-400 font-bold absolute top-24">
        Add Todo
      </h2>
      <form
        ref={ref}
        action={async (FormData) => {
          ref.current?.reset();
          await createTodos(FormData);
        }}
        className=" flex flex-col w-1/4 mx-auto mt-2 border-2 p-5 rounded-lg border-violet-500"
      >
        <label htmlFor="todo" className="py-2">
          Todo
        </label>
        <input
          type="text"
          name="todo"
          className="mb-2 w-62 h-10 p-2 text-black"
        />
        <label htmlFor="Deadline" className="py-2">
          Deadline
        </label>
        <input
          type="text"
          name="todoDeadline"
          className="w-62 h-10 p-2 text-black"
        />
        <button type="submit" className="">
          <SubmitButton />
        </button>
      </form>
    </main>
  );
}
