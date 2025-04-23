import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const LinearithmicTimeExplanation = () => {
    const mergeSortExample = `// Merge Sort - O(n log n)
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
};

const merge = (left, right) => {
    let result = [], i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
};

console.log(mergeSort([5, 3, 8, 4, 2]));`;

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white text-gray-900 rounded-lg shadow-xl space-y-6">
            <h1 className="text-4xl font-bold text-green-600 text-center">
                লিনিয়ারিথমিক টাইম (O(n log n))
            </h1>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">কি বোঝায় লিনিয়ারিথমিক টাইম?</h2>
                <p>
                    যখন কোনো অ্যালগরিদম ইনপুটের প্রতি এলিমেন্টের জন্য <code>log n</code> বার কাজ করে, তখন তাকে বলা হয় O(n log n) টাইম কমপ্লেক্সিটি। 
                    এটা <code>O(n)</code> থেকেও স্লো, কিন্তু <code>O(n²)</code> এর চেয়ে অনেক বেশি efficient।
                </p>
                <p>
                    সবচেয়ে পরিচিত উদাহরণ হলো <strong>Merge Sort</strong>, <strong>Quick Sort</strong>, <strong>Heap Sort</strong> ইত্যাদি।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">গাণিতিক দৃষ্টিভঙ্গি</h2>
                <p>
                    ধরো ইনপুট সাইজ n। আমরা যদি সেই ইনপুটকে বারবার ভাগ করি (divide and conquer), তাহলে log n বার ভাগ হবে।
                    এবং প্রতিবার আমরা n সংখ্যক কাজ করি। তাই মোট সময় হয় n × log n।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">উদাহরণ: Merge Sort</h2>
                <SyntaxHighlighter language="javascript" style={dracula}>
                    {mergeSortExample}
                </SyntaxHighlighter>
                <p>
                    Merge Sort ইনপুটকে বারবার ভাগ করে (log n), এবং তারপর মিলে যায় (n)। তাই টাইম কমপ্লেক্সিটি হয় O(n log n)।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">বাস্তব জীবনের তুলনা</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>একটি বইয়ের পাতাগুলোকে অর্ধেক করে ভাগ করে সাজানো, তারপর সব একত্রে করা।</li>
                    <li>একটা বিশাল লিস্টকে ছোট ছোট ভাগে ভাগ করে প্রতি ভাগে সাজানো, তারপর merge করে ফাইনাল লিস্ট বানানো।</li>
                    <li>বিভক্তির মাধ্যমে সমাধান করা সমস্যায় O(n log n) টাইম বেশি কার্যকর।</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">কখন O(n log n) দরকার?</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>ডাটা বড় হলে এবং <code>O(n²)</code> স্লো হয়ে পড়ে</li>
                    <li>Effective Sorting করতে হলে — Merge Sort, Heap Sort</li>
                    <li>Divide and Conquer অ্যাপ্রোচে কাজ করতে চাইলে</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Bottom Line</h2>
                <p>
                    O(n log n) হলো একটা ব্যালেন্সড টাইম কমপ্লেক্সিটি — খুব দ্রুত নয়, আবার খুব স্লোও নয়।
                    যখন performance দরকার কিন্তু O(n²) বেশি স্লো, তখনই এটা কাজে লাগে।
                </p>
                <p className="font-semibold text-green-700">
                    ⚡ Smart & scalable — O(n log n) বেছে নাও বড় ডাটা হ্যান্ডল করতে হলে।
                </p>
            </section>
        </div>
    );
};

export default LinearithmicTimeExplanation;
