import React, { Component } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

class HomeScreen extends Component {

    render() {
        return (
          <SafeAreaView style={styles.container}>
            <Text style={styles.counterTitle}>Counter</Text>
    
            <View style={styles.counterContainer}>
              <TouchableOpacity onPress={this.props.reduxIncreaseCounter}>
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>
    
              <Text style={styles.counterText}>{this.props.counter}</Text>
    
              <TouchableOpacity onPress={this.props.reduxDecreaseCounter}>
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        )
      }
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCenter: {
        textAlign: 'center'
    },
    employeeWrapper: {
        padding: 10,
        borderBottomWidth: 1

    }
});

