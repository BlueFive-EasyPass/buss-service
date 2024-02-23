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
            adm_id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            adm_nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
            adm_email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            adm_senha: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            adm_level: {
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