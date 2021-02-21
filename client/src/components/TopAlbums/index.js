import { useAppleMusic } from "hooks/useData";
import AlbumsList from "./AlbumsList";

const TopAlbums = ({ history }) => {
  const { isLoading, data } = useAppleMusic();
  const albumSelect = (album) => {
    history.push({ pathname: "/musics/album", state: { album } });
  };
  return (
    !isLoading &&
    data && <AlbumsList albums={data.feed.results} setActive={albumSelect} />
  );
};

export default TopAlbums;
