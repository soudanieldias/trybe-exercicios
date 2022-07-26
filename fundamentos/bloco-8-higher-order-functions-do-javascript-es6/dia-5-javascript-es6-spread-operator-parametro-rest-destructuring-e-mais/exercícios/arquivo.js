const newArray = [10, 20, 30, 40, 50];

const newArrowFunc = (previousValue, currentValue, index) => {
    console.log(previousValue);
    console.log(currentValue);
    console.log(index);
    return 0;
}
const functionReduce = newArray.reduce(newArrowFunc, []);

console.log(functionReduce);