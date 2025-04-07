import { StatusCodes } from "http-status-codes";
import { ApiResult } from "~/interfaces/api.result";
import { getColegiaturas } from "../services/colegiatura.service";

type HandleCtx = (handler: (bot: any, req: any, res: any) => Promise<void>) => any;

/**
 * 
 * @param number: number
 * @param mesage: string
 * @param urlMedia: string
 * 
 */
export function handleMessageService(handleCtx: HandleCtx) {
    return handleCtx(async (bot, req, res) => {
        const { number, message, urlMedia } = req.body
        const apiResult = { title: 'Send Message', route: '/v1/message', status: 'error', code: 0, contenido: null, boolean: false, rows: 0, data: null } as ApiResult;

        console.log(req.body);

        try {
            await bot.sendMessage(number, message, { media: urlMedia ?? null })
            apiResult.status = 'success';
            apiResult.code = StatusCodes.OK;
            apiResult.contenido = {
                message: 'El mensaje se ha enviado correctamente.',
                number: number,
                text: message,
                media: urlMedia ?? null,
            };
            apiResult.boolean = true;

            res.end(JSON.stringify(apiResult));
        } catch (error) {
            apiResult.code = StatusCodes.BAD_REQUEST;
            apiResult.contenido = {
                message: 'Error al enviar el mensaje.',
                number: number,
                text: message,
                media: urlMedia ?? null,
            };

            res.end(JSON.stringify(apiResult));
        }

    })
}

export function handleColegiaturaService(handleCtx: HandleCtx) {
    return handleCtx(async (bot, req, res) => {
        try {
            const dataColegiatura = await getColegiaturas();
            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify(dataColegiatura));
        } catch (error) {
            res.writeHead(200, { 'Content-Type': 'application/json' }) // Opcional para mostrar en el navagador texto con formato
            return res.end(JSON.stringify(error));
        }

    })
}