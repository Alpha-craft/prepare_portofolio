window.setInterval('waktu()', 1000)

function waktu() {
    let waktu = new Date();
    let jam = document.getElementById('jam');
    let menit = document.getElementById('menit');
    let detik = document.getElementById('detik')

    let hour = jam.innerHTML = waktu.getHours();
    let minute = menit.innerHTML = waktu.getMinutes();
    let seconds = detik.innerHTML = waktu.getSeconds();
    if (hour < 10) {
        jam.innerHTML = '0' + waktu.getHours();
    }
    if (minute < 10) {
        menit.innerHTML = '0' + waktu.getHours();
    }
    if (seconds < 10) {
        detik.innerHTML = '0' + waktu.getHours();
    }
}