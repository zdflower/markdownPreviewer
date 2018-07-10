var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var text = "# Título\n## Subtítulo\n*cursiva*\n**negrita**\nEsto es `inline code`\n![Rosa roja](https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Small_Red_Rose.JPG/320px-Small_Red_Rose.JPG)\nUna lista desordenada\n* Item \n* Item \n    * subitem \n\nUna lista ordenada\n1. Item 1\n2. Item 2\n3. Item 3\n    * Item 3a\n\n[ZDFlower Portfolio](https://codepen.io/zdflower/full/mWEpoz)\n\nSócrates dijo:\n> 'Sólo sé\n> que no sé nada.'\n\n\nBloque de código:\n ```javascript\nfunction theAnswer()\{\n    return 42;\n\}```";

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = { markup: text };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({ markup: event.target.value });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-xs-12 col-sm-6" },
          React.createElement(Editor, { markup: this.state.markup, handleChange: this.handleChange })
        ),
        React.createElement(
          "div",
          { className: "col-xs-12 col-sm-6" },
          React.createElement(Previewer, { markup: this.state.markup })
        )
      );
    }
  }]);

  return App;
}(React.Component);

function Editor(props) {
  return React.createElement(
    "textarea",
    { rows: "34", id: "editor", onChange: props.handleChange },
    props.markup
  );
}

function Previewer(props) {
  return React.createElement("div", { id: "preview", dangerouslySetInnerHTML: createMarkup(props.markup) });
}

// https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml
function createMarkup(markup) {
  return { __html: marked(markup) };
}

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));