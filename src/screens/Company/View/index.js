import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import InputBox from '../../../components/InputBox';
import {Picker} from '@react-native-community/picker';
import countriesData from '../../../testData/countries.json';

const {height, width} = Dimensions.get('window');

const CompanyView = ({
  parentState = {},
  setFormValues = () => {},
  onSubmit = () => {},
}) => {
  const {
    first_name = '',
    last_name = '',
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
    showError = {},
  } = parentState || {};

  const renderCountriesList = () => {
    const {countries = []} = countriesData;
    return (
      Array.isArray(countries) &&
      countries.length &&
      countries.map(country => {
        return (
          <Picker.Item
            value={country.code3}
            label={country.name}
            key={country.code3}
          />
        );
      })
    );
  };
  return (
    <>
      <ScrollView
        scrollEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputContainer}>
          <InputBox
            placeholder={'Start typing here'}
            labelText={'First Name'}
            maxLength={100}
            required
            onChange={text => setFormValues(text, 'first_name')}
            value={first_name}
            error={showError.first_name}
            errorMessage={showError.first_name ? 'First name is required' : ''}
          />
        </View>

        <View style={styles.inputContainer}>
          <InputBox
            placeholder={'Start typing here'}
            labelText={'Last Name'}
            maxLength={100}
            onChange={text => setFormValues(text, 'last_name')}
            value={last_name}
          />
        </View>

        <View style={styles.inputContainer}>
          <InputBox
            placeholder={'Start typing here'}
            labelText={'Organization'}
            maxLength={100}
            required
            onChange={text => setFormValues(text, 'organization')}
            value={organization}
            error={showError.organization}
            errorMessage={
              showError.organization ? 'Organization is required' : ''
            }
          />
        </View>

        <View style={styles.inputContainer}>
          <InputBox
            placeholder={'Start typing here'}
            labelText={'Title'}
            maxLength={100}
            required
            onChange={text => setFormValues(text, 'title')}
            value={title}
            error={showError.title}
            errorMessage={showError.title ? 'Title is required' : ''}
          />
        </View>

        <View style={styles.inputContainer}>
          <InputBox
            placeholder={'Start typing here'}
            labelText={'E-mail'}
            maxLength={100}
            required
            onChange={text => setFormValues(text, 'email')}
            value={email}
            error={showError.email}
            errorMessage={
              email
                ? 'Enter a valid email'
                : showError.email
                ? 'Email is required'
                : ''
            }
          />
        </View>

        <View style={styles.inputContainer}>
          <InputBox
            placeholder={'Start typing here'}
            labelText={'Phone'}
            keyboardType={'numeric'}
            maxLength={100}
            required
            onChange={text => setFormValues(text, 'phone')}
            value={phone}
            error={showError.phone}
            errorMessage={
              phone
                ? 'Enter a valid phone number'
                : showError.phone
                ? 'Phone is required'
                : ''
            }
          />
        </View>

        <View style={styles.inputContainer}>
          <InputBox
            placeholder={'Start typing here'}
            labelText={'Street Adress'}
            maxLength={200}
            required
            onChange={text => setFormValues(text, 'street_adress')}
            value={street_adress}
            error={showError.street_adress}
            errorMessage={
              showError.street_adress ? 'Stress address is required' : ''
            }
          />
        </View>

        <View style={styles.inputContainer}>
          <InputBox
            placeholder={'Start typing here'}
            labelText={'Street Adress 2'}
            maxLength={200}
            required
            onChange={text => setFormValues(text, 'street_adress2')}
            value={street_adress2}
            error={showError.street_adress2}
            errorMessage={
              showError.street_adress2 ? 'Stress address 2 is required' : ''
            }
          />
        </View>

        <View style={styles.inputContainer}>
          <InputBox
            placeholder={'Start typing here'}
            labelText={'City'}
            maxLength={200}
            required
            onChange={text => setFormValues(text, 'city')}
            value={city}
            error={showError.city}
            errorMessage={showError.city ? 'City is required' : ''}
          />
        </View>

        <View style={styles.inputContainer}>
          <InputBox
            placeholder={'Start typing here'}
            labelText={'State'}
            maxLength={200}
            required
            onChange={text => setFormValues(text, 'state')}
            value={state}
            error={showError.state}
            errorMessage={showError.state ? 'State is required' : ''}
          />
        </View>

        <View style={styles.inputContainer}>
          <InputBox
            placeholder={'Start typing here'}
            labelText={'Pincode'}
            required
            keyboardType={'numeric'}
            maxLength={6}
            onChange={text => setFormValues(text, 'pincode')}
            value={pincode}
            error={showError.pincode}
            errorMessage={showError.pincode ? 'Pincode is required' : ''}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={{fontWeight: 'bold'}}>
            Country <Text style={{color: 'red'}}>*</Text>
          </Text>
          <Picker
            selectedValue={country}
            style={styles.picker}
            onValueChange={itemValue => setFormValues(itemValue, 'country')}>
            {renderCountriesList()}
          </Picker>
          {showError.country && (
            <Text style={{color: 'red'}}>Country is required</Text>
          )}
        </View>
      </ScrollView>
      <View style={styles.submitContainer}>
        <TouchableOpacity onPress={onSubmit} style={styles.button}>
          <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    alignSelf: 'flex-start',
    width,
    justifyContent: 'center',
    padding: 10,
  },
  inputContainer: {
    marginVertical: 10,
    justifyContent: 'center',
    width: '100%',
  },
  submitContainer: {
    alignSelf: 'center',
    height: height / 6,
    width,
    borderTopLeftRadius: height * 0.03,
    borderTopRightRadius: height * 0.03,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: width * 0.9,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E40046',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    height: 50,
    width: width * 0.95,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default CompanyView;
