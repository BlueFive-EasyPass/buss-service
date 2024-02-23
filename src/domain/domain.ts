import { IDomain } from "../interfaces/domainInterface";
import { IService } from "../interfaces/interfaceService";

export class Domain implements IDomain {
    data: IDomain['data'];
    private service: IService
    constructor(data: IDomain['data'], service: IService) {
        this.data = data
        this.service = service
    }

    save(): Promise<Object> {
        try {
            const result = this.service.save(this.data)
            return result
        } catch (error) {
            throw error
        }
    }

    search(): Promise<Object[]> {
        try {
            const result = this.service.search(this.data)
            return result
        } catch (error) {
            throw error
        }
    }

    update(arg0: Object): Promise<Object> {
        try {
            const result = this.service.update(this.data, arg0)
            return result
        } catch (error) {
            throw error
        }
    }
    delete(): Promise<Object> {
        try {
            const result = this.service.delete(this.data)
            return result
        } catch (error) {
            throw error
        }
    }

}