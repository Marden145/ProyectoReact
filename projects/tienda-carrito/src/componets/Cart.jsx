import { RemoveFromCartIcon, ClearCartIcon, CartIcon } from './icons.jsx'
import { useId } from 'react'
import { useCart } from '../hooks/useCart.js'
import './Cart.css'

function CartItem({ Thumbnail, Title, Price,quantity,addToCart }) {
    return (
        <li>
            <img src={Thumbnail} alt={Title} />
            <div>
                <strong>{Title}</strong>-${Price}
            </div>
            <footer>
                <small>
                    Qty:{quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart() {
    const cartCheckbox = useId()
    const { cart, clearCart,addToCart } = useCart()


    return (
        <>
            <label htmlFor={cartCheckbox} className='cart-button'>
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckbox} hidden />
            <aside className='cart'>
                <ul>
                {cart.map(product=>(
                    <CartItem 
                    key={product.id} 
                    {...product} 
                    addToCart={()=>addToCart(product)}
                    />
                ))}
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>

        </>
    )
}