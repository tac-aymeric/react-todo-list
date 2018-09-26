/**
 * This helper takes a function that, given an express request, outputs a plain js object,
 * and transforms it into an express handler.
 */
function asyncHandler(handler) {
  return async (req, res, next) => {
    try {
      const result = await handler(req);
      res.json(result);
    } catch(err) {
      next(err);
    }
  }
}

module.exports = { asyncHandler };
