import React, { Component } from 'react';

interface Props {
  tabNumb: number;
  menuNumb: number;
}

export default class Poem extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      poems: null,
      tab: props.tabNumb,
      menu: props.menuNumb,
    };
  }

  ccomponentDidMount() {
    fetch('https://poetrydb.org/author,poemcount/Dickinson;9')
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          poems: result.lines,
        });
      });
  }

  render() {
    //const { state.poems, tabNumb, menuNumb } = this.props;
    return <div>{}</div>;
  }
}
