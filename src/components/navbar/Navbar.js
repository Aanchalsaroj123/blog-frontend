import React, { useContext } from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

export default function Navbar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://blog-backend-m77s.onrender.com/images/"
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
    return (
      <div className="top">
        <div className="topCenter">
          <ul className="topList ">
            <li className="topListItem starting">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="topListItem">  
            <Link className="link" to="/contact">
                CONTACT
              </Link></li>
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            {user && <li className="topListItem" onClick={handleLogout}> {user && "LOGOUT"}</li>}
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <Link className="link" to="/settings">
              <img
                className="topImg"
                src={PF+user.profilePic}
                alt=""
              />
            </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
          {/* <i className="topSearchIcon fas fa-search"></i> */}
        </div>
      </div>
  )
}
