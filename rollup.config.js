import json from '@rollup/plugin-json';  // Asegúrate de que esta línea esté presente
import typescript from 'rollup-plugin-typescript2'

export default {
    input: 'src/app.ts',
    output: {
        file: 'dist/app.js',
        format: 'esm',
    },
    onwarn: (warning) => {
        if (warning.code === 'UNRESOLVED_IMPORT') return
    },
    plugins: [
        json(),
        typescript({
            tsconfig: './tsconfig.json'
        })
    ],
}
