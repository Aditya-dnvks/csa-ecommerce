import React from "react";

class Error extends React.Component {
  componentDidMount() {
    console.log("----->error is mounted");
  }
  componentWillUnmount() {
    console.log("----->error is unmounted");
  }

  //useEffect hook ---- func
  render() {
    return (
      <div>
        <h1 className="text-danger">Length is greater than 5</h1>
      </div>
    );
  }
}

export default Error;
