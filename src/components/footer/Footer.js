import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Github, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        Product: ['Features', 'Integrations', 'Pricing', 'Changelog'],
        Company: ['About', 'Careers', 'Contact', 'Blog'],
        Resources: ['Documentation', 'Support', 'API Reference', 'Status'],
        Legal: ['Privacy', 'Terms', 'License', 'Security'],
    };

    const contactInfo = [
        { icon: Mail, text: 'contact@techsolutions.in', href: 'mailto:contact@techsolutions.in' },
        { icon: Phone, text: '+91 (999) 888-7777', href: 'tel:+919998887777' },
        { icon: MapPin, text: 'Bengaluru, Karnataka', href: '#' },
    ];

    const socialLinks = [
        { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-blue-400' },
        { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:bg-gray-700' },
        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-600' },
        { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-pink-500' },
    ];

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200/80 dark:border-gray-800/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Newsletter Section */}
                <div className="py-12 sm:py-16 border-b border-gray-200/80 dark:border-gray-800/80">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                            Stay up to date
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 sm:mb-10">
                            Get the latest updates, news and product offers delivered right to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg mx-auto">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 h-11"
                            />
                            <Button className="group h-11 px-6 text-base font-medium">
                                Subscribe
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1 sm:col-span-2 space-y-8">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-orange-600 to-yellow-700 rounded-2xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300">
                                <span className="text-white font-bold text-2xl">D</span>
                            </div>
                            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 dark:from-blue-400 dark:via-blue-300 dark:to-blue-200 bg-clip-text text-transparent">
                                Dummy
                            </span>
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-md">
                            Pioneering digital transformation in India through innovative tech solutions. We blend traditional values with modern technology to create impactful digital experiences.
                        </p>
                        <div className="flex items-center space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 rounded-full text-gray-400 hover:text-white ${social.color} transition-all duration-300`}
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className="space-y-6">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                                {category}
                            </h3>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link}>
                                        <Link
                                            href={`/${link.toLowerCase()}`}
                                            className="group flex items-center text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                                        >
                                            <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                            <span>{link}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact Info */}
                <div className="py-8 sm:py-10 border-t border-gray-200/80 dark:border-gray-800/80">
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16">
                        {contactInfo.map((item) => (
                            <a
                                key={item.text}
                                href={item.href}
                                className="group flex items-center space-x-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                            >
                                <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors duration-300">
                                    <item.icon className="h-5 w-5" />
                                </div>
                                <span className="text-base">{item.text}</span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Copyright */}
                <div className="py-6 sm:py-8 border-t border-gray-200/80 dark:border-gray-800/80">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            © {currentYear} TechSolutions India Pvt. Ltd. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6 sm:space-x-8">
                            <Link
                                href="/privacy"
                                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                            >
                                Privacy Policy
                            </Link>
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />
                            <Link
                                href="/terms"
                                className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

