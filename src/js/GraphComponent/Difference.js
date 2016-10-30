class Difference extends React.PureComponent {
  static get propTypes() {
    return {
      value: React.PropTypes.number.isRequired,
      x: React.PropTypes.number.isRequired,
      y: React.PropTypes.number.isRequired,
    };
  }

  render() {
    const x = this.props.x;
    const y = this.props.y;
    const difference = this.props.value.toFixed(2);
    const dx = 15;
    const trianglePoints = difference >= 0 ?
          `${x + dx + 5},${y + 5} ${x + dx + 10},${y} ${x + dx + 15},${y + 5}` :
          `${x + dx + 5},${y} ${x + dx + 10},${y + 5} ${x + dx + 15},${y}`;
    const className = difference >= 0 ? 'green' : 'red';
    const textClassName = `text ${className}`;

    return (
      <g>
        <polygon points={trianglePoints} className={className} />
        <text x={x + dx + 18} y={y + 5} className={textClassName}>{difference}</text>;
      </g>
    );
  }
}
