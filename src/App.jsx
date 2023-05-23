import { useState } from 'react'
import './App.css'
import data from './data'
import Post from './Post'
import LazyLoad from 'react-lazyload'
import Loading from './Loading'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-green-900 flex justify-center'>
        <div className='bg-red-900 w-fit  flex flex-col justify-center my-5 mx-5 py-5 px-5 space-y-4'>
          {data?.map((data) => {
            return (
              <>
                {/* <Loading /> */}
                <LazyLoad key={data?.id} placeholder={<Loading />}>
                  <Post key={data?.id} {...data} />
                </LazyLoad>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
