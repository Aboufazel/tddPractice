function binarySearchRecursive(array, target, left = 0, right = array.length - 1) {
    if (left > right) {
        return -1; // مقدار پیدا نشد
    }

    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
        return mid; // مقدار پیدا شد
    } else if (array[mid] > target) {
        return binarySearchRecursive(array, target, left, mid - 1);
    } else {
        return binarySearchRecursive(array, target, mid + 1, right);
    }
}

// مثال استفاده
const sortedArray = [3, 9, 10, 27, 38, 43, 82];
const index = binarySearchRecursive(sortedArray, 27);
console.log(index !== -1 ? `مقدار پیدا شد در ایندکس: ${index}` : "مقدار پیدا نشد");



function binarySearchIterative(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            return mid; // مقدار پیدا شد
        } else if (array[mid] > target) {
            right = mid - 1; // به نیمه چپ برو
        } else {
            left = mid + 1; // به نیمه راست برو
        }
    }

    return -1; // مقدار پیدا نشد
}

// مثال استفاده
const sortedArray2 = [3, 9, 10, 27, 38, 43, 82];
const index2 = binarySearchIterative(sortedArray2, 43);
console.log(index2 !== -1 ? `مقدار پیدا شد در ایندکس: ${index2}` : "مقدار پیدا نشد");
