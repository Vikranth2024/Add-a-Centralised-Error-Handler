// src/utils/AppError.js
// ============================================================
// Task 01 SOLUTION — Custom error class extending native Error.
// ============================================================

class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
      this.isOperational = true;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = AppError;