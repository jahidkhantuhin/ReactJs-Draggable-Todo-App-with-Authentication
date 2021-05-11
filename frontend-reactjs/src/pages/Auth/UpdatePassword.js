import React, { Component } from 'react';

import Input from '../../components/Form/Input/Input';
import Button from '../../components/Button/Button';
import { required, length} from '../../util/validators';
import Auth from './Auth';

class Update extends Component {
  state = {
    updateForm: {
      password: {
        value: '',
        valid: false,
        touched: false,
        validators: [required, length({ min: 5 })]
      },
      formIsValid: false
    },
    token: this.props.match.params.token
  };

  inputChangeHandler = (input, value) => {
    this.setState(prevState => {
      let isValid = true;
      for (const validator of prevState.updateForm[input].validators) {
        isValid = isValid && validator(value);
      }
      const updatedForm = {
        ...prevState.updateForm,
        [input]: {
          ...prevState.updateForm[input],
          valid: isValid,
          value: value
        }
      };
      let formIsValid = true;
      for (const inputName in updatedForm) {
        formIsValid = formIsValid && updatedForm[inputName].valid;
      }
      return {
        updateForm: updatedForm,
        formIsValid: formIsValid
      };
    });
  };

  inputBlurHandler = input => {
    this.setState(prevState => {
      return {
        updateForm: {
          ...prevState.updateForm,
          [input]: {
            ...prevState.updateForm[input],
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
            this.props.onUpdate(e, {
              password: this.state.updateForm.password.value,
              token: this.state.token
            })
          }
        >
          <Input
            id="password"
            label="Password"
            type="password"
            control="input"
            onChange={this.inputChangeHandler}
            onBlur={this.inputBlurHandler.bind(this, 'password')}
            value={this.state.updateForm['password'].value}
            valid={this.state.updateForm['password'].valid}
            touched={this.state.updateForm['password'].touched}
          />
          <Button design="raised" type="submit" loading={this.props.loading}>
            Update Password
          </Button>
        </form>
      </Auth>
    );
  }
}

export default Update;
