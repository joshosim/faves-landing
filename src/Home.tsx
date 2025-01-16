import React, { useRef } from "react";
import { CallToAction } from "../src/sections/CallToAction.tsx";
import { Footer } from "../src/sections/Footer.tsx";
import { Header } from "../src/sections/Header.tsx";
import { Hero } from "../src/sections/Hero.tsx";
import { LogoTicker } from "../src/sections/LogoTicker.tsx";
import { Pricing } from "../src/sections/Pricing.tsx";
import Products from "../src/sections/Products.tsx";
import { ProductShowcase } from "../src/sections/ProductShowcase.tsx";
import { Testimonials } from "../src/sections/Testimonials.tsx";

export default function Home() {

    return (
        <>
            <Header

            />
            <Hero />
            <LogoTicker />
            <ProductShowcase />
            <Products />
            <Pricing />
            <Testimonials />
            <CallToAction />
            <Footer />
        </>
    );
}
