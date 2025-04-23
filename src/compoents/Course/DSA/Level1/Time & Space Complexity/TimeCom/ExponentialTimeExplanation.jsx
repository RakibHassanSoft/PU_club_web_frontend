import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ExponentialTimeExplanation = () => {
    const recursiveFibonacciCpp = `// Recursive Fibonacci in C++
#include <iostream>
using namespace std;

int fibonacci(int n) {
    if (n <= 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    int n = 10;
    for (int i = 0; i < n; i++) {
        cout << fibonacci(i) << " ";
    }
    return 0;
}`;

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white text-gray-900 rounded-lg shadow-xl space-y-6">
            <h1 className="text-4xl font-bold text-green-600 text-center">
                এক্সপোনেনশিয়াল টাইম (O(2ⁿ))
            </h1>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">কি বোঝায় O(2ⁿ)?</h2>
                <p>
                    যদি ইনপুটের প্রতি বৃদ্ধি দ্বিগুণ হারে সময় বাড়ায়, তাহলে সেটার টাইম কমপ্লেক্সিটি হয় <strong>O(2ⁿ)</strong>।
                    একে বলা হয় এক্সপোনেনশিয়াল টাইম। সময় অনেক দ্রুত বাড়ে।
                </p>
                <p>
                    সবচেয়ে ক্লাসিক উদাহরণ হলো <strong>Recursive Fibonacci</strong>।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">C++ উদাহরণ: Recursive Fibonacci</h2>
                <SyntaxHighlighter language="cpp" style={dracula}>
                    {recursiveFibonacciCpp}
                </SyntaxHighlighter>
                <p>
                    এখানে প্রতিবার `fibonacci(n)` কল হলে আবার দুইটা রিকার্সিভ কল হয় — তাই মোট কল সংখ্যা হয় প্রায় <code>2ⁿ</code>।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">বাস্তব জীবনের তুলনা</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>যেমন একটা গাছের প্রতিটি ডালে যদি আবার দুইটা ডাল গজায়, তাহলে প্রতি লেভেলে ডালের সংখ্যা দ্বিগুণ হয়।</li>
                    <li>Recursive সমস্যায় সাব-সমস্যা বারবার রিপিট হলে এই টাইম কমপ্লেক্সিটি দেখা যায়।</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">কেন এটা সমস্যা?</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>ছোট ইনপুটের জন্য ঠিক আছে, কিন্তু বড় ইনপুটে এটা ধ্বংসাত্মক!</li>
                    <li>n = 40 হলে কয়েক মিলিয়ন কল হয়ে যায়!</li>
                    <li>এই জন্য Memoization বা Dynamic Programming ব্যবহার করা হয়।</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Bottom Line</h2>
                <p>
                    O(2ⁿ) টাইম কমপ্লেক্সিটি খুব স্লো, তাই অপটিমাইজ না করলে রিকার্সিভ সমাধান ধীরে কাজ করে।
                </p>
                <p className="font-semibold text-purple-700">
                     সাবধান — এক্সপোনেনশিয়াল টাইম মানেই ধ্বংস! Dynamic Programming দিয়ে বাঁচো!
                </p>
            </section>
        </div>
    );
};

export default ExponentialTimeExplanation;
