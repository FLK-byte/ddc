"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutes = void 0;
function getRoutes(app) {
    app.get("/", (req, res) => {
        res.send("Hello World ");
    });
    app.get("/videos", (req, res) => {
        res.send("Hello World ");
    });
    app.get("/download/video/:id", (req, res) => {
        res.send("Hello World ");
    });
}
exports.getRoutes = getRoutes;
