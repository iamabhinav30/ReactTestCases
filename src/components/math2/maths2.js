
export const sum = (vals) => {
    let sum = 0;
    vals.forEach((val) => {
        sum += val;
    });

    return sum;
}


export const positive = (vals) =>  vals.filter((x) => { return x > 0; });
export const negative = (vals) =>  vals.filter((x) => { return x < 0; });
