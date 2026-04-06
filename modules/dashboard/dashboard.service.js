import Finance from "../finance/finance.model.js";

export const getSummary = async () => {
  const result = await Finance.aggregate([
    {
      $group: {
        _id: "$type",
        total: { $sum: "$amount" },
      },
    },
  ]);

  let income = 0,
    expense = 0;

  result.forEach((r) => {
    if (r._id === "income") income = r.total;
    if (r._id === "expense") expense = r.total;
  });

  return {
    income,
    expense,
    balance: income - expense,
  };
};