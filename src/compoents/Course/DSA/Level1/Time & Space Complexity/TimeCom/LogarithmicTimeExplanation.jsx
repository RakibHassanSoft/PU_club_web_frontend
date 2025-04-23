import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const LogarithmicTimeExplanation = () => {
    const binarySearchExample = `// বাইনারি সার্চ (Binary Search) – লগারিদমিক টাইমে কাজ করে
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

const nums = [10, 20, 30, 40, 50, 60];
console.log(binarySearch(nums, 40)); // Output: 3 (index)`;


    return (
        <div className="max-w-7xl mx-auto p-6 bg-white text-gray-900 rounded-lg shadow-xl space-y-6">
            <h1 className="text-4xl font-bold text-green-600 text-center">
                লগারিদমিক টাইম (Logarithmic Time) - O(log n)
            </h1>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold"> কি বোঝায় লগারিদমিক টাইম?</h2>
                <p>
                    লগারিদমিক টাইম মানে এমন অপারেশন যেটা প্রতিবার ধাপ কমিয়ে সমস্যার সাইজ অর্ধেক করে। মানে তুমি যতই বড় ইনপুট দাও, 
                    প্রতিবার কেটে কেটে ছোট করে শেষ পর্যন্ত সমাধানে পৌঁছায়।
                </p>
                <p className="text-lg">
                    <strong>Time Complexity:</strong> O(log n) বোঝায় সময় বাড়ে ধীর গতিতে ইনপুট বাড়ার তুলনায়। যেমন ৮ উপাদানে ৩ ধাপ লাগে, ১৬ তে ৪ ধাপ।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold"> গাণিতিক ব্যাখ্যা</h2>
                <p>
                    যদি একটি কাজ প্রতিবার ইনপুট সাইজ অর্ধেক করে, তাহলে সময় নির্ধারিত হয় <code>T(n) = T(n/2) + c</code>, 
                    যার সমাধান O(log n)। উদাহরণ: বাইনারি সার্চ।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold"> উদাহরণ: বাইনারি সার্চ</h2>
                <SyntaxHighlighter language="javascript" style={dracula}>
                    {binarySearchExample}
                </SyntaxHighlighter>
                <p>
                    উপরের বাইনারি সার্চে প্রতিবার আমরা অর্ধেক উপাদান বাদ দিচ্ছি। তাই এটি O(log n) টাইমে চলে।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold"> বাস্তব জীবনের তুলনা</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>একটা টেলিফোন ডিরেক্টরিতে নাম খোঁজা — তুমি প্রতিবার বইয়ের অর্ধেক বাদ দিয়ে এগোও।</li>
                    <li>ছাঁটাই (Elimination) কৌশল ব্যবহার করে খোঁজা — যেমন "উনি ডান পাশে নেই, তাহলে বাঁ পাশে খুঁজি।"</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold"> কখন লগারিদমিক টাইম দরকার হয়?</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>Sorted list বা array থেকে দ্রুত কোনো কিছু খুঁজতে</li>
                    <li>Efficient searching algorithms (Binary Search Tree, Binary Heap, etc.)</li>
                    <li>Divide and Conquer অ্যাপ্রোচ</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold"> Bottom Line</h2>
                <p>
                    লগারিদমিক টাইম হল অপ্টিমাইজড সার্চ বা সমস্যার সমাধান — বিশেষ করে যখন ইনপুট অনেক বড় হয়। 
                    Efficient algorithm design-এর মূলে রয়েছে এই টাইম কমপ্লেক্সিটির ব্যবহার।
                </p>
                <p className="font-semibold text-green-700">
                    🚀 Smart searching = Logarithmic power!
                </p>
            </section>
        </div>
    );
};

export default LogarithmicTimeExplanation;
