import Utterances from './script'

function Comment() {
  return (
    <div style={{ position: 'relative', left: '-30px' }}>
      <br />
      <hr
        style={{
          margin: '40px 0',
          height: '3px',
          border: 'none',
          backgroundColor: '#ddd',
          backgroundImage:
            'repeating-linear-gradient(-45deg, #fff, #fff 4px, transparent 4px, transparent 8px)',
        }}
      />
      <Utterances />
    </div>
  )
}

export default Comment
