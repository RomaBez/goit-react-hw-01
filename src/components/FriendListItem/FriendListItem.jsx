import css from "../FriendListItem/FriendListItem.module.css"

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <div className={css.content}>
        <img src={avatar} alt={`${name} Avatar`} width="48" className={css.cardImg} />
        <p className={css.name}>{name}</p>
  <p className={isOnline ? css.statusOnline : css.statusOffline}>
          {isOnline ? "Online" : "Offline"}
        </p>
</div>
)
}

export default FriendListItem