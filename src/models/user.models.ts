import mongoose, { Document, Schema } from "mongoose";

enum UserRole {
  OWNER = "owner",
  ADMIN = "admin",
  MEMBER = "member",
}

interface IBorrowingHistory {
  bookId: Schema.Types.ObjectId;
  borrowedAt: Date;
  returnedAt?: Date;
}

interface IUser extends Document {
  fullName: string;
  username: string;
  password: string;
  email: string;
  role: UserRole;
  dob: string;
  address?: string;
  contact?: string;
  isActive: boolean;
  dateOfJoin: Date;
  profilePicture?: string;
  hobbies?: string[];
  languages?: string[];
  borrowingHistory?: IBorrowingHistory[];
  libraryIds?: Schema.Types.ObjectId[];
}

const userSchema: Schema = new Schema(
  {
    fullName: { type: String, trim: true },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 30,
    },
    password: { type: String, required: true, minlength: 6 },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /.+\@.+\..+/,
    },
    role: {
      type: String,
      required: true,
      enum: UserRole,
      default: UserRole.MEMBER,
    },
    dob: { type: String },
    address: { type: String, trim: true },
    contact: { type: String, trim: true },
    isActive: { type: Boolean, default: true },
    dateOfJoin: { type: Date, default: Date.now },
    profilePicture: {
      type: String,
      default:
        "https://img.freepik.com/premium-vector/stylish-default-user-profile-photo-avatar-vector-illustration_664995-352.jpg",
    },
    hobbies: [{ type: String }],
    languages: [{ type: String }],
    borrowingHistory: [
      {
        bookId: { type: Schema.Types.ObjectId, ref: "Book" },
        borrowedAt: { type: Date, default: Date.now },
        returnedAt: { type: Date },
      },
    ],
    libraryIds: [{ type: Schema.Types.ObjectId, ref: "Library" }],
  },
  { timestamps: true }
);

const UserModel = mongoose.model<IUser>("User", userSchema);
export default UserModel;
