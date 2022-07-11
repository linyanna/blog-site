import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img 
          src="https://nitter.net/pic/pbs.twimg.com%2Fprofile_images%2F1019830425919938560%2FkmLYx3lW.jpg"
          alt=""
            className="singlePostImg"
          />
          <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
              <i class="singlePostIcon fa-regular fa-trash-can"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Yanna</b></span>
            <span className="singlePostDate">1 hour ago</span>
          </div>
          <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maiores error quis officia temporibus sint, excepturi modi tempora suscipit magnam! Tempora sint porro a velit voluptatem quidem eius assumenda doloribus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maiores error quis officia temporibus sint, excepturi modi tempora suscipit magnam! Tempora sint porro a velit voluptatem quidem eius assumenda doloribus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maiores error quis officia temporibus sint, excepturi modi tempora suscipit magnam! Tempora sint porro a velit voluptatem quidem eius assumenda doloribus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maiores error quis officia temporibus sint, excepturi modi tempora suscipit magnam! Tempora sint porro a velit voluptatem quidem eius assumenda doloribus!Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maiores error quis officia temporibus sint, excepturi modi tempora suscipit magnam! Tempora sint porro a velit voluptatem quidem eius assumenda doloribus!
          </p>
      </div>
    </div>
  )
}
