import React, { useEffect } from 'react';
import { useParams, useNavigate, Outlet, NavLink, Link } from 'react-router-dom';
import { LanguageCode } from '../types';
import { translations } from '../lib/i18n';
import LanguageSelector from './LanguageSelector';

const Layout: React.FC = () => {
    const { lang } = useParams<{ lang: string }>();
    const navigate = useNavigate();

    const currentLang = (Object.values(LanguageCode).includes(lang as LanguageCode) ? lang : LanguageCode.EN) as LanguageCode;
    const t = translations[currentLang];

    useEffect(() => {
        if (lang !== currentLang) {
            navigate(`/${currentLang}`, { replace: true });
        }
        document.documentElement.lang = currentLang;
        document.documentElement.dir = ['ar', 'fa'].includes(currentLang) ? 'rtl' : 'ltr';
    }, [lang, currentLang, navigate]);

    const handleLanguageChange = (newLang: LanguageCode) => {
        // To properly reload page content, we find the current path suffix
        const pathParts = window.location.hash.split('/');
        const currentPathSuffix = pathParts.slice(2).join('/'); // e.g., "calculator" or "about"
        navigate(`/${newLang}/${currentPathSuffix}`);
    };
    
    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
      `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
      }`;


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 flex flex-col">
            {/* Global Header */}
            <header className="sticky top-0 z-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-sm">
                <nav className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-3">
                        <Link to={`/${currentLang}`} className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white truncate">
                           {t.title}
                        </Link>
                        <div className="hidden md:flex items-center space-x-4">
                           <NavLink to={`/${currentLang}`} end className={navLinkClasses}>{t.navHome}</NavLink>
                           <NavLink to={`/${currentLang}/calculator`} className={navLinkClasses}>{t.navCalculator}</NavLink>
                           <NavLink to={`/${currentLang}/about`} className={navLinkClasses}>{t.navAbout}</NavLink>
                           <NavLink to={`/${currentLang}/contact`} className={navLinkClasses}>{t.navContact}</NavLink>
                        </div>
                        <div className="flex items-center">
                            <LanguageSelector currentLang={currentLang} onLanguageChange={handleLanguageChange} t={t}/>
                        </div>
                    </div>
                     <div className="md:hidden flex justify-center items-center space-x-4 pb-3">
                        <NavLink to={`/${currentLang}`} end className={navLinkClasses}>{t.navHome}</NavLink>
                        <NavLink to={`/${currentLang}/calculator`} className={navLinkClasses}>{t.navCalculator}</NavLink>
                        <NavLink to={`/${currentLang}/about`} className={navLinkClasses}>{t.navAbout}</NavLink>
                        <NavLink to={`/${currentLang}/contact`} className={navLinkClasses}>{t.navContact}</NavLink>
                    </div>
                </nav>
            </header>

            <div className="flex-grow">
                <Outlet context={{ t, currentLang }} />
            </div>

            <footer className="bg-white/50 dark:bg-gray-800/50 mt-12">
                <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400">
                    <div className="flex justify-center space-x-6 mb-4">
                        <Link to={`/${currentLang}/privacy`} className="hover:text-blue-600 dark:hover:text-blue-400">{t.footerPrivacyPolicy}</Link>
                         <Link to={`/${currentLang}/contact`} className="hover:text-blue-600 dark:hover:text-blue-400">{t.footerContactUs}</Link>
                    </div>
                    <p>{t.footerRights}</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;