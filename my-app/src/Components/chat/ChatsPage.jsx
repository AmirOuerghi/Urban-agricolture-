import React from 'react'
import { PrettyChatWindow} from 'react-chat-engine-pretty'

function ChatsPage(props) {

 
 return (
 <div style={{height:'100vh'}} >

<PrettyChatWindow 
projectId='40e72e96-e320-4fc1-ba39-3d3bd4804777' 
username= {props.user.username}
secret={props.user.secret}
style={{height:'100%'}} />

 </div>)
 
  
}

export default ChatsPage