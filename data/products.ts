export interface Product {
    id: number;
    title: string;
    price: number;
    discountedPrice: number;
    paymentParcels: number;
    image: string;
  }
  
  const products: Product[] = [
    {
      id: 1,
      title: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      price: 2813.99,
      discountedPrice: 2599.00,
      paymentParcels: 10,
      image: '/productImage.jpg',
    },
    {
      id: 2,
      title: "Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50",
      price: 2813.99,
      discountedPrice: 2599.00,
      paymentParcels: 10,
      image: '/productImage.jpg',
    },
  ];
  
  export default products;
  