import React from "react";
import { useContextData } from "../Global/Context";
const Sidebar = () => {
  const { loader, user } = useContextData();
  console.log(user);
  const username = !loader && user && user.displayName ? user.displayName : "";
  const [state] = React.useState([
    { id: 1, image: "/images/ahmed1.jpg", name: "Ahmed" },
    { id: 2, image: "/images/ahsan1.jpg", name: "Ahsan" },
    { id: 3, image: "/images/feroz1.jpg", name: "Feroz" },
    { id: 4, image: "/images/imrankhan1.jpg", name: "khan" },
    { id: 5, image: "/images/imrankhan3.jpg", name: "Imran" },
  ]);
  return (
    <div className="sidebar">
      {!loader && user ? (
        <div className="sidebar__user">
          <div className="sidebar__user-avator">{username[0]}</div>
          <div className="sidebar__user-name">{username}</div>
        </div>
      ) : (
        ""
      )}
      <div className="sidebar__list">
        <h3>Suggestions for you</h3>
        {state.map((user) => (
          <div className="sidebar__list-user" key={user.id}>
            <div className="sidebar__list-a">
           <div className="sidebar__list-a-img"> 
           <img src={user.image} alt={user.image} />
           </div>
           <div className="sidebar__list-a-name">{user.name}</div>
            </div>
            <div className="sidebar__list-b">
            <a href="">Follow</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
