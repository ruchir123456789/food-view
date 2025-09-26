import app from "./src/app.js"
import connectDB from "./src/db/db.js"

connectDB()

const port = 8000
app.listen(port, () => {
    console.log(`port running on ${port} , http://localhost:${port}`);
})