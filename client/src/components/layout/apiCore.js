// Get all products
export const getItems = async () => {
  return fetch(`/api/item`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// Get a speific product from id
export const getItem = async (id) => {
  return fetch(`/api/item/${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

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
