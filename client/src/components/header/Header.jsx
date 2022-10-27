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
        src="https://i.pinimg.com/originals/86/38/8b/86388bec3452c24ea4d4363007557b93.jpg"
        alt=""/>
    </div>
  )
}
