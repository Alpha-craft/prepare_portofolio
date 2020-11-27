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