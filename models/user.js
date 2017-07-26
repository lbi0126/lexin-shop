var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = Schema(
  {
    id: {type: String, required: true, max: 50},
    name: {type: String, required: true, max: 50},
    pwd: {type: String, required: true, max: 50},
    authLevel: {type: Schema.Types.ObjectId, ref:'Auth'},
    email: {type: String, required: true, max: 100},
    facebookUrl: {type: String, required: true, max: 200},
    active: {type: Boolean, default: true},
    createAt: {type:Date, default: Date.now},
    updateAt: {type:Date, default: Date.now},
    lastLoginAt: {type:Date, default: Date.now},
    loginFailCnt: {type: Number, default: 0},
  }
);


// Virtual for User's
UserSchema
.virtual('url')
.get(function () {
  return '/catalog/user/' + this._id;
});

//Export model
module.exports = mongoose.model('User', UserSchema);