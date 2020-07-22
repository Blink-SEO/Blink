import React from 'react'
import InnerHTML from 'dangerously-set-html-content'

const ConvertKitForm = () => {
  const html = `
    <script async data-uid="9dc904560b" src="https://exciting-artist-7318.ck.page/9dc904560b/index.js"></script>
  `
  return (
    <InnerHTML html={ html } />
  )
}

export default ConvertKitForm
