import User from "./user.model.js";

export const getAllUsers = () => User.find();

export const updateUserRole = (id, role) =>
  User.findByIdAndUpdate(id, { role }, { new: true });