import { FastifyReply } from "fastify"

export interface IController {
    Save(reply: FastifyReply): Promise<void>
    Search(reply: FastifyReply): Promise<void>
    Update(arg0: Object, reply: FastifyReply): Promise<void>
    Delete(reply: FastifyReply): Promise<void>
}