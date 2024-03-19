import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'

const StartMeet = (props) => {
    console.log(props.route.params)
    const name = props.route.params.name
  return (
    <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={1699575885}
                appSign={"15e72593cf9c84b513d3c9945073b9f22b7cd250d70500250ac8e0de721ef113"}
                userID={"hjjjg"} // userID can be something like a phone number or the user id on your own user system. 
                userName={name}
                callID={"ashjsl89mas"} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onOnlySelfInRoom: () => { props.navigation.navigate('Meeting') },
                    onHangUp: () => { props.navigation.navigate('Meeting') },
                }}
            />
        </View>
  )
}

export default StartMeet

const styles= StyleSheet.create({
    container:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
      
    }
    
  })