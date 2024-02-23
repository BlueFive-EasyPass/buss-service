export interface IDomain {
    data: {
        adm_id: number | null
        adm_nome: string | null,
        adm_email: string | null,
        adm_senha: string | null,
        adm_level: number | null
    }

    save(): Promise<Object> 
    search(): Promise<Array<Object>> 
    update(arg0: Object): Promise<Object> 
    delete(): Promise<Object> 
}