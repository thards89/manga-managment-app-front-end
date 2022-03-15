export const selectToken = (state) => state.user.token;

export const selectUser = (state) => state.user;

export const selectUsersManga = (state) => state.user.mangaDbs;

export const selectSpecificManga = (id) => (state) => {
  console.log("getting here", id);
  return (
    state.user.id &&
    state.user.mangaDbs.find((manga) => parseInt(manga.id) === parseInt(id))
  );
};

