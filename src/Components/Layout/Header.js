import classes from "./Header.module.css";
import { HeaderCartButton } from "./HeaderCartButton";
import meals from './meals.jpg'

export const Header = props => {

  return (
    <>
      <header className={classes.header}>
          <h1>React meals</h1>
          <HeaderCartButton onShownCart={props.onShownCart}/>
        
      </header>
      <div>

      <img className={classes['main-image']} src={meals} alt='delicious food'></img>
      </div>
    </>
  );
};

export default Header;
