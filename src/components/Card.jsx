import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Card = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div key={props.id} className='m-top-10 card ta'>
            <img
                className='card-img '
                data-aos="zoom-in-up"
                src={props.img} alt="Card" />
            <div className='container'>
                <h3
                    className='content-text col-444 m-top-5 '
                >{props.name} {props.surname}</h3>
                <p className='min-text col-999 m-top-5 '>{props.degree}</p>
                <p className='min-text col-888 m-top-5 m-bot-5'>{props.bio}</p>
            </div>
        </div>
    )
}

export default Card
