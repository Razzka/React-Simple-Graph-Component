class FloatingTooltip extends React.PureComponent {
  static get propTypes() {
    return {
      parentWidth: React.PropTypes.number.isRequired,
      point: React.PropTypes.object.isRequired,
      previousPoint: React.PropTypes.object.isRequired,
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

    return (
      <g>
        <defs>
          <filter id="drop-shadow" x="-5%" y="-5%" width="110%" height="110%">
            <feOffset result="offOut" in="SourceAlpha" dx="0" dy="0.5" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="1" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
        <rect
          className="floatingDiv"
          width={divWidth}
          height={divHeight}
          x={x}
          y={y}
          rx={5}
          ry={5}
          filter="url(#drop-shadow)"
        />
        <CurrencyText x={x + 10} y={y + 35}>{currentValue}</CurrencyText>
        <Difference value={difference} x={x + 45} y={y + 30}></Difference>
        <GraphText x={x + 10} y={y + 20}>{date}</GraphText>
      </g>
    );
  }
}
