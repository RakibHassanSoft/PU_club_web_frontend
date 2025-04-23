import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const QuadraticTimeExplanation = () => {
    const bubbleSortCpp = `// Bubble Sort in C++
#include <iostream>
using namespace std;

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

int main() {
    int arr[] = {5, 3, 8, 4, 2};
    int n = sizeof(arr)/sizeof(arr[0]);

    bubbleSort(arr, n);

    for (int i = 0; i < n; i++)
        cout << arr[i] << " ";
    return 0;
}`

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white text-gray-900 rounded-lg shadow-xl space-y-6">
            <h1 className="text-4xl font-bold text-green-600 text-center">
                কোয়াড্রাটিক টাইম (O(n²))
            </h1>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">কি বোঝায় O(n²)?</h2>
                <p>
                    যদি কোনো অ্যালগরিদমের প্রতিটি ইনপুট উপাদানের জন্য আবার একটি লুপ চলে, তাহলে সেটার টাইম কমপ্লেক্সিটি হয় <strong>O(n²)</strong>। 
                    অর্থাৎ ইনপুটের পরিমাণ বাড়লে সময় অনেক দ্রুতগতিতে বেড়ে যায়।
                </p>
                <p>
                    সবচেয়ে পরিচিত উদাহরণ হলো <strong>Bubble Sort</strong>, <strong>Selection Sort</strong>, <strong>Insertion Sort</strong>।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">C++ উদাহরণ: Bubble Sort</h2>
                <SyntaxHighlighter language="cpp" style={dracula}>
                    {bubbleSortCpp}
                </SyntaxHighlighter>
                <p>
                    এখানে প্রতি ইটারেশনে ভিতরের লুপ আবার পুরো অ্যারেতে ঘোরে। তাই মোট অপারেশন হয় <code>n × n = n²</code>।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">বাস্তব জীবনের তুলনা</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>একটা ক্লাসে প্রত্যেক ছাত্র যদি অন্য প্রত্যেক ছাত্রের সাথে হ্যান্ডশেক করে — n² বার হ্যান্ডশেক হবে।</li>
                    <li>একটা লিস্টে সব পেয়ার যাচাই করতে হলে — nested লুপ চলে।</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">কখন O(n²) সমস্যা করে?</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>যখন n অনেক বড় হয় — যেমন n = 10000 হলে, 100 মিলিয়ন অপারেশন!</li>
                    <li>পারফরমেন্স খুব স্লো হয়, তাই বড় ডাটাতে Avoid করা হয়।</li>
                    <li>ছোট ইনপুটে খুব সিম্পল সমাধানে এটা ইউজ করা যায়।</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Bottom Line</h2>
                <p>
                    O(n²) হলো টাইম কমপ্লেক্সিটির দিক থেকে স্লো ক্যাটাগরির মধ্যে পড়ে। 
                    সময়-sensitive অ্যাপ্লিকেশনে এটা এড়িয়ে চলাই ভালো।
                </p>
                <p className="font-semibold text-red-700">
                    🐌 ধীর গতির — বড় ইনপুটের জন্য O(n²) না ব্যবহারে শান্তি!
                </p>
            </section>
        </div>
    );
};

export default QuadraticTimeExplanation;
