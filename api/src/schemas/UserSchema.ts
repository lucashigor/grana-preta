import { Schema, model } from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'
import { UserInterface } from '../model/UserInterface'

const UserSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String
}, {
    timestamps: true
})

UserSchema.methods.fullName = function (): string {
    return this.firstName + ' ' + this.lastName
}

UserSchema.plugin(mongoosePaginate)

export default model<UserInterface>('User', UserSchema)
