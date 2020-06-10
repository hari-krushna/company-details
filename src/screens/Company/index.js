import React, {Component} from 'react';
import {Keyboard} from 'react-native';
import {connect} from "react-redux"
import { actions as companyActions } from "../../reducers/companyReducer";
import CompanyView from './View';

const validationJson = {
  first_name: {
    min: 0,
  },
  last_name: {
    min: 0,
  },
  organization: {
    min: 0,
  },
  title: {
    min: 0,
  },
  email: {
    min: 0,
    isEmail: true
  },
  street_adress: {
    min: 0,
  },
  street_adress2: {
    min: 0,
  },
  pincode: {
    min: 6,
    max: 6,
    isNumber: true,
  },
  phone: {
    min: 10,
    max: 10,
    isNumber: true,
  },
  city: {
    min: 0,
  },
  state: {
    min: 0,
  },
  country: {
    min: 0,
  },
};

function numberValidator(value = '', min = 1, max = Infinity) {
  let isValid = false;
  if (!String(value)) return isValid;
  if (typeof parseFloat(value) !== 'number') return isValid;
  // check length
  let numString = String(value);
  if (!(numString.length >= min && numString.length <= max)) return isValid;
  return true;
}

function lengthValidator(value = '', min = 1, max = Infinity) {
  let isValid = false;
  if (!String(value)) return isValid;
  if (!(typeof value !== 'number' || typeof value !== 'string')) return isValid;
  // check length
  let string = String(value);
  if (!(string.length >= min && string.length <= max)) return isValid;
  return true;
}

class CompanyScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      organization: '',
      title: '',
      email: '',
      phone: '',
      street_adress: '',
      street_adress2: '',
      city: '',
      state: '',
      pincode: '',
      country: '',
      showError: {},
    };
  }

  checkPhoneNumLength = (text = "") => {
    if (text.length > 10) return false;
    if (text.length === 10) Keyboard.dismiss();
    return true;
  };

  validateEmail = (email = "") => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  };

  setFormValues = (value = '', key = '', parseNum = false) => {
    if (!key) return;
    if (parseNum) parseInt(value);
    if (key === 'phone' && !this.checkPhoneNumLength(value)) return;
    this.setState({[key]: value, showError: {}});
  };

  formValidator = () => {
    let isValid = true;
    const errorObj = {};
    const {
      first_name = '',
      organization = '',
      title = '',
      email = '',
      phone = '',
      street_adress = '',
      street_adress2 = '',
      city = '',
      state = '',
      pincode = '',
      country = '',
    } = this.state || {};
    const valueObj = {
      first_name,
      organization,
      title,
      email,
      phone,
      street_adress,
      street_adress2,
      city,
      state,
      pincode,
      country,
    };
    Object.keys(valueObj).forEach(v => {
      if (validationJson[v]) {
        if (validationJson[v].isNumber) {
          if (
            !numberValidator(
              valueObj[v],
              validationJson[v].min,
              validationJson[v].max,
            )
          ) {
            isValid = isValid ? false : isValid;
            errorObj[v] = true;
          }
        } else if(validationJson[v].isEmail) {
          if(!this.validateEmail(valueObj[v])) {
            isValid = isValid ? false : isValid;
            errorObj[v] = true;
          }
        } else {
          if (
            !lengthValidator(
              valueObj[v],
              validationJson[v].min,
              validationJson[v].max,
            )
          ) {
            isValid = isValid ? false : isValid;
            errorObj[v] = true;
          }
        }
      }
    });
    return {isValid, errorObj, allValues: valueObj};
  };

  onSubmit = () => {
    const values = this.formValidator();
    if (!values.isValid) {
      this.setState({ showError: values.errorObj || {} });
    } else {
      const { allValues = {} } = values || {};
      this.props.dispatch(companyActions.setCompanyDetails(allValues));
      this.navigateTo("Success", {});
      this.resetState();
    }
  };

  resetState = () => {
    this.setState({
      first_name: '',
      last_name: '',
      organization: '',
      title: '',
      email: '',
      phone: '',
      street_adress: '',
      street_adress2: '',
      city: '',
      state: '',
      pincode: '',
      country: '',
      showError: {},
    })
  }

  navigateTo = (path = "", params = {}) => {
    if(this.props.navigation && typeof this.props.navigation.navigate === "function") {
      this.props.navigation.navigate(path, params)
    }
  }

  componentWillUnmount() {
    this.resetState();
  }

  render() {
    const viewProps = {
      navigation: this.props.navigation,
      parentState: this.state,
      setFormValues: this.setFormValues,
      onSubmit: this.onSubmit,
    };
    return <CompanyView {...viewProps} />;
  }
}

export default connect(null)(CompanyScreen);
