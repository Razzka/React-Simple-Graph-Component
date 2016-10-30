class GraphDashedNormalLine extends React.PureComponent {
  render() {
    return (
      <line
        {...this.props}
        className="dashed-line"
      />);
  }
}
