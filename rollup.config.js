import json from '@rollup/plugin-json'
import terser from '@rollup/plugin-terser'
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/index.js',
            sourcemap: 'inline',
        },
        {
            file: 'dist/index.cjs',
            format: 'cjs',
            sourcemap: 'inline',
        },
        {
            file: 'dist/index.min.js',
            sourcemap: 'inline',
            plugins: [terser()],
        },
    ],
    plugins: [resolve(), babel({ babelHelpers: 'bundled' }), json()],
}
