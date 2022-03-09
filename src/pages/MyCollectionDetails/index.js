import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectSpecificManga } from "../../store/user/selectors";
import CollectionDetails from "../../components/CollectionDetails";

export default function MyCollectionDetails() {
  const { mangaId } = useParams();
  const mangas = useSelector(selectSpecificManga(mangaId));

  function submitForm(event) {
    event.preventDefault();
    console.log("submiting form");
  }
  console.log("Got My Collection Details", mangas);

  if (!mangas) return <h1>Loading</h1>;
  return (
    <CollectionDetails
      key={mangas.id}
      title={mangas.title}
      imgUrl={mangas.imgUrl}
      author={mangas.author}
      publisher={mangas.publisher}
      totalVolumes={mangas.totalVolumes}
      volumesOwned={mangas.userMangas.volumesOwned}
      reading={mangas.userMangas.reading}
      lastVolumeRead={mangas.userMangas.lastVolumeRead}
      collectionComplete={mangas.userMangas.collectionComplete}
      star={mangas.userMangas.star}
      buttonDetails={false}
      details={true}
      buttonEdit={true}
    />
  );
}
