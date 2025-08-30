import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import type { Translation, LanguageCode } from '../types';

interface PageContext {
  t: Translation;
  currentLang: LanguageCode;
}

const AboutPage: React.FC = () => {
  const { t } = useOutletContext<PageContext>();

  useEffect(() => {
    document.title = t.aboutTitle;
  }, [t]);

  return (
    <main className="w-full max-w-3xl mx-auto px-4 py-8 md:py-12">
      <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          {t.aboutTitle}
        </h1>
        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300">
            <h2 className="text-2xl font-semibold">{t.aboutHeading}</h2>
            {t.aboutContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
      </article>
    </main>
  );
};

export default AboutPage;
