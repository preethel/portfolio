import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import portfolioData from "@/data/portfolio.json";
import { PortfolioData } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPortfolioData(): PortfolioData {
  return portfolioData as PortfolioData;
}
