import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/ahmed1.jpg", name: "shakil1432" },
    { id: 2, image: "/images/ahsan1.jpg", name: "ahsan32" },
    { id: 3, image: "/images/feroz1.jpg", name: "Feroz432" },
    { id: 4, image: "/images/imrankhan1.jpg", name: "imran14" },
    { id: 5, image: "/images/imrankhan3.jpg", name: "imran2" },
    { id: 6, image: "/images/imrankhanpost.jpg", name: "imran1432" },
    { id: 7, image: "/images/feroz1.jpg", name: "Feroz" },
    { id: 8, image: "/images/imrankhan1.jpg", name: "imran" },
    { id: 9, image: "/images/imrankhan3.jpg", name: "singh" },
  ]);
  return (
    <div className="stories">
      {state.map((user) => (
        <div className="stories__info" key={user.id}>
          <div className="stories__img">
            <span>
              <img src={user.image} alt="user" />
            </span>
          </div>
          <div className="stories__name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
