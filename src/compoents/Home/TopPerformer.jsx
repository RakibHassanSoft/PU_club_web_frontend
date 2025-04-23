const performers = [
  { name: 'Rakib', rating: 2050, handle: 'rakib_coder' },
  { name: 'Ayesha', rating: 1990, handle: 'ayesha_tle' },
  { name: 'Nabil', rating: 1930, handle: 'nabilxd' },
];

const TopPerformer = () => {
  return (
    <section className="max-w-6xl mx-auto px-4">
       <h1 className='text-center font-bold text-red-600 text-4xl'>Top Performers of the Week </h1>
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {performers.map((user, i) => (
          <div
            key={i}
            className="bg-white border border-red-300 shadow-lg rounded-lg p-6 text-center hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold mb-1">{user.name}</h3>
            <p className="text-red-500 font-mono">@{user.handle}</p>
            <p className="text-gray-600 mt-2">Codeforces Rating: <span className="font-semibold">{user.rating}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopPerformer;
