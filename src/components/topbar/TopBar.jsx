import './topbar.css'

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className ="topListItem">HOME</li>
          <li className ="topListItem">ABOUT</li>
          <li className ="topListItem">CONTACT</li>
          <li className ="topListItem">WRITE</li>
          <li className ="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg"
          src="https://nitter.net/pic/pbs.twimg.com%2Fprofile_images%2F1019830425919938560%2FkmLYx3lW.jpg"
          alt=""/>
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
