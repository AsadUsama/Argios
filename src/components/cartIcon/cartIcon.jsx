import Styles from './cartIcon.module.scss'
import cart from '../../assest/icons/cart.svg'
import { useState, useEffect, useRef } from 'react';
import CartBar from '../cartBar/cartBar'

export default function Cart() {

    const [isOpen, setIsOpen] = useState(false)
    const cartBarRef = useRef(null)

    function handleCartClick() {
        setIsOpen(prev => !prev)
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (cartBarRef.current && !cartBarRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }

        else {
            document.body.style.overflow = '';

        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);




    return (
        <div className={Styles.cartParent}>
            <button
                className={Styles.cartBtn}
                onClick={handleCartClick}
                aria-label='Cart'>
                <img
                    src={cart}
                    alt="Cart icon"
                />

            </button>
            {isOpen && (
                <>
                    <div
                        className={Styles.overlay}
                        onClick={() => setIsOpen(false)}
                    ></div>
                    <CartBar ref={cartBarRef} onClose={() => setIsOpen(false)} />
                </>
            )}
        </div>
    )
}
