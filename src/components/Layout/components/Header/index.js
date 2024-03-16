
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsisVertical,} from '@fortawesome/free-solid-svg-icons';


import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import Button from '@/components/Button';
import styles from './Header.module.scss';
import images from '@/assets/images';

import Menu from '@/components/Popper/Menu';
import {
    UploadIcon, InboxIcon, MessageIcon, ProfileIcon, CoinIcon, SettingsIcon,
    LanguageIcon, HelpIcon, ShortcutsIcon, LogoutIcon
} from '@/components/Icons';
import Image from '@/components/Image';
import Search from '../Search';


const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
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
        icon: <HelpIcon />,
        title: 'Feedback and help',
        to: '/feedback'

    },
    {
        icon: <ShortcutsIcon />,
        title: 'Keyboard shortcuts',

    },
];

function Header() {
    
    
    
    
    // Handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    }
    const currentUser = true

    const userMenu = [
        {
            icon: <ProfileIcon />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <CoinIcon />,
            title: 'Get coins',
            to: '/coin',
            separate: true
        },
        {
            icon: <SettingsIcon />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
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
            {/* search */}
            <Search />

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy trigger='click' content="Upload video" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <UploadIcon />
                            </button>
                        </Tippy>
                         <button className={cx('action-btn')}>
                                <MessageIcon />
                        </button>
                         <button className={cx('action-btn')}>
                                <InboxIcon />
                        </button>
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
                        <Image
                            className={cx('user-avatar')}
                            alt="Avatar"
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