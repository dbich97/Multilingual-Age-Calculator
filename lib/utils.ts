
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
