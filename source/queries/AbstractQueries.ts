import type mongoose from 'mongoose'
import { type Query, type UpdateWriteOpResult } from 'mongoose'

import is from '../helpers/is'
import type IQueries from '../interfaces/IQueries'
import { type ICreateParams, type IDeleteOneParams, type IFindByIdParams, type IFindParams, type IUpdateOneParams } from '../interfaces/IQueries'

export default abstract class AbstractQueries<IModelDocument, IModelSchema> implements IQueries<IModelDocument, IModelSchema> {
  public readonly model: mongoose.Model<any> & { aggregatePaginate?: any }

  constructor (model: mongoose.Model<any> & { aggregatePaginate?: any }) {
    this.model = model
  }

  async create ({
    properties,
    options
  }: ICreateParams<IModelSchema>): Promise<Array<IModelDocument>> {
    if (is.array(properties)) return await this.model.insertMany(properties, options)

    return await this.model.create([properties], options)
  }

  async find ({
    match,
    options,
    project = {}
  }: IFindParams<IModelSchema>): Promise<Array<IModelDocument>> {
    const documents = await this.model.find(match, project, options)

    return documents
  }

  async findById ({
    id,
    options,
    project = {}
  }: IFindByIdParams): Promise<IModelDocument> {
    const document = await this.model.findOne({ _id: id }, project, options)

    return document
  }

  async updateOne ({
    match,
    update,
    options
  }: IUpdateOneParams<IModelSchema>): Promise<Query<UpdateWriteOpResult, IModelSchema>> {
    const updateInfo = await this.model.updateOne(match, update, options)

    return updateInfo
  }

  async deleteOne ({
    match,
    options
  }: IDeleteOneParams<IModelSchema>): Promise<{ ok?: number, n?: number, deletedCount?: number }> {
    const deleteInfo = await this.model.deleteOne(match, options)

    return deleteInfo
  }
}
