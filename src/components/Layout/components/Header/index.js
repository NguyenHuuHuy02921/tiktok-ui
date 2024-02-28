import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion, faCircleXmark,
    faCloudUpload, faCoins, faEarthAsia, faEllipsisVertical,
    faGear,
    faMagnifyingGlass, faSignOut, faSpinner, faUser
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import Button from '@/components/Button';
import styles from './Header.module.scss';
import images from '@/assets/images';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import AccountItem from '@/components/AccountItem';
import Menu from '@/components/Popper/Menu';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vn',
                    title: 'Tiếng Việt',
                },
            ]
        }

    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'

    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',

    },
];

function Header() {
    const [searchResult, setsearchResult] = useState([])
    
    useEffect(() => {
        setTimeout(() => {
            setsearchResult([])
        },0)
    }, [])
    
    // Handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    }
    const currentUser = true

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
            separate: true
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log Out',
            to: '/logout',
            separate: true
        },
    ]

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='Tiktok' />
            </div>
            <HeadlessTippy
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
            </HeadlessTippy>

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy trigger='click' content="Upload video" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload} />
                            </button>

                        </Tippy>
                            {/* <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faMessage} />
                            </button> */}
                        
                    </>
                ): (    
                    <>
                        <Button text>Upload</Button>
                        <Button  primary>Log in</Button>
                    </>
                )}
                <Menu
                    items={currentUser? userMenu : MENU_ITEMS}
                    onChange={handleMenuChange}>
                            
                    {currentUser ? (
                        <img
                            className={cx('user-avatar')} alt="Avatar"
                            src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/be786eb944362ff3ec24352df1cc1cc3~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1709276400&x-signature=TA70IQ%2BjLKZLptMCOPw7ZVPgeK8%3D"
                         />
                    ) : (
                    <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </button>
                                    
                    )}            
                </Menu> 
            </div>

        </div>
    </header>
}

export default Header;