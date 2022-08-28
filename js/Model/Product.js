const Product = ({name, price, image}) => (`
	<div class="product">
    <div class="photo"
      style="background-image: url('${image === null ? config.images.NO_IMG : image }');"
    ></div>
    <div class="text">
      <h2 class="title">${price} MT</h2>
      <p class="price">${name.toUpperCase()}</p>
    </div>
  </div>
`)