import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import * as actions from '../actions';

class CreateForm extends Component {
  onSubmit = values => {
    this.props.createPost(values);
  };

  renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => {
    return (
      <TextField
        label={label}
        helperText={touched && error}
        {...input}
        {...custom}
        style={{ marginRight: 10 }}
      />
    );
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <Grid container justify="center">
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field label="Name" name="name" component={this.renderTextField} />
          <Field label="Email" name="email" component={this.renderTextField} />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Grid>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = 'Enter a name';
  }
  if (!values.email) {
    errors.email = 'Enter a email';
  }

  return errors;
}

export default reduxForm({ form: 'CreateForm', validate })(
  connect(
    null,
    actions
  )(CreateForm)
);
