var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorySchema = Schema(
  {
    cate01: {type: String, required:true, max:50},
    cate02: {type: String, required:true, max:50},
    cate03: {type: String, required:true, max:50},
    cate04: {type: String, required:true, max:50},
  }
);

// Virtual for Category's Full Name
CategorySchema
.virtual('categoryfullname')
.get(function () {
  return this.cate01 + '/' + this.cate02 + '/' + this.cate03 + '/'  + this.cate04;
});



// Virtual for Category's URL
CategorySchema
.virtual('url')
.get(function () {
  return '/catalog/category/' + this._id;
});

//Export model
module.exports = mongoose.model('Category', CategorySchema);