import React from "react";
import { connect } from "react-redux";

@connect((store) => {
    return {
        processing: store.processing,
        failed: store.failed,
        result: store.result
    };
})
export default class Result extends React.Component {
  render() {
      console.log(this.props);
    if (this.props.processing == false) {
      if (this.props.failed !== null) {
        return (
        <div>
          Conversion failed
        </div>
        );
      } else if (this.props.result !== null) {
        return (
          <div class="col-md-12">
            <p>Name: {this.props.result.data.Name}</p>
            <p>Amount in Text: {this.props.result.data.Text}</p>
          </div>
        );
      } else {
          return (<div></div>);
      }
    } else {
      return (<div>
      </div>);
    }
  }
}
