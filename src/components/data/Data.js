// src/components/data/Data.js

import image from "../images/image.png";
import villa from "../images/villa.png";
import apartment from "../images/ap.png";
import office from "../images/off.png";
import condo from "../images/cong.png";
import ros from "../images/ros.png";
import raj from "../images/raj.png";
import nik from "../images/nik.png";
import nir from "../images/nir.png";

export const nav = [
  { text: "home", path: "/" },
  { text: "about", path: "/about" },
  { text: "services", path: "/services" },
  { text: "blog", path: "/blog" },
  { text: "pricing", path: "/pricing" },
  { text: "contact", path: "/contact" },
];

export const featured = [
  { cover: image, name: "Family House", total: "122 Property" },
  { cover: villa, name: "House & Villa", total: "155 Property" },
  { cover: apartment, name: "Apartment", total: "300 Property" },
  { cover: office, name: "Office & Studio", total: "80 Property" },
  { cover: condo, name: "Villa & Condo", total: "80 Property" },
];
export const list = [
  {
    id: 1,
    cover: "/images/list/p-1.png", // Corrected paths
    name: "Red Carpet Real Estate",
    location: "210 Zirak Road, Canada",
    category: "For Rent",
    price: "$3,700",
    type: "Apartment",
  },
  {
    id: 2,
    cover: "/images/list/p-2.png", // Corrected paths
    name: "Fairmount Properties",
    location: "5698 Zirak Road, NewYork",
    category: "For Sale",
    price: "$9,750",
    type: "Condos",
  },
  {
    id: 3,
    cover: "/images/list/p-7.png", // Corrected paths
    name: "The Real Estate Corner",
    location: "5624 Mooker Market, USA",
    category: "For Rent",
    price: "$5,860",
    type: "Offices",
  },
  {
    id: 4,
    cover: "/images/list/p-4.png", // Corrected paths
    name: "Herringbone Realty",
    location: "5621 Liverpool, London",
    category: "For Sale",
    price: "$7,540",
    type: "Homes & Villas",
  },
  {
    id: 5,
    cover: "/images/list/p-5.png", // Corrected paths
    name: "Brick Lane Realty",
    location: "210 Montreal Road, Canada",
    category: "For Rent",
    price: "$4,850",
    type: "Commercial",
  },
  {
    id: 6,
    cover: "/images/list/p-6.png", // Corrected paths
    name: "Banyon Tree Realty",
    location: "210 Zirak Road, Canada",
    category: "For Sale",
    price: "$2,742",
    type: "Apartment",
  },
];

export const awards = [
  { icon: "fa-solid fa-briefcase", num: "43 M", name: "Mimo X11 Award" },
  { icon: "fa-solid fa-trophy", num: "32 M", name: "Blue Burmin Award" },
  { icon: "fa-solid fa-lightbulb", num: "51 M", name: "Australian UGC Award" },
  { icon: "fa-solid fa-heart", num: "42 M", name: "IITCA Green Award" },
];

export const location = [
  {
    id: 1,
    name: "New Orleans, Louisiana",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "/images/location/city-1.png", // Corrected paths
  },
  {
    id: 2,
    name: "Jerrsy, United State",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "/images/location/city-2.png", // Corrected paths
  },
  {
    id: 3,
    name: "Liverpool, London",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "/images/location/city-3.png", // Corrected paths
  },
  {
    id: 4,
    name: "NewYork, United States",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "/images/location/city-4.png", // Corrected paths
  },
  {
    id: 5,
    name: "Montreal, Canada",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "/images/location/city-5.png", // Corrected paths
  },
  {
    id: 6,
    name: "California, USA",
    Villas: "12 Villas",
    Apartments: "10 Apartments",
    Offices: "07 Offices",
    cover: "/images/location/city-6.png", // Corrected paths
  },
];

export const team = [
  // Only including the entries for Ros, Raj, Nik, and Nir with .png extension
  {
    list: "45",
    cover: ros,
    address: "Toronto, Canada",
    name: "Rosalina D. William",
    icon: ["fa-brands fa-facebook-f", "fa-brands fa-linkedin", "fa-brands fa-twitter", "fa-brands fa-instagram"],
  },
  {
    list: "60",
    cover: raj,
    address: "New York, USA",
    name: "Raj K. Sharma",
    icon: ["fa-brands fa-facebook-f", "fa-brands fa-linkedin", "fa-brands fa-twitter", "fa-brands fa-instagram"],
  },
  {
    list: "75",
    cover: nik,
    address: "Chicago, USA",
    name: "Nikolas P. Watson",
    icon: ["fa-brands fa-facebook-f", "fa-brands fa-linkedin", "fa-brands fa-twitter", "fa-brands fa-instagram"],
  },
  {
    list: "55",
    cover: nir,
    address: "Vancouver, Canada",
    name: "Niraj M. Patel",
    icon: ["fa-brands fa-facebook-f", "fa-brands fa-linkedin", "fa-brands fa-twitter", "fa-brands fa-instagram"],
  }
];


export const price = [
  {
    plan: "Basic",
    price: "29",
    ptext: "per user, per month",
    list: [
      { icon: "fa-solid fa-check", text: "99.5% Uptime Guarantee" },
      { icon: "fa-solid fa-check", text: "120GB CDN Bandwidth"
      },
      { icon: "fa-solid fa-check", text: "5GB Cloud Storage" },
      { change: "color", icon: "fa-solid fa-x", text: "Personal Help Support" },
      { change: "color", icon: "fa-solid fa-x", text: "Enterprise SLA" },
    ],
  },
  {
    best: "Best Value",
    plan: "Standard",
    price: "49",
    ptext: "per user, per month",
    list: [
      { icon: "fa-solid fa-check", text: "99.5% Uptime Guarantee" },
      { icon: "fa-solid fa-check", text: "150GB CDN Bandwidth" },
      { icon: "fa-solid fa-check", text: "10GB Cloud Storage" },
      { icon: "fa-solid fa-check", text: "Personal Help Support" },
      { change: "color", icon: "fa-solid fa-x", text: "Enterprise SLA" },
    ],
  },
  {
    plan: "Platinum",
    price: "79",
    ptext: "2 user, per month",
    list: [
      { icon: "fa-solid fa-check", text: "100% Uptime Guarantee" },
      { icon: "fa-solid fa-check", text: "200GB CDN Bandwidth" },
      { icon: "fa-solid fa-check", text: "20GB Cloud Storage" },
      { icon: "fa-solid fa-check", text: "Personal Help Support" },
      { icon: "fa-solid fa-check", text: "Enterprise SLA" },
    ],
  },
];

export const footer = [
  {
    title: "LAYOUTS",
    text: [
      { list: "Home Page" },
      { list: "About Page" },
      { list: "Service Page" },
      { list: "Property Page" },
      { list: "Contact Page" },
      { list: "Single Blog" },
    ],
  },
  {
    title: "ALL SECTIONS",
    text: [
      { list: "Headers" },
      { list: "Features" },
      { list: "Attractive" },
      { list: "Testimonials" },
      { list: "Videos" },
      { list: "Footers" },
    ],
  },
  {
    title: "COMPANY",
    text: [
      { list: "About" },
      { list: "Blog" },
      { list: "Pricing" },
      { list: "Affiliate" },
      { list: "Login" },
      { list: "Changelog" },
    ],
  },
];