import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const LinearSpaceExplanation = () => {
    const linearSpaceExample = `// C++: একটি অ্যারেতে n সংখ্যক ইনপুট রাখা
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> nums;
    int n;
    cout << "Enter number of elements: ";
    cin >> n;

    // অ্যারেতে ইনপুট রাখা
    for(int i = 0; i < n; i++) {
        int num;
        cin >> num;
        nums.push_back(num);
    }

    cout << "Array elements are: ";
    for(int i = 0; i < n; i++) {
        cout << nums[i] << " ";
    }
    cout << endl;

    return 0;
}`;

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white text-gray-900 rounded-lg shadow-xl space-y-6">
            <h1 className="text-4xl font-bold text-blue-700 text-center">
                লিনিয়ার স্পেস (O(n))
            </h1>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">কি বোঝায় O(n)?</h2>
                <p>
                    লিনিয়ার স্পেস কমপ্লেক্সিটি মানে হলো এমন একটি অপারেশন যেখানে ইনপুটের আকারের সাথে সম্পর্কিত মেমরি ব্যবহার করা হয়।
                    উদাহরণস্বরূপ, যদি কোনো অ্যারেতে ইনপুট দেওয়া হয়, তাহলে তার জন্য নির্দিষ্ট পরিমাণ মেমরি প্রয়োজন হবে।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">C++ উদাহরণ: লিনিয়ার স্পেস</h2>
                <SyntaxHighlighter language="cpp" style={dracula}>
                    {linearSpaceExample}
                </SyntaxHighlighter>
                <p>
                    এখানে আমরা একটি অ্যারেতে <strong>n</strong> সংখ্যক ইনপুট ধারণ করছি, এবং সেই অনুযায়ী মেমরি ব্যবহৃত হচ্ছে। 
                    অ্যারের আকার যত বড় হবে, মেমরি ব্যবহারও তত বেশি হবে। এই কারণে এটি O(n) স্পেস কমপ্লেক্সিটি।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">বাস্তব জীবনের তুলনা</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>ধরা যাক আপনি একটি স্টোরেজ ডিভাইসে ডেটা সেভ করছেন। যদি সেভ করার জন্য n পরিমাণ ডেটা থাকে, তবে সেভ করার জন্য একই পরিমাণ স্টোরেজ স্পেস লাগবে।</li>
                    <li>একটি বই পড়তে গিয়ে যদি আপনি প্রতিটি পাতার তথ্য মনে রাখেন, তবে যত বেশি পাতা, তত বেশি মেমরি ব্যবহার হবে।</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">কেন এটা গুরুত্বপূর্ণ?</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>মেমরি ব্যবহারের উন্নতি এবং অপ্টিমাইজেশন হতে পারে, বিশেষত যখন ডেটার আকার অনেক বড় হয়।</li>
                    <li>যত বেশি স্পেস ব্যবহার, আপনার সিস্টেমের পারফরম্যান্সে এর প্রভাব পড়তে পারে।</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Bottom Line</h2>
                <p>
                    যেকোনো সমস্যা সমাধান করার জন্য, মেমরি ব্যবহারের ব্যাপারে সচেতন থাকুন। কখনো কখনো ইনপুটের আকারের সাথে সম্পর্কিত স্পেস কমপ্লেক্সিটি বাড়িয়ে দিলে, সেটা পারফরম্যান্সে সমস্যা সৃষ্টি করতে পারে।
                </p>
                <p className="font-semibold text-blue-700">
                    🧠 Always keep space complexity in mind when handling large inputs!
                </p>
            </section>
        </div>
    );
};

export default LinearSpaceExplanation;
