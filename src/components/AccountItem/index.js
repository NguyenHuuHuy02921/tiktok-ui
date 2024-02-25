import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles  from "./AccountItem.module.scss";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)
function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/600c9a7316cb32f3f17dce6e629a1d84.jpeg?lk3s=a5d48078&x-expires=1708956000&x-signature=Tu7%2BbgTE7N7wzcePhA2gKVmn8YE%3D" alt="Hoa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>AAAAAAAA</span>
            </div>

        </div>
     );
}

export default AccountItem;