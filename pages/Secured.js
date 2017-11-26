import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, Button,FlatList } from 'react-native';
import { add } from '../redux/actions/math';
import { subtract } from '../redux/actions/math';

const Counter = ({value,mathAdd,mathSubtract}) => {
  return(
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    <Button onPress={mathAdd} title="+"/>
      <Text>{value}</Text>
    <Button onPress={mathSubtract} title="-"/>
    </View>)
}

class Secured extends Component {
  userLogout(e) {
    this.props.onLogout();
    e.preventDefault();
  }
  mathAdd(e) {
    this.props.onAdd(this.props.value);
    e.preventDefault();
  }
  mathSubtract(e) {
    this.props.onSubtract(this.props.value);
    e.preventDefault();
  }


    render() {
    return (
      <ScrollView style={{padding: 20}}>
        <View style={{margin: 20}}/>
        <Button onPress={(e) => this.mathAdd(e)} title="Add"/>
        <Button onPress={(e) => this.mathSubtract(e)} title="Subtract"/>
        <Counter 
            value        = {this.props.value}
            mathAdd      = {(e)=>this.mathAdd(e)}
            mathSubtract = {(e)=>this.mathSubtract(e)} />

      </ScrollView>

    );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        value: state.math.value,
    };
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (value) => { dispatch(add(value)); },
        onSubtract: (value) => { dispatch(subtract(value)); },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Secured);