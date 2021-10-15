const arrayMaximalAdjacentDistance = (array) => {
    let max = -Infinity;
    let pointer = 0;

    while (pointer < array.length - 1) {
        if (Math.abs(array[pointer] - array[pointer+1] > max)) max = Math.abs(array[pointer] - array[pointer+1]);
        pointer++

    }
    return max;
};

console.log(arrayMaximalAdjacentDistance([2, 10, 9, 0]));
