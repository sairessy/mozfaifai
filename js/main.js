const title = document.getElementsByTagName("title")[0];
title.innerText = "MOZ FAI FAI";

showProducts()

document.querySelectorAll("nav .link").forEach(link => {
	link.onclick = evt => {
		showProductsCategory(evt.target.id)
	}
})