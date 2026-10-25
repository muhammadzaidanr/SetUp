// Data latihan
const dataLatihan = [
  {
    nama: "Bicep Curls",
    set: 3,
    repetisi: 10,
    beban: 20
  },
  {
    nama: "Shoulder Press",
    set: 3,
    repetisi: 12,
    beban: 25
  },
  {
    nama: "Tricep Extensions",
    set: 3,
    repetisi: 10,
    beban: 5
  }
];

// Menghitung total volume menggunakan JavaScript
function hitungTotalVolume() {
  let total = 0;

  for (let i = 0; i < dataLatihan.length; i++) {
    total = total + dataLatihan[i].set *
      dataLatihan[i].repetisi * dataLatihan[i].beban;
  }

  return total;
}

// Menampilkan data latihan menggunakan JavaScript DOM
function tampilkanLatihan() {
  const tabel = document.getElementById("data-latihan");
  tabel.innerHTML = "";

  for (let i = 0; i < dataLatihan.length; i++) {
    const latihan = dataLatihan[i];
    const volume = latihan.set * latihan.repetisi * latihan.beban;

    const baris = document.createElement("tr");

    baris.innerHTML =
      "<th scope='row'>" + latihan.nama + "</th>" +
      "<td>" + latihan.set + "</td>" +
      "<td>" + latihan.repetisi + "</td>" +
      "<td>" + latihan.beban + " kg</td>" +
      "<td>" + volume + " kg</td>";

    tabel.appendChild(baris);
  }

  if (dataLatihan.length === 0) {
    tabel.innerHTML =
      "<tr><td colspan='5'>Belum ada gerakan.</td></tr>";
  }

  document.getElementById("jumlah-gerakan").textContent =
    dataLatihan.length + " gerakan";

  document.getElementById("total-volume").textContent =
    hitungTotalVolume() + " kg";
}

// Interaksi menggunakan jQuery
$(document).ready(function () {
  tampilkanLatihan();

  $("#hapus-gerakan").on("click", function () {
    if (dataLatihan.length > 0) {
      dataLatihan.pop();
      tampilkanLatihan();
    }
  });

  $("#sembunyikan-catatan").on("click", function () {
    $("#catatan-latihan").hide();
  });

  $("#tampilkan-catatan").on("click", function () {
    $("#catatan-latihan").show();
  });
});