import React from 'react';
import { teachers } from '../utils/const';
import Card from './Card';

const Student = () => {
  return (
    <div className='container ta'>
      <h2 className='head-text m-top-20 m-bot-20'>O'zlashtirishi Past Talabalar</h2>
      <div className='dfj gap-20 fww '>
        {teachers.map((teacher) => {
          return <Card id={teacher.id} img={teacher.picture} name={teacher.name} surname={teacher.surname} bio={teacher.bio} degree={teacher.degree} />;
        })}
      </div>

    </div>
  );
};

export default Student;
