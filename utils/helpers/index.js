/**
 * Хелпер для плюрализации строк
 *
 * @param {number} count
 * @param {Array<string> | string[]} plurals
 * @returns {string}
 *
 * @example pluralize(1,  ['день', 'дня', 'дней']); => 1 день
 * @example pluralize(2,  ['день', 'дня', 'дней']); => 2 дня
 * @example pluralize(12, ['день', 'дня', 'дней']); => 12 дней
 * @example pluralize(1,  ['day', 'days', 'days']); => 1 day
 * @example pluralize(2,  ['day', 'days', 'days']); => 2 days
 */
export function pluralize(count, plurals) {
  if (typeof count !== 'number') {
    throw new Error('The first arg must be type of number and greater than zero');
  }

  if (!Array.isArray(plurals) || plurals?.length < 3 || plurals.some((v) => typeof v !== 'string')) {
    throw new Error('The second arg must be type of Array<String> with length equals 3');
  }

  const [one, two, five] = plurals;
  let n = Math.abs(count);

  n %= 100;

  if (n >= 5 && n <= 20) {
    return `${count} ${five}`;
  }

  n %= 10;

  if (n === 1) {
    return `${count} ${one}`;
  }

  if (n >= 2 && n <= 4) {
    return `${count} ${two}`;
  }

  return `${count} ${five}`;
}