import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img 
        classNmae="postImg"
        src="https://nitter.net/pic/pbs.twimg.com%2Fprofile_images%2F1019830425919938560%2FkmLYx3lW.jpg" 
        alt=""/>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span 
          className="postTitle">Lorem ipsum dolor sit amet
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur sint nisi voluptatum rem id earum itaque vitae, culpa enim dolorum aliquam nesciunt placeat consequatur, laborum maiores veniam doloremque quia?</p>
    </div>
  )
}
