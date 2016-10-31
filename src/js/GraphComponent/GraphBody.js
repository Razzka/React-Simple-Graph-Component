class GraphBody extends React.PureComponent {
  static get propTypes() {
    return {
      points: React.PropTypes.array.isRequired,
      width: React.PropTypes.number.isRequired,
      height: React.PropTypes.number.isRequired,
      offsetX: React.PropTypes.number.isRequired,
    };
  }

  constructor(props) {
    super(props);
    const values = this.props.points;
    const valuesCount = values.length;
    const dx = this.props.width / ((valuesCount - 1) || 1);

    const max = Math.ceil(Math.max(...values.map(o => o.value)) / 10) * 10;
    const plotHeight = Math.ceil(this.props.height / 5) * 4;

    const dy = plotHeight / max;
    const data = this.prepareData(values, valuesCount, dx, dy, plotHeight + 30);

    this.state = {
      hover: false,
      dx,
      valuesCount,
      preparedData: data.stringRes,
      points: data.arrayRes,
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
      const x = this.props.offsetX + (dx * idx);
      const y = zeroLevel - (currentValue.value * dy);
      stringRes += `${x},${y} `;
      arrayRes.push({
        value: currentValue.value,
        date: currentValue.date,
        x,
        y,
      });
    }

    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);

    return { stringRes, arrayRes };
  }

  handleMouseMove(event) {
    const x = event.nativeEvent.layerX;
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
    return (
      <g>
        <polyline className="chartLine" points={data} />
        <Hover
          hover={this.state.hover}
          parentWidth={width + offsetX}
          height={height}
          value={this.getTooltipValues()}
        />
        <rect
          onMouseOut={this.handleMouseOut}
          onMouseMove={this.handleMouseMove}
          width={width}
          height={height}
          x={offsetX}
          className="custom-cursor transparent"
        />
      </g>
    );
  }
}
