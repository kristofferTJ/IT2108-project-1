import React, { Component } from 'react';

interface Props {
  tabNumb: number;
  menuNumb: number;
}

interface State {
  poems: any;
  isLoaded: boolean;
  error: any;
}

export default class Poem extends Component<Props, State, any> {
  constructor(props: Props, state: State) {
    super(props);
    this.state = {
      error: null,
      poems: state.poems,
      isLoaded: false,
    };
  }

  async componentDidMount() {
    await fetch('https://poetrydb.org/author,poemcount/Dickinson;9')
      .then((res) => res.json())
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            poems: res,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, poems } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      let t;
      var p =
        poems[(this.props.tabNumb - 1) * 3 + this.props.menuNumb - 1].lines;
      var str: string = '';
      for (let line of p) {
        str += line + '\n';
      }
      t = str.trim();

      console.log(t);

      return (
        <div
          className="poem"
          key={(this.props.tabNumb - 1) * 3 + this.props.menuNumb - 1}
        >
          {t}
        </div>
      );

      // return (
      //   <div key={this.props.tabNumb * 3 + this.props.menuNumb - 1}>
      //     {poems[this.props.tabNumb * 3 + this.props.menuNumb - 1].lines}
      //   </div>
      // );
    }
  }
}
