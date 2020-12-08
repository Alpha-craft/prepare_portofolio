function test() {
    //membuat objek ajax
    var xhr = new XMLHttpRequest();
    //menentukan fungsi handler untuk event
    // xhr.onreadystatechange = function() { ... };
    // xhr.onload = function() { ... };
    // xhr.onerror = function() { ... };
    // xhr.onprogress = function() { ... };
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }

    }


    //menentukan Method dan URL
    xhr.open("GET", "https://alpaca-test.vercel.app/", true)
        //mengirim request
    xhr.send();
}
// document.getElementById('demo').innerHTML = "tems";