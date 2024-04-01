import React from 'react'
import "./member.css";
import ME1 from "../../assets/unsplash_9IcKPSQ9G5Q.png";
import ME2 from "../../assets/unsplash_9Z1KRIfpBTM.png";
import ME3 from "../../assets/unsplash_CBh4D3l0EwM.png";
import ME4 from "../../assets/unsplash_d2zvqp3fpro.png";
import ME5 from "../../assets/unsplash_pxoZSTdAzeU.png";
import ME6 from "../../assets/unsplash_VieM9BdZKFo.png";
import ME7 from "../../assets/unsplash_x2Tmfd1-SgA.png";
import ME8 from "../../assets/unsplash_XtUd5SiX464.png";


const Member = () => {
  return (
    <div id='member'>
      <h2>L<span className='und'>atest Member</span>s</h2>

      <div>
        <img src={ME1} alt="sorry" />
        <img src={ME2} alt="sorry" />
        <img src={ME3} alt="sorry" />
        <img src={ME4} alt="sorry" />
        <img src={ME5} alt="sorry" />
        <img src={ME6} alt="sorry" />
        <img src={ME7} alt="sorry" />
        <img src={ME8} alt="sorry" />
      </div>
    </div>
  );
}

export default Member;