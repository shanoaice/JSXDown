const { rollup } = require("rollup");
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require("rollup-plugin-commonjs");
const babel = require('rollup-plugin-babel');
const { terser } = require('rollup-plugin-terser');

const build = async function () {
    const bundle = await rollup({
        input: 'src/jsxdown.js',
        plugins: [
            babel({
                exclude: 'node_modules/**',
                plugins: [
                    "@babel/plugin-transform-react-jsx"
                ]
            }),
            commonjs(),
            resolve(),
            terser()
        ],
        external:['react','snarkdown','h2x-core','h2x-plugin-jsx','react-jsx-parser']
    });
    return bundle.write({
        file: './dist/jsxdown.js',
        format: 'es',
        sourcemap: true
    })
}

exports.build = build;
exports.default = build;