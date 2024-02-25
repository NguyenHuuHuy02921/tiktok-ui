import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import Button from '@/components/Button';
import styles from './Header.module.scss';
import images from '@/assets/images';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import AccountItem from '@/components/AccountItem';
const cx = classNames.bind(styles)

function Header() {
    const [searchResult, setsearchResult] = useState([])
    
    useEffect(() => {
        setTimeout(() => {
            setsearchResult([1,2,3])
        },3000)
    })

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='Tiktok' />
            </div>
            <Tippy
                interactive
                visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>
                            
                            <AccountItem />
                        </PopperWrapper>
                        </div>
            )}>
                <div className={cx('search')}>
                    <input placeholder='Tim kiem' />

                    <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                    </button>

                    <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
                    
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </Tippy>

            <div className={cx('actions')}>
                <Button text>Upload</Button>
                <Button  primary>Log in</Button>

            </div>
        </div>
    </header>
}

export default Header;