const { MongoClient, ObjectId } = require('mongodb')

const URL = 'mongodb://localhost:27017';
// const URL = 'mongodb+srv://mortdz150:mortdz150@cluster0.ltplv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const DATABASE_NAME = "GCH0803DB";

async function insertUser(user) {
    const dbo = await getDB();
    await dbo.collection("users").insertOne(user);
}

async function insertStudent(newStudent) {
    const dbo = await getDB();
    await dbo.collection("students").insertOne(newStudent);
}

async function getDB() {
    const client = await MongoClient.connect(URL);
    const dbo = client.db("GCH0803DB");
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


async function getStudentById(idInput) {
    const dbo = await getDB();
    return dbo.collection("students").findOne({ _id: ObjectId(idInput) });
}

async function updateStudent(id, nameInput, tuoiInput, pictureInput) {
    const dbo = await getDB();
    dbo.collection("students").updateOne({ _id: ObjectId(id) }, { $set: { name: nameInput, tuoi: tuoiInput, picture: pictureInput } })
}

async function checkUserRole(nameI, passI) {
    const dbo = await getDB();
    const user = await dbo.collection("users").findOne({ name: nameI, pass: passI });
    if (user == null) {
        return "-1"
    } else {
        return user.role;
    }
}
module.exports = { checkUserRole, getDB, insertStudent, deleteStudent, searchStudent, getAllStudent, getStudentById, updateStudent, insertUser }