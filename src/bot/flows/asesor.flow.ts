import { addKeyword, utils } from '@builderbot/bot';

export const asesorFlow = addKeyword('', { delay: 900 })
    .addAnswer(
        [
            'Fue un placer ayudarte!',
            'En el siguiente link podrás despejar tus dudas con un asesor.',
            'https://emojikeyboard.top/es/'
        ].join('\n'), { delay: 900 }
    );