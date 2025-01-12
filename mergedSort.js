function mergeSort(array) {
    // اگر آرایه یک یا صفر عنصر داشته باشد، نیازی به مرتب‌سازی نیست.
    if (array.length <= 1) {
        return array;
    }

    // تقسیم آرایه به دو نیمه
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // بازگشتی: مرتب‌سازی دو نیمه و ادغام آنها
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const sortedArray = [];
    let i = 0, j = 0;

    // ادغام دو آرایه مرتب
    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
        
    }

    // افزودن عناصر باقی‌مانده از آرایه‌ها (اگر وجود داشته باشند)
    return [...sortedArray, ...left.slice(i), ...right.slice(j)];
}

// مثال استفاده
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];

const sortedArray = mergeSort(unsortedArray);

console.log('آرایه مرتب:', sortedArray);
