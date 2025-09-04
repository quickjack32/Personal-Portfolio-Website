import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from '@/components/StarBackground';
import { NavBar } from '@/components/NavBar';


export function Home () {
    return <div className = 'min-h-screen bg-background text-foreground overflow-x-hidden'>
        
        {/* Theme Toggle */}
            <ThemeToggle />
        {/* Background Effects */}
            <StarBackground />
        {/* Navigation Menu */}
            <NavBar />
        {/* Main Content */}


        {/* Footer */}

    </div>;
}