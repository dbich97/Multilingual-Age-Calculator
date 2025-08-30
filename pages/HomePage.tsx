import React, { useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import type { Translation, LanguageCode } from '../types';

interface PageContext {
  t: Translation;
  currentLang: LanguageCode;
}

const HomePage: React.FC = () => {
  const { t, currentLang } = useOutletContext<PageContext>();

  useEffect(() => {
    document.title = t.homeTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t.homeDescription);
    }
  }, [t]);

  return (
    <main className="w-full max-w-4xl mx-auto px-4 py-16 md:py-24 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white mb-4">
        {t.homeTitle}
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
        {t.homeDescription}
      </p>
      <div className="flex justify-center">
        <Link
          to={`/${currentLang}/calculator`}
          className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 transition transform hover:scale-105 duration-300 ease-in-out"
        >
          {t.homeCTAText}
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
