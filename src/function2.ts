export const numbers:number[] = [1,2,3,4,5,6,7,8,9,10];
export const findMax = (numbers:number[]):string => {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max.toString();
}