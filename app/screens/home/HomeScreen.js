import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    Text
} from 'react-native';

class HomeScreen extends Component {

    incrementCount() {
        this.props.getPageList()
    }
    render() {
        return (
            <View styles={styles.container}>
                <View style={{ marginTop: 50 }}>
                    <Button
                        title="Get Employee"
                        onPress={() => this.incrementCount()}
                    />
                </View>
                {this.props.pageList.map((employee) => (
                    <View style={styles.employeeWrapper} key={employee.id}>
                        <Text style={styles.textCenter}>Employee_id : {employee.id}</Text>
                        <Text style={styles.textCenter}>Employee Name : {employee.employee_name}</Text>
                        <Text style={styles.textCenter}>Employee Salary : {employee.employee_salary}</Text>
                        <Text style={styles.textCenter}>Employee Age : {employee.employee_age}</Text>
                    </View>
                ))}
            </View>
        );
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

