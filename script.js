const PRODUCTS = [
  {
    id: 1,
    name: "Flatshoes - Heels Hasya",
    description: "Flatshoes harian elegan dengan nuansa aurora lembut.",
    thumbnail: "image/produk 1-1.jpg",
    sizeVariants: [
      { size: 36, price: 139000, stock: 10 },
      { size: 37, price: 144000, stock: 5 },
      { size: 38, price: 149000, stock: 8 },
      { size: 39, price: 154000, stock: 12 },
      { size: 40, price: 159000, stock: 3 },
      { size: 41, price: 164000, stock: 3 }
    ],
    colors: [
      { name: "Hitam", hex: "#070707ff", image: "image/produk 1-2.jpg" },  
      { name: "Gunmetal", hex: "#44575fff", image: "image/produk 1-3.jpg" },
      { name: "Broken White", hex: "#FFFFF0", image: "image/produk 1-4.jpg" },
      { name: "Burgundy", hex: "#800020", image: "image/produk 1-5.jpg" },
      { name: "Cream", hex: "#FFFDD0", image: "image/produk 1-6.jpg" },
      { name: "Rose Gold", hex: "#B76E79", image: "image/produk 1-7.jpg" }
    ],
    category: "hasya",
    detail: "Bahan kulit sintetis premium dengan sol anti-slip dan insole busa memori.",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Lap dengan kain lembut basah."
  },
  {
    id: 2,
    name: "Flatshoes - Walcoo",
    description: "Flatshoes dengan potongan diamond-cut, memberikan kesan mewah.",
    thumbnail: "image/produk 2-1.jpg",
    sizeVariants: [
      { size: 37, price: 83000, stock: 10 },
      { size: 38, price: 88000, stock: 6 },
      { size: 39, price: 93000, stock: 9 },
      { size: 40, price: 98000, stock: 5 }
    ],
    colors: [
      { name: "Rose Gold", hex: "#B76E79", image: "image/produk 2-2.jpg" },
      { name: "Silver", hex: "#C0C0C0", image: "image/produk 2-3.jpg" },
      { name: "Hitam", hex: "#070707ff", image: "image/produk 2-4.jpg" }
    ],
    category: "walcoo",
    detail: "Desain unik potongan laser. Sempurna untuk acara formal maupun kasual mewah.",
    guide: "Ikuti panduan ukuran standar. Hindari kontak langsung dengan air untuk menjaga potongan tetap presisi."
  },
  {
    id: 3,
    name: "Flatshoes - Zalsa Pita Mini DS 25",
    description: "Produk yang ada di etalase sudah pasti tersedia, jika ada perubahan pesanan, lakukan konfirmasi via chat.",
    thumbnail: "image/produk 3-1.jpg",
    sizeVariants: [
      { size: 37, price: 45000, stock: 9 },
      { size: 38, price: 50000, stock: 10 },
      { size: 39, price: 55000, stock: 7 },
      { size: 40, price: 60000, stock: 4 }
    ],
    colors: [
      { name: "Cokelat", hex: "#77431eff", image: "image/produk 3-2.jpg" },
      { name: "Emas", hex: "#e4c26cff", image: "image/produk 3-3.jpg" },
      { name: "Silver", hex: "#C0C0C0", image: "image/produk 3-4.jpg" },
      { name: "Hitam", hex: "#070707ff", image: "image/produk 3-5.jpg" },
    ],
    category: "zalsa",
    detail: "Dengar Fitur Anti selip, anti air, ringan, ditambah hiasan pita mini, pola polos, dan bahan karet.",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu agar awet cukup lap dengan kain atau tisu basah."
  },
  {
    id: 4,
    name: "Flatshoes - Halona",
    description: "Sempurnakan penampilan cantik kamu setiap hari dengan flatshoes halona yang modis dan nyaman, dan terbuat dari material berkualitas.",
    thumbnail: "image/produk 4-1.jpg",
    sizeVariants: [
      { size: 37, price: 49000, stock: 5 },
      { size: 38, price: 59000, stock: 12 },
      { size: 39, price: 69000, stock: 6 },
      { size: 40, price: 79000, stock: 9 }
    ],
    colors: [
      { name: "Black", hex: "#070707ff", image: "image/image.png" },
      { name: "Burgundy", hex: "#470415ff", image: "image/produk 4-4.jpg" },
      { name: "Cream", hex: "#FFFDD0", image: "image/produk 4-5.jpg" },
    ],
    category: "halona",
    detail: "Material kulit sintesis premium, tipe slip on dan cocok untuk semua musim",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu agar awet cukup lap dengan kain atau tisu basah."
  },
  {
    id: 5,
    name: "Flatshoes - Byonc vanny pita premium",
    description: "Desain polos, fokus pada kenyamanan untuk penggunaan sepanjang hari.",
    thumbnail: "image/produk 5-1.jpg",
    sizeVariants: [
      { size: 37, price: 55000, stock: 13 },
      { size: 38, price: 60000, stock: 10 },
      { size: 39, price: 65000, stock: 11 },
      { size: 40, price: 70000, stock: 7 }
    ],
    colors: [
      { name: "Brown", hex: "#4E3629", image: "image/produk 5-2.jpg" },
      { name: "Gold", hex: "#F6E9C8", image: "image/produk 5-3.jpg" },
      { name: "Black", hex: "#070707ff", image: "image/produk 5-4.jpg" },
      { name: "Pink", hex: "#FFB6C1", image: "image/produk 5-5.jpg" },
      { name: "Macha", hex: "#C8E6C9", image: "image/produk 5-6.jpg" }
    ],
    category: "byonc",
    detail: "Flatshoes dengan fitur anti air, ringan, fleksibel, dengan pola bergaris tipe slip on, dan bahan karet sintesis.",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu agar awet cukup lap dengan kain atau tisu basah."
  },
  {
    id: 6,
    name: "Flatshoes - Sakaki Kalea Sintesis",
    description: "flatshoes kalea cantik yang modis,  dengan bahan berkualitas yang membuat kami merasa nyaman saat memakainya.",
    thumbnail: "image/produk 6-1.jpg",
    sizeVariants: [
      { size: 37, price: 59500, stock: 9 },
      { size: 38, price: 66000, stock: 7 },
      { size: 39, price: 75000, stock: 5 },
      { size: 40, price: 80000, stock: 8 }
    ],
    colors: [
      { name: "Black", hex: "#070707ff", image: "image/produk 6-1.jpg" },
      { name: "Brown", hex: "#4E3629", image: "image/produk 6-2.jpg" },
      { name: "Krem", hex: "#F6E9C8", image: "image/produk 6-3.jpg" }
    ],
    category: "sakita",
    detail: "Kulit sintesis premium dengan pola polos ",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu agar awet cukup lap dengan kain atau tisu basah."
  },
  {
    id: 7,
    name: "Flatshoes - yara footwear sara feminim",
    description: "Sara sintetik dengan list cantik yang menciptakan tampilan feminim dan cocok untuk semua aktivitas",
    thumbnail: "image/produk 7-2.jpg",
    sizeVariants: [
      { size: 37, price: 89000, stock: 7 },
      { size: 38, price: 99000, stock: 10 },
      { size: 39, price: 109000, stock: 6 },
      { size: 40, price: 119000, stock: 9 }
    ],
    colors: [
      { name: "Hitam", hex: "#070707ff", image: "image/produk 7-3.jpg" },
      { name: "Cream List Hitam", hex: "#FFFDD0", image: "image/produk 7-4.jpg" },
      { name: "Mahogany", hex: "#4B1808", image: "image/produk 7-5.jpg" }
    ],
    category: "yara",
    detail: "Dengan bahan premium synthetic leather, pola polos Desain slip-on dengan aksen pita.",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu agar awet cukup lap dengan kain atau tisu basah."
  },
  {
    id: 8,
    name: "Flatshoes - Zalsa Flag Ship DS 09",
    description: "Produk yang ada di etalase sudah pasti tersedia, jika ada perubahan pesanan, lakukan konfirmasi via chat.",
    thumbnail: "image/8tumb.jpg",
    sizeVariants: [
      { size: 37, price: 42900, stock: 8 },
      { size: 38, price: 49000, stock: 7 },
      { size: 39, price: 56000, stock: 10 },
      { size: 40, price: 62900, stock: 4 }
    ],
    colors: [
      { name: "Cokelat", hex: "#754625ff", image: "image/produk 8-1.jpg" },
      { name: "Gold", hex: "#caaf6aff", image: "image/produk 8-2.jpg" },
      { name: "Silver", hex: "#C0C0C0", image: "image/produk 8-3.jpg" },
      { name: "Hitam", hex: "#070707ff", image: "image/produk 8-4.jpg" }
    ],
    category: "zalsa",
    detail: "Dengar Fitur Anti selip, anti air, ringan, ditambah hiasan pita mini, pola solid, dan bahan karet.",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu agar awet cukup lap dengan kain atau tisu basah."
  },
  {
    id: 9,
    name: "Flatshoes - Joana Emine leopard",
    description: "Desain stylish dengan gaya modern dan menarik",
    thumbnail: "image/produk 9-1.jpg",
    sizeVariants: [
      { size: 37, price: 105000, stock: 10 },
      { size: 38, price: 110000, stock: 9 },
      { size: 39, price: 115000, stock: 11 },
      { size: 40, price: 120000, stock: 6 },
      { size: 41, price: 125000, stock: 6 }
    ],
    colors: [
      { name: "Leopard tan", hex: "#C29F6B", image: "image/produk 9-2.jpg" },
      { name: "Brown", hex: "#4E3629", image: "image/produk 9-3.jpg" },
      { name: "Leopard Brown", hex: "#8E6D4E", image: "image/produk 9-4.jpg" },
      { name: "Hitam", hex: "#070707ff", image: "image/produk 9-5.jpg" }
    ],
    category: "joana",
    detail: "Deangan Bahan suede, bantalan empuk, sintesis dengan lapis premium dan pola polos, macan tutul",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Jangan disikat dan di lap dengan kain atau tisu basah."
  },
  {
    id: 10,
    name: "Flatshoes - Locha Greta Feminim",
    description: "Locha Greta - sepatu wanita feminim yang nyaman, cocok dan nyaman untuk aktivitas sehari-hari. ",
    thumbnail: "image/produk 10-1.jpg",
    sizeVariants: [
      { size: 37, price: 121000, stock: 6 },
      { size: 38, price: 126000, stock: 8 },
      { size: 39, price: 129000, stock: 5 },
      { size: 40, price: 132000, stock: 4 },
      { size: 41, price: 135000, stock: 4 }
    ],
    colors: [
      { name: "Ivory", hex: "#FFFFF0", image: "image/produk 10-3.jpg" },
      { name: "Coffe", hex: "#4E3629", image: "image/produk 10-4.jpg" },
      { name: "Pink", hex: "#FFB6C1", image: "image/produk 10-5.jpg" },
    ],
    category: "locha",
    detail: "Denaga desain bunga, fleksibel dan sintesis dan nyaman digunakan sehari-hari",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Gunakan lap untuk membersihkan sepatu dari debu dan kotoran."
  },
  {
    id: 11,
    name: "Flatshoes - Mireya Navisa Basic Collection Pita",
    description: "Mireya flatshoes korean style mengikuti bentuk kaki sehingga nyaman dipakai, dengan pita kecil manis di depan.",
    thumbnail: "image/produk 11-1.jpg",
    sizeVariants: [
      { size: 36, price: 68500, stock: 15 },
      { size: 37, price: 74500, stock: 12 },
      { size: 38, price: 78500, stock: 14 },
      { size: 39, price: 84500, stock: 10 },
      { size: 40, price: 88500, stock: 9 }
    ],
    colors: [
      { name: "Black", hex: "#070707ff", image: "image/produk 11-2.jpg" },
      { name: "Burgundy", hex: "#800020", image: "image/produk 11-3.jpg" },
      { name: "Maroon", hex: "#800000", image: "image/produk 11-4.jpg" },
      { name: "Brown", hex: "#8E6D4E", image: "image/produk 11-5.jpg" },
      { name: "Cream", hex: "#FFFDD0", image: "image/produk 11-6.jpg" },
      { name: "Cokelat Muda", hex: "#d6844aff", image: "image/produk 11-7.jpg" },
      { name: "Navy", hex: "#001F3F", image: "image/produk 11-8.jpg" },
      { name: "Grey", hex: "#D3D3D3", image: "image/produk 11-9.jpg" },
      { name: "Khaki", hex: "#C3B091", image: "image/produk 11-10.jpg" },
    ],
    category: "navisa",
    detail: "Desain korean style dengan bahan bludru velvet stretch(lembut, elastis dan nyaman).",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Tidak disarankan untuk pembersihan dengan disikat"
  },
  {
    id: 12,
    name: "Flatshoes - ELISA Rajut Burkat",
    description: "Flatshoes terbuat dari bahan berkualitas dan lembut, dengan desain simpel dan elegan membuat nyaman saat di gunakan dan tidak membuat kaki lecet.",
    thumbnail: "image/produk 12-1.jpg",
    sizeVariants: [
      { size: 37, price: 85000, stock: 5 },
      { size: 38, price: 90000, stock: 7 },
      { size: 39, price: 95000, stock: 6 },
      { size: 40, price: 100000, stock: 4 }
    ],
    colors: [
      { name: "Hitam", hex: "#070707ff", image: "image/produk 12-2.jpg" },
      { name: "Cream", hex: "#FFFDD0", image: "image/produk 12-3.jpg" },
      { name: "Burgundy", hex: "#800020", image: "image/produk 12-4.jpg" }
    ],
    category: "elisa",
    detail: "Dengan bahan rajut dan sistesis, ujung bulat dan sol empuk memberikan kenyamanan dan cocok digunakan untuk berjalan jalan, bekerja atau acara formal.",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Bersihkan dengan tisu kering, jangan digosok terlalu keras."
  },
  {
    id: 13,
    name: "Flatshoes - Navisa Kotak Glossy",
    description: "Flatshoes dengan kulit sintesis glossy, cantik dan elegan.",
    thumbnail: "image/produk 13-1.jpg",
    sizeVariants: [
      { size: 37, price: 59500, stock: 11 },
      { size: 38, price: 69500, stock: 8 },
      { size: 39, price: 79500, stock: 10 },
      { size: 40, price: 89500, stock: 5 }
    ],
    colors: [
      { name: "Hitam", hex: "#070707ff", image: "image/produk 13-2.jpg" },
      { name: "Brown", hex: "#8E6D4E", image: "image/produk 13-3.jpg" },
      { name: "Burgundy", hex: "#800020", image: "image/produk 13-4.jpg" },
      { name: "Coksu", hex: "#D2B48C", image: "image/produk 13-5.jpg" },
      { name: "Cream", hex: "#FFFDD0", image: "image/produk 13-6.jpg" },
      { name: "Silver", hex: "#C0C0C0", image: "image/produk 13-7.jpg" },
      { name: "Lilac", hex: "#C8A2C8", image: "image/produk 13-8.jpg" },
      { name: "Peach", hex: "#FFDAB9", image: "image/produk 13-9.jpg" }
    ],
    category: "navisa",
    detail: "Dengan karakter classy, elegant dan simpel bisa menjadi pilihan para wanita untuk berkarir, ke berbagai acara ataupun hangout dengan bestie. Outfit dress/jeans bisa jadi perpaduan yang cocok.",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Bersihkan dengan tisu basah, jangan disikat."
  },
  {
    id: 14,
    name: "Flatshoes - Zalsa Flag Ship DS 22",
    description: "Flatshoes selop wanita, cocok untuk acara formal.",
    thumbnail: "image/produk 14-1.jpg",
    sizeVariants: [
      { size: 37, price: 42900, stock: 9 },
      { size: 38, price: 45900, stock: 11 },
      { size: 39, price: 48900, stock: 7 },
      { size: 40, price: 52900, stock: 6 }
    ],
    colors: [
      { name: "Hitam", hex: "#070707ff", image: "image/produk 14-2.jpg" },
      { name: "Cokelat", hex: "#8a5826ff", image: "image/produk 14-3.jpg" },
      { name: "Silver", hex: "#C0C0C0", image: "image/produk 14-4.jpg" },
      { name: "Emas", hex: "#ccb270ff", image: "image/produk 14-5.jpg" }
    ],
    category: "zalsa",
    detail: "Desain dengan fitur anti air, ringan dan fleksibel dengan hiasan gesper, bahan karet, sintesis, pola solid, dan tinggi hak 0-2cm.",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu cukup lap noda dengan kain atau tisu basah."
  },
  {
    id: 15,
    name: "Flatshoes - Estunice Alexa",
    description: "Sepatu dengan tampilan cantik, cocok untuk keseharian denagan modis dan nyaman.",
    thumbnail: "image/produk 15-1.jpg",
    sizeVariants: [
      { size: 37, price: 55000, stock: 8 },
      { size: 38, price: 60000, stock: 5 },
      { size: 39, price: 65000, stock: 9 },
      { size: 40, price: 70000, stock: 4 }
    ],
    colors: [
      { name: "Burgundy", hex: "#800020", image: "image/produk 15-2.jpg" },
      { name: "Black", hex: "#000000", image: "image/produk 15-3.jpg" }
    ],
    category: "estunice",
    detail: "Dengan bahan kulit sintesis premium, fitur ringan, anti selip dan fleksibel, cocok untuk keseharian.",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu cukup lap noda dengan kain atau tisu basah."
  },
  {
    id: 16,
    name: "Flatshoes - Erakino Sasha Glossy Elegan",
    description: "Flatshoes wanita glossy elegan dari erakino yang modis dan nyaman digunakan.",
    thumbnail: "image/produk 16-1.jpg",
    sizeVariants: [
      { size: 37, price: 48900, stock: 15 },
      { size: 38, price: 53900, stock: 10 },
      { size: 39, price: 56900, stock: 11 },
      { size: 40, price: 58900, stock: 8 },
      { size: 41, price: 63900, stock: 12 }
    ],
    colors: [
      { name: "Hitam", hex: "#000000", image: "image/produk 16-1.jpg" },
      { name: "Burgundy", hex: "#800020", image: "image/produk 16-2.jpg" },
      { name: "Mahogani", hex: "#803030", image: "image/produk 16-3.jpg" }
    ],
    category: "erakino",
    detail: "Ujunga lancip dengan bahan kulit sintesis premium, non slip membuat kamu merasa nyaman saat memakainya.",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu cukup lap noda dengan kain atau tisu basah."
  },
  {
    id: 17,
    name: "Flatshoes - Navisa Basic collection Motif Gelombang",
    description: "Sepatu Navisa Basic collection Motif Gelombang super empuk dengan bahan suede.",
    thumbnail: "image/produk 17-1.jpg",
    sizeVariants: [
      { size: 37, price: 57500, stock: 7 },
      { size: 38, price: 60000, stock: 9 },
      { size: 39, price: 63500, stock: 6 },
      { size: 40, price: 67500, stock: 5 }
    ],
    colors: [
      { name: "Black", hex: "#000000", image: "image/produk 17-2.jpg" },
      { name: "Cream List Hitam", hex: "#FFFDD0", image: "image/produk 17-3.jpg" },
      { name: "Salem", hex: "#FFB997", image: "image/produk 17-4.jpg" },
      { name: "Maron", hex: "#800000", image: "image/produk 17-5.jpg" },
      { name: "Moca", hex: "#8E6D4E", image: "image/produk 17-6.jpg" },
      { name: "Cream Polos", hex: "#FFFDD0", image: "image/produk 17-7.jpg" },
      { name: "Grey", hex: "#D3D3D3", image: "image/produk 17-8.jpg" },
      { name: "Camel", hex: "#af732aff", image: "image/produk 17-9.jpg" }
    ],
    category: "navisa",
    detail: "Denagan gaya anggun, korea, minimalis, pola bergaris, bahan sintesis memberikan rasa nyaman saat digunakan.",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu cukup lap noda dengan kain atau tisu basah."
  },
  {
    id: 18,
    name: "Flatshoes - Misoka Renda Slip On ",
    description: "Sepatu Misoka Renda Slip On Wanita Kekinian.",
    thumbnail: "image/produk 18-1.jpg",
    sizeVariants: [
      { size: 37, price: 66000, stock: 15 },
      { size: 38, price: 69000, stock: 16 },
      { size: 39, price: 73000, stock: 14 },
      { size: 40, price: 76000, stock: 12 },
      { size: 41, price: 79000, stock: 0 }
    ],
    colors: [
      { name: "Hitam", hex: "#000000", image: "image/produk 18-2.jpg" },
      { name: "Cream", hex: "#FFFDD0", image: "image/produk 18-3.jpg" },
      { name: "Mocca", hex: "#925216ff", image: "image/produk 18-4.jpg" }
    ],
    category: "misoka",
    detail: "Desain polos dengan gaya anggun dan simpel. Ringan dan sangat fleksibel. Dengan bahan synthetic leater premium dan hiasan simpul.",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu cukup lap noda dengan kain atau tisu basah."
  },
  {
    id: 19,
    name: "Flatshoes - ReStories Motif Pita Tali GSPER",
    description: "Sepatu Motif Pita Tali GSPER soll karet anti slip trendy.",
    thumbnail: "image/produk 19-2.jpg",
    sizeVariants: [
      { size: 37, price: 35000, stock: 9 },
      { size: 38, price: 40000, stock: 8 },
      { size: 39, price: 45000, stock: 10 },
      { size: 40, price: 50000, stock: 7 }
    ],
    colors: [
      { name: "Black", hex: "#000000", image: "image/produk 19-2.jpg" },
      { name: "Maron", hex: "#800000", image: "image/produk 19-3.jpg" },
      { name: "Crem", hex: "#d8c187ff", image: "image/produk 19-4.jpg" }
    ],
    category: "restories",
    detail: "deasin polos dengan fitur ringan, hiasan : manik manik, pola paisley, ujung lancip tipe : slip on dan bahan : sintesis.",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu cukup lap noda dengan kain atau tisu basah."
  },
  {
    id: 20,
    name: "Flatshoes - Valendino Motif Bunga Pita",
    description: "Valendino sepatu wanita motif bunga pita Kulit sintesis antiselip full busa.",
    thumbnail: "image/produk 20-1.jpg",
    sizeVariants: [
      { size: 37, price: 44000, stock: 13 },
      { size: 38, price: 48000, stock: 0 },
      { size: 39, price: 52000, stock: 10 },
      { size: 40, price: 56000, stock: 8 },
      { size: 41, price: 58000, stock: 11 },
    ],
    colors: [
      { name: "Cream", hex: "#FFFDD0", image: "image/produk 20-2.jpg" },
      { name: "Hitam", hex: "#000000", image: "image/produk 20-3.jpg" }
    ],
    category: "valendino",
    detail: "Desain : pita, dengan fitur : fleksibel, ringan, antiselip, dengan hiasan anyaman pita, ujung lancip dari bahan karet, kulit.",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu cukup lap noda dengan kain atau tisu basah."
  },
  {
    id: 21,
    name: "Flatshoes - Valendino Kulit Sintesis",
    description: "Valendino sepatu wanita Kulit sintesis anti-slip, comfortable & stylish dengan busa empuk dan desain cantik.",
    thumbnail: "image/produk 21-1.jpg",
    sizeVariants: [
      { size: 37, price: 44400, stock: 4 },
      { size: 38, price: 48000, stock: 6 },
      { size: 39, price: 52000, stock: 3 },
      { size: 40, price: 55000, stock: 7 },
      { size: 41, price: 58000, stock: 5 }
    ],
    colors: [
      { name: "Cream", hex: "#FFFDD0", image: "image/produk 21-2.jpg" },
      { name: "Hitam", hex: "#000000", image: "image/produk 21-3.jpg" }
    ],
    category: "valendino",
    detail: "Desain : polos, dengan fitur : fleksibel, ringan, antiselip, dengan hiasan anyaman kupu kupu, ujung lancip dari bahan karet, kulit.",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu cukup lap noda dengan kain atau tisu basah."
  },
  {
    id: 22,
    name: "Flatshoes - Byonc Ballerina",
    description: "Sepatu byonc ballerina wanita olivia mutiara korea premium.",
    thumbnail: "image/produk 22-1.jpg",
    sizeVariants: [
      { size: 37, price: 64800, stock: 5 },
      { size: 38, price: 68800, stock: 8 },
      { size: 39, price: 72800, stock: 6 },
      { size: 40, price: 74800, stock: 4 }
    ],
    colors: [
      { name: "Beige", hex: "#F5F5DC", image: "image/produk 22-2.jpg" },
      { name: "Cream", hex: "#FFFDD0", image: "image/produk 22-3.jpg" },
      { name: "Brown", hex: "#d48235ff", image: "image/produk 22-4.jpg" }
    ],
    category: "byonc",
    detail: "Desain bunga, dengan fitur : fleksibel, ringan dan anti air, Hiasan : mutiara imitasi, pola : bunga, dan bahan karet, sintesis.",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu cukup lap noda dengan kain atau tisu basah."
  },
  {
    id: 23,
    name: "Flatshoes - Mokaya Glossy tali gesper",
    description: "Sepatu heels jelly wedges wanita glossy, elegant trendy import.",
    thumbnail: "image/produk 23-1.jpg",
    sizeVariants: [
      { size: 37, price: 45000, stock: 9 },
      { size: 38, price: 50000, stock: 11 },
      { size: 39, price: 55000, stock: 8 },
      { size: 40, price: 60000, stock: 5 },
      { size: 41, price: 65000, stock: 10 }
    ],
    colors: [
      { name: "Cream Muda", hex: "#f8f6d5ff", image: "image/produk 23-2.jpg" },
      { name: "Cokelat", hex: "#f0c8a0ff", image: "image/produk 23-3.jpg" },
      { name: "Hitam", hex: "#000000", image: "image/produk 23-4.jpg" }
    ],
    category: "mokaya",
    detail: "Dengan bahan karet, tinggi hak : 2,5cm, model polos, dan tali gesper bulat kecil formal.",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu cukup lap noda dengan kain atau tisu basah."
  },
  {
    id: 24,
    name: "Flatshoes - Cheung Kuedz Variasi Tali Stretch",
    description: "Cheung Kuedz Variasi Tali Stretch, empuk dengan bantalan tebal dan bahan karet anti licin.",
    thumbnail: "image/produk 24-1.jpg",
    sizeVariants: [
      { size: 37, price: 79000, stock: 10 },
      { size: 38, price: 89000, stock: 9 },
      { size: 39, price: 99000, stock: 11 },
      { size: 40, price: 109000, stock: 7 },
      { size: 41, price: 119000, stock: 12 }
    ],
    colors: [
      { name: "Hitam", hex: "#000000", image: "image/produk 24-2.jpg" },
      { name: "Krem", hex: "#d8c187ff", image: "image/produk 24-3.jpg" },
      { name: "Bronze", hex: "#b96816ff", image: "image/produk 24-4.jpg" }
    ],
    category: "cheung",
    detail: "Desain polos dengan fitur anti air, ringan, anti selip, tipe gesper dan cocok untuk acara pernikahan",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu cukup lap noda dengan kain atau tisu basah."
  },
  {
    id: 25,
    name: "Flatshoes - Urban&CO Basic Mary Jane Ballet",
    description: "Flatshoes Mary Jane Ballet korean style dan modern.",
    thumbnail: "image/produk 25-1.jpg",
    sizeVariants: [
      { size: 35, price: 145000, stock: 0 },
      { size: 36, price: 150000, stock: 6 },
      { size: 37, price: 155000, stock: 7 },
      { size: 38, price: 160000, stock: 5 },
      { size: 39, price: 165000, stock: 8 },
      { size: 40, price: 170800, stock: 4 },
      { size: 41, price: 175000, stock: 9 }
    ],
    colors: [
      { name: "Black", hex: "#000000", image: "image/produk 25-2.jpg" },
      { name: "Brown", hex: "#d48235ff", image: "image/produk 25-3.jpg" },
      { name: "Green", hex: "#b4e6b4ff", image: "image/produk 25-4.jpg" },
      { name: "Grey", hex: "#D3D3D3", image: "image/produk 25-5.jpg" },
      { name: "Pink", hex: "#FFB6C1", image: "image/produk 25-6.jpg" }
    ],
    category: "urban",
    detail: "Mary jane dengan gaya edgy yang tetap nyaman digunakan seharian, dengan double strap, bahan lentur dan ringan bikin bebas bergerak dan cocok untuk hangout, jalan-jalan atau ke mall.",
    guide: "Panjang kaki diukur dari ujung tumit hingga ujung jempol."
  },
  {
    id: 26,
    name: "Flatshoes - Walcoo Gennie Ballet Modern",
    description: "Sepatu walcoo balet dengan pita yang manis, ringan dan fleksibel, dengan gaya feminim tapi tetap simpel dan terinspirasi dari sepatu ballet klasik.",
    thumbnail: "image/produk 26-1.jpg",
    sizeVariants: [
      { size: 37, price: 81000, stock: 14 },
      { size: 38, price: 86000, stock: 16 },
      { size: 39, price: 91000, stock: 0 },
      { size: 40, price: 96000, stock: 10 }
    ],
    colors: [
      { name: "Black", hex: "#000000", image: "image/produk 26-2.jpg" },
      { name: "Silver", hex: "#C0C0C0", image: "image/produk 26-3.jpg" }
    ],
    category: "walcoo",
    detail: "Sangat ringan dengan model klasik modern, ujung kotak dan pita manis. Cocok untuk penggunaan harian santai.",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu cukup lap noda dengan kain atau tisu basah."
  },
  {
    id: 27,
    name: "Flatshoes - DF.id Zena Ballet",
    description: "Sepatu dengan bahan berkualitas sehingga nyaman digunakan dan tahan lama.",
    thumbnail: "image/produk 27-1.jpg",
    sizeVariants: [
      { size: 37, price: 59000, stock: 9 },
      { size: 38, price: 65000, stock: 11 },
      { size: 39, price: 69000, stock: 8 },
      { size: 40, price: 75000, stock: 7 }
    ],
    colors: [
      { name: "Hitam", hex: "#000000", image: "image/produk 27-2.jpg" },
      { name: "Maroon", hex: "#800000", image: "image/produk 27-3.jpg" },
      { name: "Krem", hex: "#d8c187ff", image: "image/produk 27-4.jpg" }
    ],
    category: "dfzena",
    detail: "Dengan fitur : fleksibel, ringan, dan anti selip, gaya : anggun, Bahan : Kulit sintetis premium.",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu cukup lap noda dengan kain atau tisu basah."
  },
  {
    id: 28,
    name: "Flatshoes - Sakaki Baleva Bludru",
    description: "Flatshoes wanita Sakaki Baleva Bludru cantik yang modis dan nyaman digunakan.",
    thumbnail: "image/produk 28-1.jpg",
    sizeVariants: [
      { size: 37, price: 55000, stock: 7 },
      { size: 38, price: 60000, stock: 9 },
      { size: 39, price: 65000, stock: 6 },
      { size: 40, price: 70000, stock: 5 }
    ],
    colors: [
      { name: "Hitam", hex: "#000000", image: "image/produk 28-2.jpg" },
      { name: "Hitam list Putih", hex: "#e4e3e0ff", image: "image/produk 28-3.jpg" },
      { name: "Mahogany list putih", hex: "#834103ff", image: "image/produk 28-4.jpg" }
    ],
    category: "sakaki",
    detail: "Material : Kulit Sintetis Premium, Sol : Non Slip, Hiasan Pita, Pola : Paisley, Ujung Bulat, dan bahan Bludru.",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu cukup lap noda dengan kain atau tisu basah."
  },
  {
    id: 29,
    name: "Flatshoes - ReStories motif pita trendy",
    description: "Sepatu ReStories motif pita trendy dengan material atas lapis PU leather premium memberikan kenyamanan saat memakainya",
    thumbnail: "image/produk 29-1.jpg",
    sizeVariants: [
      { size: 37, price: 40000, stock: 12 },
      { size: 38, price: 45000, stock: 10 },
      { size: 39, price: 50000, stock: 11 },
      { size: 40, price: 55000, stock: 9 }
    ],
    colors: [
      { name: "Crem", hex: "#d8c187ff", image: "image/produk 29-2.jpg" },
      { name: "Pink", hex: "#FFB6C1", image: "image/produk 29-3.jpg" },
      { name: "Coklat", hex: "#964B00", image: "image/produk 29-4.jpg" },
      { name: "Hitam", hex: "#000000", image: "image/produk 29-5.jpg" }
    ],
    category: "restories",
    detail: "Desain polos, ringan dengan hiasan manink-manik, mengikuti bentuk kaki(round toe). Ujung sepatu tidak kaku.",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu cukup lap noda dengan kain atau tisu basah."
  },
  {
    id: 30,
    name: "Flatshoes - ReStories Motif Pita Latfrom Sol Karet",
    description: "Sepatu dengan motif tali pita tipis yang elegan, cocok digunakan untuk berbagai acara.",
    thumbnail: "image/produk 30-1.jpg",
    sizeVariants: [
      { size: 37, price: 40000, stock: 10 },
      { size: 38, price: 45000, stock: 8 },
      { size: 39, price: 50000, stock: 7 },
      { size: 40, price: 55000, stock: 6 }
    ],
    colors: [
      { name: "Hitam", hex: "#000000", image: "image/produk 30-2.jpg" },
      { name: "Mocca", hex: "#925216ff", image: "image/produk 30-3.jpg" },
      { name: "Crem", hex: "#d8c187ff", image: "image/produk 30-4.jpg" },
      { name: "Marun", hex: "#800000", image: "image/produk 30-5.jpg" }
    ],
    category: "restories",
    detail: "Desain polos, ringan, Tali pita tipis elegan. Klasik dan anggun. Dan Bahan : Sintetis dengan ujung agak kotak",
    guide: "Ukur kaki Anda dari ujung ibu jari hingga tumit. Jika berada di antara dua ukuran, pilih ukuran yang lebih besar. Perawatan: Untuk menjaga kondisi sepatu cukup lap noda dengan kain atau tisu basah."
  },
];

const ADMIN_WA_NUMBER = "6282146502145"; 

// cart state: array of {id,name,price,color,size,qty,subtotal,img}
let cart = [];

// UI refs
  const grid = document.getElementById('productGrid');
  const searchInput = document.getElementById('search');
  const priceRange = document.getElementById('priceRange');
  const priceLabel = document.getElementById('priceLabel');
  const categorySelect = document.getElementById('category');
  const sizeFiltersWrap = document.getElementById('sizeFilters');
  const resetFiltersBtn = document.getElementById('resetFilters');

  // REFERENCE BARU UNTUK ELEMENT DRAWER (MODAL)
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalEl = document.getElementById('modalEl'); // PENTING: ID BARU PADA DIV CLASS="modal"
  const modalClose = document.getElementById('modalClose');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalDesc = document.getElementById('modalDesc');

  // GALERI/SWIPE REFS BARU
  const modalImgWrap = document.getElementById('modalImgWrap');
  const modalScroller = document.getElementById('modalImgScroller'); // <-- REFFERENSI SCROLLER BARU
  
  const modalColors = document.getElementById('modalColors');
  const modalSizes = document.getElementById('modalSizes');
  const modalAdd = document.getElementById('modalAdd');
  const modalBuy = document.getElementById('modalBuy');
  const qtyMinus = document.getElementById('qtyMinus');
  const qtyPlus = document.getElementById('qtyPlus');
  const qtyVal = document.getElementById('qtyVal');
  const cartCount = document.getElementById('cartCount');
  const cartBtn = document.getElementById('cartBtn');
  const modalCat = document.getElementById('modalCat'); 

  // NEW Modal Refs (Tabs)
  const modalStock = document.getElementById('modalStock');
  const modalDetail = document.getElementById('modalDetail');
  const modalGuide = document.getElementById('modalGuide');
  const modalDescTab = document.getElementById('modalDescTab');
  const modalDetailTab = document.getElementById('modalDetailTab');
  const modalGuideTab = document.getElementById('modalGuideTab');

  // Cart Drawer Refs
  const cartDrawer = document.getElementById('cartDrawer');
  const cartItemsWrap = document.getElementById('cartItems');
  const cartTotalEl = document.getElementById('cartTotal');
  const clearCartBtn = document.getElementById('clearCartBtn');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const closeCartBtn2 = document.getElementById('closeCartBtn2');
  const checkoutBtn = document.getElementById('checkoutBtn');

  // Filter state
  let activeSizes = new Set();
  let activeCategory = 'all';
  let maxPrice = Number(priceRange.value);
  priceLabel.innerText = `Sampai: ${fmt(maxPrice)}`;

  // NEW Modal State
  let currentProduct = null;
  
  // SWIPE STATE BARU
  let currentImgIndex = 0; 
  let currentImages = []; 

  // Variabel untuk Swipe Sentuh
  let touchstartX = 0;
  let touchendX = 0;
  const SWIPE_THRESHOLD = 50; 
  
  let currentSelectedColor = null; // New state for selected color object { name: N, hex: N, image: N }
  let currentSelectedSizeData = null; // { size: N, price: N, stock: N }
  let currentSelectedSize = null;
  let currentQty = 1;

// ===================================================================
// FUNGSI BARU: GENERATE WHATSAPP LINK
// ===================================================================

function generateWhatsAppLink(cartItems, isSingleItem = false) {
    let message = isSingleItem ? 
        "Halo, saya ingin memesan produk berikut:\n\n" : 
        "Halo Vebronia, saya ingin melakukan checkout pesanan dengan rincian:\n\n";
    let total = 0;

    cartItems.forEach((item, index) => {
        // Harga (ci.price) sudah tersedia di item keranjang/single item
        const itemPrice = item.price || item.subtotal / item.qty;
        const subtotal = item.qty * itemPrice;
        total += subtotal;

        message += `${index + 1}. *${item.name}* (${item.color}) - Size ${item.size}\n`;
        message += `   Qty: ${item.qty} × ${fmt(itemPrice)}\n`; 
        message += `   Subtotal: ${fmt(subtotal)}\n`;
    });

    if (!isSingleItem) {
        message += `\n--- Total Pesanan: ${fmt(total)} ---\n`;
        message += "\nMohon konfirmasi ketersediaan stok, total pembayaran, dan ongkos kirim. Terima kasih.";
    } else {
        message += "\nMohon konfirmasi ketersediaan stok, total harga, dan ongkos kirim. Terima kasih.";
    }

    return `https://wa.me/${ADMIN_WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

// load cart from localStorage if present
function loadCart(){
  try{
    const raw = localStorage.getItem('aurora_cart_v1');
    if(raw){
      cart = JSON.parse(raw);
    } else cart = [];
  }catch(e){
    cart = [];
  }
}
function saveCart(){
  localStorage.setItem('aurora_cart_v1', JSON.stringify(cart));
}

// MODIFIED: Fungsi untuk mencari data ukuran spesifik (harga & stok)
// Sekarang hanya mencari di sizeVariants, karena harga/stok tidak bergantung pada warna
function findSizeData(product, colorName, size) {
    if (!product.sizeVariants) return null;
    return product.sizeVariants.find(s => String(s.size) === String(size));
}

// NEW: Fungsi untuk mendapatkan rentang harga
function getPriceRange(product) {
    // FIX: Menggunakan product.sizeVariants BUKAN product.variants
    if (!product.sizeVariants || product.sizeVariants.length === 0) return fmt(0);
    
    // FIX: Ambil harga langsung dari sizeVariants
    const allPrices = product.sizeVariants.map(s => s.price);
    
    if (allPrices.length === 0) return fmt(0);
    const min = Math.min(...allPrices);
    const max = Math.max(...allPrices);
    return min === max ? fmt(min) : `${fmt(min)} - ${fmt(max)}`;
}

// MODIFIED: populate size filters from product sizes (unique)
// Menggunakan sizeVariants dari semua produk
const allSizes = Array.from(new Set(PRODUCTS.flatMap(p => p.sizeVariants.map(s => s.size)))).sort((a,b)=>a-b);
allSizes.forEach(size=>{
  const btn = document.createElement('button');
  btn.className = 'size-btn';
  btn.innerText = size;
  btn.dataset.size = size;
  btn.onclick = ()=>{
    if(activeSizes.has(String(size))) { activeSizes.delete(String(size)); btn.classList.remove('selected'); }
    else { activeSizes.add(String(size)); btn.classList.add('selected'); }
    applyFilters();
  };
  sizeFiltersWrap.appendChild(btn);
});

// price range change
priceRange.addEventListener('input', e=>{
  maxPrice = Number(e.target.value);
  priceLabel.innerText = `Sampai: ${fmt(maxPrice)}`;
  applyFilters();
});

categorySelect.addEventListener('change', e=>{
  activeCategory = e.target.value;
  applyFilters();
});

resetFiltersBtn.addEventListener('click', ()=>{
  activeSizes.clear();
  document.querySelectorAll('.size-btn').forEach(b=>b.classList.remove('selected'));
  categorySelect.value = 'all';
  priceRange.value = priceRange.max;
  maxPrice = Number(priceRange.value);
  priceLabel.innerText = `Sampai: ${fmt(maxPrice)}`;
  searchInput.value = '';
  applyFilters();
});

// search
searchInput.addEventListener('input', ()=> applyFilters());

// render products with click to open modal
function renderProducts(list){
  grid.innerHTML = "";
  // ... (kode list.length === 0)
  list.forEach(p=>{
    const card = document.createElement('div');
    card.className = 'card';
    const priceDisplay = getPriceRange(p); 
    
    // Kode HTML kartu dikembalikan ke format yang menggunakan p.thumbnail
    card.innerHTML = `
      <div class="thumb"> <img src="${p.thumbnail}" alt="${p.name} image" draggable="false">
      </div>
      <div class="meta">
        <div>
          <div class="product-name">${p.name}</div>
          <div style="font-size:0.86rem;color:var(--gold);opacity:0.8">Kategori: ${p.category || 'N/A'}</div> 
        </div>
        <div class="price">${priceDisplay}</div>
      </div>
      <button class="add" data-id="${p.id}">Detail & Beli</button>
    `;

    // card click opens detail modal (except clicking add button or swiping/clicking image)
    card.addEventListener('click', (ev)=>{
      // Tambahkan ev.target.tagName === 'IMG' agar klik pada gambar (saat swipe) tidak membuka modal
      if(ev.target && (ev.target.classList.contains('add') || ev.target.tagName === 'IMG')) return; 
      openModal(p.id);
    });
    // add button — now opens modal (require selection)
    card.querySelector('.add').addEventListener('click', (ev)=>{
      ev.stopPropagation();
      openModal(p.id);
    });
    grid.appendChild(card);
  });
}

// apply filters + search
function applyFilters(){
  const q = searchInput.value.trim().toLowerCase();
  let filtered = PRODUCTS.filter(p => {
    // FIX 1: Menggunakan p.sizeVariants untuk filter harga (CRITICAL FIX)
    const maxVariantPrice = Math.max(...p.sizeVariants.map(s => s.price));
    return maxVariantPrice <= maxPrice;
  });
  
  if(activeCategory !== 'all') filtered = filtered.filter(p => p.category === activeCategory);
  
  if(activeSizes.size > 0){
    // FIX 2: Menggunakan p.sizeVariants untuk filter ukuran
    filtered = filtered.filter(p => p.sizeVariants.some(s => activeSizes.has(String(s.size))));
  }
  
  // FIX 3: Menggunakan p.description, bukan p.desc (sesuai data Anda)
  if(q) filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || (p.description && p.description.toLowerCase().includes(q)));
  
  renderProducts(filtered);
}

// FUNGSI BARU DARI PERMINTAAN USER: Menangani pemilihan ukuran di Modal/Drawer
function handleSizeSelection(productId, selectedSize) {
    // 1. Cari Produk
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    // 2. Cari Objek Varian Ukuran yang sesuai dari sizeVariants
    const sizeData = product.sizeVariants.find(sv => String(sv.size) === String(selectedSize));

    // 3. Update Tampilan Harga & Stok
    if (sizeData) {
        currentSelectedSize = selectedSize;

        // Panggil fungsi update untuk merender DOM
        updateModalPriceAndStock(sizeData);

        // Update tampilan tombol ukuran (selection)
        document.querySelectorAll('#modalSizes .size-btn').forEach(x => x.classList.remove('selected'));
        // NOTE: Harus ada elemen tombol dengan data-size yang sesuai di HTML modal
        const selectedButton = document.querySelector(`#modalSizes .size-btn[data-size="${selectedSize}"]`);
        if (selectedButton) {
             selectedButton.classList.add('selected');
        }

    } else {
        // Jika ukuran tidak ditemukan (harusnya tidak terjadi)
        updateModalPriceAndStock(null);
        document.getElementById('modalStock').innerText = 'Data ukuran tidak valid.';
    }
}


// NEW: Fungsi untuk update harga dan stok di modal
function updateModalPriceAndStock(sizeData){
    if(sizeData){
        currentSelectedSizeData = sizeData;
        modalPrice.innerText = fmt(sizeData.price);
        
        qtyPlus.disabled = sizeData.stock === 0 || currentQty >= sizeData.stock;
        
        // Reset Qty jika melebihi stok yang baru dipilih
        if(currentQty > sizeData.stock) currentQty = sizeData.stock > 0 ? 1 : 0;
        
        modalStock.innerHTML = sizeData.stock > 0 
            ? `<span style="color:var(--cyan);font-weight:700;">Tersedia (${sizeData.stock})</span>`
            : `<span style="color:var(--purple);font-weight:700;">Stok Habis</span>`;
        modalAdd.disabled = sizeData.stock === 0;
        modalBuy.disabled = sizeData.stock === 0;
    } else {
        currentSelectedSizeData = null;
        modalPrice.innerText = 'IDR —';
        modalStock.innerHTML = `<span style="color:var(--gold);opacity:0.8;">Pilih ukuran</span>`;
        modalAdd.disabled = true;
        modalBuy.disabled = true;
        qtyPlus.disabled = true;
    }
    // Perbarui tombol +/- qty
    qtyMinus.disabled = currentQty <= 1;
    qtyVal.innerText = currentQty;
}

// MODIFIED: Fungsi untuk render ukuran (Hanya menggunakan sizeVariants)
function renderModalSizes(product){
    modalSizes.innerHTML = "";
    currentSelectedSizeData = null;
    currentSelectedSize = null;
    currentQty = 1; // Reset Qty
    
    if(product.sizeVariants.length > 0){
        product.sizeVariants.forEach((sizeData)=>{
            const s = sizeData.size;
            const b = document.createElement('button');
            b.className = 'size-btn';
            b.innerText = s;
            b.dataset.size = s;
            
            if(sizeData.stock === 0) {
                b.style.opacity = '0.5';
                b.style.textDecoration = 'line-through';
                b.disabled = true;
            }
            
            // PENTING: Gunakan fungsi handleSizeSelection untuk menangani klik ukuran
            b.onclick = ()=>{
                handleSizeSelection(product.id, s);
            };
            modalSizes.appendChild(b);
        });
    } else {
        modalSizes.innerHTML = '<div class="muted">Ukuran tidak tersedia</div>';
    }
    // Update harga/stok default (none selected)
    updateModalPriceAndStock(null);
}

// NEW: Fungsi untuk mengaktifkan tab di modal
function setActiveTab(activeEl, contentEl){
  // Reset semua tab
  [modalDescTab, modalDetailTab, modalGuideTab].forEach(t => {
      t.classList.remove('selected');
      t.style.fontWeight = 600;
      t.style.borderBottom = '2px solid transparent';
  });
  [modalDesc, modalDetail, modalGuide].forEach(c => c.style.display = 'none');
  
  // Aktifkan tab yang dipilih
  activeEl.classList.add('selected');
  activeEl.style.fontWeight = 700;
  activeEl.style.borderBottom = '2px solid var(--cyan)';
  contentEl.style.display = 'block';
}


// MODIFIED: FUNGSI openModal DIUBAH AGAR SESUAI DENGAN STRUKTUR BARU
function openModal(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  
  currentProduct = p;
  currentSelectedColor = p.colors[0]; // Set default warna pertama
  currentSelectedSizeData = null;
  currentSelectedSize = null;
  currentQty = 1;

  // fill modal
  modalTitle.innerText = p.name;
  modalCat.innerText = p.category;
  
  // PERUBAHAN: Membuat galeri gambar (swipeable) dari semua gambar varian warna
  const modalImagesHtml = p.colors.map(c => 
      `<img src="${c.image}" alt="${p.name} - ${c.name} image">`
  ).join('');

  // modalImgWrap sekarang menjadi container scroller
  modalImgWrap.innerHTML = `<div class="scroller" id="modalImageScroller" style="height:100%; width:100%;">${modalImagesHtml}</div>`; 
  
  // Set konten detail produk
  modalDesc.innerText = p.description;
  modalDetail.innerText = p.detail;
  modalGuide.innerText = p.guide;
  setActiveTab(modalDescTab, modalDesc); // Set tab default
  
  // colors
  modalColors.innerHTML = "";
  // Iterasi melalui p.colors (bukan p.variants)
  p.colors.forEach((c, idx)=>{
    const sw = document.createElement('div');
    sw.className = 'color-swatch';
    sw.title = c.name;
    sw.style.background = c.hex;
    sw.dataset.color = c.name;
    if(idx===0) sw.classList.add('selected');
    sw.addEventListener('click', ()=>{
      document.querySelectorAll('.color-swatch').forEach(n=>n.classList.remove('selected'));
      sw.classList.add('selected');
      currentSelectedColor = c;
      
      // Pindah posisi scroller gambar ke gambar warna yang sesuai
      const scroller = document.getElementById('modalImageScroller');
      if (scroller) {
          const imageIndex = p.colors.findIndex(color => color.name === c.name);
          scroller.scrollLeft = scroller.offsetWidth * imageIndex; 
      }
      
      // Tidak perlu merender ulang ukuran, tetapi bisa mereset pilihan
      // renderModalSizes(p); // (Opsional: Mereset pilihan ukuran saat ganti warna)
      // Jika tidak direset, kita hanya perlu menghapus pilihan yang ada:
      document.querySelectorAll('#modalSizes .size-btn').forEach(x=>x.classList.remove('selected'));
      updateModalPriceAndStock(null);
    });
    modalColors.appendChild(sw);
  });

  // Initial size render and price/stock update
  // MODIFIED: Panggil renderModalSizes tanpa varian group
  renderModalSizes(p);
  
  // Qty handlers (updated to check stock)
  qtyMinus.onclick = ()=>{
    if(currentQty > 1) currentQty--;
    updateModalPriceAndStock(currentSelectedSizeData);
  };
  qtyPlus.onclick = ()=>{
    if(currentSelectedSizeData && currentQty < currentSelectedSizeData.stock) currentQty++;
    updateModalPriceAndStock(currentSelectedSizeData);
  };

  // LOGIC BARU UNTUK DRAWER
  modalBackdrop.classList.add('open');
  modalEl.classList.add('open');
  modalBackdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

// FUNGSI closeModal DIUBAH MENJADI CLOSE DRAWER
function closeModal(){
  modalBackdrop.classList.remove('open');
  modalEl.classList.remove('open');
  // Beri jeda agar animasi selesai sebelum menghapus overflow
  setTimeout(() => {
      modalBackdrop.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      currentProduct = null;
  }, 400); 
}

// ===================================================================
  // === LOGIKA GALERI GAMBAR & SWIPE SENTUH BARU ===
  // ===================================================================

  // Fungsi untuk menggeser gambar (dipanggil oleh tombol navigasi dan swipe)
  function slideImg(n) {
    let nextIndex = currentImgIndex + n;

    if (nextIndex >= currentImages.length) {
      nextIndex = 0; // Kembali ke gambar pertama
    } else if (nextIndex < 0) {
      nextIndex = currentImages.length - 1; // Kembali ke gambar terakhir
    }
    
    currentImgIndex = nextIndex;
    
    // Geser wadah gambar (modalImgWrap)
    // NOTE: modalImgWrap seharusnya hanya menjadi container
    const scroller = document.getElementById('modalImageScroller');
    if(scroller) {
        const offset = currentImgIndex * scroller.offsetWidth;
        scroller.scrollLeft = offset;
    }
    // Update warna terpilih agar sinkron dengan gambar
    if(currentProduct && currentProduct.colors[currentImgIndex]) {
        currentSelectedColor = currentProduct.colors[currentImgIndex];
        document.querySelectorAll('.color-swatch').forEach(n=>n.classList.remove('selected'));
        const selectedSwatch = document.querySelector(`.color-swatch[data-color="${currentSelectedColor.name}"]`);
        if (selectedSwatch) selectedSwatch.classList.add('selected');
    }
  }

  // --- LOGIKA SWIPE SENTUH (LISTENERS) ---

  // Tambahkan listener untuk mendeteksi awal sentuhan
  if (modalImgWrap) { // Use modalImgWrap as the touch listener container
    modalImgWrap.addEventListener('touchstart', e => {
      touchstartX = e.changedTouches[0].screenX;
      // Perbarui currentImages di sini
      currentImages = Array.from(modalImgWrap.querySelector('#modalImageScroller')?.children || []);
    }, false);

    // Tambahkan listener untuk mendeteksi akhir sentuhan
    modalImgWrap.addEventListener('touchend', e => {
      touchendX = e.changedTouches[0].screenX;
      handleGesture();
    }, false);
  }

  function handleGesture() {
    const diff = touchendX - touchstartX;
    
    if (Math.abs(diff) > SWIPE_THRESHOLD) {
      if (diff < 0) {
        // Swipe KIRI (Tampilkan gambar berikutnya)
        slideImg(1); 
      }
      if (diff > 0) {
        // Swipe KANAN (Tampilkan gambar sebelumnya)
        slideImg(-1); 
      }
    }
  }
  // ===================================================================
  // === AKHIR LOGIKA GALERI GAMBAR & SWIPE SENTUH BARU ===
  // ===================================================================

  modalClose.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e)=>{
    if(e.target === modalBackdrop) closeModal();
  });

  qtyMinus.addEventListener('click', ()=>{
    if(currentQty>1) currentQty--;
    qtyVal.innerText = currentQty;
  });
  qtyPlus.addEventListener('click', ()=>{
    currentQty++;
    qtyVal.innerText = currentQty;
  });

// MODIFIED: Add to cart detailed: merge if same id+size+color
function addToCartDetailed(item){
    // Cek stok sebelum menambah
    const product = PRODUCTS.find(p=>p.id===item.id);
    // Cari data stok/harga dari sizeVariants
    const sizeData = findSizeData(product, item.color, item.size); 
    
    // Ambil gambar spesifik dari warna yang dipilih
    const colorData = product.colors.find(c => c.name === item.color);
    const img = colorData ? colorData.image : product.thumbnail; 
    
    if (!sizeData || sizeData.stock === 0 || item.qty > sizeData.stock) {
        alert('Gagal: Stok tidak tersedia atau melebihi batas stok.');
        return false;
    }
    
    // find existing
    const idx = cart.findIndex(ci => ci.id === item.id && String(ci.size) === String(item.size) && ci.color === item.color);
    if(idx >= 0){
        // Jika item sudah ada, cek apakah total qty melebihi stok
        if (cart[idx].qty + item.qty > sizeData.stock) {
            alert(`Gagal: Menambahkan ${item.qty} lagi akan melebihi batas stok (${sizeData.stock}).`);
            return false;
        }
        cart[idx].qty += item.qty;
        cart[idx].subtotal = cart[idx].price * cart[idx].qty;
    } else {
        const newItem = {
            id: item.id,
            name: item.name,
            price: sizeData.price, // PENTING: Ambil harga dari sizeData
            img: img, 
            size: item.size,
            color: item.color,
            qty: item.qty,
            subtotal: sizeData.price * item.qty
        };
        cart.push(newItem);
    }
    saveCart();
    renderCartDrawer();
    updateCartCount();
    return true;
}

// MODIFIED: Add to cart from modal
modalAdd.addEventListener('click', ()=>{
    // Cek currentSelectedSizeData karena dia menyimpan data harga dan stok
    if(!currentProduct || !currentSelectedSizeData || !currentSelectedColor) { 
        alert('Pilih ukuran dan warna terlebih dahulu.');
        return;
    }
    if (currentSelectedSizeData.stock === 0) {
        alert('Stok habis untuk varian ini.');
        return;
    }
    if (addToCartDetailed({
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentSelectedSizeData.price, // Harga diambil dari data ukuran
        size: currentSelectedSize,
        color: currentSelectedColor.name, // Warna diambil dari currentSelectedColor
        qty: currentQty
    })) {
        showToast(`${currentProduct.name} (${currentSelectedColor.name}, size ${currentSelectedSize}) ditambahkan.`);
        closeModal();
        openCart(); 
    }
});

// ===================================================================
// START MODIFIED LOGIC: MODAL BUY (Beli Sekarang) -> WA
// ===================================================================
modalBuy.addEventListener('click', ()=>{
    if(!currentProduct || !currentSelectedSizeData || !currentSelectedColor) {
        alert('Pilih ukuran dan warna terlebih dahulu.');
        return;
    }
    if (currentSelectedSizeData.stock === 0) {
        alert('Stok habis untuk varian ini.');
        return;
    }

    // 1. Prepare item data (single item)
    const singleItem = {
        name: currentProduct.name,
        color: currentSelectedColor.name,
        size: currentSelectedSize,
        qty: currentQty,
        price: currentSelectedSizeData.price
    };
    
    // 2. Generate WhatsApp link for this single item and redirect
    const waLink = generateWhatsAppLink([singleItem], true);
    window.open(waLink, '_blank');
    
    showToast(`Dialihkan ke WhatsApp untuk pemesanan ${currentProduct.name} (Qty ${currentQty}).`);
    closeModal();
});
// ===================================================================
// END MODIFIED LOGIC: MODAL BUY (Beli Sekarang) -> WA
// ===================================================================


// cart drawer UI (UPDATED: Added Detail Produk button)
function renderCartDrawer(){
  cartItemsWrap.innerHTML = "";
  if(cart.length === 0){
    cartItemsWrap.innerHTML = `<div class="cart-empty">Keranjang kosong.</div>`;
    cartTotalEl.innerText = fmt(0);
    return;
  }
  let total = 0;
  cart.forEach((ci, i)=>{
    total += ci.subtotal;
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <div class="ci-thumb"><img src="${ci.img}" alt="${ci.name}"></div>
      <div class="ci-meta">
        <div class="name">${ci.name}</div>
        <div class="meta">Warna: ${ci.color} · Ukuran: ${ci.size}</div>
        <div class="meta subtotal">Subtotal: ${fmt(ci.subtotal)}</div>
        <button class="btn-ghost small" data-action="detail" data-id="${ci.id}">Tentang Produk ini: Detail</button>
      </div>
      <div class="ci-actions">
        <div class="qty-controls">
          <button class="btn-ghost small" data-action="minus" data-index="${i}">−</button>
          <div style="min-width:28px;text-align:center">${ci.qty}</div>
          <button class="btn-ghost small" data-action="plus" data-index="${i}">+</button>
        </div>
        <button class="btn-ghost" data-action="remove" data-index="${i}">Hapus</button>
      </div>
    `;
    cartItemsWrap.appendChild(el);
  });
  cartTotalEl.innerText = fmt(total);
  // attach handlers for qty and remove
  cartItemsWrap.querySelectorAll('[data-action]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const idx = Number(btn.dataset.index);
      const action = btn.dataset.action;
      
      if(action === 'detail'){
        closeCart(); // Tutup keranjang
        openModal(Number(btn.dataset.id)); // Buka drawer detail produk
        return;
      }

      // Logic for +/-/remove (with stock check for +/-)
      if(action === 'minus'){
        if(cart[idx].qty > 1) cart[idx].qty--;
        else {
          cart.splice(idx,1);
        }
      } else if(action === 'plus'){
          // Re-check stock before adding
          const product = PRODUCTS.find(p => p.id === cart[idx].id);
          // findSizeData sekarang menggunakan sizeVariants
          const sizeData = findSizeData(product, cart[idx].color, cart[idx].size); 
          if (sizeData && cart[idx].qty < sizeData.stock) {
              cart[idx].qty++;
          } else if (sizeData) {
              alert('Stok maksimum telah tercapai.');
          }
      } else if(action === 'remove'){
        cart.splice(idx,1);
      }
      
      // recalc subtotals
      cart.forEach(ci=>ci.subtotal = ci.price * ci.qty);
      saveCart();
      renderCartDrawer();
      updateCartCount();
    });
  });
}

function updateCartCount(){
  const count = cart.reduce((a,b)=>a + b.qty, 0);
  cartCount.innerText = count;
}

function openCart(){
  cartDrawer.classList.add('open');
  cartDrawer.setAttribute('aria-hidden','false');
  renderCartDrawer();
}
function closeCart(){
  cartDrawer.classList.remove('open');
  cartDrawer.setAttribute('aria-hidden','true');
}

cartBtn.addEventListener('click', ()=>{
  closeModal(); // Pastikan drawer detail tertutup saat membuka keranjang
  openCart();
});
closeCartBtn.addEventListener('click', closeCart);
closeCartBtn2.addEventListener('click', closeCart);
clearCartBtn.addEventListener('click', ()=>{
  if(confirm('Bersihkan keranjang?')) {
    cart = [];
    saveCart();
    renderCartDrawer();
    updateCartCount();
  }
});

// ===================================================================
// START MODIFIED LOGIC: CHECKOUT BUTTON -> WA
// ===================================================================
checkoutBtn.addEventListener('click', ()=>{
    if(cart.length === 0){
        alert('Keranjang kosong.');
        return;
    }
    
    // Generate WhatsApp link and redirect
    const waLink = generateWhatsAppLink(cart);
    window.open(waLink, '_blank');

    showToast('Dialihkan ke WhatsApp untuk konfirmasi pesanan.');

    // Clear cart after successful redirection (assumption: user will complete purchase via WA)
    cart = [];
    saveCart();
    renderCartDrawer();
    updateCartCount();
    closeCart();
});
// ===================================================================
// END MODIFIED LOGIC: CHECKOUT BUTTON -> WA
// ===================================================================

// util format currency
function fmt(n){
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits:0 }).format(n);
}

// small toast
function showToast(message){
  const t = document.createElement('div');
  t.style.position='fixed';
  t.style.right='20px';
  t.style.bottom='20px';
  t.style.background='linear-gradient(90deg,var(--blue),var(--purple))';
  t.style.color='var(--dark)';
  t.style.padding='10px 14px';
  t.style.borderRadius='10px';
  t.style.boxShadow='0 10px 30px rgba(0,0,0,0.6)';
  t.style.zIndex=9999;
  t.style.transition='opacity 0.5s ease';
  t.innerText = message;
  document.body.appendChild(t);
  setTimeout(()=> t.style.opacity='0', 1600);
  setTimeout(()=> t.remove(), 2200);
}

// initial render
function init(){
  loadCart();
  renderProducts(PRODUCTS);
  renderCartDrawer();
  updateCartCount();
  document.getElementById('year').innerText = new Date().getFullYear();
  applyFilters();
}

init();
