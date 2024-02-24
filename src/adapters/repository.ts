
import { IDomain } from "../interfaces/domainInterface";
import { IModelDB } from "../interfaces/interfaceModel";
import { IRepository } from "../interfaces/interfaceRepository";

export class Repository implements IRepository {
    private modelDB: IModelDB

    constructor(modelDB: IModelDB) {
        this.modelDB = modelDB
    }


    async save(data: IDomain['data']): Promise<Object> {
        try {
            const model = await this.modelDB.syncModel();
            const result = await model.create({ ...data })

            return result;
        } catch (error) {
            throw error;
        } finally {
            this.modelDB.disconnectModel();
        }
    }

    async search(data: IDomain['data']): Promise<Object[]> {
        try {
            const model = await this.modelDB.syncModel();
            const result = await model.findAll({ 
                where: {
                    ...data
                } 
            })
            
            return result;
        } catch (error) {
            throw error;
        } finally {
            this.modelDB.disconnectModel();
        }
    }

    async update(data: IDomain['data'], arg0: Object): Promise<Object> {
        try {
            const model = await this.modelDB.syncModel();
            console.log(arg0, data);
            
            const result = await model.update({ ...data }, {
                where: {
                    ...arg0
                }
            })

            return result[0]
        } catch (error) {
            throw error
        } finally {
            this.modelDB.disconnectModel();
        }
    }
    async delete(data: IDomain['data']): Promise<Object> {
        try {
            const model = await this.modelDB.syncModel();
            const result = await model.destroy({
                where: {
                    ...data
                }
            })

            return result
        } catch (error) {
            throw error
        } finally {
            this.modelDB.disconnectModel();
        }
    }
}