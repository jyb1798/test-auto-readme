import Utterances from './script'

function Comment() {
  console.log('mode', process.env.NEXT_PUBLIC_MODE)
  return (
    <div>
      <Utterances />
    </div>
  )
}

export default Comment
