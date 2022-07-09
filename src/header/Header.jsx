import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img 
        className="headerImg" 
        src="https://nitter.net/pic/pbs.twimg.com%2Fprofile_images%2F1019830425919938560%2FkmLYx3lW.jpg"
        alt=""/>
    </div>
  )
}
