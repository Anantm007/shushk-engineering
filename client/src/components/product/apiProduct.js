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

// Order Kaksh
export const orderKaksh = async (values) => {
  return fetch(`/api/order/kaksh`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
