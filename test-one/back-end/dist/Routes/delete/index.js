"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoutes = void 0;
function deleteRoutes(app) {
    app.delete("/delete/:id", (req, res) => {
        res.send("Hello World ");
    });
}
exports.deleteRoutes = deleteRoutes;
