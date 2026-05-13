Halaman Astro = kebanyakan HTML statis
Island = komponen kecil yang butuh JavaScript/interaksi

Static:
- Hero text
- About section
- Project description
- Case study content
- Skills
- Experience

Island:
- theme toggle dark/light
- mobile menu dropdown
- interactive filter project
- carousel screenshot
- animated chart kecil kalau perlu

Kenapa disebut “island”?

Karena komponen interaktif itu seperti pulau kecil JavaScript di tengah lautan HTML statis.

Misalnya halaman portfolio lo:
[Hero]              static
[About]             static
[AI Workspace Card] static
[Theme Toggle]      island/interaktif
[Mobile Menu]       island/interaktif
[Case Study Text]   static

Di Astro, secara default komponen tidak otomatis kirim JavaScript ke browser. Kalau mau komponen React/Vue/Svelte jadi interaktif, baru dikasih directive seperti:

<MyReactComponent client:load />

Atau:

<MobileMenu client:visible />

Artinya:

client:load    = langsung hydrate saat page load
client:visible = baru hydrate saat komponen terlihat
client:idle    = hydrate saat browser lagi idle
client:only    = render hanya di client

Untuk portfolio lo, prinsipnya:

Pakai Astro component biasa untuk mayoritas UI.
Pakai island hanya kalau benar-benar butuh interaksi.

Jadi untuk project lo sekarang, island kemungkinan cuma dibutuhkan untuk:

- mobile navigation
- theme toggle
- mungkin screenshot carousel

Sisanya cukup Astro biasa.
