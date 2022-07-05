const style = {
  backgroundColor: '#c6ffe2',
  width: '400px',
  minHeight: '200px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
}

export const IncompleteTodo = () => {
  return (
    <div style={style}>
      <p className="title">未完了のTODO</p>
      <ul>
        <div className="list-row">
          <li>あああ</li>
          <button>完了</button>
          <button>削除</button>
        </div>
      </ul>
    </div>
  )
}