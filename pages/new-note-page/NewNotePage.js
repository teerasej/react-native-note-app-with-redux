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
    this.props.saveNewNote(values.message);
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

const mapDispatchToProps = dispatch => {
  return {
    saveNewNote: (message) => dispatch({ type: actions.ActionTypes.SAVE_NEW_NOTE, payload: message })
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(NewNotePage)