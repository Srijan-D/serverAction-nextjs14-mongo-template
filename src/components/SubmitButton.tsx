import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      {...(pending && { disabled: true })}
      className={`bg-violet-400 h-10 w-62 p-2 mt-10 rounded text-white font-bold shadow-md shadow-white 
          hover:bg-violet-500 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1`}
    >
      {pending ? "Adding..." : "Add Todo"}
    </button>
  );
}
