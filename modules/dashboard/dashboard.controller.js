import { getSummary } from "./dashboard.service.js";

export const dashboard = async (req, res, next) => {
  try {
    const data = await getSummary();
    res.json(data);
  } catch (err) {
    next(err);
  }
};