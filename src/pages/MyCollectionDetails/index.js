import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchUsersMangas } from "../../store/manga/actions";
import { selectUsersManga } from "../../store/manga/selectors";

export default function MyCollectionDetails() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const usersManga = useSelector(selectUsersManga);
  console.log("selector usersManga", usersManga)

  useEffect(() => {
    dispatch(fetchUsersMangas(userId));
  }, [dispatch, userId]);

  return (
    <div>
      <h1>Fetched Title:{usersManga.mangaDb.title} </h1>
      <img src={usersManga.mangaDb.imgUrl} alt="ïmg"></img>
      <p>Fetched Author:{usersManga.mangaDb.author}</p>
      <p>Fetched Publisher:{usersManga.mangaDb.publisher}</p>
      <p>Fetched Total Volumes: {usersManga.mangaDb.totalVolumes}</p>
      <p>Fetched Volumes Owned: {usersManga.volumesOwned}</p>
      <p><b>Fetched Are you reading it?: {usersManga.reading.true ? "yes" : "no"}</b></p>
      <p>Fetched Last Volume Read: {usersManga.lastVolumeRead}</p>
      <p>Fetched Is the Collection Complete?: {usersManga.collectionComplete.true ? "yes" : "no"}</p>
      <p>Fetched Stars: {usersManga.star}</p>
    </div>
  );
}
