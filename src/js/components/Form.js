import React from "react";

import Input from "./Input";
import { connect } from "react-redux";
import { routerActions } from 'react-router-redux';
import * as actions from "../actions/ConversionActions";

@connect((store) => {
    return {
        processing: store.reducer.processing
        };
})
export default class Form extends React.Component {
    constructor() {
        super();
        this.state = { Name: "", Amount: 0 };
    }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    console.log(this.context.router);
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.processing !== this.props.processing
      && nextProps.processing === false) {
        // this.props.history.push({
        //   pathname: "/result"
        // });

        console.log("navigating");
        this.props.dispatch(routerActions.push("/result"));
    }
  }

  performAction() {
      this.props.dispatch(actions.Convert(this.state));
  }

  changeName(name) {
    this.state = { ... this.state, Name: name };
  }

  changeAmount(amount) {
    this.state = { ... this.state, Amount: amount };
  }

  render() {
    return (
        <div>
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
        </div>
    );
  }
};

Form.contextTypes = {
  router: React.PropTypes.object.isRequired,
  store: React.PropTypes.object.isRequired
};

