const { db, DataTypes, Model } = require("../db/connection");

class Profile extends Model {}

Profile.init({
    bio: DataTypes.STRING,
    profilePicture: DataTypes.STRING,
    birthday: DataTypes.STRING,
  }, {
    sequelize: db,
    modelName: "Profile"
  })

let Profile;

module.exports = Profile;
