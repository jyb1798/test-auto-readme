import React from 'react'

const Utterances = () => {
  return (
    <section
      ref={(elem) => {
        // if (!elem) {
        //   return
        // }
        const scriptElem = document.createElement('script')
        scriptElem.src = 'https://utteranc.es/client.js'
        scriptElem.async = true
        scriptElem.setAttribute('repo', 'Fetudy/Fetudy_Blog')
        scriptElem.setAttribute('issue-term', 'title')
        scriptElem.setAttribute('theme', 'github-light')
        scriptElem.crossOrigin = 'anonymous'
        elem.appendChild(scriptElem)
      }}
    />
  )
}

export default Utterances
