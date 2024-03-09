import React from 'react'

const ResuldBar = () => {
  return (
    <div id='resuldBar' className='invisible-scrollbar absolute scroll-smooth overflow-auto w-[95%] mt-[70px]
    bg-[#126CB5] border-[4px]  z-[999] h-[299px]  '>
        
        {/* <h1 className=' text-2xl text-white overflow-scroll font-bold mb-2'>Prducts :</h1> */}

        <a href="">
            <div className='w-[100%] mb-4 pr-3 flex justify-between items-center h-14 bg-slate-900 text-white'>
                <img className='w-[70px] h-14' src="data:image/png;base64,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" alt="" />
                <p>title</p>
                <p>price</p>
                <p>catagori</p>
            </div>
        </a><a href="">
            <div className='w-[100%] mb-4 pr-3 flex justify-between items-center h-14 bg-slate-900 text-white'>
                <img className='w-[70px] h-14' src="data:image/png;base64,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" alt="" />
                <p>title</p>
                <p>price</p>
                <p>catagori</p>
            </div>
        </a><a href="">
            <div className='w-[100%] mb-4 pr-3 flex justify-between items-center h-14 bg-slate-900 text-white'>
                <img className='w-[70px] h-14' src="data:image/png;base64,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" alt="" />
                <p>title</p>
                <p>price</p>
                <p>catagori</p>
            </div>
        </a><a href="">
            <div className='w-[100%] mb-4 pr-3 flex justify-between items-center h-14 bg-slate-900 text-white'>
                <img className='w-[70px] h-14' src="data:image/png;base64,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" alt="" />
                <p>title</p>
                <p>price</p>
                <p>catagori</p>
            </div>
        </a><a href="">
            <div className='w-[100%] mb-4 pr-3 flex justify-between items-center h-14 bg-slate-900 text-white'>
                <img className='w-[70px] h-14' src="data:image/png;base64,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" alt="" />
                <p>title</p>
                <p>price</p>
                <p>catagori</p>
            </div>
        </a><a href="">
            <div className='w-[100%] mb-4 pr-3 flex justify-between items-center h-14 bg-slate-900 text-white'>
                <img className='w-[70px] h-14' src="data:image/png;base64,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" alt="" />
                <p>title</p>
                <p>price</p>
                <p>catagori</p>
            </div>
        </a>
    </div>
  )
}

export default ResuldBar