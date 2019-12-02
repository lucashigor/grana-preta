"use strict";
var mongoose_1 = require("mongoose");
var mongoose_paginate_1 = require("mongoose-paginate");
var UserSchema = new mongoose_1.Schema({
    email: String,
    firstName: String,
    lastName: String
}, {
    timestamps: true
});
UserSchema.plugin(mongoose_paginate_1["default"]);
var schema = mongoose_1.model('User', UserSchema);
module.exports = schema;
