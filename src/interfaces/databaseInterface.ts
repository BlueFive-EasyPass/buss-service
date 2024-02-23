import { Optional, Sequelize } from "sequelize"
import { IDomain } from "./domainInterface"

export interface IDatabaseConnection {
   Connect: () => void
   Disconnect: () => void
   getInstance: () => Sequelize
}
