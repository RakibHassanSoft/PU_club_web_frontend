import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ConstantTimeExplanation = () => {
    const arrayAccessExample = `// একটি অ্যারে থেকে ইনডেক্সের ভিত্তিতে ভ্যালু রিটার্ন
const getElement = (arr, index) => {
    return arr[index]; // O(1)
}

const nums = [10, 20, 30, 40, 50];
console.log(getElement(nums, 2)); // Output: 30`;

    const variableExample = `// একটি ভেরিয়েবল ডিফাইন ও ভ্যালু সেট করা
let count = 0;
count = 100; // O(1) টাইমে কাজটা সম্পন্ন`;

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white text-gray-900 rounded-lg shadow-xl space-y-6">
            <h1 className="text-4xl font-bold text-green-600 text-center">
                কনস্ট্যান্ট টাইম (Constant Time) - O(1)
            </h1>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold"> কি বোঝায় কনস্ট্যান্ট টাইম?</h2>
                <p>
                    কনস্ট্যান্ট টাইম বোঝায় এমন একটি অপারেশন যার এক্সিকিউশন টাইম ইনপুট সাইজের উপর নির্ভর করে না। 
                    যেমন ধরো, ১টা চাবি দিয়ে তালা খোলার মতো — ইনপুট ৫ টা হোক আর ৫ লাখ, তুমি সরাসরি চাবি দিয়ে খুলতে পারলে 
                    সেটা কনস্ট্যান্ট টাইম!
                </p>
                <p className="text-lg">
                    <strong>Time Complexity:</strong> O(1) মানে হলো কোনো ফাংশন বা অপারেশনের রান টাইম সবসময় একটিই ধাপ নেয় — 
                    একবারেই কাজ শেষ!
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold"> গাণিতিক দৃষ্টিভঙ্গি (Mathematical View)</h2>
                <p>
                    ধরো তোমার ফাংশনের সময় নির্ধারণ হয় <code>T(n) = 5</code> বা <code>T(n) = 20</code> — তাহলে এটা O(1),
                    কারণ ইনপুট সাইজ <code>n</code> এর কোন প্রভাব নেই।
                </p>
                <p>
                    <strong>সোজা ফর্মুলা:</strong> যদি <code>T(n) = c</code> হয়, যেখানে <code>c</code> হলো কোনো কনস্ট্যান্ট,
                    তাহলে ওই অপারেশন O(1) টাইমে চলে।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold"> উদাহরণ ১: অ্যারে ইনডেক্স অ্যাক্সেস</h2>
                <p>নিচের কোডে আমরা একটি নির্দিষ্ট ইনডেক্সে গিয়ে সরাসরি ভ্যালু নিচ্ছি:</p>
                <SyntaxHighlighter language="javascript" style={dracula}>
                    {arrayAccessExample}
                </SyntaxHighlighter>
                <p>
                    এই অপারেশন O(1) কারণ যেকোনো ইনডেক্স অ্যাক্সেস করার জন্য সময় সর্বদা সমান।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold"> উদাহরণ ২: ভেরিয়েবল অ্যাসাইনমেন্ট</h2>
                <SyntaxHighlighter language="javascript" style={dracula}>
                    {variableExample}
                </SyntaxHighlighter>
                <p>
                    একটা ভেরিয়েবলকে যে কোনো মান দেওয়া O(1) অপারেশন কারণ এটি একটি মাত্র স্টেপেই হয়।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold"> বাস্তব জীবনের তুলনা</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>লাইট সুইচ অন করা – যেকোনো সময়েই চাপলে লাইট জ্বলে ওঠে। সময় কখনোই বদলায় না।</li>
                    <li>ATM কার্ড ঢুকিয়ে ব্যালেন্স দেখা — শুধু একটি ক্লিকেই ডেটা দেখায়।</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold"> কবে কনস্ট্যান্ট টাইম দরকার?</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>ডেটাবেস থেকে সরাসরি key দিয়ে data access করতে</li>
                    <li>HashMap বা Object ব্যবহার করে ডেটা রিট্রিভ করার সময়</li>
                    <li>Cache Access</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold"> Bottom Line</h2>
                <p>
                    তুমি যত efficient কোড লিখতে চাও, তত বেশি কনস্ট্যান্ট টাইম অপারেশন দরকার হবে। 
                    যত বড় প্রজেক্টে কাজ করবে, তত এই O(1) এর মাধুর্য বুঝতে পারবে!
                </p>
                <p className="font-semibold text-green-700">
                    ⏱️ Faster than anything – Constant time is KING!
                </p>
            </section>
        </div>
    );
};

export default ConstantTimeExplanation;
