const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "I am first child 😀"),
      React.createElement("h2", {}, "I am second child"),
    ])
  );
  const element = React.createElement("h1", {}, "Hello World from react");
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);