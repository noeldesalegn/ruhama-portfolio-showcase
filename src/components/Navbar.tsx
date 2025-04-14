
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider';
import { Link } from 'react-scroll';

const navLinks = [
  { title: 'Home', href: 'home' },
  { title: 'About', href: 'about' },
  { title: 'Projects', href: 'projects' },
  { title: 'Skills', href: 'skills' },
  { title: 'Experience', href: 'experience' },
  { title: 'Contact', href: 'contact' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-2 shadow-md' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container flex items-center justify-between px-4 md:px-8">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-xl md:text-2xl font-bold cursor-pointer"
        >
          <span className="gradient-text">Ruhama.dev</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors cursor-pointer"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="ml-2"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="mr-2"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <nav className="container py-4">
            <ul className="space-y-4 px-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
