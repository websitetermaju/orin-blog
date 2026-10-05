---
title: "AI Agent Butuh Governance Identitas"
description: "AI agent dapat mengakses aplikasi dan data atas nama manusia. Governance identitas diperlukan untuk membatasi otoritas dan aksesnya."
pubDate: 2026-10-05
tag: "Agentic AI"
draft: false
---

**Masalah:**
AI agent tidak hanya menjawab pertanyaan. Agent dapat bertindak atas nama manusia, mengakses aplikasi dan data, memperoleh izin, lalu menjalankan pekerjaan dengan kecepatan mesin.[1]

Masalahnya bukan lagi sekadar siapa yang bisa login. Organisasi perlu mengetahui agent mana yang sedang bertindak, otoritas siapa yang dibawanya, sumber daya apa yang bisa dijangkau, dan apakah akses itu masih layak ketika tugas berubah.[1]

**Perubahan:**
Sistem keamanan identitas lama banyak dibangun untuk manusia, peran kerja, dan pola akses yang relatif tetap. AI agent mengubah pola itu karena tugas dan kebutuhannya dapat berubah selama bekerja.[1]

Karena itu, pengelolaan identitas perlu mencakup seluruh masa kerja agent: siapa pemiliknya, izin minimum yang dibutuhkan, sistem yang boleh diakses, serta kapan akses harus ditinjau atau dicabut.[1]

**Fungsi:**
Governance identitas untuk AI agent membantu organisasi:

- Mencatat agent yang aktif dan siapa pemilik tanggung jawabnya
- Mengetahui otoritas yang dipakai agent
- Membatasi aplikasi dan data yang dapat diakses
- Meninjau perubahan izin sepanjang tugas berjalan
- Mencabut akses ketika tugas selesai atau kebutuhannya berubah

Sumber tidak menjelaskan satu produk gratis yang dapat langsung dicoba. Berita tersebut membahas tren keamanan enterprise menjelang acara SailPoint Navigate 2026.[1]

**Manfaat:**
- Tindakan agent lebih mudah ditelusuri ke pemilik dan otoritasnya
- Izin berlebih dapat ditemukan dan dibatasi
- Risiko tidak hanya diperiksa berkala, tetapi bisa dipantau selama agent bekerja
- Tim keamanan punya dasar lebih jelas untuk menghentikan akses yang tidak lagi diperlukan

Manfaat ini bergantung pada implementasi kontrol, pencatatan aktivitas, dan proses peninjauan. Governance identitas bukan jaminan bahwa agent otomatis aman.

**Batas/Risiko:**
- Agent dapat bekerja lebih cepat daripada kemampuan manusia mengawasinya
- Izin terlalu luas memperbesar dampak kesalahan atau penyalahgunaan
- Agent dapat memakai kredensial lintas aplikasi dan berinteraksi dengan agent lain
- Akses yang tidak dicabut dapat bertahan setelah tugas selesai[1]

SiliconANGLE juga mengutip riset SailPoint yang menyebut 97% AI agent memiliki akses ke data sensitif, sementara hanya 21% organisasi sangat yakin mampu mengelola risiko keamanannya.[1] Angka ini berasal dari riset perusahaan yang berkepentingan di bidang identity security, jadi sebaiknya dibaca sebagai sinyal industri, bukan ukuran universal.

**Aman untuk dicoba?**
Bisa untuk eksperimen terbatas. Mulai dari tugas kecil yang tidak menyentuh produksi, uang, data pembeli, atau data sensitif. Tetapkan pemilik agent, batasi izin seminimal mungkin, aktifkan log, lalu uji cara menghentikan dan mencabut aksesnya.

Jangan memberi agent akses penuh hanya karena tugasnya membutuhkan beberapa langkah. Luas tugas tidak harus berarti luas izin.

**Ringkasan:**
AI agent menambah jenis identitas baru di dalam sistem: bukan manusia, tetapi bisa bertindak memakai otoritas manusia. Karena itu, organisasi perlu mengetahui siapa pemiliknya, apa yang boleh diakses, dan kapan izinnya harus berakhir. Governance identitas adalah fondasi sebelum agent diberi pekerjaan yang lebih penting.

---

Sources:
[1] https://siliconangle.com/2026/10/04/ai-agents-identity-security-sailpointnavigate/
