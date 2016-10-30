class Hover extends React.PureComponent {
  static get propTypes() {
    return {
      parentWidth: React.PropTypes.number.isRequired,
      hover: React.PropTypes.bool.isRequired,
      height: React.PropTypes.number.isRequired,
      value: React.PropTypes.object.isRequired,
    };
  }

  render() {
    const display = this.props.hover;
    return display && (
      <g>
        <FloatingTooltip
          parentWidth={this.props.parentWidth}
          point={this.props.value.currentPoint}
          previousPoint={this.props.value.previousPoint}
        />

        <GraphDashedNormalLine
          x1={this.props.value.currentPoint.x}
          y1={this.props.value.currentPoint.y}
          x2={this.props.value.currentPoint.x}
          y2={this.props.height - 10}
        />

        <GraphDot cx={this.props.value.currentPoint.x} cy={this.props.value.currentPoint.y} />
      </g>
    );
  }
}
