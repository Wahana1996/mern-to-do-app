import { model, Schema } from 'mongoose'
import { Todo } from '../type/todo'

const todoSchema : Schema = new Schema (
    {
        title: {
            type: 'string',
            required: true
        },
        status: {
            type: 'string',
            required: true
        }
    },
    {timestamps: true}
)
export default model<Todo>('Todo', todoSchema) 