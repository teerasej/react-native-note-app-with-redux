import React, { Component } from 'react'
import { View } from 'react-native'
import {  Text, Button, Item, Input, Label } from 'native-base';
import { Field, reduxForm } from 'redux-form';

export class NewNoteForm extends Component {

    // ส่วนนี้ใช้ในการสร้าง Component ที่เป็น Input ส่งให้กับ Field Component
    renderInput({ input, label, type, meta: { touched, error, warning } }) {
        var hasError = false;
         // ถ้า function ได้รับ error ก็จะแสดง pop up ขึ้นมา
        if (error !== undefined && touched) {
            hasError = true;
        }
        return (
            <Item error={hasError}>
                <Input {...input} />
                {hasError ? <Text>{error}</Text> : <Text />}
            </Item>
        )
    }


    render() {

        // ดึงมาจาก reduxForm ที่ HOC กับ NewNoteForm
        const { handleSubmit } = this.props;

        return (
            <View>
                <Item stackedLabel>
                    <Label>Message: </Label>
                    <Field name="message" component={this.renderInput} />
                </Item>
                <Button block primary onPress={handleSubmit} >
                    <Text>Save</Text>
                </Button>
            </View>
        )
    }
}

const validate = values => {

    const error = {};
    error.message = '';

    var newMessage = values.message;

    if (values.message === undefined) {
        newMessage = ''
    }

    if (newMessage === '') {
        error.message = 'fill something';
    } 

    return error;
};

// เสร็จแล้วเอามาใส่ใน reduxForm() ด้านล่าง
NewNoteForm = reduxForm({ form: 'newNote', validate })(NewNoteForm)

export default NewNoteForm