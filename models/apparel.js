var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ApparelSchema = Schema(
  {
    buy_ways: {type: Schema.Types.ObjectId, ref: 'BuyWay', required:true}, // 구입방법
    buy_date: {type: Date}, // 구입 일자
    buy_whom: {type: Schema.Types.ObjectId, ref: 'User'}, // 구입한 사람
    origin: {type: Schema.Types.ObjectId, ref: 'Origin'}, // 원산지
    category: {type: Schema.Types.ObjectId, ref: 'Category'}, // 카테고리
    size: {type: Schema.Types.ObjectId, ref: 'Size'}, // 사이즈
    byname: {type: Sting, required:true, max:100}, // 별칭
    brand: {type: String, max: 100},
    spec: {type: String, max:100},
    barcode: {type: String, max:50},
    item_cd: {type: String, max:30},
    supply_price: {type: Number, required: true, defualt:0 },
    sale_price: {type: Number, required: true, defualt:0 },
  }
);

// Virtual for Apparel's full name
ApparelSchema
.virtual('name')
.get(function () {
  return this.category.cate04 + '/' + this.size.size + '/' + this.byname;
});

// Virtual for Apparel's URL
ApparelSchema
.virtual('url')
.get(function () {
  return '/catalog/apparel/' + this._id;
});

//Export model
module.exports = mongoose.model('Apparel', ApparelSchema);