import React from "react";

const notices = [
  { title: "📌 Mock Contest on Friday at 8 PM", date: "April 19, 2025" },
  { title: "🚀 CP-31 Weekly Problems Released", date: "April 15, 2025" },
  { title: "📣 Join Our Discord – Get Team Updates", date: "April 12, 2025" },
];

const Notices = () => {
  return (
    <section className="bg-red-50 py-12 px-6">
      <h1 className="text-center font-bold text-red-600 text-4xl">
        {" "}
        Notice by Club
      </h1>
      <ul className="max-w-4xl mt-10 mx-auto space-y-6">
        {notices.map((notice, i) => (
          <li
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="flex justify-between items-center mb-3">
              <p className="text-xl font-semibold text-red-600">
                {notice.title}
              </p>
              <span className="text-sm text-gray-500">{notice.date}</span>
            </div>
            <div className="border-t border-gray-300 pt-2 text-gray-600">
              <p className="text-sm italic">
                Stay updated and never miss a contest!
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Notices;
