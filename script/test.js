let paragraf = document.getElementsByClassName('paragraf'); //selector
// men-select atau memilih element pada html berdasarkan nama kelas
let button = document.getElementById('button')
    //select element pada html berdasarkan ID
let i = 0;
let bg_color, color

bg_color = document.getElementById('bg-color')
color = document.getElementById('color')

bg_color.addEventListener('change', function(event) {
    document.body.style.backgroundColor = bg_color.value;
})

color.addEventListener('change', (event) => {
    document.body.style.color = color.value;
})

function hampus() {
    paragraf[0].remove()
}
// paragraf[0].style.color = "red";
// paragraf[2].style.color = "green";
console.log("warna background" + bg_color.value)
console.log("warna font" + color.value)