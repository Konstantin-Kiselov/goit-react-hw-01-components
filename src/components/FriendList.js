import PropTypes, { bool } from "prop-types";

function FriendList({ friends }) {
  //   console.log(friends);
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li className="item" key={id}>
            <span className="status" disabled={isOnline}></span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: bool.isRequired,
    })
  ),
};

export default FriendList;
