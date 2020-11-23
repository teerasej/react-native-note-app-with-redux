import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Header, Title, Content, List, ListItem, Text, Left, Right, Body, Button, Item, Input, Label } from 'native-base';

import NewNoteForm from './NewNoteForm';
import actions from '../../redux/actions';

export class NewNotePage extends Component {
    
  static propTypes = {

  }

  static navigationOptions = {
    title: 'New Note'
  };

  onFormSave = (values) => {
    console.log(values);
    // เรียกใช้ prop dispatch property

    this.props.navigation.goBack();
  }


  render() {
    return (
            <Container>
                
                <Content padder>
                    
                    <NewNoteForm onSubmit={this.onFormSave}/>
                    
                </Content>
            </Container>
      
    )
  }
}

const mapStateToProps = (state) => ({
  
})

// สร้าง props dispatch property ในรูปแบบของ function ที่ส่ง object dispatch ได้
// { type: 'action name', payload: any }
const mapDispatchToProps =  {
  
}



export default connect(mapStateToProps, mapDispatchToProps)(NewNotePage)