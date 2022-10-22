import { Product, User, Category } from '../interfaces/fakeDataTypes';

const data: { products: Product[], users: User[], categories: Category[] } = {
  products: [
    {
      title: 'nice sofa',
      description: 'sofa for four people',
      gallery: [
        'https://apollo-singapore.akamaized.net/v1/files/sh0il57qfjfh3-IN/image;s=780x0;q=60 ',
        'https://apollo-singapore.akamaized.net/v1/files/zjt3gsd2oobm2-IN/image;s=780x0;q=60',
      ],
      is_available: true,
      type: 'donation',
      user_id: 2,
      category_id: 2,
    },
    {
      title: 'something',
      description: 'something for something',
      gallery: [
        'https://apollo-singapore.akamaized.net/v1/files/hccwzehg6d8u-IN/image;s=1080x1080 ',
      ],
      is_available: true,
      type: 'donation',
      user_id: 2,
      category_id: 2,
    },
    {
      title: 'White Charger',
      description: 'Apple series 7 charging lead',
      gallery: [
        'https://apollo-singapore.akamaized.net/v1/files/i6c5sdoqjous2-IN/image;s=780x0;q=60',
      ],
      is_available: true,
      type: 'exchange',
      user_id: 1,
      category_id: 5,
    },
    {
      title: 'Aerpods',
      description: 'Aerpods pro good condition',
      gallery: [
        'https://apollo-singapore.akamaized.net/v1/files/dziq01lffmmf3-IN/image;s=780x0;q=60',
      ],
      is_available: true,
      type: 'exchange',
      user_id: 1,
      category_id: 5,
    },
    {
      title: 'Earbuds',
      description: 'Used, perfectly working.Earbuds and charging case.Enjoy uninterrupted, crystal-clear music on the go with the Jabra Elite Active 65t True Wireless EarPods with Mic. With up to 5 hours of battery life from a single charge, and up to 15 hours in total with the pocket-friendly charging case ',
      gallery: [
        'https://apollo-singapore.akamaized.net/v1/files/t5h1o07v3ziq2-IN/image;s=780x0;q=60',
        'https://apollo-singapore.akamaized.net/v1/files/uc39iu95kda51-IN/image;s=780x0;q=60',
        'https://apollo-singapore.akamaized.net/v1/files/8sol0kdbo0xz1-IN/image;s=780x0;q=60',
      ],
      is_available: true,
      type: 'donation',
      user_id: 2,
      category_id: 5,
    },
    {
      title: 'Emanuel Ungaro',
      description: 'Scarf/Shawl Silk in Pink',
      gallery: [
        'https://cdn.rebelle.com//86/8649678_e246ef6fa2d1af3d1e05d046263e29df.jpg?width=514&height=510',
        'https://cdn.rebelle.com//86/8649678_58cb3e40d41a9275e6bdb51a69c6f7ed.jpg?width=514&height=510',
      ],
      is_available: true,
      type: 'exchange',
      user_id: 1,
      category_id: 4,
    },
    {
      title: 'Jacques Durand',
      description: 'Sunglasses in Black',
      gallery: [
        'https://cdn.rebelle.com//86/8649492_abd39855c1ac015cf78666200ee770f1.jpeg?width=514&height=510',
        'https://cdn.rebelle.com//86/8649492_7dbf8f148e0aa18b72c6f77298512ef8.jpeg?width=514&height=510',
      ],
      is_available: true,
      type: 'exchange',
      user_id: 3,
      category_id: 4,
    },
    {
      title: 'Louis Vuitton Jacques Durand Sunglasses Black Sunglasses',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ',
      gallery: [
        'https://cdn.rebelle.com//cd/cdac49d320221014-9-j8pnpt.JPG?width=514&height=510',
        'https://cdn.rebelle.com//86/8651792_daa1c738578a502c5b235a1171193928.JPG?width=514&height=510',
      ],
      is_available: true,
      type: 'donation',
      user_id: 5,
      category_id: 4,
    },
    {
      title: 'The Late Show',
      description: 'Detective Renee Ballard works The Late Show, the notorious graveyard shift at the LAPD.',
      gallery: ['https://user-images.githubusercontent.com/54447254/196033782-e3306fc1-0cb3-4286-a99f-de45f2487fab.png'],
      is_available: true,
      type: 'donation',
      user_id: 1,
      category_id: 3,
    },
    {
      title: 'Six Years',
      description: 'A lost love... and the secrets and lies at its heart. The stunning novel from No.1 bestseller Harlan Coben.',
      gallery: ['https://user-images.githubusercontent.com/54447254/196033923-61d5faf3-da09-4d69-865f-65fee3a5f091.png'],
      is_available: true,
      type: 'exchange',
      user_id: 2,
      category_id: 3,
    },
    {
      title: 'Three Little Lies : A completely gripping thriller with a killer twist',
      description: '',
      gallery: ['https://user-images.githubusercontent.com/54447254/196033930-76a731c9-0f14-406d-9442-72ff38c69102.png'],
      is_available: true,
      type: 'exchange',
      user_id: 3,
      category_id: 3,
    },
    {
      title: 'The Secret Garden by Frances Hodgson Burnett is a magical novel for adults and children alike',
      description: 'The Secret Garden',
      gallery: ['https://user-images.githubusercontent.com/54447254/196033952-66d4b6b3-64d4-462a-9703-f8aae1facbf0.png'],
      is_available: false,
      type: 'donation',
      user_id: 2,
      category_id: 3,
    },
  ],
  users: [
    {
      first_name: 'John',
      last_name: 'Smith',
      email: 'John@gmail.com',
      password: '$2a$12$/r.zmtkl2VHN/H8l2Tspe.Sipr3BSjW1XH71iyaehiK.gwLUWi81i', // 1234578 rounds:12
      image: 'https://randomuser.me/api/portraits/lego/8.jpg',
      bio: 'hello from the hell',
    },
    {
      first_name: 'Jennie',
      last_name: 'Nichols',
      email: 'Jennie@gmail.com',
      password: '$2a$12$ajt9EE0j6bWor63vZ6g1PepC3Y60B5ey0KqS0AHnj6Q3zRmN0/V.m', // omar123456 rounds:12
      image: 'https://randomuser.me/api/portraits/lego/7.jpg',
      bio: 'hello from the hell',
    },
    {
      first_name: 'Maxim',
      last_name: 'Lindhjem',
      email: 'Maxim@gmail.com',
      password: '$2a$12$uYVCagm1jekXMnqmpDgRQeNJz.euighyJDWBmwMDkX439OJdJg61q', // mohammad123456 rounds:12
      image: 'https://randomuser.me/api/portraits/lego/6.jpg',
      bio: 'hello from the hell',
    },
    {
      first_name: 'Baljiwan',
      last_name: 'Gugale',
      email: 'Baljiwan@gmail.com',
      password: '$2a$12$XhsgeG0WhiddYr/5MphSWO5ykgaldvPNHQPP4CTpc3IHb3sTTfdz.', // ali123456 rounds:12
      image: 'https://randomuser.me/api/portraits/lego/5.jpg',
      bio: 'hello from the hell',
    },
    {
      first_name: 'Laurete',
      last_name: 'da Cunha',
      email: 'Laurete@gmail.com',
      password: '$2a$12$ES71.6GBjUY.nH9/UY.sJ.orrOfzLrX/sz8bwIsFkifQHldehClEq', // sanaa123456 rounds:12
      image: 'https://randomuser.me/api/portraits/lego/4.jpg',
      bio: 'hello from the hell',
    },
  ],
  categories: [
    {
      name: 'Clothes',
      image: 'https://rb.gy/wzj1ml',
    },
    {
      name: 'Furniture',
      image: 'https://rb.gy/x8bl4o',
    },
    {
      name: 'Books',
      image: 'https://rb.gy/fgyzkk',
    },
    {
      name: 'Accessories',
      image: 'https://rb.gy/gesdnz',
    },
    {
      name: 'Electronics',
      image: 'https://rb.gy/yap3qy',
    },
    {
      name: 'Other',
      image: 'https://rb.gy/hceqcz',
    },
  ],
};

export default data;
