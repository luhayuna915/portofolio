/// integrate navigate file with this page ///
        function loadHeader() {
            fetch('nav-gis-analysis.html')
                .then(response => {
                    if (!response.ok) throw new Error("Gagal memuat header");
                    return response.text();
                })
                .then(data => {
                    document.getElementById('header-target').innerHTML = data;
                })
                .catch(error => console.error('Error:', error));
        }
        window.onload = loadHeader;

        // Ambil elemen yang dibutuhkan
        const overlay = document.getElementById('image-overlay');
        const fullImg = document.getElementById('full-image');
        const closeBtn = document.querySelector('.close-btn');
        const cardImg = document.querySelectorAll('.fixed-width-card img');

        // Fungsi untuk membuka Full Screen
        // cardImg.onclick = function () {
        //     overlay.style.display = "flex";
        //     fullImg.src = this.src; // Ambil sumber gambar yang sama
        // }
        cardImg.forEach(function (img) {
            img.onclick = function () {
                overlay.style.display = "flex";
                fullImg.src = this.src; // Mengambil sumber gambar yang diklik
            }
        });

        // Fungsi untuk menutup saat klik tombol 'x'
        closeBtn.onclick = function () {
            overlay.style.display = "none";
        }

        // Fungsi untuk menutup saat klik di area hitam mana saja
        overlay.onclick = function (event) {
            if (event.target !== fullImg) {
                overlay.style.display = "none";
            }
        }
        /// end of integrate nvaigate file with this page ///

        // Fungsi untuk Buka/Tutup dari tombol utama
        function toggleUniversal(idKonten, elemenTombol) {
            var konten = document.getElementById(idKonten);

            // Tutup semua konten lain dulu (Opsional, biar rapi cuma 1 yang buka)
            // tutupSemuaKonten(); 

            if (konten.style.display === "none" || konten.style.display === "") {
                konten.style.display = "flex";
                elemenTombol.classList.add("menu-detail-container-div-active");
                // --- TAMBAHKAN BARIS INI ---
                konten.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // ---------------------------
            } else {
                konten.style.display = "none";
                elemenTombol.classList.remove("menu-detail-container-div-active");
            }
        }

        // Fungsi untuk Tombol X (Tutup)
        function closeUniversal(idKonten, idTombolBuka) {
            document.getElementById(idKonten).style.display = "none";
            document.getElementById(idTombolBuka).classList.remove("menu-detail-container-div-active");
        }
