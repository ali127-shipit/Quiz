import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res)=>{
    res.render("index.ejs");
});



app.post("/result", (req,res)=>{
    console.log(req.body);

    res.render("index.ejs" , {
         rsp1:  req.body.qst1,
         rsp2:  req.body.qst2,
         rsp3:  req.body.qst3,
         rsp4:  req.body.qst4,
         rsp5:  req.body.qst5,
         
    });
});

app.listen(port , ()=>{
    console.log(`the server is running on port ${port}`);
});

