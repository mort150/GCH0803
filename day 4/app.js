const EXPRESS = require('express')
const {ObjectId,MongoClient} = require('mongodb')

const APP = EXPRESS()

APP.set('view engine','hbs')
APP.get('/',async(req,res)=>{
    const client = await MongoClient.connect(url);
    const dbo  = client.db("GCH0803DB");
    const allStudents = await dbo.collection("students").find({}).toArray();
    res.render('index',{data:allStudents})
})

const PORT = process.env.PORT || 5000
APP.listen(PORT);