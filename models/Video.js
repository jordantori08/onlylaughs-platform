const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  fileUrl: { type: String, required: true },
  category: { type: String, enum: ["Comedy", "Drama", "Action"], required: true },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  views: { type: Number, default: 0 }
});
