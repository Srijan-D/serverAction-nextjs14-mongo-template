# serverAction-nextjs14-mongo-template

This is a Next.js project bootstrapped with the latest Next.js 14, utilizing server actions and MongoDB for data storage and retrieval. It also makes use of the `useFormState` Hook, which is currently available in React’s Canary and experimental channels.

## Project Structure

- **public/**: Contains public assets.
- **src/**: Main source code directory.

  - **app/components/**: Contains React components.
    - `Forms.tsx`: Component for handling form submissions.
    - `GetTodos.tsx`: Component for fetching and displaying todos.
    - `SubmitButton.tsx`: Component for handling submit button actions.
  - **lib/**: Utility functions and server actions.
    - `action.ts`: Contains server actions for handling CRUD operations with MongoDB.
    - `db.ts`: Sets up the MongoDB connection.
  - **models/**: MongoDB schema definitions.
    - `todoModel.ts`: Schema for the todo model.

## Features

- **Next.js 14**: Next.js 14 includes included performance, stability for Server Actions.
- **Server Actions**: Server Actions allow Client Components to call async functions executed on the server, is defined with the "use server" directive.
- **MongoDB Integration**: MongoDB used for storing and fetching todos.
- **useFormState Hook**: useFormState is a Hook that allows you to update state based on the result of a form action, the Hook is currently only available in React’s Canary and experimental channels.

## Getting Started

### Prerequisites

- Node.js (>=18.x.x)
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Srijan-D/serverAction-nextjs14-mongo-template
   ```

2. Navigate to the project directory:

   ```bash
   cd serverAction-nextjs14-mongo-template
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your MongoDB connection string:
   ```env
   MONGODB_URI=<your-mongodb-connection-string>
   ```

### Running the Project

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Usage

- Add, delete, and view todos.
- Todos are stored in MongoDB and fetched using server actions.

## File Descriptions

### Components (`src/app/components/`)

- **Forms.tsx**: Handles form submissions for todos.
- **GetTodos.tsx**: Fetches and displays the list of todos.
- **SubmitButton.tsx**: Component for submit button with actions.

### Utility Functions and Server Actions (`src/lib/`)

- **action.ts**: Contains server actions for CRUD operations with MongoDB.

  ```typescript
  "use server";
  import Todo from "@/models/todoModel";
  import { revalidatePath } from "next/cache";
  import { connectToMongoDB } from "./db";

  export const createTodos = async (formData: FormData) => {
    await connectToMongoDB();
    const todo = formData.get("todo");
    const todoDeadline = formData.get("todoDeadline");
    const time = formData.get("time");

    try {
      const newTodo = await Todo.create({
        todo,
        todoDeadline,
        time,
      });
      newTodo.save();
      revalidatePath("/");
      return newTodo.toString();
    } catch (error) {
      console.log(error);
      return { message: "error creating todo" };
    }
  };

  export const deleteTodo = async (id: FormData) => {
    const todoId = id.get("id");
    try {
      await Todo.deleteOne({ _id: todoId });
      revalidatePath("/");
      return "todo deleted";
    } catch (error) {
      return { message: "error deleting todo" };
    }
  };
  ```
