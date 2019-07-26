import React from 'react';
import marked from 'marked';
export const JSXDown = function({ mdText }) {
    const transformedHTML = marked(mdText);
    return (<div dangerouslySetInnerHTML={{__html: transformedHTML}} />)
}
//o