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
  isAdmin: {
    type: Boolean,
    default: false,
  },
  fieldOwner: {
    type: Boolean,
    default: false, // Defaults to false if not specified
  },
});

// Prevent model overwrite on hot reload
export default mongoose.models.User || mongoose.model("User", userSchema);
