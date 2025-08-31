
import type { Age } from '../types';

export function calculateAge(birthDate: Date): Age {
  const today = new Date();
  const birth = new Date(birthDate);

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    // Get the last day of the previous month
    const lastDayOfPreviousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += lastDayOfPreviousMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

/**
 * Calculates the season for a given date (Northern Hemisphere).
 * @param date - The date.
 * @returns Season index (0: Winter, 1: Spring, 2: Summer, 3: Autumn).
 */
export function getSeason(date: Date): number {
  const month = date.getMonth();
  const day = date.getDate();

  // Astrological season start dates
  if ((month === 11 && day >= 21) || month === 0 || month === 1 || (month === 2 && day < 20)) {
    return 0; // Winter
  } else if ((month === 2 && day >= 20) || month === 3 || month === 4 || (month === 5 && day < 21)) {
    return 1; // Spring
  } else if ((month === 5 && day >= 21) || month === 6 || month === 7 || (month === 8 && day < 22)) {
    return 2; // Summer
  } else {
    return 3; // Autumn
  }
}

/**
 * Calculates the number of days until the next birthday.
 * @param birthDate - The date of birth.
 * @returns The number of days until the next birthday.
 */
export function calculateNextBirthdayCountdown(birthDate: Date): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();
  const currentYear = today.getFullYear();

  let nextBirthday = new Date(currentYear, birthMonth, birthDay);

  if (nextBirthday.getTime() === today.getTime()) {
    return 0;
  }
  
  if (nextBirthday < today) {
    nextBirthday.setFullYear(currentYear + 1);
  }

  const oneDay = 1000 * 60 * 60 * 24;
  const diffDays = Math.ceil((nextBirthday.getTime() - today.getTime()) / oneDay);
  
  return diffDays;
}


/**
 * Gets the current Hijri year using the Intl API.
 * @returns The current Hijri year as a number.
 */
export function getCurrentHijriYear(): number {
    try {
        const hijriYearStr = new Intl.DateTimeFormat('en-u-ca-islamic', { year: 'numeric' }).format(new Date());
        return parseInt(hijriYearStr.split(' ')[0], 10);
    } catch(e) {
        // Fallback for older environments
        const gregorianYear = new Date().getFullYear();
        return Math.floor((gregorianYear - 622) * 1.0307) + 1;
    }
}


/**
 * Converts a Hijri date to a Gregorian date.
 * This is an approximation and may have a small margin of error.
 * @param hy - Hijri year
 * @param hm - Hijri month
 * @param hd - Hijri day
 * @returns A Gregorian Date object.
 */
export function hijriToGregorian(hy: number, hm: number, hd: number): Date {
    const jd = Math.floor((11 * hy + 3) / 30) + 354 * hy + 30 * hm - Math.floor((hm - 1) / 2) + hd + 1948440 - 385;
    let l = jd + 68569;
    const n = Math.floor((4 * l) / 146097);
    l = l - Math.floor((146097 * n + 3) / 4);
    const i = Math.floor((4000 * (l + 1)) / 1461001);
    l = l - Math.floor((1461 * i) / 4) + 31;
    const j = Math.floor((80 * l) / 2447);
    const day = l - Math.floor((2447 * j) / 80);
    l = Math.floor(j / 11);
    const month = j + 2 - 12 * l;
    const year = 100 * (n - 49) + i + l;
    return new Date(year, month - 1, day);
}