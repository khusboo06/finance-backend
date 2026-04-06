import * as service from "./finance.service.js";

export const createFinance = async (req, res, next) => {
  try {
    const data = await service.createRecord({
      ...req.body,
      createdBy: req.user.id,
    });
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

export const getFinances = async (req, res, next) => {
  try {
    const data = await service.getRecords(req.query);
    res.json(data);
  } catch (err) {
    next(err);
  }
};