import styles from "./TopAlbums.module.scss";

const AlbumsList = ({ albums, setActive }) => {
  return (
    <div>
      <h3>Top New Releases</h3>
      <div className={styles.albumList}>
        {albums.map((album) => {
          return (
            <div
              className={styles.album}
              key={album.name}
              onClick={() => setActive(album)}
            >
              <img
                className={styles.albumCover}
                src={album.artworkUrl100}
                alt=''
              />
              <div className={styles.description}>
                <span className={styles.title}>{album.name}</span>
                <span className={styles.artist}>{album.artistName}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AlbumsList;
