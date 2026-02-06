const notFoundHandler = (req, res) => {
  res.status(404).json({ message: "Route not found" });
};

const errorHandler = (err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(err);
  res.status(err.statusCode || 500).json({ message: err.message || "Server error" });
  next();
};

module.exports = { notFoundHandler, errorHandler };
