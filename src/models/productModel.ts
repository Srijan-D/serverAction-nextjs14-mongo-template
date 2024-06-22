// Importing mongoose library along with Document and Model types from it
import mongoose, { Document, Model } from "mongoose";

// Defining the structure of a todo item using TypeScript interfaces
export interface IProduct {
  id: number;
  name: string;
}

// a new interface that represents a todo document in MongoDB
export interface IProductDocument extends IProduct, Document {
  createdAt: Date;
  updatedAt: Date;
}

// Defining a mongoose schema for the todo document, specifying the types
// and constraints
const productSchema = new mongoose.Schema<IProductDocument>(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields to the document
    timestamps: true,
  }
);

// Creating a mongoose model for the todo document
const Todo: Model<IProductDocument> =
  mongoose.models?.Todo || mongoose.model("Todo", productSchema);

export default Todo;
