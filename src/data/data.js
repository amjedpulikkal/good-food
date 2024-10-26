const extra=[
    {
        name:"Black Olives",
        price:50
    },
    {
        name:"Cheese",
        price:50
    },
    {
        name:"Green Capsicum",
        price:50
    },
    {
        name:"Onion",
        price:50
    },
    {
        name:"Sweet Corn",
        price:50
    },
    {
        name:"Tomato",
        price:50
    },
    {
        name:"Jalapeno",
        price:50
    },
]

export const product = [
    {
        id: '1',
        name: "Schezwan Margherita",
        image: "/Schezwan.jpg",
        subCatogary: [
            {
                itemName: "Personal",
                price: 100,
                description: "Crust stuffed with pizza topping and Texas Garlic sauce. The ultimate indulgence that will transport you to paradise. (Add: Per: 227 Kcal/100g | Med: 216 Kcal/100g)"
            },
            {
                itemName: "Medium",
                price: 150,
                description: "Crust stuffed with pizza topping and Texas Garlic sauce. The ultimate indulgence that will transport you to paradise. (Add: Per: 227 Kcal/100g | Med: 216 Kcal/100g)"
            },
            {
                itemName: "Large",
                price: 200,
                description: "Introducing our signature Thin n Crispy Pizzas, with the perfect crisp that you do not want to miss! Available in large size with 8 slices."
            },
        ],
        extra
    },
    {
        id: '2',
        name: "Momo Mia Non-Veg",
        image: "/momo-mia-non-veg.379d4c86ba9551f194bfc68ad9d77bc5.1.jpg",
        subCatogary: [
            {
                itemName: "Personal",
                price: 120,
                description: "Delicious non-veg momos filled with juicy meat and spices. Perfectly steamed for that authentic taste."
            },
            {
                itemName: "Medium",
                price: 180,
                description: "A larger serving of our non-veg momos, steamed to perfection with a flavorful filling."
            },
            {
                itemName: "Large",
                price: 240,
                description: "A generous platter of our signature non-veg momos, ideal for sharing!"
            },
        ],
        extra
    },
    {
        id: '3',
        name: "Veg Supreme Pizza",
        image: "/veggie-supreme.bc8dd369182b636ff171077efa53c344.1.jpg",
        subCatogary: [
            {
                itemName: "Personal",
                price: 90,
                description: "Loaded with fresh vegetables, topped with cheese and herbs. A vegetarian delight!"
            },
            {
                itemName: "Medium",
                price: 140,
                description: "A perfect mix of veggies on a cheesy base. Ideal for veggie lovers!"
            },
            {
                itemName: "Large",
                price: 190,
                description: "Feast on our large Veg Supreme, topped with seasonal veggies and extraese!"
            },
        ],
        extra
    },
    {
        id: '4',
        name: "Pepperoni Pizza",
        image: "/new-york-style-pizza2-500x500.jpg",
        subCatogary: [
            {
                itemName: "Personal",
                price: 110,
                description: "Spicy pepperoni slices on a classic cheese base, perfect for meat lovers."
            },
            {
                itemName: "Medium",
                price: 160,
                description: "More pepperoni and cheese for the ultimate indulgence!"
            },
            {
                itemName: "Large",
                price: 210,
                description: "A feast for meat lovers with generous slices of pepperoni on a large pizza!"
            },
        ],
        extra
    },
    {
        id: '5',
        name: "BBQ Chicken Pizza",
        image: "/bbq-chicken-thighs-recipe-thumbnail.webp",
        subCatogary: [
            {
                itemName: "Personal",
                price: 130,
                description: "Tender chicken pieces tossed in BBQ sauce, topped with cheese and onions."
            },
            {
                itemName: "Medium",
                price: 180,
                description: "A larger pizza with more BBQ chicken goodness!"
            },
            {
                itemName: "Large",
                price: 230,
                description: "Satisfy your BBQ cravings with our large BBQ Chicken Pizza!"
            },
        ],
        extra
    },
    {
        id: '6',
        name: "Hawaiian Pizza",
        image: "/hawaiian-pizza-lead-65f4641d61062.jpg",
        subCatogary: [
            {
                itemName: "Personal",
                price: 120,
                description: "A delicious mix of ham and pineapple on a cheesy base."
            },
            {
                itemName: "Medium",
                price: 170,
                description: "A perfect blend of sweet and savory flavors!"
            },
            {
                itemName: "Large",
                price: 220,
                description: "Enjoy a large Hawaiian Pizza, a tropical treat for your taste buds!"
            },
        ],
        extra
    },
    {
        id: '7',
        name: "Garlic Bread",
        image: "/Air-Fryer-Garlic-Bread-LS-2.jpg",
        subCatogary: [
            {
                itemName: "Personal",
                price: 50,
                description: "Warm garlic breadsticks, perfect for dipping!"
            },
            {
                itemName: "Medium",
                price: 90,
                description: "More garlic goodness for sharing!"
            },
            {
                itemName: "Large",
                price: 130,
                description: "A large serving of our cheesy garlic bread!"
            },
        ],
        extra
    },
    {
        id: '8',
        name: "Caesar Salad",
        image: "/229063-Classic-Restaurant-Caesar-Salad-ddmfs-4x3-231-89bafa5e54dd4a8c933cf2a5f9f12a6f.jpg",
        subCatogary: [
            {
                itemName: "Small",
                price: 70,
                description: "Crisp romaine lettuce, croutons, and Caesar dressing."
            },
            {
                itemName: "Medium",
                price: 110,
                description: "A larger portion with more toppings!"
            },
            {
                itemName: "Large",
                price: 150,
                description: "A big bowl of Caesar Salad, perfect for a healthy meal!"
            },
        ],
        extra
    },
    {
        id: '9',
        name: "Chocolate Lava Cake",
        image: "/images.jpeg",
        subCatogary: [
            {
                itemName: "Single",
                price: 80,
                description: "A rich chocolate cake with a molten center. Perfect for dessert lovers!"
            },
            {
                itemName: "Double",
                price: 150,
                description: "Indulge in two portions of our heavenly lava cake!"
            },
        ],
        extra
    },
    {
        id: '10',
        name: "Fruit Punch",
        image: "/fruit-punch-mocktail.webp",
        subCatogary: [
            {
                itemName: "Small",
                price: 50,
                description: "A refreshing blend of fruits and juices."
            },
            {
                itemName: "Large",
                price: 100,
                description: "A larger serving to quench your thirst!"
            },
        ],
        extra
    },
];
