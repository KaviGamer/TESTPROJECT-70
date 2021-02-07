import * as React from 'react';
import {
  View,
  TextInput,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class Write extends React.Component {
    render(){
        return(
    <View>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Write A Story',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <TextInput
          style={{marginTop: 50,
            width: '80%',
            alignSelf: 'center',
            height: 40,
            textAlign: 'center',
            borderWidth: 4,
          }}
          placeholder="Title"
          onChangeText={text => {
            this.setState({ text: text });
          }}
        />
        <TextInput
          style={{marginTop: 50,
            width: '80%',
            alignSelf: 'center',
            height: 40,
            textAlign: 'center',
            borderWidth: 4,}}
          placeholder="Author"
          onChangeText={text => {
            this.setState({ text: text });
          }}
        />
        <TextInput
          style={{marginTop: 50,
            width: '80%',
            alignSelf: 'center',
            height: 40,
            textAlign: 'center',
            borderWidth: 4,}}
          multiline={true}
          placeholder="Write Story"
          onChangeText={text => {
            this.setState({ text: text });
          }}
        />
    </View>
        )
    }
}