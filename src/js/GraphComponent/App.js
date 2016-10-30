class App extends React.PureComponent {
  static get propTypes() {
    return {
      AxisYWidth: React.PropTypes.number.isRequired,
      width: React.PropTypes.number.isRequired,
      height: React.PropTypes.number.isRequired,
      title: React.PropTypes.string.isRequired,
      graphValues: React.PropTypes.array.isRequired,
    };
  }

  constructor(props) {
    super(props);
    const LegendX = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June',
      'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const AxisXHeight = 30;
    const rightBorder = 10;
    this.state = {
      LegendX,
      AxisXHeight,
      rightBorder,
    };
  }

  getLegendY(graphValues) {
    const max = Math.ceil(Math.max(...graphValues.map(o => o.value)) / 10) * 10;
    const LegendY = [0];
    for (let i = 1; i <= 4; i += 1) {
      LegendY.push(Math.ceil((max / 4) * i));
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
    return (
        <GraphComponent height={height} width={width}>
          <GraphAxisX
            offset={AxisYWidth}
            parentWidth={width - this.state.rightBorder}
            points={this.state.LegendX}
            y={height - 20}
          />
          <GraphAxisY
            height={graphHeight}
            points={LegendY}
            parentWidth={width - this.state.rightBorder}
          />
          <GraphText x={AxisYWidth} y={height}>{title}</GraphText>
          <GraphBody
            width={graphWidth}
            height={graphHeight}
            offsetX={AxisYWidth}
            points={graphValues}
          />
        </GraphComponent>
    );
  }
}
