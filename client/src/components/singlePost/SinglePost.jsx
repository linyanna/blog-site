import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img 
          src="https://i.pinimg.com/originals/3b/1c/24/3b1c24c904e21b92975a7b67d356e94c.jpg"
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
