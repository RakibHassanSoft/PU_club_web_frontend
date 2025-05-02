// data/navLinks.js
export const navLinks = [
    { name: 'Home', path: '/' },
    // {
    //   name: 'Courses',
    //   dropdown: [
    //     { name: 'C Course', path: '/courses/c-course' },
    //     { name: 'C++ Course', path: '/courses/cpp-course' },
    //     { name: 'DSA Course', path: '/courses/dsa' },
    //   ]
    // },
    { name: 'Problems', path: '/daily-problems' },
    // { name: 'C Test', path: '/c-test' },
    // { name: 'CF Test', path: '/s-test' },
    // { name: 'DSA Test', path: '/l-test' },
    {
      name: 'Test',
      dropdown: [
      { name: 'Basic Test', path: '/c-test' },
      { name: 'CF Test', path: '/s-test' },
      { name: 'DSA Test', path: '/l-test' },
      ]
    },
    { name: 'Ranking', path: '/ranking' },
    { name: 'Resources ', path: '/resources' },
    { name: 'Roadmap', path: '/roadmap' },
    { name: 'PU-AI', path: '/pu-ai' },
    // { name: 'Our Mentors', path: '/mentors' },

  ];
  export const navLinks2 = [
    { name: 'SignIn', path: '/signin' },
    { name: 'Signup', path: '/signup' },
  ]