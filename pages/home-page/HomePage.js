import React, { Component } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Header, Title, Content, List, ListItem, Text, Body, Button, Icon} from 'native-base';

export class HomePage extends Component {

    componentDidMount() {
        this.props.navigation.setOptions({
            headerRight: () => (
                <Button transparent onPress={() => {
                    console.log('ok')
                    this.props.navigation.navigate('New Note Page')
                }}>
                  <Icon name='add'/>
                </Button>
              ),
        });
    }


    static propTypes = {
        notes: PropTypes.array
    }

    static defaultProps = {
        notes: [
            { title: 'a' },
            { title: 'b' },
            { title: 'c' }
        ]
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        {
                            this.props.notes.map((item, index) => {
                                return (
                                    <ListItem key={index}>
                                        <Text>{item.title}</Text>
                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </Content>
            </Container>
        )
}
}

const mapStateToProps = (state) => {
    return {
      notes: state.note.notes
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
