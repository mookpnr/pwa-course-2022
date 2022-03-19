import { useState } from 'react';
import './FriendList.css';
import App from './components/App';
import Avatar from './components/Avatar';

function FriendList(){
  const [friends, setFriends] = useState([
    {user: "user1", displayName: "ไอ้ปื้ด"},
    {user: "user2", displayName: "นางสาวส้ม"},
    {user: "user3", displayName: "พลทหารแดง"},
    {user: "user4", displayName: "ศาตราจารย์นายกรัฐมนตรีดอกเตอร์เขียว"},
  ]);

  return(
    <App>
      <div className="friend-list">
       {
       friends.map((item,index) => 
       {
        return (<div key={index} className={`friend-list-item ${item.position}`}>
          <Avatar name={item.user}/>
          <div>{item.displayName}</div>
        </div>)
      })
       }
      </div>
    </App>
  )
}

export default FriendList;