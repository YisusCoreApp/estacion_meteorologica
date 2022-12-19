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
  temperaturaB:"temperaturaBMP",
  presion: "presion",
  altitud: "altitud",
  temperaturaD: "tempdhd22",
  humedad: "humedadd",
  tempAire: "temds18b20",
  velViento: "vientokmH",
  dirViento: "direxvien",
  cantLluvia: "cantlluv",
  radSol: "radsolar",
  radU: "raduv",
};

for (const key in datosMeteorologicos) {
  const element = document.getElementById(""+ key);
  let dbRef = firebase.database().ref().child(datosMeteorologicos[key]);
  dbRef.on("value", (snap) => (element.innerText = snap.val()));


}



