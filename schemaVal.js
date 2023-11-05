Joi = require("joi"); //joi helps us to validate(to check the listing object) ->listing kai andar koi bhi field nhi aari to hum isai idhar hi check karai means validate karrai //yai tab hota jab hum request bahijrai hopscotch pai sai wo bhi post
module.exports.listingSchema = Joi.object({
  //joi aik object honi chahiyai//listingSchema ku validate karrai
  listing: Joi.object({
    //woh object ka naam listing hona chahiyai listing hamesha aik object honi chahiyai and required honi chahiyai
    title: Joi.string().required(), //and listing kai andar properties(key:value pairs) with validations honi chahiyai
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    image: Joi.string().allow("", null),
    price: Joi.number().required().min(0),
  }).required(),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});
