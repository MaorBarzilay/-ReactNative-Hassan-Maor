import Categories from "../models/Categories";
import Product from "../models/Product";
import Review from "../models/Review";

export let cart = []; // array of products that will be added to the cart

// array of coupons with the discount percentages
export const COUPONS = [
  { id: "1", coupon: "ShayG$", discountPercentages: 0.15 },
  { id: "2", coupon: "Wow35", discountPercentages: 0.35 },
  { id: "3", coupon: "IDK_O^O", discountPercentages: 0.5 },
];

// array of appliances categories
export const CATEGORIES = [
  new Categories(
    "c1",
    "Clothes",
    "https://cdn-icons-png.flaticon.com/512/107/107499.png",
    3
  ),
  new Categories(
    "c2",
    "Music",
    "https://cdn-icons.flaticon.com/png/512/2783/premium/2783248.png?token=exp=1643922542~hmac=6614179eb387b32138bed38a48b4d430",
    4
  ),
  new Categories(
    "c3",
    "Tickets",
    "https://cdn-icons.flaticon.com/png/512/882/premium/882798.png?token=exp=1643922574~hmac=039ce6f2768ca423b5a163448a59ea9d",
    4
  ),
  new Categories(
    "c4",
    "Posters",
    "https://cdn-icons.flaticon.com/png/512/2661/premium/2661040.png?token=exp=1643922603~hmac=ff859636c3626c28ffd2ef218de901dc",
    4
  ),
];

// array of demo products
export const PRODUCTS = [
  // Shirts
  new Product(
    "p1",
    "c1",
    "https://img.tmstor.es/arcticmonkeys/85773-6cfd0a56c0a3e9f5a20d24908ef732b3.png",
    "Arctic Monkeys Shirt",
    "100% Cotton shirt",
    50,
    "15 inches",
    "",
    10,
    new Review(22, 53, 22, 1, 2)
  ),
  new Product(
    "p2",
    "c1",
    "https://cdn.shopify.com/s/files/1/0079/6652/3444/products/COLMOTSBLACKFRONT_7876d12e-b05d-4d0e-b60c-58d2440c389c_1000x1000.png?v=1626667674",
    "Coldplay shirt",
    "70% cotton, 30% polyester",
    70,
    "16 inches",
    "",
    10,
    new Review(30, 2, 5, 6, 2)
  ),
  new Product(
    "p3",
    "c1",
    "https://onerepublic.com/wp-content/uploads/2019/11/1RRM_TEE_MOCK.png",
    "OneRepublic shirt",
    "80% cotton, 20% polyester",
    40,
    "18 inches",
    "",
    5,
    new Review(8, 10, 25, 23, 0)
  ),

  // Albums
  new Product(
    "p5",
    "c2",
    "https://m.media-amazon.com/images/I/71-Y-3usHkL._SL1500_.jpg",
    "AM - Arctic Monkeys",
    "Welding inspiration from hip-hop greats with rock's titans, AM is built upon portentous beats that are dark and intimidating, yet wickedly thrilling.",
    100,
    "6 tracks",
    "",
    20,
    new Review(85, 24, 98, 12, 4)
  ),
  new Product(
    "p6",
    "c2",
    "https://m.media-amazon.com/images/I/616XaYBTmpL._SX466_.jpg",
    "Human - OneRepublic",
    "Human is the fifth studio album by American pop rock band OneRepublic.",
    90,
    "6 tracks",
    "",
    30,
    new Review(3, 5, 0, 0, 1)
  ),
  new Product(
    "p7",
    "c2",
    "https://upload.wikimedia.org/wikipedia/en/5/57/Coldplayparachutesalbumcover.jpg",
    "Parachutes - Coldplay",
    "Parachutes is the debut studio album by the British rock band Coldplay.",
    150.0,
    "4 tracks",
    "",
    0,
    new Review(5, 5, 6, 2, 1)
  ),

  new Product(
    "p8",
    "c2",
    "https://m.media-amazon.com/images/I/51zNfd7dgwL.jpg",
    "Native - OneRepublic",
    "Native is the third studio album by American rock band OneRepublic.",
    159.0,
    "",
    "",
    0,
    new Review(58, 6, 7, 5, 12)
  ),

  // Tickets
  new Product(
    "p9",
    "c3",
    "https://cdn.wegow.com/media/artists/coldplay/coldplay-1634219964.0317206.JPG",
    "Coldplay - Frankfurt, Germany",
    "Show at Deustch Bank Park.",
    139.99,
    "20:00, 1.5 hours",
    "",
    0,
    new Review(85, 85, 62, 1, 6)
  ),
  new Product(
    "p10",
    "c3",
    "https://cdn.wegow.com/media/artists/coldplay/coldplay-1634219964.0317206.JPG",
    "Coldplay - Brussels, Belgium",
    "Show at King Baodouin Stadium.",
    269.99,
    "19:00, 2 hours",
    "",
    0,
    new Review(12, 126, 12, 14, 3)
  ),
  new Product(
    "p11",
    "c3",
    "https://s1.ticketm.net/img/tat/dam/a/a2c/35d6ab62-a79b-4795-89e1-c1d8ccdf0a2c_1466751_CUSTOM.jpg",
    "OneRepublic - Vienna, Austria",
    "Show at Wiener Stadthalle",
    128.0,
    "22:00, 1 hour",
    "",
    0,
    new Review(45, 2, 3, 65, 1)
  ),
  new Product(
    "p12",
    "c3",
    "https://s1.ticketm.net/img/tat/dam/a/a2c/35d6ab62-a79b-4795-89e1-c1d8ccdf0a2c_1466751_CUSTOM.jpg",
    "OneRepublic - Zurich, Switzerland",
    'Show at Hallenstadium',
    189.99,
    "19:00, 2 hours",
    "",
    0,
    new Review(26, 256, 564, 12, 3)
  ),
  // Posters
  new Product(
    "p13", // id
    "c4", // category
    "https://idposter.com/img/bigs/184/id89140.jpg", // img
    "OneRepublic Poster", // title
    "Poster for waking up album.", // description
    20, // price
    "30 x 50 inches", // dimensions
    "",
    10, // shipping price
    new Review(30, 25, 10, 14, 6) // review
  ),
  new Product(
    "p14", // id
    "c4", // category
    "https://images-na.ssl-images-amazon.com/images/I/71ZhsPQ4RcL._AC_SL1500_.jpg", // img
    "Arctic Monkeys Poster", // title
    "AM album poster", // description
    31.99, // price
    "70 x 50 inches", // dimensions
    "",
    21.91, // shipping price
    new Review(44, 33, 12, 10, 4) // review
  ),
  new Product(
    "p15", // id
    "c4", // category
    "https://static.displate.com/280x392/displate/2019-12-06/ab485d223f18f8c812e51a3ac87ca501_5716964e21ff53535f1bb8258f52bc1f.jpg", // img
    "Coldplay Poster", // title
    "Generic Coldplay poster", // description
    20.99, // price
    "30 x 50 inches", // dimensions
    "5.60 Pounds",
    17.38, // shipping price
    new Review(50, 33, 20, 11, 6) // review
  ),
  new Product(
    "p16", // id
    "c4", // category
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e07204c-7c7b-4002-9658-878752b4f586/d81meb0-8b4cdb13-e22f-4039-a513-fcff1bb84581.png/v1/fill/w_700,h_700,q_80,strp/onerepublic___love_runs_out_single_cover_by_postertheory_d81meb0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzAwIiwicGF0aCI6IlwvZlwvM2UwNzIwNGMtN2M3Yi00MDAyLTk2NTgtODc4NzUyYjRmNTg2XC9kODFtZWIwLThiNGNkYjEzLWUyMmYtNDAzOS1hNTEzLWZjZmYxYmI4NDU4MS5wbmciLCJ3aWR0aCI6Ijw9NzAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0._tQ_zFc43RHYUsTqQvQtF2HSOb9WK59t5UTc6TmQDUI", // img
    "OneRepublic Album Poser", // title
    "Love Runs Out album poster", // description
    32.99, // price
    "50 x 50 inches", // dimensions
    "",
    24.37, // shipping price
    new Review(24, 44, 20, 15, 3) // review
  ),
];
