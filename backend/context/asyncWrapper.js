module.exports = fn => (req, res, next) => Promise
  .resolve(fn(req, res, next))
  .then(response => response)
  .catch(next);
