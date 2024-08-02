const addToCart = (cartId, productId) => {
  fetch(`/api/carts/${cartId}/product/${productId}`, {
    method: "POST",
  }).then((res) => {
    if (res.status == 200) {
      window.location.reload();
    }
  });
};

const deleteFromCart = (cartId, productId) => {
  fetch(`/api/carts/${cartId}/products/${productId}`, {
    method: "DELETE",
  }).then((res) => {
    if (res.status == 200) {
      window.location.reload();
    }
  });
};
