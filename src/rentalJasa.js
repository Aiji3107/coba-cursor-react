// Data untuk item-item yang bisa disewa
export const rentalItems = [
  { id: 1, name: 'Sepeda Gunung', price: 50000, image: 'path/to/sepeda-gunung.jpg', popular: true },
  { id: 2, name: 'Motor Matic', price: 75000, image: 'path/to/motor-matic.jpg', popular: false },
  { id: 3, name: 'Sepeda Lipat', price: 40000, image: 'path/to/sepeda-lipat.jpg', popular: true },
  { id: 4, name: 'Motor Sport', price: 100000, image: 'path/to/motor-sport.jpg', popular: false }
];

// Fungsi untuk menambahkan item ke keranjang
export const addToCart = (cart, item) => {
  // Cek apakah item sudah ada di keranjang
  const existingItem = cart.find(cartItem => cartItem.id === item.id);
  if (existingItem) {
    // Jika item sudah ada, tambahkan jumlahnya
    return cart.map(cartItem =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
  } else {
    // Jika item belum ada, tambahkan item baru ke keranjang
    return [...cart, { ...item, quantity: 1 }];
  }
};

// Fungsi untuk menghitung total harga
export const calculateTotal = (cart) => {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};
