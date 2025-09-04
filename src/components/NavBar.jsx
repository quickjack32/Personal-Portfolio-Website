import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react'; 

const navItems = [
    { name: 'Home', href: '#home'},
    { name: 'About', href: '#about'},
    { name: 'Bibliography', href: '#bibliography'},
    { name: 'Projects', href: '#projects'},
    { name: 'Contact', href: '#contact'},
];

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect (() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    
    return (
    <nav className = {cn('fixed w-full z-40 transition-all duration-300',
        isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs' : 'py-5'
    )} >
        
        <div className = 'container flex items-center justify-between'> 
            <a className = 'text-xl font-bold text-primary flex items-center px-12'
                href = '#home'
            >
                <span className = 'relative z-10 '> 
                    <span className = 'text-glow text-foreground'> Jack Quick </span> {" "} Portfolio
                </span>
            </a>

            {/* desktop nav */}
            <div className = 'hidden md:flex space-x-8'>
                {navItems.map((item, key) => (
                   <a key = {key} href = {item.href}> 
                    {item.name}
                    </a>
                ))};
            </div>

            {/* mobile nav */}
        </div>
    </nav>
    );
};
