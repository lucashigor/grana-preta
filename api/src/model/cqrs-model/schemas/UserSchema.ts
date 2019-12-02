import { Schema, model } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
import { UserInterface } from '../intefaces/UserInterface'

const UserSchema = new Schema({
  email: String,
  firstName: String,
  lastName: String
}, {
  timestamps: true
})

UserSchema.plugin(mongoosePaginate)

var schema = model<UserInterface>('User', UserSchema)
export = schema;
