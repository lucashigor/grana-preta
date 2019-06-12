import { ReadInterface } from '../interfaces/ReadInterface'
import { WriteInterface } from '../interfaces/WriteInterface'

import mongoose = require('mongoose');

class RepositoryBase<T extends mongoose.Document> implements ReadInterface<T>, WriteInterface<T> {
    private _model: mongoose.Model<mongoose.Document>;

    public constructor (schemaModel: mongoose.Model<mongoose.Document>) {
        this._model = schemaModel
    }

    public create (item: T, callback: (error: any, result: mongoose.Document[]) => void): void {
        this._model.create(item, callback)
    }

    public retrieve (callback: (error: any, result: mongoose.Document[]) => void): void {
        this._model.find({}, callback)
    }

    public update (_id: mongoose.Types.ObjectId, item: T, callback: (error: any, result: any) => void): void {
        this._model.update({ _id: _id }, item, callback)
    }

    public delete (_id: string, callback: (error: any, result: any) => void): void {
        this._model.remove({ _id: this.toObjectId(_id) }, (err) => callback(err, null))
    }

    public findById (_id: string, callback: (error: any, result: T) => void): void {
        this._model.findById(_id, callback)
    }

    private toObjectId (_id: string): mongoose.Types.ObjectId {
        return mongoose.Types.ObjectId.createFromHexString(_id)
    }
}

export = RepositoryBase;
