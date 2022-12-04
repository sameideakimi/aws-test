const mongoClient = require("./mongoConnect");

const db = {
  getAllMembers: async () => {
    const client = await mongoClient.connect();
    const user = client.db("kdt4").collection("user");

    const userCursor = user.find({});
    const allUser = await userCursor.toArray();
    if (allUser.length === 0) return false;
    return allUser;
  },
};

module.exports = db;
