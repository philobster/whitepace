"use client";

import { Button } from "./Button";
import { DownArrow } from "./icons/DownArrow";
import { RightArrow } from "./icons/RightArrow";
import { Logo } from "./Logo";
import { HamburgerMenuIcon } from "./icons/HamburgerMenuIcon";
import { useState } from "react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-primary text-white font-[350] text-[18px] leading-[23px]">
            <nav className="flex justify-between border-b border-secondary-yellow/30 p-[16px] 2xl:px-[220px] 2xl:py-[17px]">
                <Logo />

                <div className="hidden 2xl:flex gap-[60px]">
                    <div className="flex items-center gap-[34px] font-dm">
                        <div className="flex gap-[10px]">
                            <span>Products</span>
                            <DownArrow />
                        </div>
                        <div className="flex gap-[10px]">
                            <span>Solutions</span>
                            <DownArrow />
                        </div>
                        <div className="flex gap-[10px]">
                            <span>Resources</span>
                            <DownArrow />
                        </div>
                        <div className="flex gap-[10px]">
                            <span>Pricing</span>
                            <DownArrow />
                        </div>
                    </div>
                    <div className="flex gap-[24px]">
                        <Button color="secondary">Login</Button>
                        <Button color="primary">Try Whitepace free <RightArrow /></Button>
                    </div>
                </div>

                <button className="xl:hidden" onClick={ () => setIsMenuOpen(!isMenuOpen)}>
                    <HamburgerMenuIcon />
                </button>
            </nav>
            {isMenuOpen && (
                <div className="flex flex-col items-center gap-[16px] border-b border-secondary-yellow/30 p-[16px]">
                    <div className="flex gap-[10px]">
                        <span>Products</span>
                        <DownArrow />
                    </div>
                    <div className="flex gap-[10px]">
                        <span>Solutions</span>
                        <DownArrow />
                    </div>
                    <div className="flex gap-[10px]">
                        <span>Resources</span>
                        <DownArrow />
                    </div>
                    <div className="flex gap-[10px]">
                        <span>Pricing</span>
                        <DownArrow />
                    </div>
                    <Button color="secondary">Login</Button>
                    <Button color="primary">Try Whitepace free <RightArrow /></Button>
                </div>
            )}
        </div>
    );
}
