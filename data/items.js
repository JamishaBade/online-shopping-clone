const items = [
    {
        id: '021',
        image: 'images/Set/8.png',
        company: 'Gold Luxe',
        item_name: 'Jewelry Set | Gold Themed',
        original_price: 210,
        current_price: 140,
        discount_percentage: 33,
        return_period: 22,
        delivery_date: '21 Nov 2023',
        rating: { stars: 4.8, count: 520 },
    },
    {
        id: '020',
        image: 'images/Set/7.png',
        company: 'Elite Fashion',
        item_name: 'Pink Party Attire',
        original_price: 90,
        current_price: 55,
        discount_percentage: 38,
        return_period: 22,
        delivery_date: '21 Nov 2023',
        rating: { stars: 4.7, count: 410 },
    },

    {
        id: '001',
        image: 'images/1.jpg',
        company: 'Silverline',
        item_name: 'Rhodium-Plated CZ Floral Studs',
        original_price: 25,
        current_price: 15,
        discount_percentage: 40,
        return_period: 30,
        delivery_date: '20 Nov 2023',
        rating: { stars: 4.8, count: 1600 },
    },
    {
        id: '017',
        image: 'images/Set/4.png',
        company: 'Luxury Time',
        item_name: 'Mechanical Watch',
        original_price: 220,
        current_price: 150,
        discount_percentage: 32,
        return_period: 22,
        delivery_date: '21 Nov 2023',
        rating: { stars: 4.9, count: 1120 },
    },
    {
        id: '010',
        image: 'images/10.jpg',
        company: 'Summerly',
        item_name: 'A White One Piece Frock',
        original_price: 40,
        current_price: 20,
        discount_percentage: 50,
        return_period: 15,
        delivery_date: '15 Apr 2025',
        rating: { stars: 4.6, count: 10000 },
      },
    {
        id: '002',
        image: 'images/2.jpg',
        company: 'Fashion Hub',
        item_name: 'Women Padded Halter Neck Swimming Dress',
        original_price: 60,
        current_price: 36,
        discount_percentage: 40,
        return_period: 21,
        delivery_date: '22 Nov 2023',
        rating: { stars: 4.4, count: 300 },
    },
    {
        id: '019',
        image: 'images/Set/6.png',
        company: 'Glam Luxe',
        item_name: 'Diamond Pearls Bracelets',
        original_price: 180,
        current_price: 120,
        discount_percentage: 33,
        return_period: 22,
        delivery_date: '21 Nov 2023',
        rating: { stars: 4.9, count: 350 },
    },

    {
        id: '003',
        image: 'images/3.jpg',
        company: 'Trendy Wear',
        item_name: 'Women Red & White Printed A-Line Skirt',
        original_price: 45,
        current_price: 20,
        discount_percentage: 55,
        return_period: 15,
        delivery_date: '25 Nov 2023',
        rating: { stars: 4.3, count: 270 },
    },
   
    {
        id: '005',
        image: 'images/5.jpg',
        company: 'Urban Style',
        item_name: 'Pure Cotton T-shirt',
        original_price: 22,
        current_price: 12,
        discount_percentage: 45,
        return_period: 20,
        delivery_date: '20 Nov 2023',
        rating: { stars: 4.5, count: 3700 },
    },
    {
        id: '006',
        image: 'images/6.jpg',
        company: 'RunFast',
        item_name: 'Men ReactX Running Shoes',
        original_price: 120,
        current_price: 120,
        discount_percentage: 0,
        return_period: 14,
        delivery_date: '22 Nov 2023',
        rating: { stars: 4.9, count: 180 },
    },
    {
        id: '007',
        image: 'images/7.jpg',
        company: 'Garage Wear',
        item_name: 'Men Slim Fit Regular Shorts',
        original_price: 28,
        current_price: 14,
        discount_percentage: 50,
        return_period: 25,
        delivery_date: '21 Nov 2023',
        rating: { stars: 4.3, count: 400 },
    },
    {
        id: '008',
        image: 'images/12.jpg',
        company: 'FreshNivea',
        item_name: 'Men Fresh Deodorant 150ml',
        original_price: 8,
        current_price: 4,
        discount_percentage: 50,
        return_period: 18,
        delivery_date: '24 Nov 2023',
        rating: { stars: 4.4, count: 5300 },
    },
    {
      id: '009',
      image: 'images/9.jpg',
      company: 'Old Navy',
      item_name: 'Sweat Pants For Women',
      original_price: 35,
      current_price: 18,
      discount_percentage: 48,
      return_period: 15,
      delivery_date: '12 Oct 2025',
      rating: { stars: 4.3, count: 2100 },
    },
  
    {
      id: '011',
      image: 'images/11.jpg',
      company: 'Basic Wear',
      item_name: 'Black Plain T-shirt',
      original_price: 18,
      current_price: 9,
      discount_percentage: 50,
      return_period: 20,
      delivery_date: '20 Nov 2023',
      rating: { stars: 4.3, count: 5300 },
    },
    {
      id: '012',
      image: 'images/13.jpg',
      company: 'FOREVER 21',
      item_name: 'Branded Bags For Women',
      original_price: 65,
      current_price: 39,
      discount_percentage: 40,
      return_period: 22,
      delivery_date: '21 Nov 2023',
      rating: { stars: 4.7, count: 4700 },
    },
    {
        id: '013',
        image: 'images/8.jpg',
        company: 'NIVEA',
        item_name: 'Men Fresh Deodorant 150ml',
        original_price: 8,
        current_price: 4,
        discount_percentage: 50,
        return_period: 22,
        delivery_date: '21 Nov 2023',
        rating: { stars: 4.5, count: 5300 },
    },
    {
        id: '014',
        image: 'images/Set/1.png',
        company: 'Jewelry Luxe',
        item_name: 'Hand Bracelets',
        original_price: 55,
        current_price: 33,
        discount_percentage: 40,
        return_period: 22,
        delivery_date: '21 Nov 2023',
        rating: { stars: 4.8, count: 620 },
    },
    {
        id: '015',
        image: 'images/Set/2.png',
        company: 'Sports Trend',
        item_name: 'Women Jersey',
        original_price: 35,
        current_price: 21,
        discount_percentage: 40,
        return_period: 22,
        delivery_date: '21 Nov 2023',
        rating: { stars: 4.5, count: 430 },
    },
    {
        id: '016',
        image: 'images/Set/3.png',
        company: 'Athletic Hub',
        item_name: 'Men Blue Jersey',
        original_price: 40,
        current_price: 24,
        discount_percentage: 40,
        return_period: 22,
        delivery_date: '21 Nov 2023',
        rating: { stars: 4.6, count: 520 },
    },
    
    {
        id: '018',
        image: 'images/Set/5.png',
        company: 'Heels Fashion',
        item_name: 'Black Heels',
        original_price: 75,
        current_price: 45,
        discount_percentage: 40,
        return_period: 22,
        delivery_date: '21 Nov 2023',
        rating: { stars: 4.5, count: 890 },
    },
  
  
  
    {
        id: '022',
        image: 'images/Set/9.png',
        company: 'Denim Fit',
        item_name: 'Jeans Set',
        original_price: 70,
        current_price: 45,
        discount_percentage: 36,
        return_period: 22,
        delivery_date: '21 Nov 2023',
        rating: { stars: 4.5, count: 970 },
    }
];
