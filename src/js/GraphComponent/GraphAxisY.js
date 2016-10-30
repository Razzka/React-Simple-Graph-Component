class GraphAxisY extends React.PureComponent {
  static get propTypes() {
    return {
      height: React.PropTypes.number.isRequired,
      points: React.PropTypes.array.isRequired,
    };
  }

  render() {
    const height = this.props.height;
    const labelsCount = 5;
    const dy = Math.ceil(height / labelsCount);
    const lines = this.props.points.map((pointValue, idx) => {
      const y = 30 + (dy * idx);

      return (<AxisHorizontalLine
        y={y}
        key={pointValue}
        width={this.props.parentWidth}
        value={pointValue}
      />
      );
    });

    return (
      <g>
        {lines}
      </g>
    );
  }
}
