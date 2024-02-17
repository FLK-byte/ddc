"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./Routes/index");
const express = require('express');
const cors = require('cors');
const app = express();
const port = 1337;
app.use(cors());
(0, index_1.getRoutes)(app);
(0, index_1.postRoutes)(app);
(0, index_1.deleteRoutes)(app);
app.use((err, req, res, next) => {
    console.log(err);
    return res.status(400).json({ error: err.message });
});
app.listen(port, () => console.log("Server is running at: ", port));
