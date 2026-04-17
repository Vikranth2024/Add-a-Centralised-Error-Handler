// src/middleware/errorHandler.js
// ============================================================
// Task 02 + Task 04 SOLUTION — Centralised Express error middleware.
// ============================================================

function errorHandler(err, req, res, next) {
    let statusCode = err.statusCode || 500;
    let message    = err.message    || 'Something went wrong';
  
    // P2002 — Unique constraint violation
    if (err.code === 'P2002') {
      statusCode = 409;
      message    = 'A record with that value already exists';
    }
  
    // P2025 — Record to update/delete does not exist
    if (err.code === 'P2025') {
      statusCode = 404;
      message    = 'Record not found';
    }
  
    if (process.env.NODE_ENV !== 'production') {
      console.error(err.stack);
    }
  
    res.status(statusCode).json({
      error:      true,
      message,
      statusCode,
    });
  }
  
  module.exports = errorHandler;