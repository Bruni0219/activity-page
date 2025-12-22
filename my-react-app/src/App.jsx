import { useState } from 'react';

function TodoApp() {
  // 狀態 1：儲存正在輸入的文字
  const [inputValue, setInputValue] = useState("");
  // 狀態 2：儲存整個清單 (陣列)
  const [todos, setTodos] = useState(["學習 React", "喝杯咖啡"]);

  // 處理新增邏輯
  const handleAddTodo = () => {
    if (inputValue.trim() !== "") { // 確保不是空白
      // 把舊的 todos 展開，並加上新的輸入內容
      setTodos([...todos, inputValue]);
      setInputValue(""); // 清空輸入框
    }else {
    // 💡 如果是空白，就噴出一個小警告
    alert("請先輸入一點內容喔！");
  }
  };

  // 處理刪除邏輯
  const handleDelete = (index) => {
    // 濾掉被點擊的那一項
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: '30px', maxWidth: '400px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h1>📝 我的筆記本</h1>
      
      {/* 輸入區 */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // 關鍵：更新正在輸入的文字
          placeholder="想記錄什麼？"
          style={{ padding: '8px', width: '70%', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button 
          onClick={handleAddTodo}
          style={{ padding: '8px 15px', marginLeft: '10px', cursor: 'pointer', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          新增
        </button>
      </div>

      {/* 清單顯示區 */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((item, index) => (
          <li 
            key={index} 
            onClick={() => handleDelete(index)} // 點擊項目就刪除
            style={{ 
              padding: '12px', 
              backgroundColor: '#f9f9f9', 
              borderBottom: '1px solid #eee', 
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            {item} <span style={{ color: '#ccc', fontSize: '12px' }}>點擊刪除</span>
          </li>
        ))}
      </ul>
      
      {todos.length === 0 && <p style={{ color: '#888' }}>目前沒有待辦事項，休息一下吧！</p>}
    </div>
  );
}

export default TodoApp;