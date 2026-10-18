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
        <div className="bg-primary text-white font-[350] text-[18px] leading-[23px] z-10">
            <nav className="flex justify-between border-b border-secondary-yellow/30 p-[16px] md:px-[32px] 2xl:px-[220px] md:py-[16px]">
                <Logo />
                <div className="flex gap-[60px]">
                    <div className="hidden xl:flex items-center gap-[20px] font-dm">
                        <div className="flex gap-[4px]">
                            <span>Products</span>
                            <DownArrow />
                        </div>
                        <div className="flex gap-[4px]">
                            <span>Solutions</span>
                            <DownArrow />
                        </div>
                        <div className="flex gap-[4px]">
                            <span>Resources</span>
                            <DownArrow />
                        </div>
                        <div className="flex gap-[4px]">
                            <span>Pricing</span>
                            <DownArrow />
                        </div>
                    </div>
                    <div className="flex gap-[24px]">
                        <div className="hidden lg:flex gap-[24px] tracking-[-0.02em]">
                            <Button color="secondary" font="bold" paddingX="normal">Login</Button>
                            <Button color="primary" font="bold" paddingX="small">Try Whitepace free <RightArrow /></Button>
                        </div>
                        <button className="xl:hidden" onClick={ () => setIsMenuOpen(!isMenuOpen) }>
                            <HamburgerMenuIcon />
                        </button>
                    </div>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="flex xl:hidden flex-col lg:flex-row justify-center items-center gap-[16px] lg:gap-[36px] border-b border-secondary-yellow/30 p-[16px]">
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
                    <div className="flex lg:hidden flex-col items-center gap-[16px] tracking-[-0.02em]">
                        <Button color="secondary" font="bold" paddingX="normal">Login</Button>
                        <Button color="primary" font="bold" paddingX="small">Try Whitepace free <RightArrow /></Button>
                    </div>
                </div>
            )}
        </div>
    );
}
