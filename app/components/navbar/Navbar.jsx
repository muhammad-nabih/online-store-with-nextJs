"use client";
// استيراد مكتبات ومكونات React اللازمة
import "/app/globals.css";
import { Inter } from "next/font/google";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";

import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

// قائمة الصفحات
const pages = ["Home", "Product", "Help", "Services"];

// معلومات الصفحة (يمكن استخدامها لتخصيص عنوان الصفحة والوصف لأغراض SEO)
export const metadata = {
  title: "Home Page",
  description: "Generated by create next app",
};

const Navbar = () => {
  // حالة القائمة الرئيسية (مفتوحة/مغلقة)
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  // حالة قائمة المستخدم (مفتوحة/مغلقة)
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // فتح قائمة الملاحة
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // فتح قائمة المستخدم
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // إغلاق قائمة الملاحة
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // إغلاق قائمة المستخدم
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // تخصيص مظهر النصوص باستخدام مكتبة المظهر
  const theme = createTheme({
    typography: {
      fontFamily: ["pacifico", "poppins"],
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* شريط التطبيق (الشريط العلوي) */}
        <AppBar
          position="sticky"
          sx={{
            top: 0,
            background: "#111",
            color: "#5d9baa",
            fontFamily: "pacifico",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* شعار الشركة أو الصورة */}
              <img src="/image/phone.png" alt="Logo " width={40} height={40} />

              {/* عنوان الشركة */}
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 30,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  letterSpacing: ".2rem",
                  color: "#1971b4",
                  textDecoration: "none",
                  fontFamily: "pacifico",
                  textTransform: "uppercase",
                  letterSpacing: ".4rem",
                  // textShadow: "1px 1px 1px white; ",
                }}
              >
                online Store
              </Typography>

              {/* قسم الشريط الجانبي المتجاوب */}
              <Box
                sx={{
                  background: "#101010",
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                }}
              >
                {/* زر القائمة المتجاوب */}
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>

                {/* قائمة الملاحة المتجاوبة */}
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {/* إنشاء عناصر القائمة بناءً على الصفحات المحددة */}
                  {pages.map((page, index) => {
                    const isProductPage = /Product/i.test(page);
                    const href = isProductPage ? "/components/product" : "/";
                    return (
                      <MenuItem
                        style={{ background: "#101010", color: "white" }}
                        key={index}
                        onClick={handleCloseNavMenu}
                      >
                        <Typography fontWeight={"bold"} textAlign="center">
                          {/* إضافة الرابط بناءً على الشرط */}
                          <Link href={href}>{page}</Link>
                        </Typography>
                      </MenuItem>
                    );
                  })}
                </Menu>
              </Box>

              {/* أزرار الملاحة */}
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {/* زر العودة إلى الصفحة الرئيسية */}
                <Link href={"/"}>
                  <Button
                    className="hoverClass"
                    style={{ fontFamily: "pacifico", letterSpacing: "3px" }}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Home
                  </Button>
                </Link>

                {/* زر المنتجات */}
                <Link href={"/components/product"}>
                  <Button
                    className="hoverClass"
                    style={{ fontFamily: "pacifico", letterSpacing: "3px" }}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Products
                  </Button>
                </Link>

                {/* زر المساعدة */}
                <Button
                  className="hoverClass"
                  style={{ fontFamily: "pacifico", letterSpacing: "3px" }}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Help
                </Button>

                {/* زر الخدمات */}
                <Button
                  className="hoverClass"
                  style={{ fontFamily: "pacifico", letterSpacing: "3px" }}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Services
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
