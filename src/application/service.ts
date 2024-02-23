import { IDomain } from "../interfaces/domainInterface";
import { IRepository } from "../interfaces/interfaceRepository";
import { IService } from "../interfaces/interfaceService";

export class Service implements IService {
    private repository: IRepository
    constructor(repository: IRepository) {
        this.repository = repository
    }
    save(data: IDomain['data']): Promise<Object> {
        try {
            const result = this.repository.save(data)
            return result
        } catch (error) {
            throw error
        }
    }

    search(data: IDomain['data']): Promise<Object[]> {
        try {
            const result = this.repository.search(data)
            return result
        } catch (error) {
            throw error
        }
    }

    update(data: IDomain['data'], arg0: Object): Promise<Object> {
        try {
            const result = this.repository.update(data, arg0)
            return result
        } catch (error) {
            throw error
        }
    }

    delete(data: IDomain['data']): Promise<Object> {
        try {
            const result = this.repository.delete(data)
            return result
        } catch (error) {
            throw error
        }
    }


}