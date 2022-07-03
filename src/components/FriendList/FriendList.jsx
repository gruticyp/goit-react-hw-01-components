import PropTypes from 'prop-types';
// import s from './FriendList.module.css';
import FriendLIstItem from 'components/FriendLIstItem/FriendListItem';

export default function FriendList({friends}) {
  return (
    <ul className="friend-list">
      {friends.map(({avatar, name, isOnline, id }) => (
      <FriendLIstItem
      avatar = {avatar}
      name = {name}
      isOnline = {isOnline}
      id = {id}
      />
      ))}
    </ul>
  );
}
FriendList.defaultProps = {
  friends: [],
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape(
      {avatar: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
           id: PropTypes.number.isRequired})),
}
