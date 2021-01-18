import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { domToReact } from "html-react-parser"

const PostCode = ({ language, children }) => (
  <SyntaxHighlighter style={vscDarkPlus} language={language}>
    {children}
  </SyntaxHighlighter>
)

const getCode = node => {
  if ( node.children.length > 0 && node.children[0].name === 'code' ) {
    return node.children[0].children;
  } else {
    return node.children;
  }
};

const getLanguage = node => {
  if ( node.attribs['data-enlighter-language'] != null ) {
    return node.attribs['data-enlighter-language'];
  }
  return null;
};

const replaceCode = node => {
  if ( node.name === 'pre' ) {
    return node.children.length > 0 && <PostCode language={ getLanguage(node) }>{ domToReact(getCode(node)) }</PostCode>
  }
}

export { PostCode, getCode, getLanguage, replaceCode }
