'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$PureComponent) {
  _inherits(App, _React$PureComponent);

  _createClass(App, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        AxisYWidth: React.PropTypes.number.isRequired,
        width: React.PropTypes.number.isRequired,
        height: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        graphValues: React.PropTypes.array.isRequired
      };
    }
  }]);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    var LegendX = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    var AxisXHeight = 30;
    var rightBorder = 10;
    _this.state = {
      LegendX: LegendX,
      AxisXHeight: AxisXHeight,
      rightBorder: rightBorder
    };
    return _this;
  }

  _createClass(App, [{
    key: 'getLegendY',
    value: function getLegendY(graphValues) {
      var max = Math.ceil(Math.max.apply(Math, _toConsumableArray(graphValues.map(function (o) {
        return o.value;
      }))) / 10) * 10;
      var LegendY = [0];
      for (var i = 1; i <= 4; i += 1) {
        LegendY.push(Math.ceil(max / 4 * i));
      }

      return LegendY.reverse();
    }
  }, {
    key: 'render',
    value: function render() {
      var height = this.props.height;
      var width = this.props.width;
      var AxisYWidth = this.props.AxisYWidth;
      var title = this.props.title;
      var graphValues = this.props.graphValues;
      var LegendY = this.getLegendY(graphValues);

      var graphHeight = height - this.state.AxisXHeight;
      var graphWidth = width - AxisYWidth - this.state.rightBorder;
      return React.createElement(
        GraphComponent,
        { height: height, width: width },
        React.createElement(GraphAxisX, {
          offset: AxisYWidth,
          parentWidth: width - this.state.rightBorder,
          points: this.state.LegendX,
          y: height - 20
        }),
        React.createElement(GraphAxisY, {
          height: graphHeight,
          points: LegendY,
          parentWidth: width - this.state.rightBorder
        }),
        React.createElement(
          GraphText,
          { x: AxisYWidth, y: height },
          title
        ),
        React.createElement(GraphBody, {
          width: graphWidth,
          height: graphHeight,
          offsetX: AxisYWidth,
          points: graphValues
        })
      );
    }
  }]);

  return App;
}(React.PureComponent);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AxisHorizontalLine = function (_React$PureComponent) {
  _inherits(AxisHorizontalLine, _React$PureComponent);

  function AxisHorizontalLine() {
    _classCallCheck(this, AxisHorizontalLine);

    return _possibleConstructorReturn(this, (AxisHorizontalLine.__proto__ || Object.getPrototypeOf(AxisHorizontalLine)).apply(this, arguments));
  }

  _createClass(AxisHorizontalLine, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "g",
        null,
        React.createElement(
          GraphText,
          { x: 0, y: this.props.y },
          this.props.value
        ),
        React.createElement("line", {
          className: "AxisHorizontalLine",
          x1: 30,
          y1: this.props.y,
          x2: this.props.width,
          y2: this.props.y
        })
      );
    }
  }], [{
    key: "propTypes",
    get: function get() {
      return {
        y: React.PropTypes.number.isRequired,
        width: React.PropTypes.number.isRequired,
        value: React.PropTypes.number.isRequired
      };
    }
  }]);

  return AxisHorizontalLine;
}(React.PureComponent);
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrencyText = function (_React$PureComponent) {
  _inherits(CurrencyText, _React$PureComponent);

  function CurrencyText() {
    _classCallCheck(this, CurrencyText);

    return _possibleConstructorReturn(this, (CurrencyText.__proto__ || Object.getPrototypeOf(CurrencyText)).apply(this, arguments));
  }

  _createClass(CurrencyText, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "text",
        _extends({ className: "text currency" }, this.props),
        "$ ",
        this.props.children
      );
    }
  }], [{
    key: "propTypes",
    get: function get() {
      return {
        children: React.PropTypes.number.isRequired
      };
    }
  }]);

  return CurrencyText;
}(React.PureComponent);
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Difference = function (_React$PureComponent) {
  _inherits(Difference, _React$PureComponent);

  function Difference() {
    _classCallCheck(this, Difference);

    return _possibleConstructorReturn(this, (Difference.__proto__ || Object.getPrototypeOf(Difference)).apply(this, arguments));
  }

  _createClass(Difference, [{
    key: 'render',
    value: function render() {
      var x = this.props.x;
      var y = this.props.y;
      var difference = this.props.value.toFixed(2);
      var dx = 15;
      var trianglePoints = difference >= 0 ? x + dx + 5 + ',' + (y + 5) + ' ' + (x + dx + 10) + ',' + y + ' ' + (x + dx + 15) + ',' + (y + 5) : x + dx + 5 + ',' + y + ' ' + (x + dx + 10) + ',' + (y + 5) + ' ' + (x + dx + 15) + ',' + y;
      var className = difference >= 0 ? 'green' : 'red';
      var textClassName = 'text ' + className;

      return React.createElement(
        'g',
        null,
        React.createElement('polygon', { points: trianglePoints, className: className }),
        React.createElement(
          'text',
          { x: x + dx + 18, y: y + 5, className: textClassName },
          difference
        ),
        ';'
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        value: React.PropTypes.number.isRequired,
        x: React.PropTypes.number.isRequired,
        y: React.PropTypes.number.isRequired
      };
    }
  }]);

  return Difference;
}(React.PureComponent);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FloatingTooltip = function (_React$PureComponent) {
  _inherits(FloatingTooltip, _React$PureComponent);

  function FloatingTooltip() {
    _classCallCheck(this, FloatingTooltip);

    return _possibleConstructorReturn(this, (FloatingTooltip.__proto__ || Object.getPrototypeOf(FloatingTooltip)).apply(this, arguments));
  }

  _createClass(FloatingTooltip, [{
    key: "render",
    value: function render() {
      var divWidth = 130;
      var divHeight = 45;
      var dy = divHeight + 15;

      var currentValue = this.props.point.value;
      var previousPoint = this.props.previousPoint;
      var previousValue = previousPoint.value;
      var difference = currentValue - previousValue;
      var date = this.props.point.date;
      var x = this.props.point.x;
      var y = this.props.point.y - dy;
      if (y < 0) {
        y = dy;
        x += 5;
      }

      if (x > this.props.parentWidth - divWidth) {
        x = this.props.point.x - divWidth - 5;
      }

      return React.createElement(
        "g",
        null,
        React.createElement(
          "defs",
          null,
          React.createElement(
            "filter",
            { id: "drop-shadow", x: "-5%", y: "-5%", width: "110%", height: "110%" },
            React.createElement("feOffset", { result: "offOut", "in": "SourceAlpha", dx: "0", dy: "0.5" }),
            React.createElement("feGaussianBlur", { result: "blurOut", "in": "offOut", stdDeviation: "1" }),
            React.createElement("feBlend", { "in": "SourceGraphic", in2: "blurOut", mode: "normal" })
          )
        ),
        React.createElement("rect", {
          className: "floatingDiv",
          width: divWidth,
          height: divHeight,
          x: x,
          y: y,
          rx: 5,
          ry: 5,
          filter: "url(#drop-shadow)"
        }),
        React.createElement(
          CurrencyText,
          { x: x + 10, y: y + 35 },
          currentValue
        ),
        React.createElement(Difference, { value: difference, x: x + 45, y: y + 30 }),
        React.createElement(
          GraphText,
          { x: x + 10, y: y + 20 },
          date
        )
      );
    }
  }], [{
    key: "propTypes",
    get: function get() {
      return {
        parentWidth: React.PropTypes.number.isRequired,
        point: React.PropTypes.object.isRequired,
        previousPoint: React.PropTypes.object.isRequired
      };
    }
  }]);

  return FloatingTooltip;
}(React.PureComponent);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GraphAxisX = function (_React$PureComponent) {
  _inherits(GraphAxisX, _React$PureComponent);

  function GraphAxisX() {
    _classCallCheck(this, GraphAxisX);

    return _possibleConstructorReturn(this, (GraphAxisX.__proto__ || Object.getPrototypeOf(GraphAxisX)).apply(this, arguments));
  }

  _createClass(GraphAxisX, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var offset = this.props.offset;
      var parentWidth = this.props.parentWidth;
      var labelsCount = 12;
      var dy = Math.ceil((parentWidth - offset) / (labelsCount - 0.4));
      var options = this.props.points.map(function (pointValue, idx) {
        var x = offset + dy * idx;
        return React.createElement(
          GraphText,
          { key: pointValue, x: x, y: _this2.props.y },
          pointValue
        );
      });

      return React.createElement(
        "g",
        null,
        options
      );
    }
  }], [{
    key: "propTypes",
    get: function get() {
      return {
        offset: React.PropTypes.number.isRequired,
        parentWidth: React.PropTypes.number.isRequired,
        points: React.PropTypes.array.isRequired
      };
    }
  }]);

  return GraphAxisX;
}(React.PureComponent);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GraphAxisY = function (_React$PureComponent) {
  _inherits(GraphAxisY, _React$PureComponent);

  function GraphAxisY() {
    _classCallCheck(this, GraphAxisY);

    return _possibleConstructorReturn(this, (GraphAxisY.__proto__ || Object.getPrototypeOf(GraphAxisY)).apply(this, arguments));
  }

  _createClass(GraphAxisY, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var height = this.props.height;
      var labelsCount = 5;
      var dy = Math.ceil(height / labelsCount);
      var lines = this.props.points.map(function (pointValue, idx) {
        var y = 30 + dy * idx;

        return React.createElement(AxisHorizontalLine, {
          y: y,
          key: pointValue,
          width: _this2.props.parentWidth,
          value: pointValue
        });
      });

      return React.createElement(
        "g",
        null,
        lines
      );
    }
  }], [{
    key: "propTypes",
    get: function get() {
      return {
        height: React.PropTypes.number.isRequired,
        points: React.PropTypes.array.isRequired
      };
    }
  }]);

  return GraphAxisY;
}(React.PureComponent);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GraphBody = function (_React$PureComponent) {
  _inherits(GraphBody, _React$PureComponent);

  _createClass(GraphBody, null, [{
    key: "propTypes",
    get: function get() {
      return {
        points: React.PropTypes.array.isRequired,
        width: React.PropTypes.number.isRequired,
        height: React.PropTypes.number.isRequired,
        offsetX: React.PropTypes.number.isRequired
      };
    }
  }]);

  function GraphBody(props) {
    _classCallCheck(this, GraphBody);

    var _this = _possibleConstructorReturn(this, (GraphBody.__proto__ || Object.getPrototypeOf(GraphBody)).call(this, props));

    var values = _this.props.points;
    var valuesCount = values.length;
    var dx = _this.props.width / (valuesCount - 1 || 1);

    var max = Math.ceil(Math.max.apply(Math, _toConsumableArray(values.map(function (o) {
      return o.value;
    }))) / 10) * 10;
    var plotHeight = Math.ceil(_this.props.height / 5) * 4;

    var dy = plotHeight / max;
    var data = _this.prepareData(values, valuesCount, dx, dy, plotHeight + 30);

    _this.state = {
      hover: false,
      dx: dx,
      valuesCount: valuesCount,
      preparedData: data.stringRes,
      points: data.arrayRes
    };
    return _this;
  }

  _createClass(GraphBody, [{
    key: "getTooltipValues",
    value: function getTooltipValues() {
      return { currentPoint: this.state.currentPoint, previousPoint: this.state.previousPoint };
    }
  }, {
    key: "prepareData",
    value: function prepareData(values, valuesCount, dx, dy, zeroLevel) {
      var stringRes = '';
      var arrayRes = [];
      for (var idx = 0; idx < valuesCount; idx += 1) {
        var currentValue = values[idx];
        var x = this.props.offsetX + dx * idx;
        var y = zeroLevel - currentValue.value * dy;
        stringRes += x + "," + y + " ";
        arrayRes.push({
          value: currentValue.value,
          date: currentValue.date,
          x: x,
          y: y
        });
      }

      this.handleMouseOut = this.handleMouseOut.bind(this);
      this.handleMouseMove = this.handleMouseMove.bind(this);

      return { stringRes: stringRes, arrayRes: arrayRes };
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(event) {
      var x = event.nativeEvent.layerX;
      var idx = Math.round((x - this.props.offsetX) / this.state.dx);
      var currentPoint = this.state.points[idx];
      var previousPoint = currentPoint;
      if (idx > 0) {
        previousPoint = this.state.points[idx - 1];
      }

      this.setState({ hover: true, currentPoint: currentPoint, previousPoint: previousPoint });
    }
  }, {
    key: "handleMouseOut",
    value: function handleMouseOut() {
      this.setState({ hover: false });
    }
  }, {
    key: "render",
    value: function render() {
      var data = this.state.preparedData;
      var width = this.props.width;
      var height = this.props.height;
      var offsetX = this.props.offsetX;
      return React.createElement(
        "g",
        null,
        React.createElement("polyline", { className: "chartLine", points: data }),
        React.createElement(Hover, {
          hover: this.state.hover,
          parentWidth: width + offsetX,
          height: height,
          value: this.getTooltipValues()
        }),
        React.createElement("rect", {
          onMouseOut: this.handleMouseOut,
          onMouseMove: this.handleMouseMove,
          width: width,
          height: height,
          x: offsetX,
          className: "custom-cursor transparent"
        })
      );
    }
  }]);

  return GraphBody;
}(React.PureComponent);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GraphComponent = function (_React$PureComponent) {
  _inherits(GraphComponent, _React$PureComponent);

  function GraphComponent() {
    _classCallCheck(this, GraphComponent);

    return _possibleConstructorReturn(this, (GraphComponent.__proto__ || Object.getPrototypeOf(GraphComponent)).apply(this, arguments));
  }

  _createClass(GraphComponent, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "svg",
        this.props,
        this.props.children
      );
    }
  }], [{
    key: "propTypes",
    get: function get() {
      return {
        children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired
      };
    }
  }]);

  return GraphComponent;
}(React.PureComponent);
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GraphDashedNormalLine = function (_React$PureComponent) {
  _inherits(GraphDashedNormalLine, _React$PureComponent);

  function GraphDashedNormalLine() {
    _classCallCheck(this, GraphDashedNormalLine);

    return _possibleConstructorReturn(this, (GraphDashedNormalLine.__proto__ || Object.getPrototypeOf(GraphDashedNormalLine)).apply(this, arguments));
  }

  _createClass(GraphDashedNormalLine, [{
    key: "render",
    value: function render() {
      return React.createElement("line", _extends({}, this.props, {
        className: "dashed-line"
      }));
    }
  }]);

  return GraphDashedNormalLine;
}(React.PureComponent);
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GraphDot = function (_React$PureComponent) {
  _inherits(GraphDot, _React$PureComponent);

  function GraphDot() {
    _classCallCheck(this, GraphDot);

    return _possibleConstructorReturn(this, (GraphDot.__proto__ || Object.getPrototypeOf(GraphDot)).apply(this, arguments));
  }

  _createClass(GraphDot, [{
    key: "render",
    value: function render() {
      return React.createElement("circle", _extends({}, this.props, { className: "graph-dot" }));
    }
  }]);

  return GraphDot;
}(React.PureComponent);
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GraphText = function (_React$PureComponent) {
  _inherits(GraphText, _React$PureComponent);

  function GraphText() {
    _classCallCheck(this, GraphText);

    return _possibleConstructorReturn(this, (GraphText.__proto__ || Object.getPrototypeOf(GraphText)).apply(this, arguments));
  }

  _createClass(GraphText, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "text",
        _extends({ className: "text gray" }, this.props),
        this.props.children
      );
    }
  }], [{
    key: "propTypes",
    get: function get() {
      return {
        children: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
      };
    }
  }]);

  return GraphText;
}(React.PureComponent);
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hover = function (_React$PureComponent) {
  _inherits(Hover, _React$PureComponent);

  function Hover() {
    _classCallCheck(this, Hover);

    return _possibleConstructorReturn(this, (Hover.__proto__ || Object.getPrototypeOf(Hover)).apply(this, arguments));
  }

  _createClass(Hover, [{
    key: "render",
    value: function render() {
      var display = this.props.hover;
      return display && React.createElement(
        "g",
        null,
        React.createElement(FloatingTooltip, {
          parentWidth: this.props.parentWidth,
          point: this.props.value.currentPoint,
          previousPoint: this.props.value.previousPoint
        }),
        React.createElement(GraphDashedNormalLine, {
          x1: this.props.value.currentPoint.x,
          y1: this.props.value.currentPoint.y,
          x2: this.props.value.currentPoint.x,
          y2: this.props.height - 10
        }),
        React.createElement(GraphDot, { r: 5, cx: this.props.value.currentPoint.x, cy: this.props.value.currentPoint.y })
      );
    }
  }], [{
    key: "propTypes",
    get: function get() {
      return {
        parentWidth: React.PropTypes.number.isRequired,
        hover: React.PropTypes.bool.isRequired,
        height: React.PropTypes.number.isRequired,
        value: React.PropTypes.object.isRequired
      };
    }
  }]);

  return Hover;
}(React.PureComponent);