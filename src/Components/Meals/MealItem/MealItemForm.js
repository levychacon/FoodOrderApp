import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';
import { useRef, useState } from 'react';

const MealItemForm= props =>{
    const[amountIsValid, setAmountIsvalid]=useState(false)
    const amountInput = useRef()
    const submitHandler=(event)=>{
        event.preventDefault();
        const enteredAmount= amountInput.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length===0||enteredAmountNumber<0|| enteredAmountNumber>5){
            setAmountIsvalid(false)
            return;
        }
        props.onAddToCart(enteredAmountNumber)
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input 
        ref={amountInput}
        label='Amount' input={{
            id: 'amount' + props.id,
            type: 'numbe',
            min: '1',
            max: '5',
            step:'1',
            defaultValue:'1'
        }}></Input>
        <button>+Add</button>
        {amountIsValid && <p>Input a valid value</p>}
    </form>

}


export default MealItemForm;