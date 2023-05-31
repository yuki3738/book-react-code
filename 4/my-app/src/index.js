import ReactDom from "react-dom";

const App = () => {
  return (
    <div>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
