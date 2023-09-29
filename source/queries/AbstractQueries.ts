import type mongoose from 'mongoose'

import is from '../helpers/is'
import type IQueries from '../interfaces/IQueries'
import { type ICreateParams, type IDeleteOneParams, type IFindByIdAndUpdateParams, type IFindByIdParams, type IFindOneParams, type IFindParams } from '../interfaces/IQueries'

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

  async findOne ({
    match,
    options,
    project = {}
  }: IFindOneParams<IModelSchema>): Promise<IModelDocument> {
    const document = await this.model.findOne(match, project, options)

    return document
  }

  async findById ({
    id,
    options,
    project = {}
  }: IFindByIdParams): Promise<IModelDocument> {
    const document = await this.model.findOne({ _id: id }, project, options)

    return document
  }

  async findByIdAndUpdate ({
    id,
    update,
    options,
    project = {}
  }: IFindByIdAndUpdateParams<IModelSchema>): Promise<IModelDocument> {
    const document = await this.model.findOneAndUpdate({ _id: id }, update, options).select(project)

    return document
  }

  async deleteOne ({
    match,
    options
  }: IDeleteOneParams<IModelSchema>): Promise<{ ok?: number, n?: number, deletedCount?: number }> {
    const deleteInfo = await this.model.deleteOne(match, options)

    return deleteInfo
  }
}
