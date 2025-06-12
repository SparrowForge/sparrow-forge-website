import "../globals.css";
import Footer from "./component/shared/Footer";
import Navbar from "./component/shared/Navbar";


export const metadata = {
  title: "Sparrow Forge",
  description: "Custom Software & App Solutions Built for Your Business",
};

export default function CommonLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`  antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
