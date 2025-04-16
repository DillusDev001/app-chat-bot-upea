import 'reflect-metadata';
import 'tslib';
import dotenv from 'dotenv';
import { flow } from './flow';
import { provider } from './config/provider';
import { database } from "./config/database";
import { createBot } from '@builderbot/bot';
import { handleColegiaturaService, handleMessageService } from './api/message.controller';
import { AppDataSource } from './mysql/data-source';
dotenv.config();

const PORT = process.env.API_PORT ?? 3008

const main = async () => {
    // Inicializa MySQL con TypeORM
    await AppDataSource.initialize();

    // Creamos el bot
    const { handleCtx, httpServer } = await createBot({
        flow,
        provider,
        database,
    })
    provider.server.post('/v1/message', handleMessageService(handleCtx));
    provider.server.get('/v1/colegiatura', handleColegiaturaService(handleCtx));

    httpServer(+PORT)
}

main()