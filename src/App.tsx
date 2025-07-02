import { Button, Input, InputNumber } from "antd";

function App() {
  const [count, setCount] = useState<string | number | null>(0);
  const [text, setText, bindText] = useTwoWayBind("");
  return (
    <>
      <div className="p-[20px]">
        <Input {...bindText} />
        <Button type="primary" onClick={() => setText((val) => val + "1")}>
          {text}
        </Button>
      </div>
      <div className="p-[20px]">
        <InputNumber min={1} value={count} onChange={setCount} />
        <Button
          type="primary"
          onClick={() => setCount((count) => (count as number) + 1)}
        >
          {count}
        </Button>
      </div>
    </>
  );
}

export default App;
