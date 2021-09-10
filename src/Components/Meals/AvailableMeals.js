import classes from "./AvailableMeals.module.css";
import Card from '../UI/Card'
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const[meals, setMeals]=useState([])
  const[isLoading, setIsLoading]= useState(true)
  const[error, setError] = useState()
  useEffect(()=>{
    const fetchMeals= async ()=>{
      try{

        const response = await fetch('https://foodorderapp-c0863-default-rtdb.firebaseio.com/meals.json')
        if(!response.ok){
          
          throw new Error('something went wrong')
        }
        const responseData = await response.json()
        const loadedMeals =[]
        for(const key in responseData){
          loadedMeals.push({
            id: key,
            name: responseData[key].name,
            description:  responseData[key].description,
            price:  responseData[key].price
  
          })
        }
  
        setMeals(loadedMeals)
      }
      catch(error){
        setError(error.message)

      }
      setIsLoading(false)
    }

    fetchMeals()
  },[])
  const mealsList = meals.map((meal) => <MealItem 
  id={meal.id}
  key={meal.id} 
  name={meal.name} 
  price={meal.price} 
  description={meal.description}></MealItem>);

  if(isLoading){
    return <section class={classes.MealIsLoading}>
      <p>Is loading...</p>
    </section>
  }

  if(error){
    return <section class={classes.httpError}>
      <p>Erro na requisição http</p>
    </section>
  }

  return (
    <>
      <section className={classes.meals}>
        <Card>
       
        <ul>{mealsList}</ul>
        </Card>
      </section>
    </>
  );
};

export default AvailableMeals;
