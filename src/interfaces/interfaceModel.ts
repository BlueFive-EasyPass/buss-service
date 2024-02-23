import { Model } from "sequelize";

export interface IModelDB {
    syncModel(): Promise<any>;
    disconnectModel(): void;
}