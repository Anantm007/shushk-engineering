// Get counter product from id
export const getCount = async (inc) => {
  const check = inc;

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
