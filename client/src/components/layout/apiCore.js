// Get counter product from id
export const getCount = async () => {
  const check = window.location.pathname === "/" ? true : false;

  return fetch(`/api/visitorCount?new=${check}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
