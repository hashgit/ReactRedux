import React from "react";

import Input from "./Input";
import Result from "./Result";
import { connect } from "react-redux";
import * as actions from "../actions/ConversionActions";

@connect((store) => {
    return {    };
})
export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { Name: "", Amount: 0 };
    }

  performAction() {
      this.props.dispatch(actions.Convert(this.state));
  }

  changeName(name) {
    console.log(name);
    this.state = { ... this.state, Name: name };
  }

  changeAmount(amount) {
    console.log(amount);
    this.state = { ... this.state, Amount: amount };
  }

  render() {
      console.log(this.props);
    return (
      <div class="container">
        <div class="h3">
          Enter Amount And Your Name
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="form-horizontal">
                    <Input label="Name" changeValue={this.changeName.bind(this)} />
                    <Input label="Amount" changeValue={this.changeAmount.bind(this)} />
                    <div class="form-group">
                        <input type="button" value="Convert" class="btn btn-default" onClick={this.performAction.bind(this)} />
                    </div>
                </div>
            </div>
            <div class="col-md-6"></div>
        </div>
        <div class="row">
          <Result />
        </div>        
      </div>
    );
  }
}
