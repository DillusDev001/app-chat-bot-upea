import { createFlow } from '@builderbot/bot';
import { welcomeFlow, programasFlow } from './welcome.flow';

export const flow = createFlow([welcomeFlow, programasFlow])