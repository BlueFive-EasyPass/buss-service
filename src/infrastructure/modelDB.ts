import { DataTypes, Model, Sequelize } from 'sequelize';
import { IDatabaseConnection } from '../interfaces/databaseInterface';
import { IModelDB } from '../interfaces/interfaceModel';

export class ModelDB implements IModelDB {
    private connection: IDatabaseConnection;
    private instance: Sequelize

    constructor(connection: IDatabaseConnection) {
        this.connection = connection
        this.instance = this.connection.getInstance();
    }

    private defineModel() {
        return this.instance.define('buss', {
            bus_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            bus_nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            bus_num: {
                type: DataTypes.STRING,
                allowNull: false
            },
            bus_placa: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            bus_fabricacao: {
                type: DataTypes.STRING,
                allowNull: false
            },
            bus_status: {
                type: DataTypes.STRING,
            },
            bus_modelo: {
                type: DataTypes.STRING,
                allowNull: false
            },
            bus_tarifa: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            bussines_buss_CNPJ: {
                type: DataTypes.NUMBER,
                allowNull: false,
            },
            bus_route_rote_id: {
                type: DataTypes.NUMBER,
                allowNull: false,
            }
        }, {
            tableName: 'buss',
            timestamps: false
        });
    }

    async syncModel() {
        try {
            const model = this.defineModel();
            this.connection.Connect();
            await this.instance.sync();
            console.log('Modelo sincronizado com o banco de dados');
            return model;
        } catch (err) {
            console.error('Erro ao sincronizar o modelo:', err);
            throw err;
        }
    }

    disconnectModel() {
        console.log('Modelo desconectado');
        this.connection.Disconnect();
    }
}