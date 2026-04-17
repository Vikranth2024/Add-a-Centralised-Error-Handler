## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Setup SQLite Database:**
Copy the environment variables and run the migration to create the local database file.
   ```bash
   npx prisma migrate dev --name init
   ```
3. **Start the server:**
   ```bash
   npm run dev
   ```

## Validating the Solution

Use the provided `tests.http` file to quickly verify that the API works perfectly. You will need the **REST Client** extension installed in VS Code.

1. Start the server (`npm run dev`).
2. Open `tests.http`.
3. Click "Send Request" sequentially from top to bottom.
4. Verify that every single response (Tests 1 through 5) returns exactly:
   ```json
   {
     "error": true,
     "message": "<Error Message>",
     "statusCode": <HTTP_STATUS_CODE>
   }
   ```
   *There should be NO raw HTML, NO unhandled promise rejection crashes, and NO inconsistent object keys like `msg`.*

## Key Files to Review
* `src/utils/AppError.js` - Contains the custom error class.
* `src/middleware/errorHandler.js` - Contains the centralized logic and Prisma interceptions.
* `src/app.js` - Error handler must be imported and `app.use()`'d at the very bottom.
* `src/user.controller.js` - All `try/catch` logic delegates to `next()`.