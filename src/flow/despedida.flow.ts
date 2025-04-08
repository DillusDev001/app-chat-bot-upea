import { addKeyword } from "@builderbot/bot";
import { BaileysProvider } from "@builderbot/provider-baileys";
import { IDatabase } from "~/config/database";
import { myDelay } from "~/config/flow.config";

export const exitFlow = addKeyword<BaileysProvider, IDatabase>(['Gracias', 'Hasta', 'Adios', 'Chao'])
    .addAnswer([
        'Gracias a ti por la paciencia!!! 🤗',
        'Fue un gusto ayudarte!!!',
        'Hasta la proxima!!! 👋',
        '',
        '*P.D.*',
        'No dudes en escribir si necesitas información. ☺️'
    ], {
        delay: myDelay
    });