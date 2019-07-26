const snarkdown = require('./snarkdown')
const { transform } = require('h2x-core')
const jsx = require('h2x-plugin-jsx')
module.exports = function({ mdText, bindings }) {
    if(!bindings) {
        bindings = {};
    }
    console.log(jsx)
    const transformedHTML = snarkdown(mdText);
    const transformedJSXStr = transform( transformedHTML, {plugins:[jsx]});
    return {transformedHTML, transformedJSXStr}
}