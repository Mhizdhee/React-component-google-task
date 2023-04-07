import React from 'react'
import SearchIcon from './SearchIcon';
import CameraIcon from './CameraIcon';
import MicrophoneIcon from './MicrophoneIcon';
import { useState } from 'react'


const SearchBar=()=> {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setSearchKeyword(event.target.value);
      event.target.value = '';
    }
  };

// export default function SearchBar() {
  return (
    <>
      <input type="text" onKeyDown={handleKeyDown} placeholder="Enter search keyword" />
      {searchKeyword && <p> {searchKeyword}</p>}
      <MicrophoneIcon />
      <CameraIcon />
      <SearchIcon />
    </>
  )
}





//   return (
//     <div>
//       <input type="text" onKeyDown={handleKeyDown} placeholder="Enter search keyword" />
//       {searchKeyword && <p>Search Keyword: {searchKeyword}</p>}
//     </div>
//   );
// }

export default SearchBar;