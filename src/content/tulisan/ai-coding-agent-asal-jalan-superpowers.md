---
title: "AI Coding Agent Asal Jalan? Coba Alur Ini"
heading: "Beri AI Coding Agent Alur Kerja yang Bisa Diperiksa"
description: "Mengenal Superpowers, kerangka kerja terbuka yang mengajak coding agent merancang, menguji, dan meninjau pekerjaan sebelum selesai."
tag: "repo discovery"
pubDate: 2026-08-11
draft: false
---

AI coding agent bisa membuat fitur hanya dari beberapa kalimat. Cepat memang, tetapi kecepatan itu mudah berubah menjadi masalah: agent langsung menulis kode sebelum memahami tujuan, menambah hal yang tidak diminta, lalu menyatakan selesai tanpa pemeriksaan yang cukup.

Bagi solo builder atau tim kecil, masalahnya bukan sekadar kode jelek. Waktu habis untuk membongkar asumsi, mencari perubahan yang tersebar, dan memperbaiki bug yang seharusnya ditemukan sejak awal.

## Perubahannya: dari “langsung kerjakan” menjadi alur kerja

Salah satu tren dalam penggunaan AI coding agent adalah memberi agent **cara kerja yang tetap**, bukan hanya prompt yang panjang. Agent diarahkan untuk memahami kebutuhan, membuat rancangan, menunggu persetujuan, menyusun rencana, menguji perubahan, lalu meminta peninjauan.

Contoh nyatanya adalah [Superpowers](https://github.com/obra/superpowers), proyek open-source buatan Jesse Vincent. Repositori ini berisi kumpulan *skills* dan instruksi awal untuk beberapa coding agent, termasuk Claude Code, Codex, Cursor, Gemini CLI, dan OpenCode.

Superpowers tidak menyediakan model AI baru dan tidak otomatis membuat produk jadi. Anggap saja ini buku kerja yang mengatur urutan kerja coding agent.

## Apa yang dilakukan Superpowers?

Dokumentasi dan source repositorinya menunjukkan alur dasar berikut:

1. **Brainstorming sebelum coding.** Agent diminta memahami konteks proyek, memperjelas kebutuhan, membandingkan pendekatan, lalu meminta persetujuan atas desain.
2. **Rencana yang rinci.** Setelah desain disetujui, pekerjaan dipecah menjadi tugas kecil dengan file dan langkah verifikasi yang jelas.
3. **Workspace terpisah.** Skill `using-git-worktrees` memakai fitur Git bernama *worktree* untuk membuat area kerja terisolasi. Perubahan tidak bercampur dengan pekerjaan lain.
4. **Test-driven development.** Agent menulis pengujian yang gagal lebih dulu, membuat perubahan minimum agar lolos, lalu merapikan kode.
5. **Peninjauan bertahap.** Dalam alur berbasis *subagent*—agent tambahan yang menangani satu tugas—hasil diperiksa terhadap spesifikasi, lalu kualitas kodenya ditinjau.
6. **Verifikasi sebelum selesai.** Agent diminta menjalankan bukti aktual sebelum mengklaim pekerjaan berhasil.

Repo ini dominan menggunakan Shell dan dirilis dengan lisensi MIT. Saat diperiksa pada 11 Agustus 2026, GitHub menampilkan 270.539 stars dan 333 open issues. Perubahan terakhir dikirim pada 8 Agustus 2026.

Proyeknya mulai dibuat pada 9 Oktober 2025. Sejak itu tersedia 11 rilis; versi terbaru yang terlihat adalah v6.2.0, terbit 24 Juli 2026.

Banyaknya stars menunjukkan perhatian publik, tetapi belum membuktikan alat ini cocok untuk semua proyek. Umur repo yang belum genap setahun, jumlah issue terbuka, ketergantungan pada coding agent tertentu, dan perubahan antarversi tetap perlu dipertimbangkan.

## Manfaat praktis untuk solo builder dan tim kecil

Hal paling berguna dari Superpowers ada pada beberapa kebiasaan sederhana:

- tujuan dikunci sebelum kode ditulis;
- perubahan besar dipecah menjadi langkah yang bisa diperiksa;
- fitur baru punya pengujian;
- agent tidak menilai pekerjaannya hanya dari rasa yakin;
- manusia tetap memegang persetujuan pada titik penting.

Untuk freelancer, alur ini membantu menerjemahkan permintaan klien menjadi desain yang bisa ditinjau sebelum waktu habis untuk implementasi. Untuk tim kecil, rencana dan hasil pengujian memberi jejak yang lebih jelas ketika pekerjaan berpindah tangan.

Namun, disiplin tambahan juga punya biaya. Perubahan satu baris bisa terasa lambat jika dipaksa melewati desain panjang. Banyak subagent dapat menambah pemakaian model. Aturan yang terlalu kaku juga tidak otomatis memahami konteks bisnis atau risiko proyekmu.

## Cara mencoba dengan aman

Jangan langsung memasangnya di proyek utama hanya karena populer. Coba pendekatan berikut:

1. Pilih proyek latihan atau branch terpisah tanpa data penting.
2. Baca README, lisensi, dan instruksi instalasi untuk coding agent yang kamu pakai.
3. Tinjau *hook* dan skill yang akan dimuat. *Hook* adalah skrip yang berjalan pada peristiwa tertentu. Repo ini memiliki hook awal sesi yang memasukkan instruksi Superpowers ke konteks agent.
4. Beri satu tugas kecil dengan hasil yang mudah diperiksa, misalnya memperbaiki validasi form sederhana.
5. Nilai hasilnya: apakah desain membantu, pengujian benar-benar dijalankan, dan perubahan tetap sesuai ruang lingkup?
6. Periksa diff serta hasil test sendiri sebelum menggabungkan kode.

Jangan masukkan kata sandi, API key, data pembeli, atau file produksi ke percobaan. Lisensi MIT mengizinkan penggunaan dan modifikasi source, tetapi software diberikan tanpa jaminan. Dukungan komersial disebut tersedia terpisah; biaya layanan tersebut tidak dicantumkan di README yang diperiksa.

## Ringkasan

Superpowers menunjukkan satu gagasan yang berguna: AI coding agent tidak cukup hanya pintar menulis kode. Ia membutuhkan urutan kerja, batas persetujuan, pengujian, dan bukti sebelum menyatakan selesai.

Kamu tidak harus mengadopsi seluruh framework untuk mengambil pelajarannya. Mulai dari tiga aturan: pahami tujuan sebelum coding, uji perubahan, lalu periksa bukti aktual. Jika tugas kecil menjadi lebih jelas tanpa menambah beban berlebihan, barulah pertimbangkan alur yang lebih lengkap.

AI agent bisa mempercepat pekerjaan. Kendali manusia dan proses yang dapat diperiksa membuat kecepatannya tetap berguna.
