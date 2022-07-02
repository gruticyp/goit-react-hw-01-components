
import s from '../FriendList/FriendList.module.css';

export default function  FriendLIstItem({avatar, name, isOnline, id}) {
    return (
    <li className={s.item} key={id}>
          {<span className={isOnline ? s.isActive : s.isUnactive}></span>}
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
    )
}
