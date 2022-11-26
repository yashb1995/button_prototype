import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const App = props => {
  const [join, setjoin] = useState(true);
  const [click, setclick] = useState(false);
  const [joined, setjoined] = useState(false);
  const [visibale, setvisibale] = useState(true);

  useEffect(() => {
    click &&
      setTimeout(() => {
        setclick(false);
        setjoined(true);
        setvisibale(false);
      }, 1000);
  }, [click]);

  return (
    <View style={{flex: 1}}>
      <Text style={styles.headertext}>
        {'Press Prototype to see\n button animation'}
      </Text>

      <View style={styles.mainheader}>
        {visibale && (
          <TouchableOpacity
            onPress={() => {
              setjoin(false);
              setclick(true);
            }}
            activeOpacity={0.9}>
            <LinearGradient
              colors={['#e6399a', '#8e56eb']}
              style={styles.linearGradient}>
              <Text
                style={[
                  styles.buttonText,
                  {color: visibale ? 'white' : 'black'},
                ]}>
                {join == true ? 'join' : '✔'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        )}

        {joined && (
          <TouchableOpacity style={styles.linearGradient}>
            <Text style={styles.buttonText}>joined</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  mainheader: {flex: 1, alignItems: 'center', justifyContent: 'center'},

  headertext: {
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 100,
  },
  linearGradient: {
    width: 100,
    height: 45,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    backgroundColor: 'transparent',
  },
});

export default App;
