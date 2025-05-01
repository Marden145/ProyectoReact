import './Products.css'
import {AddToCartIcon,RemoveFromCartIcon} from './icons.jsx';
import {useCart} from '../hooks/useCart.js'

export function Products({products}){
    const {addToCart,cart,removeFromCart}=useCart()
    const checkProductsInCart=products=>{
        return cart.some(item=>item.Id===products.Id)
    }
    return(
        <main className='products'>
            <ul>
                {products.map(product=>{
                    const isProductInCart=checkProductsInCart(product)
                return(
                    <li key={product.Id}>
                        <img 
                        src={product.Thumbnail} 
                        alt={product.Title}
                        />
                        <div>
                            <strong>
                                {product.Title}-${product.Price}
                            </strong>
                        </div>
                        <div>
                            <button 
                            style={{backgroundColor:isProductInCart?'red':'#09f'}}
                            onClick={()=>{
                                isProductInCart
                                ? removeFromCart(product)
                                :addToCart(product)
                            }}>
                                {
                                    isProductInCart
                                    ? <RemoveFromCartIcon/>
                                    :<AddToCartIcon/>
                                }
                                
                            </button>
                        </div>


                    </li>
                )

            })}
            </ul>

        </main>
    )
}


