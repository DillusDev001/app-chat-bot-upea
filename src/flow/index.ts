import { createFlow } from '@builderbot/bot';
import { welcomeFlow } from './welcome.flow';
import { programasFlow } from './programas.flow.00';
import { requisitosFlow } from './requisitos.flow';
import { fechasFlow } from './fechas.flow';
import { menuPrincipalFlow } from './menu.principal.flow';
import { maestriasFlow } from './programas.flow.01.maestrias';
import { doctoradosFlow } from './programas.flow.02.doctorados';
import { diplomadosFlow } from './programas.flow.03.diplomados';
import { posDoctoradosFlow } from './programas.flow.04.posdoctorados';
import { exitFlow } from './despedida.flow';

export const flow = createFlow([
    welcomeFlow,
    menuPrincipalFlow,
    programasFlow, maestriasFlow, doctoradosFlow, diplomadosFlow, posDoctoradosFlow,
    requisitosFlow,
    fechasFlow,
    exitFlow
])