
import bcrypt from 'bcrypt'
import * as JWT from 'jose'
import dotenv from 'dotenv'
import { IMid } from '../interfaces/interfaceMid';
import { IDomain } from '../interfaces/domainInterface';
dotenv.config()

export class Mid implements IMid {
    private data: any;

    constructor(data: IDomain['data']) {
        this.data = data
    }

    validateLoginCredentials(): boolean {
        return (
            'adm_email' in this.data &&
            'adm_senha' in this.data &&
            typeof this.data.adm_email === 'string' &&
            typeof this.data.adm_senha === 'string'
        );
    }

    async createHash(): Promise<string> {
        const hash = await bcrypt.hash(this.data.adm_senha, 10);

        return hash
    }

    async compareHash(hash: string): Promise<boolean> {
        console.log(hash, this.data.adm_senha);
        
        const match = await bcrypt.compare(this.data.adm_senha, hash)
        if (match) {
            return true
        }
        return false

    }

    async createToken(): Promise<string> {
        const secret = new TextEncoder().encode(
            'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
        )
        const alg = 'HS256'

        const jwt: string = await new JWT.SignJWT({ 'urn:example:claim': true })
            .setProtectedHeader({ alg })
            .setIssuedAt()
            .setIssuer('urn:example:issuer')
            .setAudience('urn:example:audience')
            .setExpirationTime('7d')
            .sign(secret)


        return jwt
    }

}