import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchUsersMangas } from "../../store/manga/actions";
import { selectUsersManga } from "../../store/manga/selectors";

export default function MyCollection() {
  const dispatch = useDispatch();
  const { userId } = useParams();

  const mangas = useSelector(selectUsersManga);

  useEffect(() => {
    dispatch(fetchUsersMangas(userId));
  }, [dispatch, userId]);

  return mangas ? (
    mangas.map((manga) => {
      const {
        mangaDb,
        volumesOwned,
        reading,
        lastVolumeRead,
        collectionComplete,
        star,
      } = manga;

      return (
        <>
          <h1>Fetched Title:{mangaDb.title} </h1>
          <img src={mangaDb.imgUrl} alt="ïmg"></img>
          <p>Fetched Author:{mangaDb.author}</p>
          <p>Fetched Publisher:{mangaDb.publisher}</p>
          <p>Fetched Total Volumes: {mangaDb.totalVolumes}</p>
          <p>Fetched Volumes Owned: {volumesOwned}</p>
          <p>
            <b>Fetched Are you reading it?: {reading.true ? "yes" : "no"}</b>
          </p>
          <p>Fetched Last Volume Read: {lastVolumeRead}</p>
          <p>
            Fetched Is the Collection Complete?:{" "}
            {collectionComplete.true ? "yes" : "no"}
          </p>
          <p>Fetched Stars: {star}</p>
        </>
      );
    })
  ) : (
    <div>loading</div>
  );
}
