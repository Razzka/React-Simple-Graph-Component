class App extends React.PureComponent {
  static get propTypes() {
    return {
      AxisYWidth: React.PropTypes.number.isRequired,
      width: React.PropTypes.number.isRequired,
      height: React.PropTypes.number.isRequired,
      title: React.PropTypes.string.isRequired,
      graphValues: React.PropTypes.array.isRequired
    };
  }

  constructor(props) {
    super(props);
    const LegendX = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const AxisXHeight = 30;
    const rightBorder = 10;
    this.state = {
      LegendX,
      AxisXHeight,
      rightBorder
    };
  }

  getLegendY(graphValues) {
    const max = Math.ceil(Math.max(...graphValues.map(o => o.value)) / 10) * 10;
    const LegendY = [0];
    for (let i = 1; i <= 4; i += 1) {
      LegendY.push(Math.ceil(max / 4 * i));
    }

    return LegendY.reverse();
  }

  render() {
    const height = this.props.height;
    const width = this.props.width;
    const AxisYWidth = this.props.AxisYWidth;
    const title = this.props.title;
    const graphValues = this.props.graphValues;
    const LegendY = this.getLegendY(graphValues);

    const graphHeight = height - this.state.AxisXHeight;
    const graphWidth = width - AxisYWidth - this.state.rightBorder;
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
}
class AxisHorizontalLine extends React.PureComponent {
  static get propTypes() {
    return {
      y: React.PropTypes.number.isRequired,
      width: React.PropTypes.number.isRequired,
      value: React.PropTypes.number.isRequired
    };
  }

  render() {
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
}
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

class CurrencyText extends React.PureComponent {
  static get propTypes() {
    return {
      children: React.PropTypes.number.isRequired
    };
  }

  render() {
    return React.createElement(
      "text",
      _extends({ className: "text currency" }, this.props),
      "$ ",
      this.props.children
    );
  }
}
class Difference extends React.PureComponent {
  static get propTypes() {
    return {
      value: React.PropTypes.number.isRequired,
      x: React.PropTypes.number.isRequired,
      y: React.PropTypes.number.isRequired
    };
  }

  render() {
    const x = this.props.x;
    const y = this.props.y;
    const difference = this.props.value.toFixed(2);
    const dx = 15;
    const trianglePoints = difference >= 0 ? `${ x + dx + 5 },${ y + 5 } ${ x + dx + 10 },${ y } ${ x + dx + 15 },${ y + 5 }` : `${ x + dx + 5 },${ y } ${ x + dx + 10 },${ y + 5 } ${ x + dx + 15 },${ y }`;
    const className = difference >= 0 ? 'green' : 'red';
    const textClassName = `text ${ className }`;

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
}
class FloatingTooltip extends React.PureComponent {
  static get propTypes() {
    return {
      parentWidth: React.PropTypes.number.isRequired,
      point: React.PropTypes.object.isRequired,
      previousPoint: React.PropTypes.object.isRequired
    };
  }

  render() {
    const divWidth = 130;
    const divHeight = 45;
    const dy = divHeight + 15;

    const currentValue = this.props.point.value;
    const previousPoint = this.props.previousPoint;
    const previousValue = previousPoint.value;
    const difference = currentValue - previousValue;
    const date = this.props.point.date;
    let x = this.props.point.x;
    let y = this.props.point.y - dy;
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
          { id: "drop-shadow", x: "0", y: "0", width: "110%", height: "110%" },
          React.createElement("feOffset", { result: "offOut", "in": "SourceAlpha", dx: "2", dy: "2" }),
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
}
class GraphAxisX extends React.PureComponent {
  static get propTypes() {
    return {
      offset: React.PropTypes.number.isRequired,
      parentWidth: React.PropTypes.number.isRequired,
      points: React.PropTypes.array.isRequired
    };
  }

  render() {
    const offset = this.props.offset;
    const parentWidth = this.props.parentWidth;
    const labelsCount = 12;
    const dy = Math.ceil((parentWidth - offset) / (labelsCount - 0.4));
    const options = this.props.points.map((pointValue, idx) => {
      const x = offset + dy * idx;
      return React.createElement(
        GraphText,
        { key: pointValue, x: x, y: this.props.y },
        pointValue
      );
    });

    return React.createElement(
      "g",
      null,
      options
    );
  }
}
class GraphAxisY extends React.PureComponent {
  static get propTypes() {
    return {
      height: React.PropTypes.number.isRequired,
      points: React.PropTypes.array.isRequired
    };
  }

  render() {
    const height = this.props.height;
    const labelsCount = 5;
    const dy = Math.ceil(height / labelsCount);
    const lines = this.props.points.map((pointValue, idx) => {
      const y = 30 + dy * idx;

      return React.createElement(AxisHorizontalLine, {
        y: y,
        key: pointValue,
        width: this.props.parentWidth,
        value: pointValue
      });
    });

    return React.createElement(
      "g",
      null,
      lines
    );
  }
}
class GraphBody extends React.PureComponent {
  static get propTypes() {
    return {
      points: React.PropTypes.array.isRequired,
      width: React.PropTypes.number.isRequired,
      height: React.PropTypes.number.isRequired,
      offsetX: React.PropTypes.number.isRequired
    };
  }

  constructor(props) {
    super(props);
    const values = this.props.points;
    const valuesCount = values.length;
    const dx = this.props.width / (valuesCount - 1 || 1);

    const max = Math.ceil(Math.max(...values.map(o => o.value)) / 10) * 10;
    const plotHeight = Math.ceil(this.props.height / 5) * 4;

    const dy = plotHeight / max;
    const data = this.prepareData(values, valuesCount, dx, dy, plotHeight + 30);

    this.state = {
      hover: false,
      dx,
      valuesCount,
      preparedData: data.stringRes,
      points: data.arrayRes
    };
  }

  getTooltipValues() {
    return { currentPoint: this.state.currentPoint, previousPoint: this.state.previousPoint };
  }

  prepareData(values, valuesCount, dx, dy, zeroLevel) {
    let stringRes = '';
    const arrayRes = [];
    for (let idx = 0; idx < valuesCount; idx += 1) {
      const currentValue = values[idx];
      const x = this.props.offsetX + dx * idx;
      const y = zeroLevel - currentValue.value * dy;
      stringRes += `${ x },${ y } `;
      arrayRes.push({
        value: currentValue.value,
        date: currentValue.date,
        x,
        y
      });
    }

    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);

    return { stringRes, arrayRes };
  }

  handleMouseMove(event) {
    const x = event.nativeEvent.offsetX;
    const idx = Math.round((x - this.props.offsetX) / this.state.dx);
    const currentPoint = this.state.points[idx];
    let previousPoint = currentPoint;
    if (idx > 0) {
      previousPoint = this.state.points[idx - 1];
    }

    this.setState({ hover: true, currentPoint, previousPoint });
  }

  handleMouseOut() {
    this.setState({ hover: false });
  }

  render() {
    const data = this.state.preparedData;
    const width = this.props.width;
    const height = this.props.height;
    const offsetX = this.props.offsetX;
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
}
class GraphComponent extends React.PureComponent {
  static get propTypes() {
    return {
      children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired
    };
  }

  render() {
    return React.createElement(
      "svg",
      this.props,
      this.props.children
    );
  }
}
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

class GraphDashedNormalLine extends React.PureComponent {
  render() {
    return React.createElement("line", _extends({}, this.props, {
      className: "dashed-line"
    }));
  }
}
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

class GraphDot extends React.PureComponent {
  render() {
    return React.createElement("circle", _extends({}, this.props, { className: "graph-dot" }));
  }
}
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

class GraphText extends React.PureComponent {
  static get propTypes() {
    return {
      children: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number])
    };
  }

  render() {
    return React.createElement(
      "text",
      _extends({ className: "text gray" }, this.props),
      this.props.children
    );
  }
}
class Hover extends React.PureComponent {
  static get propTypes() {
    return {
      parentWidth: React.PropTypes.number.isRequired,
      hover: React.PropTypes.bool.isRequired,
      height: React.PropTypes.number.isRequired,
      value: React.PropTypes.object.isRequired
    };
  }

  render() {
    const display = this.props.hover;
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
      React.createElement(GraphDot, { cx: this.props.value.currentPoint.x, cy: this.props.value.currentPoint.y })
    );
  }
}