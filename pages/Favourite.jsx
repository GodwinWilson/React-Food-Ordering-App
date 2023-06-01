import React from 'react'
import { useStateValue } from '../components/StateProvider'
import RightMenu from '../components/RightMenu';

const Favourite = ({calculateTotalPrice}) => {
    const [{ favourites, cart }] = useStateValue();
    //const cart = []
  return (
    <main className="main">
      <div className='mt-20 container mx-auto'>
      <h3 className='text-2xl font-bold'>Favourites</h3>
      {favourites.map((item) => (
        <div key={item.id} className='flex items-center h-20 py-2 space-x-5 border-b border-solid'>
          <img src={item.imgSrc} alt={item.name} className='h-full object-contain w-20'/>
          <h2 className='text-lg font-medium'>{item.name}</h2>
        </div>
      ))}
    </div>
    <RightMenu cart={cart} calculateTotalPrice={calculateTotalPrice}/>
    </main>
    
  );
}

export default Favourite