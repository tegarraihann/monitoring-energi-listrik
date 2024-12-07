// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDogQ9sT6P1EhaV1eYY0cTb5tXtkzwYiN0",
    authDomain: "monitoring-energi-listri-af858.firebaseapp.com",
    databaseURL: "https://monitoring-energi-listri-af858-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "monitoring-energi-listri-af858",
    storageBucket: "monitoring-energi-listri-af858.appspot.com",
    messagingSenderId: "173512166164",
    appId: "1:173512166164:web:3a237ac9849de8d3171001",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Realtime database reference
const dataRef = firebase.database().ref("sensors/device_1");

// Update UI in real-time
dataRef.on("value", (snapshot) => {
    const data = snapshot.val();
    if (data) {
        document.getElementById("voltage").textContent = `${data.voltage.toFixed(2)} V`;
        document.getElementById("current").textContent = `${data.current.toFixed(3)} A`;
        document.getElementById("power").textContent = `${data.power.toFixed(3)} W`;
        document.getElementById("energy").textContent = `${data.energy.toFixed(5)} kWh`;
        document.getElementById("cost").textContent = `Rp ${data.cost.toFixed(2)}`;
        document.getElementById("relay-status").textContent = data.relay_status || "Loading...";
    }
});
