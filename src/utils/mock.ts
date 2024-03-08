import { title } from "process";
import { Product } from "./type";
import pic from "/public/images/event5.png"
import pic1 from "/public/images/event3.png"
import pic2 from "/public/images/event8.png"

export const allproducts:Product[]=[

    {
        id:1,
        name:"product 1",
        price:200,
        category:"female",
        image:pic,

    },

    {
        id:2,
        name:"product 2",
        price:300,
        category:"female",
        image:pic,

    },
    {
        id:3,
        name:"product 3",
        price:400,
        category:"female",
        image:pic,

    },
    {
        id:4,
        name:"product 4",
        price:500,
        category:"female",
        image:pic,

    },
    {
        id:5,
        name:"product 5",
        price:600,
        category:"male",
        image:pic1,

    },
    {
        id:6,
        name:"product 6",
        price:700,
        category:"male",
        image:pic1,

    },
    {
        id:7,
        name:"product 7",
        price:800,
        category:"male",
        image:pic1,

    },
    {
        id:8,
        name:"product 8",
        price:3400,
        category:"kids",
        image:pic2,

    },
    {
        id:9,
        name:"product 9",
        price:1100,
        category:"kids",
        image:pic2,

    },

]