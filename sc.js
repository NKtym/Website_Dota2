function onEntry(entry){
	entry.forEach(change => {
		if(change.isIntersecting){
			change.target.classList.add('element-show');
		}
	});
}

let options = {
	threshold: [0.5]};
let observer = new
IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.block');
for(let elm of elements){
	observer.observe(elm);//доступен на экране или нет
}

window.onscroll = function showHeader() {
    var header = document.querySelector('.fon_button');
    if(window.pageYOffset > 100){
        header.classList.add('header_fixed');
    } else{
        header.classList.remove('header_fixed');
    }
}
