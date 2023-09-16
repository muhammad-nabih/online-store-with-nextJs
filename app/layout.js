import Navbar from "./components/navbar/Navbar.jsx";
// العنصر الرئيسي لتخطيط الصفحة
export default function RootLayout({ children }) {
  return (
    // هيكل الصفحة الرئيسي
    <html lang="en">
      <body >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
