import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Hamburger, Search, Arrow, Filter} from '../assets/SVGs';
import Colors from '../Ui-kit/Colors';

const Header = () => {
  return (
    <>
      <View style={styles.topView}>
        <TouchableOpacity style={styles.hamburger}>
          <Hamburger />
        </TouchableOpacity>
        <View style={styles.inputBox}>
          <Search style={{marginLeft: 20}} />
          <TextInput style={styles.inputText} placeholder="Search product" />
        </View>
      </View>
      <View style={styles.headingArea}>
        <View>
          <Text style={styles.text}> Sneakers </Text>
        </View>
        <View style={styles.topIcons}>
          <Arrow style={{marginRight: 10}} />
          <Filter />
        </View>
      </View>
      <View style={styles.subHeading}>
        <Text>25 Products Found</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topView: {
    flexDirection: 'row',
  },
  hamburger: {
    flexDirection: 'row',
    padding: 20,
  },
  inputBox: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',

    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Colors.White,
    marginVertical: 8,
    marginRight: 20,
    paddingHorizontal: 6,
    borderRadius: 5,
  },
  inputText: {
    height: 40,
    padding: 10,
  },
  text: {
    fontSize: 38,
    fontWeight: '800',
    marginTop: 20,
    marginLeft: 6,
    fontFamily:'Montserrat-Bold'
  },
  headingArea: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  topIcons: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 30,
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  subHeading: {
    paddingLeft: 20,
    paddingTop: 7,
    color: Colors.Black,
    paddingBottom: 20,
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  numProducts: {
    fontSize: 14,
    color: Colors.Black,
  },
});

export default Header;
