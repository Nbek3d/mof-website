import { NewsCard } from './';
import { bino } from '../utils/const';

const News = () => {
  return (
    <div className='m-bot-40 container'>
      <h3 className='head-text dfj'>MOF Haqida Yangiliklar </h3>
      <div className='df jus-beet fww m-top-20'>
      <NewsCard
      img={bino}
      title='Yangilik matni'
      text="Fakultetimizda bugun shaxmatchilar ko'rik tanlovi bo'lmoqda"
       />
       <NewsCard
      img={bino}
      title='Yangilik matni'
      text="Fakultetimizda bugun shaxmatchilar ko'rik tanlovi bo'lmoqda" />
       <NewsCard
      img={bino}
      title='Yangilik matni'
      text="Fakultetimizda bugun shaxmatchilar ko'rik tanlovi bo'lmoqda" />
       <NewsCard
      img={bino}
      title='Yangilik matni'
      text="Fakultetimizda bugun shaxmatchilar ko'rik tanlovi bo'lmoqda" />
      </div>
    </div>
  )
}

export default News
