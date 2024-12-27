import React from 'react'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { bindActionCreators } from 'redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { actionsCreator } from '../state/index'
const Shop = () => {
  let balance = 0;
  balance = useSelector(state=>state.amt);
  const dispatch = useDispatch();
  const {WithdrawMoney,depositMoney} = bindActionCreators(actionsCreator,dispatch);
  const depositHandler = ()=>{
   return depositMoney(100);
  }
  const WithdrawHandler = ()=>{
    if(balance <= 0){
        return 
    }
   return  WithdrawMoney(100);
  }
  return (
    <div>
      <h2>Deposit / Withdraw Money</h2>
      <button className='btn btn-primary mx-2' onClick={WithdrawHandler}>-</button>
       Update Balance : {balance}
      <button className='btn btn-primary mx-2' onClick={depositHandler}>+</button>
    </div>
  )
}

export default Shop
