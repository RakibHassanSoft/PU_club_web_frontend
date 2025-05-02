import React from 'react';

const Demo = () => {
  return (
    <div>
      
    </div>
  );
};

export default Demo;
// import React, { useState } from 'react';
// import useAxiosData from '../../hook/useAxiosData';

// const Demo = () => {
//   const [postBody, setPostBody] = useState({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   });

//   const { data, loading, error, mutate } = useAxiosData({
//     secure: false, // Public API
//     method: 'POST',
//     endpoint: '/posts',
//   });

//   const handleSubmit = () => {
//     mutate(postBody);
//   };

//   return (
//     <div>
//       <h1>POST to JSONPlaceholder</h1>
//       <button onClick={handleSubmit} disabled={loading}>
//         {loading ? 'Posting...' : 'Submit Post'}
//       </button>

//       {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}

//       {data && (
//         <div style={{ marginTop: '1rem' }}>
//           <h2>Response:</h2>
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Demo;


// import React, { useState } from 'react';
// import useAxiosData from '../../hook/useAxiosData';

// const Demo = () => {
//   const [patchBody, setPatchBody] = useState({
//     title: 'Partially Updated Title', // Only provide the fields you want to update
//   });

//   const { data, loading, error, mutate } = useAxiosData({
//     secure: false, // Public API
//     method: 'PATCH', // Change to PATCH for partial updates
//     endpoint: '/posts/1', // Assuming you are updating post with ID 1
//     body: patchBody, // Send the patch data for the PATCH request
//   });

//   const handleSubmit = () => {
//     mutate(patchBody); // Trigger the PATCH request
//   };

//   return (
//     <div>
//       <h1>PATCH to JSONPlaceholder</h1>
//       <button onClick={handleSubmit} disabled={loading}>
//         {loading ? 'Patching...' : 'Patch Post'}
//       </button>

//       {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}

//       {data && (
//         <div style={{ marginTop: '1rem' }}>
//           <h2>Response:</h2>
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Demo;




// import React, { useState } from 'react';
// import useAxiosData from '../../hook/useAxiosData';

// const Demo = () => {
//   const [putBody, setPutBody] = useState({
//     title: 'Updated Title',
//     body: 'Updated Content',
//     userId: 1,
//   });

//   const { data, loading, error, mutate } = useAxiosData({
//     secure: false, // Public API
//     method: 'PUT', // Change to PUT for updating the resource
//     endpoint: '/posts/1', // Assuming you are updating post with ID 1
//     body: putBody, // Send the updated body for the PUT request
//   });

//   const handleSubmit = () => {
//     mutate(putBody); // Trigger the PUT request
//   };

//   return (
//     <div>
//       <h1>PUT to JSONPlaceholder</h1>
//       <button onClick={handleSubmit} disabled={loading}>
//         {loading ? 'Updating...' : 'Update Post'}
//       </button>

//       {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}

//       {data && (
//         <div style={{ marginTop: '1rem' }}>
//           <h2>Response:</h2>
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Demo;




// import React from 'react';
// import useAxiosData from '../../hook/useAxiosData';

// const Demo = () => {
//   const { data, loading, error } = useAxiosData({
//     secure: false, // Public API
//     method: 'GET',
//     endpoint: '/users',
//   });
//   console.log(data)

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h1>Public API Data</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default Demo;
