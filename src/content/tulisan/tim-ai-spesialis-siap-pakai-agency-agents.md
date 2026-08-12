---
title: "Kumpulan Persona AI Spesialis Buat Tim Kecil"
heading: "Butuh 'Karyawan' AI Spesialis? Coba Kumpulan Persona Siap Pakai Ini"
description: "Mengenal Agency Agents, kumpulan persona AI spesialis open source yang bisa diinstal ke coding agent favoritmu untuk bantu kerja tim kecil."
tag: "repo discovery"
pubDate: 2026-08-12
draft: false
---

Tim kecil — solo builder, freelancer, atau UMKM digital dengan 2-3 orang — sering menghadapi masalah yang sama: kerjaan butuh banyak "peran" berbeda (developer, penulis teknis, reviewer kode, spesialis DevOps) tapi orangnya cuma segelintir. Solusinya biasanya membuka banyak tab chat AI, menulis ulang instruksi peran setiap kali, dan berharap AI konsisten berperan sebagai spesialis tertentu.

## Persona siap pakai, bukan prompt dari nol

Ada cara mengambil "persona" siap pakai yang sudah dirancang orang lain, lengkap dengan gaya kerja, proses, dan contoh deliverable, lalu memasangnya langsung ke coding agent yang sudah dipakai sehari-hari (Claude Code, Cursor, Codex, dan sejenisnya).

## Repo: Agency Agents

- **URL:** https://github.com/msitarzewski/agency-agents
- **Fungsi:** kumpulan file persona AI (format markdown) yang dikelompokkan per divisi, termasuk Engineering dan beberapa divisi non-teknis. Tiap file berisi identitas, misi, alur kerja, contoh deliverable teknis, dan gaya komunikasi satu "spesialis".
- **Cara pakai:** clone repo, jalankan script instalasi (`./scripts/install.sh --tool <nama-tool>`) yang menyalin persona ke direktori tool AI yang dipakai. Bisa juga instal manual dengan copy file markdown ke folder agent tool masing-masing. Ada juga versi aplikasi desktop terpisah untuk instalasi tanpa command line.
- **Bahasa/stack:** Shell untuk script instalasi, isi persona berupa file markdown biasa.
- **Lisensi:** MIT, gratis dipakai dan dimodifikasi bahkan untuk keperluan komersial.
- **Bukti aktivitas (dicek 12 Agustus 2026, diverifikasi ulang langsung dari GitHub API):** 143.232 star, dibuat Oktober 2025, terakhir di-update 6 Agustus 2026, masih aktif dikerjakan. Kontributornya lebih dari satu orang: pembuat utama menyumbang 163 commit, disusul beberapa kontributor lain dengan puluhan commit, jadi bukan proyek yang bergantung ke satu orang saja. Repo ini belum punya rilis versi resmi (nol tag release), jadi anggap statusnya masih berkembang, bukan produk final yang stabil.
- **Open issues:** 116, wajar untuk repo seaktif ini dan bukan tanda ditelantarkan.

## Manfaat buat tim kecil

Nilai utamanya ada di konsistensi. Kalau biasanya kamu menulis ulang instruksi "kamu adalah code reviewer yang teliti" setiap sesi baru, persona ini membuat AI langsung membawa gaya kerja dan checklist yang sama setiap dipanggil, mirip mendelegasikan ke anggota tim yang sudah tahu perannya tanpa harus mengulang briefing.

## Batas dan risiko

- Ini bukan agent otomatis yang bisa jalan sendiri — tetap kamu yang memicu dan mengawasi setiap sesi kerja AI.
- Karena belum ada rilis versi resmi, isi file bisa berubah kapan saja. Kalau mau stabil, simpan salinan lokal versi yang sudah cocok, jangan langsung tarik update terbaru tanpa dicek dulu.
- Kualitas hasil tetap tergantung tool AI yang dipasangi persona ini (Claude Code, Cursor, dll), bukan dari persona itu sendiri. Persona hanya kerangka instruksi, bukan model AI baru.
- Selalu baca dulu isi file persona sebelum dipasang — pastikan instruksinya cocok dengan cara kerja dan standar keamanan yang kamu mau, karena ini konten open source dari komunitas.

## Cara mencoba aman

1. Clone repo ke folder terpisah, jangan langsung timpa konfigurasi tool AI yang sudah kamu pakai.
2. Coba satu-dua persona dulu (misal yang paling relevan dengan kerjaanmu sekarang) lewat opsi instalasi per divisi/agent, bukan instal semuanya sekaligus.
3. Baca isi file persona sebelum dipakai — sesuaikan kalau ada bagian yang tidak cocok dengan alur kerjamu.
4. Uji di tugas kecil dulu sebelum dipakai untuk kerjaan penting.

## Ringkasan

Agency Agents adalah kumpulan "resep peran" siap pakai untuk coding agent yang sudah kamu punya, bukan produk AI baru. Gratis, aktif dikembangkan, cocok dicoba kalau kamu sering berganti-ganti peran saat kerja dengan AI dan capek menulis ulang instruksi yang sama. Karena belum ada rilis resmi, perlakukan sebagai alat bantu yang terus berkembang, bukan produk final yang harus langsung dipercaya penuh.
