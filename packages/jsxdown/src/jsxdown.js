import React from 'react'
import snarkdown from 'snarkdown'
export const JSXDown = function({ mdText }) {
    const transformedHTML = snarkdown(mdText);
    return (<div dangerouslySetInnerHTML={{__html: transformedHTML}} />)
}