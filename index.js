const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000

app.get("/", (req, res) => {
    return res.json({ message: "Hey, I am nodejs in container" })
})

app.listen(PORT, () => {
    console.log(`Server  is listening on PORT:${PORT}`);
})