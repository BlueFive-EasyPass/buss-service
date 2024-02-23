export interface IDomain {
    data: {
        bus_id: number | null;
        bus_nome: string | null;
        bus_num: string | null;
        bus_placa: string | null;
        bus_fabricacao: string | null;
        bus_status: string | null;
        bus_modelo: string | null;
        bus_tarifa: string | null;
        bussines_buss_CNPJ: number | null;
        bus_route_rote_id: number | null;
    };

    save(): Promise<Object>;
    search(): Promise<Array<Object>>;
    update(arg0: Object): Promise<Object>;
    delete(): Promise<Object>;
}
