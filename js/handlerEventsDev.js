
document.querySelectorAll("main ul li").forEach(function(a){
	a.addEventListener("click", function(b){
		console.log(b.target.classList.value)
	});
});

Object.keys(textos).forEach(i => console.log(`${i}:${textos[i].text}`));