let user = prompt ("Lütfen isminizi giriniz");
let userName = document.querySelector('#myName');

if (user.length > 0) {
    myName.innerHTML = `${user}`;
} else {
    alert("Lütfen isim giriniz !");
    location.reload();
}

function showTime() {
    const days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let today = new Date();
    let h = today.getHours(); // saat gösteren fonksiyon
    let m = today.getMinutes(); // dakikayı gösteren fonksiyon
    let s = today.getSeconds(); // saniye'yi gösteren fonksiyon
    let d = days[today.getDay()]; // diziler içerisindeki değişkeni bağlayıp gün gösteren fonksiyon
    m = checkTime(m);
    s = checkTime(s);

    document.querySelector("#myClock").innerHTML = `${h}: ${m}: ${s}: ${d}`;
    setTimeout(showTime,1000);
}

showTime();
function checkTime(i) {
    if(i<10) {
        i = "0"+i
    }
    return i;
}
