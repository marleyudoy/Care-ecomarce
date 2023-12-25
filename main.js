const bar = document.getElementById("bar")
const nav = document.getElementById("navbar")
const close =document.getElementById("close")

// if(bar) {
	bar.addEventListener("click",() => {
		nav.classList.add("active")
	})
// }
close.addEventListener("click",() => {
	nav.classList.remove("active")
})


const productItem = document.querySelectorAll(".pro")
const showItemBox = document.querySelector(".show-item-box")
const img1 = document.getElementById("img1")
const brand1 = document.getElementById("brand1")
const title1 = document.getElementById("title1")
const price1 = document.getElementById("price1")
productItem.forEach(item => {
	item.addEventListener("click",function(){
		showItemBox.classList.add("active")
		showItem(item)
	})
})

function showItem(item){
		const img = item.firstElementChild;
		const brand = img.nextElementSibling.firstElementChild
		const title = brand.nextElementSibling
		const price = title.nextElementSibling.nextElementSibling;

		img1.src = img.src
		brand1.innerHTML = brand.textContent
		title1.innerHTML = title.textContent
		price1.innerHTML = price.textContent;
}
const times = document.getElementById("times")
// console.log(times)
times.addEventListener("click",()=>{
	showItemBox.classList.remove("active")
})