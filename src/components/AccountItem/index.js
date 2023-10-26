import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
function AccountItem() {
    const cx = classNames.bind(styles);
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fhan17-1.fna.fbcdn.net/v/t1.6435-9/93656354_109604074054449_5293175892397260800_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=OEbSZ9oJEKIAX_Rjb7e&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBNqR0HweEj9KZhb-AU2Hbu-i5rK2AwOeoPMuEZvvOWwg&oe=6560A465"
                alt="hoa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyen van anh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </p>
                <span className={cx('username')}>@ngnvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
