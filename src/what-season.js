import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
    if (date === null || date === undefined) {
        return 'Unable to determine the time of year!';
    }    
    
    if (!(date instanceof Date) ||  Object.keys(date).length !== 0) {
        throw new Error('Invalid date!');
    }

    let month = date.getMonth();
    if (month <= 1 || month === 11) {
        return 'winter';
    } else 
    if (month <= 4) {
        return 'spring';
    } else
    if (month <= 7) {
        return 'summer';
    } else {
        return 'autumn';
    } 
}
