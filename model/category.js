import { Schema } from "mongoose";

const categorySchema = new Schema({
  id: String,
  name: String,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date
})

// exting willl updated else create new 
const Categories = models.categories || model('categories', categorySchema);
export default Categories;