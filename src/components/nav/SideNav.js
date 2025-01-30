'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    Home,
    BarChart3,
    Settings,
    UserCircle,
    ChevronLeft,
    ChevronRight,
    Layout,
    Menu
} from 'lucide-react';

const SideNav = () => {
    const pathname = usePathname();
    const [isExpanded, setIsExpanded] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (mobile) {
                setIsExpanded(false);
            }
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navItems = [
        { name: 'Home', icon: Home, path: '/' },
        { name: 'Analytics', icon: BarChart3, path: '/analytics' },
        { name: 'Settings', icon: Settings, path: '/settings' },
        { name: 'Profile', icon: UserCircle, path: '/profile' },
    ];

    // Mobile Bottom Navigation
    if (isMobile) {
        return (
            <>
                {/* Mobile Bottom Nav */}
                <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700 safe-area-pb">
                    <div className="px-4 py-2">
                        <div className="flex items-center justify-around">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = pathname === item.path;

                                return (
                                    <Link
                                        key={item.name}
                                        href={item.path}
                                        className="group relative py-2 px-3 w-16"
                                    >
                                        <div className="flex flex-col items-center">
                                            <div className={`
                                                p-1.5 rounded-xl transition-all duration-300 group-hover:bg-gray-100 dark:group-hover:bg-gray-700
                                                ${isActive
                                                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                                    : 'text-gray-600 dark:text-gray-400'
                                                }
                                            `}>
                                                <Icon
                                                    className={`w-5 h-5 transition-colors duration-200
                                                        ${isActive
                                                            ? 'text-blue-600 dark:text-blue-400'
                                                            : 'text-gray-500 dark:text-gray-400'
                                                        }
                                                    `}
                                                    strokeWidth={1.5}
                                                />
                                            </div>
                                            <span className={`
                                                text-xs mt-1 transition-colors duration-200 whitespace-nowrap
                                                ${isActive
                                                    ? 'text-blue-600 dark:text-blue-400 font-medium'
                                                    : 'text-gray-600 dark:text-gray-400'
                                                }
                                            `}>
                                                {item.name}
                                            </span>
                                            {isActive && (
                                                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                                                    <div className="w-1 h-1 rounded-full bg-blue-600 dark:bg-blue-400" />
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </nav>

                {/* Mobile Header */}
                <div className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 md:hidden">
                    <div className="flex items-center justify-between px-4 py-2">
                        <div className="flex items-center space-x-3">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                                <Layout className="w-6 h-6 text-white" strokeWidth={1.5} />
                            </div>
                            <span className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Dashboard
                            </span>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    // Desktop Sidebar
    return (
        <nav
            data-expanded={isExpanded}
            className={`
                h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700
                transition-all duration-300 ease-in-out
                ${isExpanded ? 'w-64' : 'w-20'} 
                fixed left-0 top-0 z-40
                hidden md:block
            `}
        >
            <div className="flex flex-col h-full">
                {/* Header/Logo Section */}
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                            <Layout className="w-6 h-6 text-white" strokeWidth={1.5} />
                        </div>
                        {isExpanded && (
                            <span className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Dashboard
                            </span>
                        )}
                    </div>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.path;

                        return (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`
                                    flex items-center px-3 py-3 rounded-lg transition-all duration-200
                                    group relative
                                    ${isActive
                                        ? 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-600 dark:text-blue-400'
                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                                    }
                                `}
                            >
                                <Icon
                                    className={`w-6 h-6 transition-colors duration-200
                                        ${isActive
                                            ? 'text-blue-600 dark:text-blue-400'
                                            : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300'
                                        }
                                    `}
                                    strokeWidth={1.5}
                                />
                                {isExpanded && (
                                    <span className={`ml-3 font-medium transition-colors duration-200
                                        ${isActive
                                            ? 'text-blue-600 dark:text-blue-400'
                                            : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100'
                                        }
                                    `}>
                                        {item.name}
                                    </span>
                                )}
                                {!isExpanded && (
                                    <div className="absolute left-full ml-6 invisible group-hover:visible bg-gray-900 text-white px-2 py-1 text-sm rounded-md whitespace-nowrap">
                                        {item.name}
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Toggle Button */}
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="absolute right-[-12px] top-16 bg-white dark:bg-gray-800 rounded-full p-1.5 
                        border border-gray-200 dark:border-gray-700
                        shadow-sm hover:shadow-md transition-all duration-200
                        hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                    {isExpanded ? (
                        <ChevronLeft className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    ) : (
                        <ChevronRight className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default SideNav;

