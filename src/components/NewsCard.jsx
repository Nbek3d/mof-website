
const NewsCard = (props) => {
  return (
    <div>
      <img src={props.img} alt="News" className='news-img' />
      <div className="news-text">
        <h5>{props.title}</h5>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default NewsCard
