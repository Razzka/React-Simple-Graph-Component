class AxisHorizontalLine extends React.PureComponent {
  static get propTypes() {
    return {
      y: React.PropTypes.number.isRequired,
      width: React.PropTypes.number.isRequired,
      value: React.PropTypes.number.isRequired,
    };
  }

  render() {
    return (
    <g>
      <GraphText x={0} y={this.props.y}>{this.props.value}</GraphText>
      <line
        className="AxisHorizontalLine"
        x1={30}
        y1={this.props.y}
        x2={this.props.width}
        y2={this.props.y}
      />
    </g>
    );
  }
}
