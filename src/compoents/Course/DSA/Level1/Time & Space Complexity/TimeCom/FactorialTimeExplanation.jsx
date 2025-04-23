import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const FactorialTimeExplanation = () => {
    const permutationCpp = `// C++: সব পারমুটেশন জেনারেট করা
#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

int main() {
    vector<int> nums = {1, 2, 3};

    sort(nums.begin(), nums.end());

    do {
        for (int num : nums) {
            cout << num << " ";
        }
        cout << endl;
    } while (next_permutation(nums.begin(), nums.end()));

    return 0;
}`;

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white text-gray-900 rounded-lg shadow-xl space-y-6">
            <h1 className="text-4xl font-bold text-red-700 text-center">
                ফ্যাক্টোরিয়াল টাইম (O(n!))
            </h1>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">কি বোঝায় O(n!)?</h2>
                <p>
                    ফ্যাক্টোরিয়াল টাইম কমপ্লেক্সিটি মানে হলো — প্রতিটা ইনপুট এলিমেন্টের জন্য সম্ভাব্য সব অর্ডারে অপারেশন চালানো। 
                    যেমন n = 3 হলে, <code>3! = 6</code> টা পারমুটেশন তৈরি হয়। n যত বাড়বে, টাইম এক্সপোনেনশিয়ালি বাড়বে।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">C++ উদাহরণ: সব পারমুটেশন</h2>
                <SyntaxHighlighter language="cpp" style={dracula}>
                    {permutationCpp}
                </SyntaxHighlighter>
                <p>
                    এখানে আমরা <code>next_permutation</code> ফাংশন দিয়ে <strong>1, 2, 3</strong> এর সব পারমুটেশন প্রিন্ট করছি।
                    মোট <code>3! = 6</code> টা পারমুটেশন পাওয়া যাবে। ইনপুট যত বড় হবে, সম্ভাব্য পারমুটেশন তত বেশি!
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">বাস্তব জীবনের তুলনা</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>ধরো ৫ জন বন্ধুকে এক লাইনে দাঁড় করাতে হবে — সব possible অর্ডার বের করা মানেই O(n!) টাইম।</li>
                    <li>Lock combination guessing যেখানে সব সম্ভাব্য কনফিগারেশন চেক করতে হয়।</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">কেন এটা heavy?</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>n = 10 হলে <code>10! = 3,628,800</code>!</li>
                    <li>20 এর উপরে গেলে টাইম-লিমিট এক্সসিড হয়ে যায় — ব্রুট ফোর্সে সমস্যা!</li>
                    <li>এটাই কারণ, বড় ইনপুটে backtracking + pruning techniques দরকার হয়।</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Bottom Line</h2>
                <p>
                    সব সমস্যায় brute-force দিয়ে পারমুটেশন চেক করলেই সমাধান হবে না। 
                    Efficient solution খুঁজে বের করতে হবে — না হলে কোড হ্যাং করে যাবে!
                </p>
                <p className="font-semibold text-red-700">
                     O(n!) মানেই সিরিয়াস ওয়ার্নিং — চিন্তা না করে চালিয়ে গেলে টাইম খেয়ে ফেলবে!
                </p>
            </section>
        </div>
    );
};

export default FactorialTimeExplanation;
