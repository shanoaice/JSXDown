import React from 'react'
import snarkdown from 'snarkdown'
import { transform } from 'h2x-core'
import jsx from 'h2x-plugin-jsx'
import JsxParser from 'react-jsx-parser'
export const JSXDown = function({ mdText, bindings }) {
    if(!bindings) {
        bindings = {};
    }
    const transformedHTML = snarkdown(mdText);
    const transformedJSXStr = transform( transformedHTML, {plugins:[jsx]});
    return (<JsxParser
        bindings={bindings}
        jsx={transformedJSXStr} />)
}