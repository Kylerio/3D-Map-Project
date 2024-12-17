import { Building2 } from "lucide-react";
import { UsersRound } from "lucide-react";

import BaseMap from '../assets/basemap.jpeg';
import LandUseMap from '../assets/landusemap.jpeg';
import BuildingLayer from '../assets/3dbuildinglayer.jpeg';
import Population from '../assets/populationdensitylayer.jpeg';

export const navItems = [
  { label: "About", href: "#About" },
  { label: "Layer", href: "#Layer" },
  { label: "Result", href: "#Result" },
  
];

export const about = [
  {
    icon: <Building2 />,
    text: "3D Building Models",
    description:
      "These models offer a general perspective on Jakarta's skyline and urban layout. By leveraging data from MapTiler APIs, the map highlights key structures, giving users a visual sense of the city's urban density and infrastructure.",
  },
  {
    icon: <UsersRound />,
    text: "Population Density Insights",
    description:
      "With an average of 16,000 people per square kilometer (source: Badan Pusat Statistik), Jakarta's population density poses significant urban planning challenges. This layer visualizes how population density varies across neighborhoods.",
  },
];

export const cards = [
  {
    title: "Base Map",
    description: "A foundational map providing key geographical context, such as roads, rivers, and boundaries.",
    image: BaseMap,
  },
  {
    title: "Land Use Map",
    description: "A map showcasing land use, including residential, open water, trees, and other areas.",
    image: LandUseMap,
  },
  {
    title: "3D Building Layer",
    description: "A 3D building layer that visualizes vertical structures for deeper spatial analysis.",
    image: BuildingLayer,
  },
  {
    title: "Population Density Layer",
    description: "A population density map that highlights how people are distributed across various districts.",
    image: Population,
  },
];
