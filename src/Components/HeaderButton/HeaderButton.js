import { CounterContext } from '../../App';
import React, { useContext } from 'react';
import imagecart from '../../Assets/pngegg.png';
import ConfirmOrder from '../Meals/ConfirmOrder/ConfirmOrder';
const HeaderButton = () => {
  var root = document.querySelector(':root');
  function Confirm(){
    root.style.setProperty('--vis','visible');
  }
  const { count } = useContext(CounterContext);
  return (
    <div>
      <button onClick={Confirm}>
        <img src={imagecart} />
        <span>{count.length}</span>
      </button>
    </div>
  )
}

export default HeaderButton;