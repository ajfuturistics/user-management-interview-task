const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user/userRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.status(200).json({ message: "Hello World!" }));
app.use("/api/v1/", userRouter);
app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
