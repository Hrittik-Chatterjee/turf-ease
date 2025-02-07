import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin", "fieldOwner"], // Added "fieldOwner" role
    default: "user",
  },
  fieldOwner: {
    type: Boolean,
    default: false, // Defaults to false if not specified
  },
});

// Prevent model overwrite on hot reload
export default mongoose.models.User || mongoose.model("User", userSchema);
