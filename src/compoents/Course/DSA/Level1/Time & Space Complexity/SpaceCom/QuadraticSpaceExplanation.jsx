import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const QuadraticSpaceExplanation = () => {
    const quadraticSpaceExample = `// C++: একটি 2D ম্যাট্রিক্স তৈরি
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int n;
    cout << "Enter the size of the matrix: ";
    cin >> n;

    // 2D ম্যাট্রিক্স তৈরি
    vector<vector<int>> matrix(n, vector<int>(n));

    // ম্যাট্রিক্সে মান ইনপুট করা
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            cout << "Enter value for [" << i << "][" << j << "]: ";
            cin >> matrix[i][j];
        }
    }

    // ম্যাট্রিক্স প্রিন্ট করা
    cout << "The matrix is:" << endl;
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}`;

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white text-gray-900 rounded-lg shadow-xl space-y-6">
            <h1 className="text-4xl font-bold text-blue-700 text-center">
                কোয়াড্রাটিক স্পেস (O(n²))
            </h1>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">কি বোঝায় O(n²)?</h2>
                <p>
                    কোয়াড্রাটিক স্পেস কমপ্লেক্সিটি মানে হলো এমন একটি অপারেশন যেখানে ইনপুটের আকারের সাথে সম্পর্কিত দুইটি ডাইমেনশনাল স্পেস ব্যবহার করা হয়। 
                    যেমন, যদি একটি 2D ম্যাট্রিক্স তৈরি করা হয়, তাহলে তার জন্য O(n²) স্পেস ব্যবহার হবে।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">C++ উদাহরণ: 2D ম্যাট্রিক্স</h2>
                <SyntaxHighlighter language="cpp" style={dracula}>
                    {quadraticSpaceExample}
                </SyntaxHighlighter>
                <p>
                    এখানে আমরা একটি <strong>n x n</strong> 2D ম্যাট্রিক্স তৈরি করছি, যেখানে মোট <code>n²</code> পরিমাণ মেমরি ব্যবহৃত হচ্ছে। 
                    2D অ্যারে বা ম্যাট্রিক্স ব্যবহার করলে স্পেস কমপ্লেক্সিটি O(n²) হয়, যেখানে n হলো ম্যাট্রিক্সের সারি বা কলামের সংখ্যা।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">বাস্তব জীবনের তুলনা</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>একটি ফটোগ্রাফের পিক্সেলগুলো ধারণ করতে একটি 2D অ্যারে ব্যবহার করা হয়। এখানে পিক্সেলগুলোর সংখ্যা O(n²) হতে পারে।</li>
                    <li>গেম ডেভেলপমেন্টে, যখন আপনি একটি ম্যাপ বা গ্রিড তৈরি করেন, সেখানে 2D স্পেস ব্যবহার হয়।</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">কেন এটা গুরুত্বপূর্ণ?</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>2D ম্যাট্রিক্স ব্যবহার করার সময় মেমরি ব্যবহারের পরিমাণ অনেক বেড়ে যায়, বিশেষ করে যখন n বড় হয়।</li>
                    <li>যত বেশি ডাইমেনশন, তত বেশি স্পেস কমপ্লেক্সিটি।</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Bottom Line</h2>
                <p>
                    যখন 2D বা বহু-ডাইমেনশনাল ডাটা structures ব্যবহার করবেন, তখন স্পেস কমপ্লেক্সিটি বাড়ে। 
                    তবে সঠিক জায়গায় এগুলো ব্যবহার করলে, আপনার সিস্টেমের কর্মক্ষমতা বৃদ্ধি পেতে পারে। 
                </p>
                <p className="font-semibold text-blue-700">
                    🧠 Always be cautious of the space usage when working with multidimensional arrays!
                </p>
            </section>
        </div>
    );
};

export default QuadraticSpaceExplanation;
