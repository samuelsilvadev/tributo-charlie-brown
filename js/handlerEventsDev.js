
document.querySelectorAll("main ul li").forEach(function(a){
	a.addEventListener("click", function(b){
		console.log(b.target.classList.value)
	});
});


Object.keys(textos).forEach(
	i => createElements(textos[i])
);

function createElements(obj){
	document.querySelector("#dados-da-historia").innerHTML += `
		<section class="square accent-color">
			<article>
				<h1> ${obj.title} </h1>
				<p> ${obj.text}	</p>
			</article>
		</section>	
	`;
}