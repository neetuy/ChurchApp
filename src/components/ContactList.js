

import React , {Component} from 'react'
import  {Text, ScrollView, View} from 'react-native'

export default class ContactList extends Component{
  render(){
    if(this.props.contacts.lengh === 0){
      return <Text>No Contacts Loaded...</Text>
    }
    return (
      <ScrollView>
        {this.props.contacts.map((contact) => {
          return (
            <View style={{backgroundColor: 'rgba(0,0,0,.1)', margin: 5, padding:5,}}>
              <Text>{contact.recordID} - {contact.firstName} - {contact.lastName}</Text>
              <Text>{JSON.stringify(contact.emailAddresses)}</Text>
            </View>
          )
        })}
      </ScrollView>
    )
  }
}