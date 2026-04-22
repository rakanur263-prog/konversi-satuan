function konversi() {
    // Ambil nilai pilihan dan input
    let jenis = document.getElementById("jenis").value;
    let nilai = parseFloat(document.getElementById("nilai").value);
    let hasil = "";

    // Validasi input
    if (isNaN(nilai)) {
        hasil = "Masukkan angka yang valid!";
    }

    // Konversi panjang
    else if (jenis === "panjang") {
        hasil = "cm: " + (nilai * 100) +
                "<br>km: " + (nilai / 1000);
    }

    // Konversi berat
    else if (jenis === "berat") {
        hasil = "gram: " + (nilai * 1000) +
                "<br>ton: " + (nilai / 1000);
    }

    // Konversi suhu
    else if (jenis === "suhu") {
        hasil = "Fahrenheit: " + ((nilai * 9/5) + 32) +
                "<br>Kelvin: " + (nilai + 273);
    }

    // Konversi Farad
    else if (jenis === "kapasitansi") {
        hasil = "mF: " + (nilai * 1000) +
                "<br>µF: " + (nilai * 1000000) +
                "<br>nF: " + (nilai * 1000000000);
    }

    // Konversi Ohm
    else if (jenis === "resistansi") {
        hasil = "kΩ: " + (nilai / 1000) +
                "<br>MΩ: " + (nilai / 1000000);
    }

    // Konversi Watt
    else if (jenis === "daya") {
        hasil = "kW: " + (nilai / 1000) +
                "<br>MW: " + (nilai / 1000000);
    }

    // Tampilkan hasil
    document.getElementById("hasil").innerHTML = hasil;
}

function resetForm() {
    // Menghapus input
    document.getElementById("nilai").value = "";
    
    // Menghapus hasil
    document.getElementById("hasil").innerHTML = "";
}