import { useSelector } from "react-redux";

import { selectUsersManga } from "../../store/user/selectors";
import CollectionDetails from "../../components/CollectionDetails";
import SearchBar from "../../components/SearchBar";

export default function MyCollection() {
  const mangas = useSelector(selectUsersManga);

  function submitForm(event) {
    event.preventDefault();
  }

  if (!mangas) return <div>loading</div>;

  return (
    <div>
      <SearchBar />
      <p></p>
      {mangas.map((manga) => {
        const { id, title, author, imgUrl, publisher, totalVolumes } = manga;
        console.log("the manga", manga);
        const {
          volumesOwned,
          collectionComplete,
          lastVolumeRead,
          reading,
          star,
        } = manga.userMangas;
        return (
          <div>
            <CollectionDetails
              key={id}
              id={id}
              title={title}
              imgUrl={imgUrl}
              author={author}
              publisher={publisher}
              totalVolumes={totalVolumes}
              volumesOwned={volumesOwned}
              reading={reading}
              lastVolumeRead={lastVolumeRead}
              collectionComplete={collectionComplete}
              star={star}
              buttonDetails={true}
              details={false}
              buttonEdit={false}
            />
          </div>
        );
      })}
    </div>
  );
}
