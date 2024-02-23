import { IDomain } from "./domainInterface";

export interface IRepository {
    save(data: IDomain['data']): Promise<Object>;
    search(data: IDomain['data']):  Promise<Array<Object>> 
    update(data: IDomain['data'], arg1: Object): Promise<Object>
    delete(bussinesData: IDomain['data']): Promise<Object>;
}