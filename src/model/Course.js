const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');





const Schema = mongoose.Schema;




const CourseSchema = new Schema({
  name: {type: String},
  description: {type: String},
  image: {type: String},
  videoID: {type: String},
  level: {type: String},
  slug: {type: String, slug: 'name', unique: true},
  
},{
  timestamps: true
});

CourseSchema.query.sortable = function(req){
  const isValidType = ["asc", "desc"].includes(req.query.type)
  if (req.query.hasOwnProperty("_sort")){
      return this.sort({[req.query.column]: isValidType ? req.query.type: "desc"})
  }
  return this;

}


mongoose.plugin(slug);
CourseSchema.plugin(mongooseDelete,{deletedAt:true, overrideMethods: 'all' });



module.exports = mongoose.model('Course', CourseSchema);
