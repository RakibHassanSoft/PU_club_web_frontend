import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ConstantSpaceTimeExplanation = () => {
    const constantSpaceCpp = `// C++: কনস্ট্যান্ট স্পেস উদাহরণ
#include <iostream>
using namespace std;

int main() {
    int n = 5; // কেবল একটি নির্দিষ্ট ভ্যারিয়েবল ব্যবহার

    int sum = 0;
    for (int i = 1; i <= n; ++i) {
        sum += i;
    }

    cout << "Sum: " << sum << endl;
    return 0;
}`;

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white text-gray-900 rounded-lg shadow-xl space-y-6">
            <h1 className="text-4xl font-bold text-blue-700 text-center">
                কনস্ট্যান্ট স্পেস (O(1))
            </h1>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">কি বোঝায় O(1)?</h2>
                <p>
                    O(1) স্পেস কমপ্লেক্সিটি মানে — আপনি যতই ইনপুট দেন না কেন, প্রোগ্রামটি শুধুমাত্র কিছু নির্দিষ্ট ভ্যারিয়েবল ব্যবহার করবে। 
                    সুতরাং, মেমরি ব্যবহার কম হয় এবং এটি দ্রুত চলে।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">C++ উদাহরণ: কনস্ট্যান্ট স্পেস</h2>
                <SyntaxHighlighter language="cpp" style={dracula}>
                    {constantSpaceCpp}
                </SyntaxHighlighter>
                <p>
                    এখানে আমরা একটি নির্দিষ্ট ভ্যারিয়েবল <code>sum</code> ব্যবহার করছি, এবং ইনপুটের পরিমাণের উপর ভিত্তি করে কোনো অতিরিক্ত মেমরি ব্যবহার করছি না।
                    এই কোডটি একরকম কনস্ট্যান্ট স্পেসে চলবে।
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">বাস্তব জীবনের তুলনা</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>যখন আপনার কাছে একটি বইয়ের পৃষ্ঠার সংখ্যা থাকে, এবং আপনি শুধু একটি ভ্যারিয়েবল (যেমন পৃষ্ঠা সংখ্যা) ব্যবহার করছেন।</li>
                    <li>আপনি যদি কোনও নির্দিষ্ট এলিমেন্টের জন্য একটি নির্দিষ্ট জায়গায় যাবেন (যেমন শুধু একটা ভ্যারিয়েবল রাখা), তবে তা O(1) স্পেস ব্যবহার করবে।</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">কেন এটা ভালো?</h2>
                <ul className="list-disc ml-6 space-y-2">
                    <li>এই ধরনের অ্যাপ্লিকেশন খুব কম মেমরি খরচ করে।</li>
                    <li>কনস্ট্যান্ট স্পেস খুব দ্রুত এবং স্কেলেবল — এটি বড় ইনপুটের ক্ষেত্রেও একই পরিমাণ স্পেস ব্যবহার করবে।</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Bottom Line</h2>
                <p>
                    O(1) স্পেস কমপ্লেক্সিটি খুবই কার্যকরী যখন মেমরি সীমাবদ্ধ থাকে এবং আপনাকে কেবল নির্দিষ্ট পরিমাণ মেমরি ব্যবহার করতে হয়। 
                    এই ধরনের অপারেশন সাধারণত দ্রুত এবং কম ব্যয়বহুল হয়।
                </p>
                <p className="font-semibold text-blue-700">
                     O(1) স্পেস মানে কোডের মেমরি ব্যবহারের একটি নির্দিষ্ট পরিমাণ — যা সব সময় একই থাকবে।
                </p>
            </section>
        </div>
    );
};

export default ConstantSpaceTimeExplanation;
