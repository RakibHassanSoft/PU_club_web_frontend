import React from "react";
import {
  FaUniversity,
  FaBriefcase,
  FaCode,
  FaCuttlefish,
  FaPython,
  FaJs,
} from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
const resources = {
  c: [
    {
      title: "Apna College – C Programming Playlist",
      link: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop",
      logo: "https://tse3.mm.bing.net/th?id=OIP.g6QD-mce5w03KqSX4omgfwAAAA&rs=1&pid=ImgDetMain",
    },
    {
      title: "Learn-C.org",
      link: "https://www.learn-c.org/",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
    },
    {
      title: "Neso Academy – C Programming (YouTube)",
      link: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgLLlzdgiTUKULK3z4bklxV",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKYtQGvuEvZkmAx3L3gJ1R8D4UHR_tqbtv8UNyoEjg=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "GeeksforGeeks – C",
      link: "https://www.geeksforgeeks.org/c-programming-language/",
      logo: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
    },
    {
      title: "TutorialsPoint – C Programming",
      link: "https://www.tutorialspoint.com/cprogramming/",
      logo: "https://www.tutorialspoint.com/static/images/logo.png",
    },
    {
      title: "CodeWithHarry – C Tutorial (YouTube)",
      link: "https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKZzIYMKfB3YlP3Z9IhF4xSSo3NZToRmBGLNU03q=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Programiz – C Programming",
      link: "https://www.programiz.com/c-programming",
      logo: "https://www.programiz.com/sites/all/themes/programiz/assets/images/logo.png",
    },
    {
      title: "C Programming Absolute Beginner (freeCodeCamp YouTube)",
      link: "https://www.youtube.com/watch?v=KJgsSFOSQv0",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKaPB-BuQnEDf6oLK04EmCWLlzHK4O2QGkk9a7ZV5Q=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "w3resource – C Programming Exercises",
      link: "https://www.w3resource.com/c-programming-exercises/",
      logo: "https://www.w3resource.com/images/w3resource-logo.png",
    },
    {
      title: "CodingUnit – C Programming Tutorial",
      link: "https://www.codingunit.com/c-tutorial",
      logo: "https://www.codingunit.com/wp-content/themes/atahualpa/images/logo.png",
    },
    {
      title: "C Programming Notes – notesformsc",
      link: "https://notesformsc.org/c-programming-notes/",
      logo: "https://notesformsc.org/wp-content/uploads/2019/01/cropped-logo.png",
    },
  ],
  cpp: [
    {
      title: "Apna College – C++ Complete Course",
      link: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ",
      logo: "https://tse3.mm.bing.net/th?id=OIP.g6QD-mce5w03KqSX4omgfwAAAA&rs=1&pid=ImgDetMain",
    },
    {
      title: "C++ STL Series – CodeHelp (YouTube)",
      link: "https://www.youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKa1TbGicT8UakUBVK-V3AiSRnngHkCQe7mVGnqmfA=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Learn C++ – GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/c-plus-plus/",
      logo: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
    },
    {
      title: "Cplusplus.com – Reference",
      link: "https://cplusplus.com/",
      logo: "https://cplusplus.com/files/logo.svg",
    },
    {
      title: "freeCodeCamp – C++ Full Course (YouTube)",
      link: "https://www.youtube.com/watch?v=vLnPwxZdW4Y",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKaPB-BuQnEDf6oLK04EmCWLlzHK4O2QGkk9a7ZV5Q=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "CodeWithHarry – C++ Tutorial (YouTube)",
      link: "https://www.youtube.com/playlist?list=PLu0W_9lII9aiL0kysYlfSOUgY5rNlOhUd",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKZzIYMKfB3YlP3Z9IhF4xSSo3NZToRmBGLNU03q=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Programiz – Learn C++",
      link: "https://www.programiz.com/cpp-programming",
      logo: "https://www.programiz.com/sites/all/themes/programiz/assets/images/logo.png",
    },
    {
      title: "C++ Notes for Professionals",
      link: "https://goalkicker.com/CPlusPlusBook/",
      logo: "https://goalkicker.com/static/books/CPlusPlusBook/CPlusPlusBookCover.png",
    },
    {
      title: "TutorialsPoint – C++",
      link: "https://www.tutorialspoint.com/cplusplus/",
      logo: "https://www.tutorialspoint.com/static/images/logo.png",
    },
    {
      title: "W3Schools – C++",
      link: "https://www.w3schools.com/cpp/",
      logo: "https://www.w3schools.com/images/w3schools_logo_436_2.png",
    },
    {
      title: "SoloLearn – C++",
      link: "https://www.sololearn.com/Course/CPlusPlus/",
      logo: "https://www.sololearn.com/Icons/icon-72x72.png",
    },
  ],
  python: [
    {
      title: "Apna College – Python Course",
      link: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe7uOEC3DWHnI7y3S0UVV0Kv",
      logo: "https://tse3.mm.bing.net/th?id=OIP.g6QD-mce5w03KqSX4omgfwAAAA&rs=1&pid=ImgDetMain",
    },
    {
      title: "Python – W3Schools",
      link: "https://www.w3schools.com/python/",
      logo: "https://www.w3schools.com/images/w3schools_logo_436_2.png",
    },
    {
      title: "Python Docs",
      link: "https://docs.python.org/3/",
      logo: "https://www.python.org/static/community_logos/python-logo.png",
    },
    {
      title: "freeCodeCamp – Python for Beginners (YouTube)",
      link: "https://www.youtube.com/watch?v=rfscVS0vtbw",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKaPB-BuQnEDf6oLK04EmCWLlzHK4O2QGkk9a7ZV5Q=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Programiz – Python",
      link: "https://www.programiz.com/python-programming",
      logo: "https://www.programiz.com/sites/all/themes/programiz/assets/images/logo.png",
    },
    {
      title: "Real Python",
      link: "https://realpython.com/",
      logo: "https://files.realpython.com/media/RP-Logo-What-Is-Python_Watermarked.97fb22ebfb5d.jpg",
    },
    {
      title: "GeeksforGeeks – Python",
      link: "https://www.geeksforgeeks.org/python-programming-language/",
      logo: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
    },
    {
      title: "Corey Schafer Python Tutorials (YouTube)",
      link: "https://www.youtube.com/playlist?list=PL-osiE80TeTtoQCKZ03TU5fNfx2UY6U4p",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKZ4HzoXL1sW5B2eRXhMY5ShT_3jz4W1p_VTFzqKGQ=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Google’s Python Class",
      link: "https://developers.google.com/edu/python",
      logo: "https://www.gstatic.com/devrel-devsite/prod/vb96fe79d691cb1c0b43d7957b2c723a35de137fe7e410a86922673aeeac36403/developers/images/touchicon-180.png",
    },
    {
      title: "SoloLearn – Python",
      link: "https://www.sololearn.com/Course/Python/",
      logo: "https://www.sololearn.com/Icons/icon-72x72.png",
    },
    {
      title: "TutorialsPoint – Python",
      link: "https://www.tutorialspoint.com/python/",
      logo: "https://www.tutorialspoint.com/static/images/logo.png",
    },
  ],
  codeforces: [
    {
      title: "Apna College – Codeforces Solutions Playlist",
      link: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ",
      logo: "https://tse3.mm.bing.net/th?id=OIP.g6QD-mce5w03KqSX4omgfwAAAA&rs=1&pid=ImgDetMain",
    },
    {
      title: "Codeforces CP Guide",
      link: "https://codeforces.com/blog/entry/63679",
      logo: "https://sta.codeforces.com/s/84889/images/codeforces-logo-with-telegram.png",
    },
    {
      title: "Codeforces Tutorial Playlist (YouTube)",
      link: "https://www.youtube.com/playlist?list=PLl0KD3g-oDOGJUdmhFk19LaPgrfmAGQfo",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKYtQGvuEvZkmAx3L3gJ1R8D4UHR_tqbtv8UNyoEjg=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Codeforces Contests",
      link: "https://codeforces.com/contests",
      logo: "https://sta.codeforces.com/s/84889/images/codeforces-logo-with-telegram.png",
    },
    {
      title: "Errichto’s CP Playlist (YouTube)",
      link: "https://www.youtube.com/c/Errichto/videos",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKa4bLVGgZoewFYKvDZnPdo9PYsNv0Z0wfdVWsw_wA=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Codeforces Gym",
      link: "https://codeforces.com/gyms",
      logo: "https://sta.codeforces.com/s/84889/images/codeforces-logo-with-telegram.png",
    },
    {
      title: "BinarySearch.com CP Practice",
      link: "https://binarysearch.com/",
      logo: "https://binarysearch.com/favicon.ico",
    },
    {
      title: "CSES Problem Set",
      link: "https://cses.fi/problemset/",
      logo: "https://cses.fi/static/cses/img/cses_logo_400x180.png",
    },
    {
      title: "CP Algorithms",
      link: "https://cp-algorithms.com/",
      logo: "https://cp-algorithms.com/favicon.ico",
    },
    {
      title: "AtCoder",
      link: "https://atcoder.jp/",
      logo: "https://img.atcoder.jp/assets/favicon.png",
    },
    {
      title: "TopCoder",
      link: "https://www.topcoder.com/",
      logo: "https://www.topcoder.com/wp-content/themes/tcs-responsive-theme/assets/images/favicon.ico",
    },
  ],
  js: [
    // --- Bangla Resources First ---
    {
      title: "Learn with Sumit – JavaScript Bangla Series",
      link: "https://www.youtube.com/playlist?list=PLHiZ4m8vCp9MJg0W4-3nZ5pM2k23lOFaz",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKbtfLBn2bP4qjXbNpl1x_3z_lCWJzShmHS2zA=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Code With Hridoy – JavaScript Bangla Tutorial",
      link: "https://www.youtube.com/playlist?list=PL_XxuZqN0xVD1XoVX7dK3cWzD7YbD6oCx",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKbI5UPEZIRQuPtGvS4lA7jqzAev8rEfxUzGynTz=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Anisul Islam – JavaScript Full Bangla Tutorial",
      link: "https://www.youtube.com/playlist?list=PLgH5QX0i9K3o8lgHAXNyte_Gi4zvP2r5S",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKZ3OfVaHHFGh6g1IthOcn1UBVuK2VvqYxMqlsKi=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Stack Learner – JavaScript Bangla Course",
      link: "https://www.youtube.com/playlist?list=PLoV4KCy9kbh8R0MyjY5bpDYhE3GEpHkzK",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKZ2vK0rWqZ5DPKtn3TxNUnzVuSvJD-2uG9TClhQ=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Programming Hero – JavaScript Basic (Bangla)",
      link: "https://www.youtube.com/playlist?list=PLrOyM49ctTx9uKTPgVVwLxKxWkQOXGQvZ",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKaMLtNGyN2zUvAI90aFQFguRf3KgXixpOKHZjXimA=s176-c-k-c0x00ffffff-no-rj",
    },
  
    // --- English Resources After ---
    {
      title: "freeCodeCamp – JavaScript Full Course (English)",
      link: "https://www.youtube.com/watch?v=jS4aFq5-91M",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKaPB-BuQnEDf6oLK04EmCWLlzHK4O2QGkk9a7ZV5Q=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "JavaScript.info – The Modern JavaScript Tutorial",
      link: "https://javascript.info/",
      logo: "https://javascript.info/img/favicon/apple-touch-icon-precomposed.png",
    },
    {
      title: "MDN Web Docs – JavaScript Guide",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
      logo: "https://developer.mozilla.org/mdn-social-share.cd6c4a5a.png",
    },
    {
      title: "W3Schools – JavaScript Tutorial",
      link: "https://www.w3schools.com/js/",
      logo: "https://www.w3schools.com/favicon.ico",
    },
    {
      title: "Traversy Media – JavaScript Crash Course (English)",
      link: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKY1pNU6n2EDEInBq0QbeABsJYrhOKuZ8dt4kRYN=s176-c-k-c0x00ffffff-no-rj",
    }
  ],  
  icpc: [
    {
      title: "Apna College – Codeforces Solutions Playlist",
      link: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ",
      logo: "https://tse3.mm.bing.net/th?id=OIP.g6QD-mce5w03KqSX4omgfwAAAA&rs=1&pid=ImgDetMain",
    },
    {
      title: "ICPC Global",
      link: "https://www.icpc.global/",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/ICPC_logo_2019.svg/1200px-ICPC_logo_2019.svg.png",
    },
    {
      title: "Competitive Handbook by Errichto",
      link: "https://github.com/Errichto/competitive-programming",
      logo: "https://avatars.githubusercontent.com/u/34512557?s=280&v=4",
    },
    {
      title: "USACO Guide",
      link: "https://usaco.guide/",
      logo: "https://usaco.guide/images/usaco-guide-logo.svg",
    },
    {
      title: "ICPC Preparation Sheet",
      link: "https://github.com/jonathanirvings/icpc-notebook",
      logo: "https://avatars.githubusercontent.com/u/37796753?s=280&v=4",
    },
    {
      title: "ICPC Archive Problems",
      link: "https://icpc.global/ICPCID",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/ICPC_logo_2019.svg/1200px-ICPC_logo_2019.svg.png",
    },
  ],
  job: [
    {
      title: "Take U Forward – DSA Playlist",
      link: "https://www.youtube.com/c/TakeUForward",
      logo: "https://th.bing.com/th/id/OIP.luNzobpnR6YnuVEP_N03-AHaHa?rs=1&pid=ImgDetMain",
    },
    {
      title: "Apna College – Interview Preparation Playlist",
      link: "https://www.youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop",
      logo: "https://tse3.mm.bing.net/th?id=OIP.g6QD-mce5w03KqSX4omgfwAAAA&rs=1&pid=ImgDetMain",
    },
    {
      title: "InterviewBit",
      link: "https://www.interviewbit.com/courses/programming/",
      logo: "https://www.interviewbit.com/_next/static/media/brand.6cf9233b.svg",
    },

    {
      title: "Scaler Topics – DSA & System Design",
      link: "https://www.scaler.com/topics/",
      logo: "https://assets.scaler.com/assets/scaler-logo-9a3783ffb7fdb69c88da1cf8c6edc55a7692936a045c8dc4beffbdbb599e5a17.png",
    },
    {
      title: "GeeksforGeeks Interview Preparation",
      link: "https://www.geeksforgeeks.org/interview-preparation-for-software-developer/",
      logo: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
    },
    {
      title: "Coding Ninjas Interview Series",
      link: "https://www.youtube.com/playlist?list=PL8yHsr3EFj53-wzCr8dGzCVYjzQg3qHNf",
      logo: "https://files.codingninjas.in/cn-logo-dark-9824.png",
    },
    {
      title: "CS Dojo – Coding Interview Playlist",
      link: "https://www.youtube.com/playlist?list=PLBZBJbE_rGRV8D7XZ08LK6z-4zPoWzu5H",
      logo: "https://yt3.googleusercontent.com/ytc/AGIKgqPY0j7P_DXrKQ09pIrVpDdR-3-D6I0V6cT0HJnS=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "NeetCode – Best Coding Interview Questions",
      link: "https://neetcode.io/",
      logo: "https://neetcode.io/_next/static/media/logo.1a57e098.svg",
    },
    {
      title: "freeCodeCamp – Interview Prep Course",
      link: "https://www.youtube.com/watch?v=8hly31xKli0",
      logo: "https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png",
    },
    {
      title: "MIT OpenCourseWare – Intro to Algorithms",
      link: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/",
      logo: "https://ocw.mit.edu/images/logo_ocw-default.png",
    },
  ],
  webdev: [
    // --- Bangla Resources First ---
    {
      title: "Learn with Sumit – Web Development Full Course (Bangla)",
      link: "https://www.youtube.com/playlist?list=PLHiZ4m8vCp9MFjMRp9EEHWKArbi0wdgXG",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKbtfLBn2bP4qjXbNpl1x_3z_lCWJzShmHS2zA=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Programming Hero – Complete Web Development Course (Bangla)",
      link: "https://web.programming-hero.com/",
      logo: "https://web.programming-hero.com/images/hero-logo.png",
    },
    {
      title: "Code with Hridoy – Web Development Tutorials (Bangla)",
      link: "https://www.youtube.com/playlist?list=PL_XxuZqN0xVAGWmipjxEwlEUPg_hPhvKf",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKbI5UPEZIRQuPtGvS4lA7jqzAev8rEfxUzGynTz=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Anisul Islam – Web Development Bangla Series",
      link: "https://www.youtube.com/playlist?list=PLgH5QX0i9K3rNOJvRkGFkBJZCuPqCB5H6",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKZ3OfVaHHFGh6g1IthOcn1UBVuK2VvqYxMqlsKi=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "Stack Learner – Professional Web Development Course (Bangla)",
      link: "https://www.youtube.com/c/StackLearner",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKZ2vK0rWqZ5DPKtn3TxNUnzVuSvJD-2uG9TClhQ=s176-c-k-c0x00ffffff-no-rj",
    },
  
    // --- English Resources After ---
    {
      title: "freeCodeCamp – Responsive Web Design Certification",
      link: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKaPB-BuQnEDf6oLK04EmCWLlzHK4O2QGkk9a7ZV5Q=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "The Odin Project – Full Web Development Path",
      link: "https://www.theodinproject.com/paths/full-stack-javascript",
      logo: "https://www.theodinproject.com/favicon-32x32.png",
    },
    {
      title: "Traversy Media – Web Development Crash Course",
      link: "https://www.youtube.com/watch?v=UB1O30fR-EE",
      logo: "https://yt3.googleusercontent.com/ytc/APkrFKY1pNU6n2EDEInBq0QbeABsJYrhOKuZ8dt4kRYN=s176-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "MDN Web Docs – Web Development Tutorials",
      link: "https://developer.mozilla.org/en-US/docs/Learn",
      logo: "https://developer.mozilla.org/mdn-social-share.cd6c4a5a.png",
    },
    {
      title: "W3Schools – Full Web Development Tutorials",
      link: "https://www.w3schools.com/",
      logo: "https://www.w3schools.com/favicon.ico",
    }
  ]
  
};


const Section = ({ title, items, icon }) => (
  <div className="mb-16">
    <div className="flex items-center gap-4 mb-8">
      <h2 className="text-3xl font-bold text-red-600 flex items-center gap-3">
        {icon} {title}
      </h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {
        items.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={item.logo}
              alt={item.title}
              className="w-16 h-16 mb-4 object-contain"
            />
            <h3 className="text-lg font-semibold text-center">{item.title}</h3>
          </a>
        ))
      }
    </div>
  </div>
);

const Resource = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-red-700 mb-16">
          Competitive Programming & Interview Resources
        </h1>

        <Section
          title="C Programming"
          items={resources.c}
          icon={<FaCuttlefish size={28} />}
        />
        <Section
          title="C++ Programming"
          items={resources.cpp}
          icon={<SiCplusplus size={28} />}
        />
        <Section
          title="Python Programming"
          items={resources.python}
          icon={<FaPython size={28} />}
        />
        <Section
          title="Codeforces Resources"
          items={resources.codeforces}
          icon={<FaCode size={28} />}
        />
        <Section
          title="ICPC Preparation"
          items={resources.icpc}
          icon={<FaUniversity size={28} />}
        />
        <Section
          title="Job Interview Prep"
          items={resources.job}
          icon={<FaBriefcase size={28} />}
        />
        <Section
          title="JavaScript Resources"
          items={resources.js}
          icon={<FaJs size={28} />}
        />
        <Section
          title="Web Development Resources"
          items={resources.webdev}
          icon={<FaCode size={28} />}
        />
      </div>
    </div>
  );
};

export default Resource;
