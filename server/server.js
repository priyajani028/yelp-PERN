require("dotenv").config();
const express = require("express");
const db= require("./db");
const cors = require('cors');
// const morgan = require("morgan"); 
//thirdparty middleware

const app= express();
app.use(cors());

const port =process.env.PORT || 3000;

app.use(express.json());  //middleware

app.get("/api/v1/restaurants", async(req,res)=>{
    try{
        const results = await db.query("select * from restaurants");
        //console.log(results);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurants: results.rows,
            }
        });
    }catch(err){
        console.log(err);
    }
});

app.get("/api/v1/restaurants/:id",async (req,res)=>{
    try{
        const result = await db.query("select * from restaurants where $1", [req.params.id]);
        //console.log(result);
        res.status(200).json({
            status: "success",
            data: {
                restaurants: result.rows[0],
            }
        });
    }catch(err){
        console.log(err);
    }
});

app.post("/api/v1/restaurants",async (req,res)=>{
    try{
        const result = await db.query("INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *", [req.body.name, req.body.location, req.body.price_range]);
        //console.log(req.body);
        res.status(201).json({
            status: "success",
            data: {
                restaurants: result.rows[0],
            }
        });
    }catch(err){
        console.log(err);
    }
})

app.put("/api/v1/restaurants/:id", async(req,res)=>{
    try{
        const result = await db.query("UPDATE restaurants SET name= $2 , location = $3, price_range= $4 where id=$1 returning *", [req.params.id, req.body.name, req.body.location, req.body.price_range]);
        //console.log(result);
        res.status(200).json({
            status: "success",
            data: {
                restaurants: result.rows[0],
            }
        });
    }catch(err){
        console.log(err);
    }
});

app.delete("/api/v1/restaurants/:id", async(req,res)=>{
    try{
        const result = await db.query("DELETE FROM restaurants where id=$1 returning *", [req.params.id]);
        //console.log(result);
        res.status(204).json({
            status: "success",
            data: {
                restaurants: result.rows[0],
            }
        });
    }catch(err){
        console.log(err);
    }
});

app.listen(port, ()=>{
    console.log(`Server running on ${port}`);
 });