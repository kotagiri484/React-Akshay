
const heading = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
    { id: "child-1" },
    React.createElement(
      "div",
      { id: "child-2" },
      [React.createElement("h1", {}, "i'm from deep nested"),
      React.createElement("h2", {}, "i'm from deep nested")]
    )
  ) ,

  React.createElement(
    "div",
    { id: "child-3" },
    React.createElement(
      "div",
      { id: "child-4" },
      [React.createElement("h1", {}, "i'm from deep nested"),
      React.createElement("h2", {}, "i'm from deep nested")]
    )
  )]


);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


