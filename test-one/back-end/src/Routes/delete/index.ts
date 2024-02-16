import { Application } from "express";

export function deleteRoutes (app: Application) {
    app.delete("/delete/:id", (req, res)=>{
        res.send("Hello World ")
    })
}
