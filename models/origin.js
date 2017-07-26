var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OriginSchema = Schema(
  {
    place: {type: String, required: true, max: 50}, // 원산지 
  }
);


// Virtual for Origin's
OriginSchema
.virtual('url')
.get(function () {
  return '/catalog/origin/' + this._id;
});

//Export model
module.exports = mongoose.model('Origin', OriginSchema);