class GraphComponent extends React.PureComponent {
  static get propTypes() {
    return {
      children: React.PropTypes.arrayOf(React.PropTypes.element).isRequired,
    };
  }

  render() {
    return <svg {...this.props}>{this.props.children}</svg>;
  }
}

