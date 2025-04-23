import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const LinearTimeExplanation = () => {
    const loopExample = `// একটি অ্যারেতে প্রতিটি এলিমেন্ট প্রিন্ট করা
const printAll = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]); // প্রতিটি আইটেমে একবার করে যাবে — O(n)
    }
}

const items = [5, 10, 15, 20];
printAll(items);`;

    const sumExample = `// একটি অ্যারের সব সংখ্যার যোগফল বের করা
const sumArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // প্রতিটি সংখ্যায় একবার করে যাবে — O(n)
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4])); // Output: 10`;

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white text-gray-900 rounded-lg shadow-xl space-y-6">
            <h1 className="text-4xl font-bold text-green-600 text-center">
                লিনিয়ার টাইম (Linear Time) - O(n)
            </h1>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">কি বোঝায় লিনিয়ার টাইম?</h2>
                <p>
                    লিনিয়ার টাইম হলো এমন একটি অপারেশন যার এক্সিকিউশন টাইম ইনপুট সাইজের সাথে সরাসরি অনুপাতে বাড়ে।
                    যেমন ধরো, তুমি যদি ৫টা আপেল গুনো, সময় লাগবে কিছুটা। ১০টা হলে সময় দ্বিগুণ হবে। 
                    মানে ইনপুট যত বড়, সময়ও তত বাড়বে।
                </p>
                <p className="text-lg">
                    <strong>Time Complexity:</strong> O(n) মানে হলো n সংখ্যক ইনপুট থাকলে n বার কাজ হবে।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">গাণিতিক দৃষ্টিভঙ্গি</h2>
                <p>
                    ধরো ফাংশনের সময় নির্ধারণ হয় <code>T(n) = n</code> বা <code>T(n) = 3n + 5</code>, 
                    তাহলে এটাকে আমরা বলি O(n), কারণ ইনপুট সাইজ বাড়ার সাথে সাথে রানটাইমও বাড়ে।
                </p>
                <p>
                    <strong>সোজা ফর্মুলা:</strong> যদি কোনো অপারেশন n বার চলে, তাহলে সেটা O(n) টাইমে চলে।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">উদাহরণ ১: অ্যারে লুপ করা</h2>
                <SyntaxHighlighter language="javascript" style={dracula}>
                    {loopExample}
                </SyntaxHighlighter>
                <p>প্রতিটি এলিমেন্টে একবার করে যাওয়ার কারণে এটি O(n) টাইমে চলে।</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">উদাহরণ ২: অ্যারের যোগফল বের করা</h2>
                <SyntaxHighlighter language="javascript" style={dracula}>
                    {sumExample}
                </SyntaxHighlighter>
                <p>এই ফাংশন প্রতিটি সংখ্যা একবার করে দেখে, তাই এটিও O(n)।</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">বাস্তব জীবনের তুলনা</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>লাইব্রেরিতে বই খুঁজে বের করা — প্রতিটি তাক একবার করে চেক করতে হয়।</li>
                    <li>মোবাইল গ্যালারিতে ছবি স্ক্রল করা — প্রতিটি ছবি একবার করে দেখতে হয়।</li>
                    <li>রোল নম্বর ধরে নাম খোঁজা — প্রতিটি নাম একবার করে দেখতে হতে পারে।</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">কবে লিনিয়ার টাইম দরকার?</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>ডেটার প্রতিটি এলিমেন্টে একবার করে অপারেশন চালাতে হলে</li>
                    <li>অ্যারের এলিমেন্ট খোঁজা, প্রিন্ট করা, যোগফল বের করা ইত্যাদি কাজে</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Bottom Line</h2>
                <p>
                    লিনিয়ার টাইম অনেক সময় unavoidable — ইনপুট যত বড় হবে, কাজ তত বাড়বে।
                    তবে যতটা সম্ভব, চেষ্টা থাকবে অপারেশনকে আরও efficient করতে।
                </p>
                <p className="font-semibold text-green-700">
                    ⏱️ Scales with input – Linear time is practical, predictable, and everywhere!
                </p>
            </section>
        </div>
    );
};

export default LinearTimeExplanation;
