function quickSort(array) {
    // اگر آرایه یک یا صفر عنصر داشته باشد، نیازی به مرتب‌سازی نیست.
    if (array.length <= 1) {
        return array;
    }

    // انتخاب یک عنصر به عنوان محور (Pivot)
    const pivot = array[array.length - 1];
    const left = [];
    const right = [];

    // تقسیم آرایه به دو بخش: کوچک‌تر از محور و بزرگ‌تر یا مساوی با محور
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    // بازگشتی: مرتب‌سازی بخش‌های چپ و راست و ترکیب آنها با محور
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// مثال استفاده
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = quickSort(unsortedArray);

console.log('آرایه مرتب:', sortedArray);
