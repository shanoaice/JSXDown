# JSXDown

> A small, fast Markdown parser component for React.

## Usage

``` js
import JSXDown from 'jsxdown'
import React from 'react'
import ReactDOM form 'react-dom'

const mdText = `# Test h1
> Test binding - val = { binding }
`;

ReactDOM.render(<JSXDown mdText={mdText} bindings={{binding: 'Hello!'}} />, document.body)
```