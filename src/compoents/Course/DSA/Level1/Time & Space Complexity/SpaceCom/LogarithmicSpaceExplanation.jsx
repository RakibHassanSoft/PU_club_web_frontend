import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const LogarithmicSpaceExplanation = () => {
    const binarySearchExample = `// C++: বাইনারি সার্চে রিকারশন স্ট্যাক
#include <iostream>
using namespace std;

// বাইনারি সার্চ ফাংশন
int binarySearch(int arr[], int low, int high, int key) {
    if (low <= high) {
        int mid = low + (high - low) / 2;

        // যদি এলিমেন্ট পাওয়া যায়
        if (arr[mid] == key)
            return mid;

        // যদি এলিমেন্ট ছোট হয়, বাম সাইডে খুঁজুন
        if (arr[mid] > key)
            return binarySearch(arr, low, mid - 1, key);

        // যদি এলিমেন্ট বড় হয়, ডান সাইডে খুঁজুন
        return binarySearch(arr, mid + 1, high, key);
    }

    // এলিমেন্ট না পাওয়া গেলে
    return -1;
}

int main() {
    int arr[] = {2, 3, 4, 10, 40};
    int n = sizeof(arr) / sizeof(arr[0]);
    int key = 10;
    int result = binarySearch(arr, 0, n - 1, key);
    
    (result == -1) 
        ? cout << "Element not present in array" 
        : cout << "Element found at index " << result;
    
    return 0;
}`;

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white text-gray-900 rounded-lg shadow-xl space-y-6">
            <h1 className="text-4xl font-bold text-green-700 text-center">
                লগারিদমিক স্পেস (O(log n))
            </h1>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">কি বোঝায় O(log n)?</h2>
                <p>
                    লগারিদমিক স্পেস কমপ্লেক্সিটি মানে হলো — যখন কোন অপারেশন প্রতিবার ইনপুটের সাইজকে অর্ধেক করে ফেলে, 
                    তখন এটি O(log n) স্পেস ব্যবহার করবে। 
                    এই টাইপের স্পেস কমপ্লেক্সিটি সাধারণত রিকারশন ফাংশনের ক্ষেত্রে দেখা যায়, যেমন বাইনারি সার্চের ক্ষেত্রে।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">C++ উদাহরণ: বাইনারি সার্চে রিকারশন স্ট্যাক</h2>
                <SyntaxHighlighter language="cpp" style={dracula}>
                    {binarySearchExample}
                </SyntaxHighlighter>
                <p>
                    এখানে আমরা একটি সোজা বাইনারি সার্চের উদাহরণ দেখেছি। 
                    বাইনারি সার্চে রিকারশন স্ট্যাকের কারণে, প্রতি রিকারশন কলের সাথে সাইজ অর্ধেক হয়ে যায়। 
                    তাই স্পেস কমপ্লেক্সিটি O(log n) হয়।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">বাস্তব জীবনের তুলনা</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>ধরা যাক, কোন বইয়ের মধ্যে একটি পাতা খুঁজতে হবে, যেখানে প্রতিবার মাঝখানে গিয়ে ভাগ করা হচ্ছে।</li>
                    <li>ইনডেক্সিং বা লগারিদমিক ডেটাবেস কোয়েরি করার ক্ষেত্রে লগারিদমিক স্পেস ব্যবহৃত হয়।</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">কেন এটা গুরুত্বপূর্ণ?</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>রিকারশন ব্যবহার করার সময় যখন ইনপুট অর্ধেক হয়ে যায়, তখন মেমরি স্ট্যাকের উপর চাপ কম থাকে।</li>
                    <li>এই ধরনের স্পেস কমপ্লেক্সিটি বেশি ইনপুট সাইজেও কার্যকরীভাবে কাজ করতে সাহায্য করে।</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Bottom Line</h2>
                <p>
                    বাইনারি সার্চের মতো লগারিদমিক স্পেস ব্যবহার করলে, আপনি দ্রুত এবং কম মেমরি ব্যবহার করে কার্যকরী অপারেশন করতে পারবেন। 
                    তবে মনে রাখবেন, শুধুমাত্র ইনপুট সাইজে অর্ধেক ভাগ করা অপারেশনগুলোই O(log n) স্পেস ব্যবহার করে।
                </p>
                <p className="font-semibold text-green-700">
                     O(log n) হল একেবারে দক্ষ স্পেস ব্যবহারের একটি উদাহরণ — যেখানে প্রতিবার ইনপুট অর্ধেক করা হয়!
                </p>
            </section>
        </div>
    );
};

export default LogarithmicSpaceExplanation;
