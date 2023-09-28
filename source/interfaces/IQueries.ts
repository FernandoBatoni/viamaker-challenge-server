import type mongoose from 'mongoose'
import { type Query, type UpdateWriteOpResult } from 'mongoose'

export interface IAllQueriesParams {
  department?: string
  ignoreDepartment?: boolean
}

export interface ICreateParams<T = any> {
  properties: Partial<T> | Array<Partial<T>>
  options?: mongoose.SaveOptions
}

export interface IFindByIdParams extends IAllQueriesParams {
  id: mongoose.Types.ObjectId | string
  options?: mongoose.QueryOptions
  project?: any
}

export interface IUpdateOneParams<T> extends IAllQueriesParams {
  match: mongoose.FilterQuery<T>
  update: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<T>
  options?: mongoose.QueryOptions
}

export interface IFindParams<T> extends IAllQueriesParams {
  match?: mongoose.FilterQuery<T>
  project?: any
  options?: mongoose.QueryOptions
}

export interface IDeleteOneParams<T> extends IAllQueriesParams {
  match: mongoose.FilterQuery<T>
  options?: mongoose.QueryOptions
}

export default interface IQueries<IModelDocument, IModelSchema> {
  // Create
  create: (params: ICreateParams<IModelSchema>) => Promise<Array<IModelDocument>>

  // Read
  findById: (params: IFindByIdParams) => Promise<IModelDocument>
  find: (params: IFindParams<IModelSchema>) => Promise<Array<IModelDocument>>

  // Update
  updateOne: (params: IUpdateOneParams<IModelSchema>) => Promise<Query<UpdateWriteOpResult, IModelSchema>>
  // Delete
  deleteOne: (params: IDeleteOneParams<IModelSchema>) => Promise<{ ok?: number, n?: number, deletedCount?: number }>
}
