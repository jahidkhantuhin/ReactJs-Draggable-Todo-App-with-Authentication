import React, { Component } from 'react';

import Input from '../../components/Form/Input/Input';
import Button from '../../components/Button/Button';
import { required, email } from '../../util/validators';
import Auth from './Auth';

class Reset extends Component {
  state = {
    ResetForm: {
      email: {
        value: '',
        valid: false,
        touched: false,
        validators: [required, email]
      },
      formIsValid: false
    }
  };

  inputChangeHandler = (input, value) => {
    this.setState(prevState => {
      let isValid = true;
      for (const validator of prevState.ResetForm[input].validators) {
        isValid = isValid && validator(value);
      }
      const updatedForm = {
        ...prevState.ResetForm,
        [input]: {
          ...prevState.ResetForm[input],
          valid: isValid,
          value: value
        }
      };
      let formIsValid = true;
      for (const inputName in updatedForm) {
        formIsValid = formIsValid && updatedForm[inputName].valid;
      }
      return {
        ResetForm: updatedForm,
        formIsValid: formIsValid
      };
    });
  };

  inputBlurHandler = input => {
    this.setState(prevState => {
      return {
        ResetForm: {
          ...prevState.ResetForm,
          [input]: {
            ...prevState.ResetForm[input],
            touched: true
          }
        }
      };
    });
  };

  render() {
    return (
      <Auth>
        <form
          onSubmit={e =>
            this.props.onReset(e, {
              email: this.state.ResetForm.email.value
            })
          }
        >
          <Input
            id="email"
            label="Email"
            type="email"
            control="input"
            onChange={this.inputChangeHandler}
            onBlur={this.inputBlurHandler.bind(this, 'email')}
            value={this.state.ResetForm['email'].value}
            valid={this.state.ResetForm['email'].valid}
            touched={this.state.ResetForm['email'].touched}
          />
          <Button design="raised" type="submit" loading={this.props.loading}>
              Reset
          </Button>
        </form>
      </Auth>
    );
  }
}

export default Reset;
