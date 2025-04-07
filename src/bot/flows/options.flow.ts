import { addKeyword, EVENTS } from '@builderbot/bot';
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { MemoryDB as Database } from '@builderbot/bot'

export const optionFlow = addKeyword<Provider, Database>(['1', '2', '3', '4'])
    .addAnswer('has seleccionado');