import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <div className='w-[85%] mx-auto'>
        <Header></Header>
        <div className='flex gap-5 my-5'>
          <Blogs></Blogs>
          <BookMarks></BookMarks>
        </div>
      </div>
    </>
  )
}

export default App
