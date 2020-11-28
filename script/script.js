window.setInterval('waktu()', 1000)

function waktu() {
    let waktu = new Date();
    let jam = document.getElementById('jam');
    let menit = document.getElementById('menit');
    let detik = document.getElementById('detik');
    let hari = document.getElementById('hari');
    let bulan = document.getElementById('bulan');
    let dbulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

    let hour = waktu.getHours();
    let minute = waktu.getMinutes();
    let seconds = waktu.getSeconds();
    let day = waktu.getDate();
    let months = waktu.getMonth();
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    let index_bulan = months;
    detik.innerHTML = seconds;
    jam.innerHTML = hour;
    menit.innerHTML = minute;
    hari.innerHTML = day;
    bulan.innerHTML = dbulan[index_bulan]
    console.log(index_bulan)
        // jam.textcontent = hour + ':' + minute + ':' + seconds;

}


function ganti() {
    let change = document.getElementById('change');
    change.style.color = "red"

}

function muncul() {
    change.style.visibility = 'visible';
}

function hilang() {
    change.style.visibility = 'hidden';

}
const quotes = [{
            "Quote": "Bila kau tak Tahan lelahnya belajar,maka kau harus tahan menanggung perihnya kebodohan",
            "Sauce": "Imam Syafi'i"
        },
        {
            "Quote": "Merendahkan Orang lain tidak membuat dirimu terlihat lebih tinggi dan mulia daripada orang yang kau rendahkan itu",
            "Sauce": "Rahman"
        }
    ]
    // untuk mengakses value dalam array asscociation memamakai
    // nama_array[index].key
const kawaii = [{
        "nama_file": "29.jpg"
    },
    {
        "nama_file": "30.png"
    },
    {
        "nama_file": "31.jpg"
    },
    {
        "nama_file": "32.jpg"
    },
    {
        "name_file": "28.png"
    }
]
console.log(kawaii.length);
console.log(kawaii);
console.log(kawaii[Math.floor(Math.random() * kawaii.length)].nama_file)

function show_image(width, height) {
    let img = document.createElement("img");
    img.src = "../pict/" + kawaii[Math.floor(Math.random() * kawaii.length)].nama_file;
    img.width = img.style.width = '100%';
    img.width = img.style.maxWidth = '450';
    img.height = img.style.height = 'auto';
    // img.alt = alt;

    // This next line will just add it to the <body> tag
    // document.body.appendChild(img);
    document.getElementById('gambar').appendChild(img);

}



setInterval(randomquote, 4000);

function randomquote() {
    let random_quote = quotes[Math.floor(Math.random() * quotes.length)]
    let kata = document.getElementById('quote');
    let sumber = document.getElementById('sauce')
    kata.innerHTML = random_quote.Quote;
    sumber.innerHTML = random_quote.Sauce;
}