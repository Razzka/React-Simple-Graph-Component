class GraphAxisX extends React.PureComponent {
  static get propTypes() {
    return {
      offset: React.PropTypes.number.isRequired,
      parentWidth: React.PropTypes.number.isRequired,
      points: React.PropTypes.array.isRequired,
    };
  }

  render() {
    const offset = this.props.offset;
    const parentWidth = this.props.parentWidth;
    const labelsCount = 12;
    const dy = Math.ceil((parentWidth - offset) / (labelsCount - 0.4));
    const options = this.props.points.map((pointValue, idx) => {
      const x = offset + (dy * idx);
      return <GraphText key={pointValue} x={x} y={this.props.y}>{pointValue}</GraphText>;
    });

    return (
      <g>
        {options}
      </g>
    );
  }
}
