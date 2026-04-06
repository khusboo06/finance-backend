import Finance from "./finance.model.js";

export const createRecord = (data) => Finance.create(data);

export const getRecords = async (query) => {
  const { page = 1, limit = 10, type, category } = query;

  const filter = {};
  if (type) filter.type = type;
  if (category) filter.category = category;

  return Finance.find(filter)
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .sort({ createdAt: -1 });
};