const {MongoClient} = require('mongodb')

const URL ='mongodb://localhost:27017';
const DATABASE_NAME = "GCH0803DB"

async function insertStudent(newStudent) {
    const dbo = await getDB();
    await dbo.collection("students").insertOne(newStudent);
}

async function getDB() {
    const client = await MongoClient.connect(URL);
    const dbo = client.db("DATABASE_NAME");
    return dbo;
}

async function deleteStudent(idInput) {
    const dbo = await getDB();
    await dbo.collection("students").deleteOne({ _id: ObjectId(idInput) });
}

async function searchStudent(nameSearch) {
    const dbo = await getDB();
    const allStudents = await dbo.collection("students").find({ name: nameSearch }).toArray();
    return allStudents;
}

async function getAllStudent() {
    const dbo = await getDB();
    const allStudents = await dbo.collection("students").find({}).toArray();
    return allStudents;
}

module.exports = {getDB,insertStudent,deleteStudent,searchStudent,getAllStudent}