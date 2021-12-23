import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },
    picture: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/147/147144.png",
    },
    role: {
      type: [String],
      default: ["Student"],
      enum: ["Student", "Instructor", "Admin"],
    },
    stripe_account_id: "",
    stripe_seller: {},
    stripeSession: {},
    passwordResetCode: {
      data: String,
      default: ''
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);