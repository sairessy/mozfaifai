const products = _products

// get all products
const showProducts = () => {

	let data = ''

	for (var i = 0; i < products.length; i++) {
		const product = Product(products[i])
		data += product
	}

	document.getElementById("products").innerHTML = data
}

// get products from specific category
const showProductsCategory = (category_id) => {
	if(category_id === "") {
		showProducts()
		return
	}

	const filtered = products.filter(({categories}) => categories.includes(parseInt(category_id)))

	if(filtered.length > 0)  {
		let data = ''

		for (let i = 0; i < filtered.length; i++) {
			const product = Product(filtered[i])
			data += product
		}		
		
		document.getElementById("products").innerHTML = data
	} else {
		alert(`OPS, nenhum producto na categoria ${config.products_categories[parseInt(category_id)].label.toUpperCase()} ainda!`)
	}
}

// get searched products
const showProductsSearch = (text) => {
	const filtered = products.filter(({name}) => name.toLowerCase().includes(text.toLowerCase()))

	if(filtered.length > 0) {
		let data = ''

		for (var i = 0; i < filtered.length; i++) {
			const product = Product(products[i])
			data += product
		}
		
		document.getElementById("products").innerHTML = data
	}
}