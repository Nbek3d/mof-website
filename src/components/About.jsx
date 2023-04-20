import { GoodStudent } from './'
import { bino, mofHistory, mof } from '../utils/const';
import { AiOutlineRight } from 'react-icons/ai';

const About = () => {
  return (
    <div className='container ta'>
      <div
        className='raleway about-mof col-444'>
        <h3 className='head-text bot-line m-top-20 '>{mof}</h3>
        <p className='content-text m-top-20 raleway '> {mofHistory} </p>
        <img src={bino} alt="Bino" className='m-top-20' />
        <ul className='df about-mof-ul m-bot-80'>
          <li className='m-top-20'>
            <ul>
              <li className='dfa content-text '>
                <AiOutlineRight className='col-green p-r-5' />
                <p className='col-444'>
                  <strong className='p-r-5'>Tashkil topgan sana:</strong> 17-yanvar 2019-yil
                </p>
              </li>
              <li className='dfa content-text m-top-10'>
                <AiOutlineRight className='col-green p-r-5' />
                <p className='col-444'>
                  <strong className='p-r-5'>Website:</strong>
                  <a href="http://qabul.mvahi.uz" className='col-green'>
                    www.qabul.mvahi.uz</a>
                </p>
              </li>

            </ul>

          </li>
          <li className='m-top-20'>
            <ul>
              <li className='dfa content-text '>
                <AiOutlineRight className='col-green p-r-5' />

                <p className='col-444'>
                  <strong className='p-r-5'>Manzil:</strong>
                  <a href="http://qabul.mvahi.uz" className='col-444'>
                    Toshkent vil.. Quyoshli qo'rg'oni</a>
                </p>
              </li>
              <li className='dfa content-text m-top-10'>
                <AiOutlineRight className='col-green p-r-5' />
                <p className='col-444'>
                  <strong className='p-r-5'>Murojaat uchun:</strong>
                  <a href="tel:+998702027108" className='col-green'>+99870 202-71-08</a>
                </p>
              </li>

            </ul>
          </li>
        </ul>
      </div>
      <div >
        <h3 className='head-text bot-line col-222 '>
          ALOQA HARBIY INSTITUTI NAMUNALI KURSANTLARI
        </h3>
        <p className='content-text col-444 m-top-40'>
          Respublika va xalqaro olimpiadalarda O'zbekiston
          Respublikasi Mudofaa vazirligi nomidan qatnashib
          sovrinli o'rinlarni egallagan kursantlar
        </p>
      </div>
      <GoodStudent />
    </div>
  )
}

export default About
