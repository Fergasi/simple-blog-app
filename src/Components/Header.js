import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ imgUrl, username }) => {
  return (
    <div className='card-header'>
      <div className='logoHolder'>
        <img
          className='imgLogo'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPVvjy6yfMf4QXVtt6l0RwpnEAT6acjCD80Q&usqp=CAU'
        />
      </div>
      <div className='menu'>
        {username && (
          <img
            className='profilePic'
            src={
              imgUrl
                ? imgUrl
                : "https://sumaleeboxinggym.com/wp-content/uploads/2018/06/Generic-Profile-1600x1600.png"
            }
          />
        )}
      </div>
    </div>
  );
};

export default Header;
