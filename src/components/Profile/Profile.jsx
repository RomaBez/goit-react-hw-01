import css from "../Profile/Profile.module.css"

const Profile = ({ name, tag, location, image, stats }) => {
    return (
      <div className={css.container}>
  <div className={css.info}>
    <img
            src={image}
            alt={`${name} avatar`}
            className={css.profileImg}
    />
          <p className={css.name}>{name}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

        <ul className={css.list}>
          <li className={css.listItem}>
      <span className={css.followers}>Followers</span>
            <span className={css.stats}>{stats.followers}</span>
    </li>
    <li className={css.listItem}>
      <span className={css.views}>Views</span>
      <span className={css.stats}>{stats.views}</span>
    </li>
    <li className={css.listItem}>
      <span className={css.likes}>Likes</span>
      <span className={css.stats}>{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

export default Profile 