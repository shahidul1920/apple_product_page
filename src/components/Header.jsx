import React from 'react'

export default function Header() {
  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-white'>
      <header className='border-b border-gray-200'>
        <div className="w-[980px] flex justify-between items-center py-4 mx-auto">
            <div className="logo">
                <h2 className='font-bold text-2xl'>Mac Mini</h2>
            </div>
            <div className="menuNbtn flex items-center gap-4">
                <ul className='flex gap-4 text-[14px] text-gray-500'>
                    <li>Overview</li>
                    <li>Tech Specs</li>
                    <li>Compare</li>
                </ul>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-semi-bold py-2 px-4 rounded-full'>Buy</button>
            </div>
        </div>
      </header>
    </div>
  )
}
