//hanya memanggil produk yang dibeli masuk ke keranjang belanja 
function tambahKeKeranjang(namaProduk, hargaProduk, gambarProduk) {
    let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
    keranjang.push({ nama: namaProduk,harga: hargaProduk, gambar: gambarProduk });
    localStorage.setItem('keranjang', JSON.stringify(keranjang));
    
    alert('Produk ditambahkan ke keranjang!');

    // Untuk masuk ke hamalam/lokasi keranjang.html
    window.location.href = "keranjang.html";
 
     // Tampilkan gambar produk di halaman keranjang
     localStorage.setItem('namaProduk', namaProduk);
     localStorage.setItem('hargaProduk', hargaProduk);
     localStorage.setItem('gambarProduk', gambarProduk);
}
