import { Document } from 'mongoose'

export interface ReadInterface {
    retrieve: (page : number, limit: number) => Promise<Document[]>;
    findById: (id: string) => Promise<Document | null>;
}
