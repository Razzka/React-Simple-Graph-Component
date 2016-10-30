class GraphText extends React.PureComponent {
  static get propTypes() {
    return {
      children: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
      ]),
    };
  }

  render() {
    return <text className="text gray" {...this.props}>{this.props.children}</text>;
  }
}
