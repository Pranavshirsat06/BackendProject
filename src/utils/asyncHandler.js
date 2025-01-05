const asyncHandler = (reqestHandler) => {
  return async (req, res, next) => {
    Promise.resolve(reqestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export default asyncHandler;

// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       success: false,
//       Message: error.message,
//     });
//   }
// };
