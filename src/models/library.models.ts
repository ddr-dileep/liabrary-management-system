import mongoose, { Document, Schema } from "mongoose";

interface ILibrary extends Document {
  name: string;
  ownerId: Schema.Types.ObjectId;
  location: string;
  books: Schema.Types.ObjectId[];
  admins: Schema.Types.ObjectId[];
}

const librarySchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    ownerId: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
    location: { type: String, required: true },
    books: [{ type: Schema.Types.ObjectId, ref: "Book" }],
    admins: [{ type: Schema.Types.ObjectId, ref: "User" }],
    contact: { type: String },
    email: { type: String },
    phone: { type: String },
    website: { type: String },
    openingHours: { type: String },
    description: { type: String },
    images: [{ type: String }],
    videos: [{ type: String }],
    averageRating: { type: Number, default: 0 },
    reviews: [
      {
        userId: { type: Schema.Types.ObjectId, ref: "User" },
        rating: { type: Number, min: 1, max: 5 },
        comment: { type: String },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const LibraryModel = mongoose.model<ILibrary>("Library", librarySchema);
export default LibraryModel;
