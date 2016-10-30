class CurrencyText extends React.PureComponent {
  static get propTypes() {
    return {
      children: React.PropTypes.number.isRequired,
    };
  }

  render() {
    return <text className="text currency" {...this.props}>$ {this.props.children}</text>;
  }
}
