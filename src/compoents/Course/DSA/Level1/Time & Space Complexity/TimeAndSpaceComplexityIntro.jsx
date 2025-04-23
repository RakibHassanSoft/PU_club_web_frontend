import React from 'react';

const TimeAndSpaceComplexityIntro = () => {
    return (
        <div className="max-w-7xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold text-center mb-8 text-green-700">
                টাইম কমপ্লেক্সিটি এবং স্পেস কমপ্লেক্সিটি (Time and Space Complexity)
            </h1>

            {/* Time Complexity Section */}
            <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">টাইম কমপ্লেক্সিটি (Time Complexity)</h2>
                <p className="text-lg mb-6">
                    টাইম কমপ্লেক্সিটি হল একটি অ্যালগরিদমের সময়ের পরিমাণ যা ইনপুট সাইজের উপর নির্ভর করে। 
                    এটি জানায় কিভাবে অ্যালগরিদমটির সময় বাড়বে ইনপুট সাইজ বাড়ানোর সাথে সাথে। টাইম কমপ্লেক্সিটির হিসাব সাধারণত 
                    Big-O নোটেশনে করা হয়। উদাহরণস্বরূপ:
                </p>
                <ul className="list-inside list-disc space-y-3 text-lg">
                    <li><strong>O(1):</strong> কনস্ট্যান্ট টাইম, যেমন - একটি নির্দিষ্ট ইনডেক্সে অ্যারে অ্যাকসেস করা।</li>
                    <li><strong>O(log n):</strong> লগারিদমিক টাইম, যেমন - বাইনারি সার্চ।</li>
                    <li><strong>O(n):</strong> লিনিয়ার টাইম, যেমন - একটি অ্যারেতে সর্বোচ্চ মান খোঁজা।</li>
                    <li><strong>O(n log n):</strong> লিনিয়ারিথমিক টাইম, যেমন - Merge Sort বা Quick Sort।</li>
                    <li><strong>O(n²):</strong> কোয়াড্রাটিক টাইম, যেমন - Bubble Sort।</li>
                    <li><strong>O(2ⁿ):</strong> এক্সপোনেনশিয়াল টাইম, যেমন - Recursive Fibonacci।</li>
                    <li><strong>O(n!):</strong> ফ্যাক্টোরিয়াল টাইম, যেমন - সব পারমুটেশন জেনারেট করা।</li>
                </ul>

                <p className="text-lg mt-6">
                    উদাহরণ দিয়ে বোঝাতে গেলে:
                    <br />
                    যদি আপনি একটি লুপ চালান যা প্রতিটি ইনপুট আইটেমের উপর একবার করে চলে, তবে এটি হবে O(n)। 
                    কিন্তু যদি একটি nested loop থাকে যা প্রতিটি আইটেমের সাথে প্রতিটি আইটেম চেক করে, 
                    তাহলে টাইম কমপ্লেক্সিটি হবে O(n²)।
                </p>

                <p className="text-lg mt-4">
                    টাইম কমপ্লেক্সিটি বিশ্লেষণের মূল উদ্দেশ্য হলো - কোন অ্যালগরিদম বেশি দ্রুত কাজ করবে তা নির্ধারণ করা, 
                    বিশেষ করে বড় ইনপুট সাইজের ক্ষেত্রে।
                </p>
            </section>

            {/* Space Complexity Section */}
            <section className="mt-12 space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">স্পেস কমপ্লেক্সিটি (Space Complexity)</h2>
                <p className="text-lg mb-6">
                    স্পেস কমপ্লেক্সিটি হল একটি অ্যালগরিদমের জন্য প্রয়োজনীয় মেমরি বা স্থান। এটি নির্ধারণ করে 
                    কতটা অতিরিক্ত মেমরি দরকার হবে ইনপুট প্রসেস করতে। স্পেস কমপ্লেক্সিটিও Big-O নোটেশনে নির্ধারিত হয়। 
                    উদাহরণ:
                </p>
                <ul className="list-inside list-disc space-y-3 text-lg">
                    <li><strong>O(1):</strong> কনস্ট্যান্ট স্পেস, যেমন - শুধু কিছু নির্দিষ্ট ভ্যারিয়েবল ব্যবহার।</li>
                    <li><strong>O(n):</strong> লিনিয়ার স্পেস, যেমন - একটি অ্যারেতে n সংখ্যক ইনপুট রাখা।</li>
                    <li><strong>O(n²):</strong> কোয়াড্রাটিক স্পেস, যেমন - একটি 2D ম্যাট্রিক্স তৈরি।</li>
                    <li><strong>O(log n):</strong> লগারিদমিক স্পেস, যেমন - বাইনারি সার্চে রিকারশন স্ট্যাক।</li>
                </ul>

                <p className="text-lg mt-6">
                    ধরুন আপনি একটি ফাংশনে শুধু ইনপুটের ওপর ভিত্তি করে গণনা করেন এবং কোনো অ্যারে বা অতিরিক্ত স্টোরেজ ব্যবহার করেন না, 
                    তাহলে আপনার স্পেস কমপ্লেক্সিটি হবে O(1)। কিন্তু যদি আপনি একটি ইনপুট লিস্ট রেখে সেটি প্রসেস করেন, 
                    তাহলে সেটা হবে O(n)।
                </p>
            </section>

            {/* Big-O Notation Section */}
            <section className="mt-12 space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">বিগ-O নোটেশন (Big-O Notation)</h2>
                <p className="text-lg mb-6">
                    Big-O নোটেশন ব্যবহার করে টাইম ও স্পেস কমপ্লেক্সিটি বোঝানো হয়। এটি worst-case scenario বোঝাতে ব্যবহৃত হয়। 
                    যেমন যদি একটি অ্যালগরিদমের টাইম কমপ্লেক্সিটি O(n²) হয়, তাহলে এর মানে হলো সবচেয়ে খারাপ অবস্থায় এটি n² বার অপারেশন চালাতে পারে।
                </p>
            </section>
        </div>
    );
};

export default TimeAndSpaceComplexityIntro;
