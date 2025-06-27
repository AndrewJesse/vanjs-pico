import van from 'vanjs-core';
import * as vanX from "vanjs-ext";
import './style.css';

const { table, tr, th, td, h5 } = van.tags;

const tableHeader = () =>
  tr(
    th(h5("Brand")),
    th(h5("Brand Score")),
    th(h5("Name")),
    th(h5("Type")),
    th(h5("Usage")),
    th(h5("Material")),
    th(h5("Weight (oz)")),
    th(h5("Length (in)")),
    th(h5("Handle Type")),
    th(h5("Head Finish")),
    th(h5("Price")),
    th(h5("Rating")),
    th(h5("Likes")),
    th(h5("Image"))
  );

const hammers = [
  { brand: "Estwing", brandScore: 4.8, name: "Claw Hammer", type: "General Purpose", usage: "Driving/removing nails", material: "Steel", weight: 16, length: 13, handle: "Wood", finish: "Polished", price: 19.99, rating: 4.5, likes: 120, image: "[jpg]" },
  { brand: "Stanley", brandScore: 4.6, name: "Ball Peen Hammer", type: "Metalworking", usage: "Shaping metal", material: "Steel", weight: 24, length: 14, handle: "Fiberglass", finish: "Polished", price: 25.50, rating: 4.7, likes: 230, image: "[jpg]" },
  { brand: "DeWalt", brandScore: 4.7, name: "Framing Hammer", type: "Carpentry", usage: "Framing wood", material: "Steel", weight: 22, length: 16, handle: "Fiberglass", finish: "Milled", price: 29.95, rating: 4.6, likes: 205, image: "[jpg]" },
  { brand: "Vaughan", brandScore: 4.5, name: "Tack Hammer", type: "Upholstery", usage: "Setting tacks", material: "Steel", weight: 8, length: 11, handle: "Wood", finish: "Smooth", price: 14.00, rating: 4.3, likes: 85, image: "[jpg]" },
  { brand: "Tekton", brandScore: 4.4, name: "Dead Blow Hammer", type: "Precision", usage: "Minimizing rebound", material: "Steel + Rubber", weight: 32, length: 14, handle: "Composite", finish: "Rubber coated", price: 32.75, rating: 4.6, likes: 190, image: "[jpg]" },
  { brand: "Bosch", brandScore: 4.6, name: "Drywall Hammer", type: "Drywall", usage: "Drywall installation", material: "Steel", weight: 14, length: 12, handle: "Wood", finish: "Smooth", price: 21.99, rating: 4.5, likes: 88, image: "[jpg]" },
  { brand: "Craftsman", brandScore: 4.5, name: "Trim Hammer", type: "Finish Carpentry", usage: "Trim work", material: "Steel", weight: 10, length: 11, handle: "Fiberglass", finish: "Polished", price: 18.50, rating: 4.4, likes: 77, image: "[jpg]" },
  { brand: "Milwaukee", brandScore: 4.7, name: "Electrician's Hammer", type: "Electrical", usage: "Electrical boxes", material: "Steel", weight: 19, length: 14, handle: "Fiberglass", finish: "Milled", price: 27.00, rating: 4.6, likes: 98, image: "[jpg]" },
  { brand: "Estwing", brandScore: 4.8, name: "Roofing Hammer", type: "Roofing", usage: "Roofing nails", material: "Steel", weight: 20, length: 13, handle: "Steel", finish: "Polished", price: 36.00, rating: 4.7, likes: 112, image: "[jpg]" },
  { brand: "Stiletto", brandScore: 4.9, name: "Titanium Framing Hammer", type: "Framing", usage: "Professional framing", material: "Titanium", weight: 15, length: 18, handle: "Wood", finish: "Polished", price: 249.00, rating: 4.9, likes: 310, image: "[jpg]" },
  { brand: "Picard", brandScore: 4.5, name: "Cross Peen Hammer", type: "Blacksmithing", usage: "Shaping metal", material: "Steel", weight: 32, length: 15, handle: "Wood", finish: "Smooth", price: 39.99, rating: 4.7, likes: 175, image: "[jpg]" },
  { brand: "Halder", brandScore: 4.4, name: "Soft Face Hammer", type: "Assembly", usage: "Non-marring striking", material: "Plastic/Brass", weight: 16, length: 12, handle: "Composite", finish: "Plastic", price: 22.00, rating: 4.5, likes: 92, image: "[jpg]" },
  { brand: "OX Tools", brandScore: 4.3, name: "Brick Hammer", type: "Masonry", usage: "Cutting/chipping brick", material: "Steel", weight: 24, length: 16, handle: "Fiberglass", finish: "Polished", price: 28.90, rating: 4.4, likes: 110, image: "[jpg]" },
  { brand: "Stanley", brandScore: 4.6, name: "Sledge Hammer", type: "Heavy Duty", usage: "Demolition", material: "Steel", weight: 96, length: 36, handle: "Fiberglass", finish: "Painted", price: 45.00, rating: 4.8, likes: 340, image: "[jpg]" },
  { brand: "Estwing", brandScore: 4.8, name: "Rock Hammer", type: "Geology", usage: "Rock splitting", material: "Steel", weight: 20, length: 13, handle: "Steel", finish: "Polished", price: 35.00, rating: 4.8, likes: 145, image: "[jpg]" }
];

const ToolTable = () => [
  table(
    tableHeader(),
    hammers.map(Tool)
  )
];

const Tool = ({ brand, brandScore, name, type, usage, material, weight, length, handle, finish, price, rating, likes, image }) =>
  tr(
    td(brand),
    td(brandScore),
    td(name),
    td(type),
    td(usage),
    td(material),
    td(weight),
    td(length),
    td(handle),
    td(finish),
    td(`$${price.toFixed(2)}`),
    td(rating),
    td(likes),
    td(image)
  );

van.add(document.body, ToolTable());
