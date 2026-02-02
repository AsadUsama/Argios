import Styles from './cartBar.module.scss';
import Button from '../button/button'

export default function CartBar({ onClose }) {


    return (
        <div className={Styles.cartContainer}>
            <h2>Your Cart</h2>
            <div className={Styles.itemsInCart}>
                <p>No Items in Cart</p>
            </div>
            <div className={Styles.totalOrder}>
                <h4>Payment</h4>
                <div className={Styles.price}>
                    <p>Price</p>
                    <p>$0.00</p>
                </div>
                <div className={Styles.discount}>
                    <p>Discount</p>
                    <p>$0.00</p>

                </div>
                <div className={Styles.tax}>
                    <p>Tax</p>
                    <p>$0.00</p>
                </div>
                <div className={Styles.total}>
                    <p>Total Price</p>
                    <p>$0.00</p>
                </div>

                <div className={Styles.cartBarBtn}>

                    <Button
                        variant='outline'
                        className={Styles.checkoutBtn}
                        onClick={onClose}
                    >
                        Close
                    </Button >
                    <Button
                        className={Styles.checkoutBtn}

                    >
                        Checkout
                    </Button >
                </div>
            </div>
        </div>
    )
} 