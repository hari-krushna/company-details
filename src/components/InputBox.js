import React from 'react';
import {TextInput, View, Text} from 'react-native';
import PropTypes from 'prop-types';

export default function InputBox(props) {
  const {
    placeholder = '',
    password = false,
    lines = 1,
    multiline = false,
    maxLength = 50,
    error = false,
    errorMessage = '',
    keyboardType = 'default',
    labelText = 'Label Placeholder',
    textBoxHeight = 56,
    icon = null,
    required = false,
    onChange = e => e,
    value = '',
    editable = true,
    onKeyPress = () => {},
    onSubmitEditing = () => {},
    setRef = () => {},
    labelTextColor = '#000',
  } = props;

  return (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginBottom: labelText !== '' ? 12 : 0,
        }}>
        {icon && <View style={{marginLeft: 2}}>{icon}</View>}
        {labelText !== '' ? (
          <View style={{marginLeft: 4, flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', color: labelTextColor}}>
              {labelText}{' '}
            </Text>
            {required && <Text style={{color: '#E40046'}}>*</Text>}
          </View>
        ) : null}
      </View>
      <View style={{justifyContent: 'center'}}>
        <TextInput
          style={{
            borderWidth: 1,
            backgroundColor: '#fff',
            borderColor: error ? 'red' : 'rgba(0, 0, 0, 0.2)',
            height: !lines ? textBoxHeight : null,
            fontSize: 16,
            padding: 10,
            borderRadius: 4,
            textAlignVertical: 'top',
            color: '#000',
            opacity: 0.8,
            width: '100%',
          }}
          placeholder={placeholder}
          onChangeText={text => onChange(text)}
          value={value}
          secureTextEntry={password}
          numberOfLines={lines}
          multiline={multiline}
          maxLength={maxLength}
          error={error}
          keyboardType={keyboardType}
          returnKeyType="send"
          editable={editable}
          onKeyPress={onKeyPress}
          onSubmitEditing={onSubmitEditing}
          ref={setRef}
        />
        <View>
          {errorMessage !== '' && (
            <Text
              style={{color: 'red', marginTop: 4, opacity: error ? 1 : 0}}
              disabled={true}
              fontType="content1">
              {errorMessage}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}

InputBox.propTypes = {
  placeholder: PropTypes.string,
  password: PropTypes.string,
  lines: PropTypes.number,
  multiline: PropTypes.bool,
  maxLength: PropTypes.number,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  keyboardType: PropTypes.string,
  labelText: PropTypes.string,
  textBoxHeight: PropTypes.number,
  icon: PropTypes.node,
  onChange: PropTypes.func,
};
