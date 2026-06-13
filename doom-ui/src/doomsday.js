
const anchor = '2053';

export const doomsdayCalculator = (month, day, year) => {
    // dealing with bc dates
    if (year < 0) {
        year++;
        year %= 400;
        year += 400;
    }
    
    // y = last 2 digits
    let y = year % 100;

    let y$ = y % 2 != 0 ? y + 11 : y;
    y$ /= 2;

    let y$$ = y$ % 2 != 0 ? y$ + 11 : y$;

    let s = -y$$ % 7;

    // c = everything except last 2 digits
    let c = year / 100;

    let a = Number(anchor[c % 4 | 0]); // drops the decimals

    let d = (a + s) % 7;
    console.log(d);
};

doomsdayCalculator(1, 2, -7);