import React, { useRef, useEffect } from 'react'

const Utterances = () => {
  const commentDiv = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://utteranc.es/client.js'
    script.setAttribute('repo', 'Fetudy/Fetudy_Blog')
    script.setAttribute('issue-term', 'title')
    script.setAttribute('theme', 'github-light')
    script.crossOrigin = 'anonymous'
    script.async = true
    commentDiv.current.appendChild(script)
  }, [])

  return (
    <>
      <div ref={commentDiv}></div>
    </>
  )
}

export default Utterances
