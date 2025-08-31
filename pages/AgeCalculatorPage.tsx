import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import type { Age, Translation, LanguageCode, AdditionalInfo } from '../types';
import { LanguageCode as LangEnum } from '../types';
import { calculateAge, hijriToGregorian, getSeason, calculateNextBirthdayCountdown } from '../lib/utils';
import AgeCalculatorForm from '../components/AgeCalculatorForm';
import AgeResult from '../components/AgeResult';
import CalendarSelector from '../components/CalendarSelector';
import SeoContent from '../components/SeoContent';
import ShareButtons from '../components/ShareButtons';

type Calendar = 'gregorian' | 'hijri';

interface PageContext {
  t: Translation;
  currentLang: LanguageCode;
}

const updateMetaTag = (selector: string, attribute: string, content: string) => {
    let element = document.querySelector(selector) as HTMLMetaElement | null;
    if (element) {
        element.setAttribute(attribute, content);
    }
};

const AgeCalculatorPage: React.FC = () => {
  const { t, currentLang } = useOutletContext<PageContext>();

  const [day, setDay] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [age, setAge] = useState<Age | null>(null);
  const [additionalInfo, setAdditionalInfo] = useState<AdditionalInfo | null>(null);
  const [error, setError] = useState<string>('');
  const [calendar, setCalendar] = useState<Calendar>('gregorian');

  useEffect(() => {
    document.title = t.seoTitle;
    updateMetaTag('meta[name="description"]', 'content', t.seoDescription);
    updateMetaTag('meta[name="keywords"]', 'content', t.seoKeywords);
    updateMetaTag('meta[property="og:title"]', 'content', t.seoTitle);
    updateMetaTag('meta[property="og:description"]', 'content', t.seoDescription);
    updateMetaTag('meta[property="og:url"]', 'content', window.location.href);
    updateMetaTag('meta[property="twitter:title"]', 'content', t.seoTitle);
    updateMetaTag('meta[property="twitter:description"]', 'content', t.seoDescription);

    // Reset form when language changes
    setDay('');
    setMonth('');
    setYear('');
    setAge(null);
    setAdditionalInfo(null);
    setError('');
    setCalendar('gregorian');
  }, [t, currentLang]);

  
  const handleCalculate = () => {
    setAge(null);
    setAdditionalInfo(null);

    if (!day || !month || !year) {
      setError(t.errorInvalidDate);
      return;
    }

    let birthDateObj: Date;

    if (calendar === 'hijri' && currentLang === LangEnum.AR) {
        birthDateObj = hijriToGregorian(parseInt(year), parseInt(month), parseInt(day));
    } else {
        const birthDateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        birthDateObj = new Date(birthDateStr);
    }

    if (calendar === 'gregorian') {
      if (
        isNaN(birthDateObj.getTime()) ||
        birthDateObj.getFullYear() !== parseInt(year) ||
        birthDateObj.getMonth() + 1 !== parseInt(month) ||
        birthDateObj.getDate() !== parseInt(day)
      ) {
        setError(t.errorInvalidDate);
        return;
      }
    }
     if (isNaN(birthDateObj.getTime())) {
        setError(t.errorInvalidDate);
        return;
    }
    
    if (birthDateObj > new Date()) {
      setError(t.errorFutureDate);
      return;
    }
    
    setError('');
    setAge(calculateAge(birthDateObj));

    // Calculate additional info
    const dayIndex = birthDateObj.getDay();
    const dayOfWeek = t.daysOfWeekArray[dayIndex];

    const seasonIndex = getSeason(birthDateObj);
    const season = t.seasonsArray[seasonIndex];

    const nextBirthday = calculateNextBirthdayCountdown(birthDateObj);

    setAdditionalInfo({ dayOfWeek, season, nextBirthday });
  };

  const handleCalendarChange = (newCalendar: Calendar) => {
    setCalendar(newCalendar);
    setDay('');
    setMonth('');
    setYear('');
    setAge(null);
    setAdditionalInfo(null);
    setError('');
  };

  return (
      <main className="w-full max-w-2xl mx-auto px-4 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white text-center mb-4">{t.h1}</h1>
        
        {/* Main Calculator Card */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 transition-all duration-300">
            <h2 className="text-center text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">{t.h2}</h2>
            {currentLang === LangEnum.AR && (
              <CalendarSelector 
                currentCalendar={calendar}
                onCalendarChange={handleCalendarChange}
                t={t}
              />
            )}
            <AgeCalculatorForm
              day={day}
              setDay={setDay}
              month={month}
              setMonth={setMonth}
              year={year}
              setYear={setYear}
              handleCalculate={handleCalculate}
              error={error}
              t={t}
              calendar={calendar}
              lang={currentLang}
            />
            {age && <AgeResult age={age} additionalInfo={additionalInfo} t={t} />}
        </section>

        {/* Secondary Content Sections */}
        <ShareButtons url={window.location.href} title={t.seoTitle} t={t} />

        {t.seoSections && t.seoSections.length > 0 && (
          <SeoContent t={t} lang={currentLang} />
        )}
      </main>
  );
};

export default AgeCalculatorPage;