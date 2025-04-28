import { Button } from "antd";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Vite + React</h2>
      <h3>Vite + React</h3>
      <p>Vite + React</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button type="primary">123</Button>
      </div>
    </>
  );
}

export default App;
