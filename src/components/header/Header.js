import "./header.css";
// import { Context } from '../../context/Context';
// import { useContext } from "react";

export default function Header() {
  // const { user} = useContext(Context);
  // const PF = "http://localhost:5000/images/"

  // const defaultProfilePicURL =
  // "https://images.pexels.com/photos/16600329/pexels-photo-16600329/free-photo-of-woman-face-with-long-hair-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";


  return (
    <>
    <div className="header">
      <div className="headerTitles">
        <h1 className="main-start-heading">Star-Blogs</h1>
      {/* {user && user.profilePic ? (
            <span className="headerTitleLg">
              <img className="topimg" src={PF + user.profilePic} alt="" />
            </span>
          ) : (
            <span className="headerTitleLg">
              <img className="topimg" src={defaultProfilePicURL} alt="" />
            </span>
          )} */}
          {/* <span className="headerTitleSm">BLOG</span> */}
      </div>
      <div className="card-group headerImg">
  <div className="card cards card-taller">
    <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Food</h5>
      <p className="card-text">Music is a universal language that transcends cultural barriers and connects people from all walks of life. It has been an integral part of human history, dating back to ancient civilizations where it played a significant role in rituals, ceremonies, and entertainment.</p>
     </div>
  </div>
  <div className="card cards ">
    <img src="https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Music</h5>
      <p className="card-text">Share your favorite recipes,Food is an essential part of human life, providing us with the necessary sustenance, energy, and nutrition to survive and thrive. However, it is much more than just a means of survival; food also holds significant cultural, social, and emotional importance in our lives. </p>
      </div>
  </div>

  
  <div className="card cards card-taller">
    <img src="https://images.pexels.com/photos/4095483/pexels-photo-4095483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Travel </h5>
      <p className="card-text">Share your travel experiences while exploring diverse cuisines in different countries. Write about the local delicacies you tried, food markets you visited, and traditional recipes you learned during your journeys.</p>
       </div>
  </div>
</div>
    </div>
    </>
  );
}