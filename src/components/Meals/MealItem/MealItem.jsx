import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    const cartCtx = useContext(CartContext);

    const addToCartHandler = () => {
        cartCtx.AddItem({
            id: props.id,
            name: props.name,
            amount: props.amount,
            price: props.price
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}

export default MealItem;