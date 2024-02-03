

import mongoose, { Schema } from "mongoose";

const emailSchema = new Schema(
  {
    email: String,
  },
  {
    timestamps: true,
  }
);

const Email = mongoose.models.Email || mongoose.model("Email", emailSchema);

export default Email;
