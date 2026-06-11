
const anchor = '2053';

export const doomsdayCalculator = (month, day, year) => {
    if (year < 0) {
        year--;
        year = -year;
        year %= 400;
        year += 400;
    }
    
};