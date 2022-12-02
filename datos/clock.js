const time = document.getElementById('time');
const date = document.getElementById('date');

const monthNames = ["Enero", "Febrero","Marzo","Abril","Mayo","Junio","July","Agosto","Septiembre","Octubre","Noviembre","Deciembre"];


const interval = setInterval(() => {

    const local = new Date();

    let day = local.getDate(),
        month = local.getMonth(),
        year = local.getFullYear();

    time.innerHTML = local.toLocaleTimeString();
    date.innerHTML = `${day} ${monthNames[month]} ${year}`;

}, 1000);