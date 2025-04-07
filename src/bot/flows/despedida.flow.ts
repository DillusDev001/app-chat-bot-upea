import { addKeyword, utils } from '@builderbot/bot';
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { MemoryDB as Database } from '@builderbot/bot'

export const despedidaFlow = addKeyword('', { delay: 900 })
    .addAnswer(
        [
            'Fue un gusto ayudarte!!!',
            'Hasta la proxima!!!'
        ].join('\n'), { delay: 900 });