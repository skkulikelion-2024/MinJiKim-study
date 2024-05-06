import Button from"./Button";
import styles from "./App.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev +1);
  console.log("render");
  return (
    <div>
      <h1>{counter}</h1>
      <Button onClick={onClick}>click me</Button>
    </div>
  );
}

export default App;
