
export interface IModelDB {
    syncModel(): Promise<any>;
    disconnectModel(): void;
}