import mongoose from "mongoose";

const VendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Vendor name is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/\S+@\S+\.\S+/, "Please enter a valid email address"]
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"]
  },
  address: {
    type: String,
    required: false
  },
  tags: {
    type: [String],
    default: []
  },
  notes: {
    type: String,
    default: ""
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 3
  },
  createdBy: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: ()=>new Date()
  },
  updatedAt: {
    type: Date,
    default: ()=>new Date()
  }
});


export const VendorModel = mongoose.models.Vendor || mongoose.model("Vendor",VendorSchema);
