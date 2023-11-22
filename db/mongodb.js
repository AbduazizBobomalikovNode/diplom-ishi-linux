const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.URI_MONGO ? process.env.URI_MONGO : 'mongodb+srv://nodederter:kapalakSAS1D@cluster0.kow1y.mongodb.net/Bots?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

var db = null;
const role = require("./tables/role");
const user = require("./tables/user");
const task = require("./tables/task");
const RHT = require("./tables/role_has_task");
const certificate = require("./tables/certificate");
const file = require("./tables/file");


class Db {
    constructor() {
        this.buffer = (async function () {
            await client.connect();
            db = await client.db('certificate_system_demo');
            console.log("bazaga ulanish hosil qilindi");
            // await sxema(db);
            return {
                role: new role(db.collection("role")),
                user: new user(db.collection("user")),
                task: new task(db.collection("task")),
                RHT: new RHT(db.collection("role_has_task")),
                certificate: new certificate(db.collection("certificate")),
                file: new file(db.collection("file")),
                close: function () {
                    client.close();
                }
            }
        })();
    }
    async Main() {
        return this.buffer;
    }
}

module.exports = new Db().Main();


