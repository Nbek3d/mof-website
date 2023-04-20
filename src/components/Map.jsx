import { address } from '../utils/const';

const Map = () => {


  return (
    <div 
    className='container'>
      <h2 className='m-top-20 dfj col-444 head-text'>
        Manzil
      </h2>
      <p className='m-top-20 dfj col-444 content-text ta'>
        Agar savollaringiz bo'lsa quyidagi manzilga murojat qilishingiz mumkin.
      </p>


      <iframe
        title="Map location"
        src={address}
        width="100%"
        height="400"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='m-top-20'
      />
    </div>
  );
};

export default Map;
