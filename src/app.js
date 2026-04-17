// app.js
// ============================================================
// Task 02 SOLUTION — errorHandler registered as the very last middleware.
// ============================================================

const express      = require('express');
const userRoutes   = require('./routes/user.routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

// errorHandler is last — it receives any error passed to next(err) from above
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;