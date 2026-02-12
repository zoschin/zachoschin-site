import type { Metadata } from "next";
import InvestmentTabs from "./investment-tabs";

export const metadata: Metadata = {
  title: "Investing — Zach Oschin",
};

export default function Investing() {
  return <InvestmentTabs />;
}
