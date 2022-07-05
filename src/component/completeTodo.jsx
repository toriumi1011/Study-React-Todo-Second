const style = {
  backgroundColor: '#ffffe0',
  width: '400px',
  minHeight: '200px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
}

export const CompleteTodo = () => {
  return (
    <div style={style}>
      <p className="title">未完了のTODO</p>
      <ul>
        <div className="list-row">
          <li>いいい</li>
          <button>完了</button>
        </div>
      </ul>
    </div>
  )
};