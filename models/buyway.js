var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BuyWaySchema = Schema(
  {
    way: {type: String, required: true, max: 50}, // 구입방법: internet, import, store
    place: {type: String, required: true, max: 100}, // 구입한곳: 부평x가게, 동대문x가게     
  }
);

// Virtual for BuyWay's full desc
BuyWaySchema
.virtual('wayplace')
.get(function () {
  return this.way + '-' + this.place;
});

// Virtual for BuyWay's
BuyWaySchema
.virtual('url')
.get(function () {
  return '/catalog/buyway/' + this._id;
});

//Export model
module.exports = mongoose.model('BuyWay', BuyWaySchema);