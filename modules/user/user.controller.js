import * as service from "./user.service.js";

export const getUsers = async (req, res, next) => {
  try {
    const users = await service.getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

export const updateRole = async (req, res, next) => {
  try {
    const user = await service.updateUserRole(
      req.params.id,
      req.body.role
    );
    res.json(user);
  } catch (err) {
    next(err);
  }
};