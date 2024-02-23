import { FastifyReply} from "fastify";
import { IController } from "../interfaces/interfaceController";
import { IDomain } from "../interfaces/domainInterface";

export class Controller implements IController {
    private domain: IDomain

    constructor(domain: IDomain) {
        this.domain = domain
    }

    async Save(reply: FastifyReply): Promise<void> {
        try {
            const result = await this.domain.save();

            if (result) {
                reply.code(200).send({ data: result });
            }
            reply.code(500).send({ error: 'Erro ao salvar no banco' });
        } catch (error) {
            reply.code(500).send({ error: error });
            throw error;
        }
    }

    async Search(reply: FastifyReply): Promise<void> {
        try {
            const result = await this.domain.search();

            if (result) {
                reply.code(200).send({ data: result });
            }
            reply.code(500).send({ error: 'Erro ao buscar no banco' });
        } catch (error) {
            reply.code(500).send({ error: error });
            throw error;
        }
    }
    async Update(arg0: Object, reply: FastifyReply): Promise<void> {
        try {
            const result = await this.domain.update(arg0);

            if (result) {
                reply.code(200).send({ data: `${result} item alterado no Banco de Dados` });
            }
            reply.code(500).send({ error: 'Erro ao atualizar no banco' });
        } catch (error) {
            reply.code(500).send({ error: error });
            throw error;
        }
    }


    async Delete(reply: FastifyReply): Promise<void> {
        try {
            const result = await this.domain.delete();

            if (result) {
                reply.code(200).send({ data: `${result} item excluido no Banco de Dados` });
            } else {
                reply.code(500).send({ error: 'Erro ao excluir do banco' });
            }
        } catch (error) {
            reply.code(500).send({ error: error });
            throw error;
        }
    }

}
