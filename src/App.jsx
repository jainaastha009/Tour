import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const initialDataRef = useRef([]);

  const [expandedCards, setExpandedCards] = useState({});

  const fetchdata = async () => {
    try {
      console.log('Starting fetch request...');
      const response = await fetch('https://www.course-api.com/react-tours-project');
      const data = await response.json();
      setData(data);
      initialDataRef.current=data//store current data
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleReadMore = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleDelete = (id) => {
    const updatedData = data.filter((e) => e.id !== id);
    setData(updatedData);
  };

  const handleresert =() =>{
    setData(initialDataRef.current)//use current data
  }

  return (
    <div>
      {data.length > 0 ? (
        <>
          <h1 className="text-3xl font-semibold capitalize custom-underline max-lg:ml-24 max-md:ml-20 max-sm:ml-10">Our Tours</h1>
          <div className='flex flex-wrap gap-4 ml-36 max-lg:ml-3  max-sm:flex max-sm:flex-col max-sm:ml-8 '>
            {data.map(e => (
              <div key={e.id} className='bg-[#fff] rounded mt-8 w-[calc(50%-1rem)] max-sm:w-[90%]   h-[35rem] max-lg:h-[37rem] max-md:h-[40rem] shadow-lg overflow-auto p-4 box-border'>
                <div className="relative">
                  <h4 className="absolute top-0 right-0 text-white bg-green-400 bg-opacity-75 p-1 rounded">
                    ${e.price}
                  </h4>
                  <img className="h-[40vh] w-full rounded mb-5" src={e.image} alt={e.name} />
                </div>

                <h1 className='text-2xl font-semibold mb-4'>{e.name}</h1>
                <div className='relative'>
                  <p>
                    {expandedCards[e.id] ? (
                      <>
                        {e.info}
                        <button onClick={() => handleReadMore(e.id)} className='block mt-2 p-2 text-green-400'>Show less</button>
                      </>
                    ) : (
                      <>
                        {e.info.substring(0, 150)}...
                        <button onClick={() => handleReadMore(e.id)} className='block mt-2 p-2 text-green-400'>Read More</button>
                      </>
                    )}
                  </p>
                  <button onClick={() => handleDelete(e.id)} className='border-2 rounded w-[100%] border-[#5fd47c] text-[#4b915c]'>Not Interested</button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
                <p>No tours available.</p>
              <button onClick={handleresert}>Reset</button>
        </>
        
      )}
    </div>
  );
}

export default App;
