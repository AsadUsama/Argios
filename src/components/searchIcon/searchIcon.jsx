import { useState, useRef, useEffect } from 'react';
import Styles from './searchIcon.module.scss';
import search from '../../assest/icons/Search.svg';
import SearchBar from '../searchBar/searchBar';

export default function Search() {
    const [isOpen, setIsOpen] = useState(false);
    const searchContainerRef = useRef(null);

    function handleClick() {
        setIsOpen(prev => !prev);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (searchContainerRef.current &&
                !searchContainerRef.current.contains(event.target)) {
                setIsOpen(false);
            }

        }

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div ref={searchContainerRef} className={Styles.parent}>
            <button
                className={Styles.searchBtn}
                onClick={handleClick}
                aria-label='Search'
            >
                <img
                    src={search}
                    alt="Search Icon"
                    className={Styles.searchIcon}
                />
            </button>
            {isOpen && <SearchBar />}
        </div>
    );
}