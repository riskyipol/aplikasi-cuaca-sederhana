const btnCari = document.getElementById('btnCari');
const inputKota = document.getElementById('inputKota');

// Fungsi utama untuk mengambil data dari internet
async function ambilDataCuaca(kota) {
    const apiKey = "DARI_OPEN_WEATHER_MAP"; // Nanti ganti dengan key aslimu
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${kota}&appid=${apiKey}&units=metric&lang=id`;

    try {
        const response = await fetch(url);
        
        // Cek jika kota tidak ditemukan (error 404)
        if (!response.ok) {
            throw new Error("Kota tidak ditemukan, coba cek ejaannya!");
        }

        const data = await response.json();
        
        // Memanggil fungsi update tampilan dengan data asli
        updateTampilan(data.name, Math.round(data.main.temp), data.weather[0].description);

    } catch (error) {
        alert(error.message);
    }
}

// Event Listener saat tombol diklik
btnCari.addEventListener('click', function() {
    const kota = inputKota.value;
    if (kota) {
        ambilDataCuaca(kota);
    } else {
        alert("Masukkan nama kota dulu ya!");
    }
});

function updateTampilan(kota, suhu, deskripsi) {
    document.getElementById('namaKota').innerText = kota;
    document.getElementById('temperatur').innerText = `${suhu}°C`;
    document.getElementById('deskripsi').innerText = deskripsi;
}