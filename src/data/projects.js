import { Coffee, Utensils, Martini, CakeSlice } from "lucide-react";
import Services_img from '../assets/images/services_img.png'
import Services_img1 from '../assets/images/services_img1.png'
import Services_img2 from '../assets/images/services_img2.png'
import Services_img3 from '../assets/images/services_img3.png'
//img
import React from 'react'
import { caption, title } from "motion/react-client";

//profiles
import Profiles1 from '../assets/images/profile1.png'
import Profiles2 from '../assets/images/profile2.png'
import Profiles3 from '../assets/images/profile3.png'

//blog and article
import LeftArticle from '../assets/images/leftArticle.png'
import rightArticles4 from '../assets/images/rightArticles4.png'
import rightArticles1 from '../assets/images/rightArticles1.png'
import rightArticles2 from '../assets/images/rightArticles2.png'
import rightArticles3 from '../assets/images/rightArticles3.png'

//menu
import Mask_group from '../assets/images/Mask_group.png'
import Mask_group1 from '../assets/images/Mask_group1.png'
import Mask_group2 from '../assets/images/Mask_group2.png'
import Mask_group3 from '../assets/images/Mask_group3.png'
import Mask_group4 from '../assets/images/Mask_group4.png'
import Mask_group5 from '../assets/images/Mask_group5.png'
import Mask_group6 from '../assets/images/Mask_group6.png'
import Mask_group7 from '../assets/images/Mask_group7.png'
//articles

import Articles from '../assets/images/Articles.png'
import Articles1 from '../assets/images/Articles1.png'
import Articles2 from '../assets/images/Articles2.png'
import Articles3 from '../assets/images/Articles3.png'
import Articles4 from '../assets/images/Articles4.png'
import Articles5 from '../assets/images/Articles5.png'
import Articles6 from '../assets/images/Articles6.png'
import Articles7 from '../assets/images/Articles7.png'
import Articles8 from '../assets/images/Articles8.png'
import Articles9 from '../assets/images/Articles9.png'
import Articles10 from '../assets/images/Articles10.png'
import Blog_details from "../components/Main_Landing_pges/Blog_details";


export const categories = [

  {
    title: "Breakfast",
    icon: Coffee,
    desc: "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    title: "Main Dishes",
    icon: Utensils,
    desc: "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    title: "Drinks",
    icon: Martini,
    desc: "In the new era of technology we look in the future with certainty and pride for our life.",
  },
  {
    title: "Desserts",
    icon: CakeSlice,
    desc: "In the new era of technology we look in the future with certainty and pride for our life.",
  },
];




// services
export const services = [
  { 
    img: Services_img,
    title: "Caterings ",
    caption:"In the new era of technology we look in the future with certainty for life.",
  },
  {
    img: Services_img1,
    title: "Weddings",
    caption:"In the new era of technology we look in the future with certainty for life."
  },
  {
    img: Services_img2,
    title: "Birthdays",
    caption:"In the new era of technology we look in the future with certainty for life."
  },
  {
    img: Services_img3,
    title: "Events",
    caption:"In the new era of technology we look in the future with certainty for life."
  },
];

export const profiles = [
  {
    title: "The best restaurant",
    desc: "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
    img: Profiles1 ,
    name: "Sophie Robson",
    location: "Los Angeles, CA",
  },
  {
    title: "Simply delicious",
    desc: "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was beautifully presented.",
    img: Profiles2,
    name: "Matt Cannon",
    location: "San Diego, CA",
  },
  {
    title: "One of a kind restaurant",
    desc: "The culinary experience at place is first to none. The atmosphere is vibrant, the food – nothing short of extraordinary. Highly recommended.",
    img: Profiles3,
    name: "Andy Smith",
    location: "San Francisco, CA",
  },
];

export const leftArticle = {
  title: "The secret tips & tricks to prepare a perfect burger & pizza",
  date: "January 3, 2023",
  img: LeftArticle ,
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit officiis magni beatae non.",
};


  export const rightArticles = [
{
id: 1,
title: "How to prepare the perfect french fries in an air fryer",
date: "January 3, 2023",
img:rightArticles4 ,
},
{
id: 2,
title: "How to prepare delicious chicken tenders",
date: "January 3, 2023",
img:rightArticles1,
},
{
id: 3,
title: "7 delicious cheesecake recipes you can prepare",
date: "January 3, 2023",
img:rightArticles2,
},
{
id: 4,
title: "5 great pizza restaurants you should visit this city",
date: "January 3, 2023",
img:Services_img3,
},
];

//meunu
export const items =[
  {
  title: "Fried Eggs",
  price: 9.99,
  img: Mask_group,
  category: "Breakfast",
  },
  {
  title: "Hawaiian Pizza",
  price: 15.99,
  img: Mask_group1,
  category: "Main Dishes",
  },
  {
  title: "Martinez Cocktail",
  price: 7.25,
  img: Mask_group2,
  category: "Drinks",
  },
  {
  title: "Butterscotch Cake",
  price: 20.99,
  img: Mask_group3,
  category: "Desserts",
  },
  {
  title: "Mint Lemonade",
  price: 5.89,
  img: Mask_group4,
  category: "Drinks",
  },
  {
  title: "Chocolate Icecream",
  price: 18.05,
  img: Mask_group5,
  category: "Desserts",
  },
  {
  title: "Cheese Burger",
  price: 12.55,
  img: Mask_group6,
  category: "Main Dishes",
  },
  {
  title: "Classic Waffles",
  price: 12.99,
  img: Mask_group7,
  category: "Breakfast",
  },
];

//Articles
export const articles =[
  {
  title: "Fried Eggs",
  price: 9.99,
  img: Mask_group,
  category: "Breakfast",
  },
  {
  title: "Hawaiian Pizza",
  price: 15.99,
  img: Mask_group1,
  category: "Main Dishes",
  },
  {
  title: "Martinez Cocktail",
  price: 7.25,
  img: Mask_group2,
  category: "Drinks",
  },
  {
  title: "Butterscotch Cake",
  price: 20.99,
  img: Mask_group3,
  category: "Desserts",
  },
  {
  title: "Mint Lemonade",
  price: 5.89,
  img: Mask_group4,
  category: "Drinks",
  },
  {
  title: "Chocolate Icecream",
  price: 18.05,
  img: Mask_group5,
  category: "Desserts",
  },
  {
  title: "Cheese Burger",
  price: 12.55,
  img: Mask_group6,
  category: "Main Dishes",
  },
  {
  title: "Classic Waffles",
  price: 12.99,
  img: Mask_group7,
  category: "Breakfast",
  },
    {
  title: "Chocolate Icecream",
  price: 18.05,
  img: Mask_group5,
  category: "Desserts",
  },
  {
  title: "Cheese Burger",
  price: 12.55,
  img: Mask_group6,
  category: "Main Dishes",
  },
  {
  title: "Chocolate Icecream",
  price: 18.05,
  img: Mask_group5,
  category: "Desserts",
  },
];

//  Blog_details
export const details =[
  {
  title: "How to preparea a delicious gluten free sushi",
  img: Mask_group2,
  date:" january 03, 2025"
  },
  {
  title: "Exclusice baking lessons from the pastry king",
  img: Mask_group3,
  date:" january 03, 2025"
  },
    {
  title: "How to prepare the perfect fries in an air fryer",
  img: Mask_group6,
  date:" january 03, 2025"
  },
    {
  title: "How to prepare delicious chicken tenders",
  img: Mask_group1,
  date:" january 03, 2025"
  }
]