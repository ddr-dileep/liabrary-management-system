import mongoose, { Document, Schema } from "mongoose";

interface IBook extends Document {
  title: string;
  author: string;
  isbn: string; // identifier of the book
  publishedDate: Date;
  availableCopies: number;
  totalCopies: number;
  description?: string;
  libraryId: Schema.Types.ObjectId;
  coverImage?: string;
  language: string;
}

const bookSchema: Schema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    isbn: {
      type: String,
      required: true,
      unique: true,
        match: /^(978|979)[-\s]?\d{1,5}[-\s]?\d{1,7}[-\s]?\d{1,7}[-\s]?\d{1}$/,
    },
    publishedDate: { type: Date, required: true },
    availableCopies: { type: Number, required: true, min: 0, default: 1 },
    totalCopies: { type: Number, required: true, min: 1 },
    description: { type: String, trim: true },
    libraryId: { type: Schema.Types.ObjectId, ref: "Library", required: true },
    coverImage: { type: String, trim: true },
    language: { type: String, required: true, trim: true },
    borrowedHistory: [
      {
        userId: { type: Schema.Types.ObjectId, ref: "User" },
        borrowedAt: { type: Date, default: Date.now },
        returnedAt: { type: Date },
        dueDate: { type: Date },
        fine: { type: Number, default: 0 },
      },
    ],
  },
  { timestamps: true }
);

const BookModel = mongoose.model<IBook>("Book", bookSchema);
export default BookModel;
