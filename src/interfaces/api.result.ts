export interface ApiResult {

    title: string;
    route: string;
    status: string;
    code: number;
    contenido: {
        message: string;
        number: number;
        text: string;
        media: string | null;
    } | null;
    boolean: boolean;
    rows: number;
    data: any[] | null;

}