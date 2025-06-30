import { Button } from "antd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="text-2xl font-bold underline text-primary">
        Vite + React111
      </p>
      <p className="label">11111</p>
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
