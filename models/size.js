var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SizeSchema = Schema(
  {
    category: {type: Schema.Types.ObjectId, ref:'category', required:true},
    size: {type: String, required:true, max:50},
  }
);


// Virtual for Size's URL
SizeSchema
.virtual('url')
.get(function () {
  return '/catalog/size/' + this._id;
});

//Export model
module.exports = mongoose.model('Size', SizeSchema);