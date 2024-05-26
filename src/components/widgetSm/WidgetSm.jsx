import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {
  const [users, setUsers] = useState([])
  
  useEffect(()=> {
    const getUsers = async ()=>{
    try{ 
      const res = await userRequest.get("users/?new=true")
      setUsers(res.data)
    }catch{}
    };
    getUsers();
  },[])
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {users.map(user=>(

       
        <li className="widgetSmListItem" key={user._id}>
          <img
            src={user.img || "https://img.freepik.com/premium-vector/man-posing-stylish-outfits_56102-574.jpg"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}
            </span>          
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      ))}
      </ul>
    </div>
  );
}
