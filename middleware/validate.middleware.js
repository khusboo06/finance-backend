export const validate = (schema, source = "body") => (req, res, next) => {
  const data = req[source];

  const { error } = schema.validate(data);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  next();
};