import React, { useEffect, useState } from "react";

class Countdown extends React.Component {
  state = {
    count: 1000,
  };
  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.count === 0) {
        return;
      }
      this.setState({
        count: this.state.count - 1,
      });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count && this.state.count === 0) {
      if (this.timer) {
        clearInterval(this.timer);
        //this.props.onTimeup();
      }
    }
  }

  render() {
    return <div>{this.state.count} class</div>;
  }
}

const NewCountDown = (props) => {
  const [count, setCount] = useState(1000);

  useEffect(() => {
    if (count === 0) {
      props.onTimeup();
      return;
    }

    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return <div>{count} hooks</div>;
};

export { Countdown, NewCountDown };
