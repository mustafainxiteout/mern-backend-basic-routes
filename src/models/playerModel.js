import mongoose from "mongoose";

const Schema=mongoose.Schema;

export const PlayerSchema=new Schema({
    Name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number
    },
    iscoach:{
        type: Boolean,
        default: false
    },
    team:{
        type: String
    },
    speed:{
        type:Number,
        enum:[1,2,3]
    },
    strength:{
        type:Number,
        enum:[1,2,3]
    },
    created_date:{
        type: Date,
        default: Date.now
    }
})


/*

const addressSchema = new Schema({
  street: String,
  city: String,
  state: String,
  zipCode: String
});

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  fullName: String,
  address: addressSchema
});

const User = mongoose.model('User', userSchema);

module.exports = User;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addressSchema = new Schema({
  street: String,
  city: String,
  state: String,
  zipCode: String
});

const customerSchema = new Schema({
  _id: Schema.Types.ObjectId,
  fullName: String,
  address: addressSchema
});

const itemSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  price: Number,
  quantity: Number,
  vendor: Schema.Types.ObjectId
});

const orderSchema = new Schema({
  _id: Schema.Types.ObjectId,
  order: String,
  date: Date,
  customer: customerSchema,
  items: [itemSchema],
  total: Number
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
*/