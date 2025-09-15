import "../../globals.css";
import DynamicNavbarLayout from "./layout/DynamicNavbarLayout";

export const metadata = {
  title: "Sparrow Forge",
  description: "Custom Software & App Solutions Built for Your Business",
};

export default function CommonLayout({ children }) {
  return <DynamicNavbarLayout>{children}</DynamicNavbarLayout>;
}
