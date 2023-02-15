const tem = document.getElementById("temp");
const firebaseConfig = {
  apiKey: "AIzaSyAuKhotAp2JYo1RZ5Bh9leOR0ek7XjMGew",
  authDomain: "prueba1-2e5e7.firebaseapp.com",
  databaseURL: "https://prueba1-2e5e7-default-rtdb.firebaseio.com",
  projectId: "prueba1-2e5e7",
  storageBucket: "prueba1-2e5e7.appspot.com",
  messagingSenderId: "636269542308",
  appId: "1:636269542308:web:0e04abb603cd3a3c391f31",
};
firebase.initializeApp(firebaseConfig);

const datosMeteorologicos = {
  temperaturaB:{value: "temperaturaBMP", unit: '°C'},
  presion: {value: "presion", unit: 'hPa'},
  altitud: {value: "altitud", unit: 'm'},
  temperaturaD: {value: "tempdhd22", unit: '°C'},
  humedad: {value: "humedadd", unit: '%'},
  tempAire: {value: "temds18b20", unit: '°C'},
  velViento: {value: "vientokmH", unit: 'km/h'},
  dirViento: {value: "direxvien", unit: ''},
  cantLluvia: {value: "cantlluv", unit: 'mm'},
  radSol: {value: "radsolar", unit: 'W/m²'},
  radU: {value: "raduv", unit: ''},
};

for (const value in datosMeteorologicos) {
  const element = document.getElementById(''+value);
  console.log(datosMeteorologicos[value].value)
  let dbRef = firebase.database().ref().child(datosMeteorologicos[value].value);
  dbRef.on("value", (snap) => (element.innerText = snap.val() + ' ' + datosMeteorologicos[value].unit));
}



