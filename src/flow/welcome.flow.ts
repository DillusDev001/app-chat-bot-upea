import { addKeyword, EVENTS } from '@builderbot/bot';
import { programasFlow } from './programas.flow.00';
import { myDelay } from '../config/flow.config';
import { IDatabase } from './../config/database/index';
import { BaileysProvider } from '@builderbot/provider-baileys';
import { requisitosFlow } from './requisitos.flow';
import { fechasFlow } from './fechas.flow';
import { menuPrincipalFlow } from './menu.principal.flow';
import { obtenerNumero } from '~/utils/phone.number';
import { getParticipante } from '~/firebase/services/participante.firebase.service';
import { Participante } from '~/mysql/entity/participante.entity';

//export const welcomeFlow = addKeyword(EVENTS.WELCOME)
export const welcomeFlow = addKeyword<BaileysProvider, IDatabase>(EVENTS.WELCOME)
    .addAction(async (ctx, { flowDynamic }) => {

        const nro = obtenerNumero(ctx.from.includes('+') ? ctx.from : '+' + ctx.from);

        const data = await getParticipante(nro) as Participante;

        let nombre = ctx.name;

        if (data) {
            nombre = data.nombres + ' ' + data.apellidos;
        }

        await flowDynamic([
            'Hola *' + nombre + '* 👋.',
            'Bienvenido(a) a *UPEA Posgrado*.'
        ].join('\n'));
    })
    .addAnswer('¿En qué puedo ayudarte hoy?', { delay: myDelay })
    .addAction(async (ctx, { gotoFlow }) => {
        return gotoFlow(menuPrincipalFlow)
    });