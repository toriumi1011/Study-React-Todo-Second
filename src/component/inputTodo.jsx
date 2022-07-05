const style = {
  backgroundColor: '#c1ffff',
  width: '400px',
  height: '30px',
  borderRadius: '8px',
  padding: '8px',
  margin: '8px',
}

export const InputTodo = (props) => {
  return (
    <div style={style}>
      <input placeholder="TODOを入力" />
      <button>追加</button>
    </div>
  )
}