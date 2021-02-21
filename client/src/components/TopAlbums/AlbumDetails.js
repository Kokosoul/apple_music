import styles from "./TopAlbums.module.scss";

const AlbumDetails = ({ location: { state } }) => {
  const { name, artistName, artworkUrl100, releaseDate, url } = state.album;
  return (
    <div>
      <div className={styles.albumDetails}>
        <img src={artworkUrl100} alt='' className={styles.albumCover} />
        <div className={styles.artistInfo}>
          <h1>{artistName}</h1>
          <p>{name}</p>
          <p>Released: {releaseDate}</p>
          <div className={styles.moreInfo}>
            <a href={url} target='_blank' rel='noreferrer'>
              More Info
            </a>
          </div>
        </div>
      </div>
      <div>
        <span>Copyright</span>
      </div>
    </div>
  );
};

export default AlbumDetails;
