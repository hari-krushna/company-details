import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';

const DetailsView = ({company = {}}) => {
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
  } = company || {};
  return (
    <ScrollView scrollEnabled contentContainerStyle={styles.mainContainer}>
      <View style={styles.itemContainer}>
        <Text style={{fontWeight: 'bold', marginRight: 10}}>First Name:</Text>
        <Text>{first_name}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={{fontWeight: 'bold', marginRight: 10}}>Last Name:</Text>
        <Text>{last_name}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={{fontWeight: 'bold', marginRight: 10}}>Organization:</Text>
        <Text>{organization}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={{fontWeight: 'bold', marginRight: 10}}>Title:</Text>
        <Text>{title}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={{fontWeight: 'bold', marginRight: 10}}>Email:</Text>
        <Text>{email}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={{fontWeight: 'bold', marginRight: 10}}>Phone:</Text>
        <Text>{phone}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={{fontWeight: 'bold', marginRight: 10}}>Street Address:</Text>
        <Text>{street_adress}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={{fontWeight: 'bold', marginRight: 10}}>Street Address 2:</Text>
        <Text>{street_adress2}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={{fontWeight: 'bold', marginRight: 10}}>City:</Text>
        <Text>{city}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={{fontWeight: 'bold', marginRight: 10}}>State:</Text>
        <Text>{state}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={{fontWeight: 'bold', marginRight: 10}}>Pincode:</Text>
        <Text>{pincode}</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={{fontWeight: 'bold', marginRight: 10}}>Country:</Text>
        <Text>{country}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default DetailsView;
