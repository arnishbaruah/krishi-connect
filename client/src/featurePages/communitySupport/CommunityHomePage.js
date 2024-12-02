import React , {useState,useEffect} from 'react'
import Chat from '../../components/community/Chat';
import ChatContainer from '../../components/community/ChatContainer';
import '../../css/Community.css'
import { useUserContext } from '../../context/UserContext';
import NavigationBar from "../../components/CommonNavigation";

export default function CommunityHomePage() {
const [username1, setUsername] = useState('');
const { details ,setDetails } = useUserContext();
useEffect(()=>{
    if (localStorage.getItem("access_token")) {
        setUsername(username1);
    }
    
  },[details])
  return (
    <>
    {/* <input type="enter name" onChange={(e) => setUsername(e.target.value)} /> */}
    {/* <Chat username={username1} /> */}

    <NavigationBar/>
    <ChatContainer username={details.data.fullname}/>
    </>
  )
}
