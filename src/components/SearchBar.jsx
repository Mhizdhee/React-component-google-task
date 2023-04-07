import React from 'react'
import SearchIcon from './SearchIcon';
import CameraIcon from './CameraIcon';
import MicrophoneIcon from './MicrophoneIcon';

export default function SearchBar() {
  return (
    <>
      <input type="text"  />
      <MicrophoneIcon />
      <CameraIcon />
      <SearchIcon />
    </>
  )
}
