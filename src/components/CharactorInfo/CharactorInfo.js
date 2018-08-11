import React from 'react';
import classes from './CharactorInfo.css';
import xiaochenxing from '../../assets/xiaochenxing.jpeg';

const CharactorInfo=(props)=>{
    return (
       <div className={classes.charactorInfo}>
          <img src={xiaochenxing} className={classes.charactorImg} />
       </div>)
}

export default CharactorInfo;