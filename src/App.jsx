import {useState} from 'react'
import axios from 'axios'
function App(){
  const [value,setValue] = useState("")
  const [track,setTrack] = useState([])

  const getResponse = () => {
    const response = axios.get()
  }

  const getSong = async() => {
    const response = await axios.get(`https://v1.nocodeapi.com/thedeveloper/spotify/HIelmoEvnRwNKoKB/search?q=${value}&type=track`)
    setTrack([...track,response.data.tracks.items])
  }
  return(
    <div className="w-full h-screen bg-zinc-900">
      <div className="w-full h-24 bg-zinc-800 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-center text-white">Music Player</h1>
      </div>
      <div className="w-full h-[85.3vh] px-3 py-3">
        <div className="w-full h-12 flex items-center justify-center">
          <input className="px-2 rounded-md outline-none" type="text" placeholder="Search" value={value} onChange={(e)=>setValue(e.target.value)} />
          <button className='px-3 py-2 bg-blue-600 rounded-lg text-white ml-4' onClick={()=>getSong()}>Search</button>
        </div>
        <div className='w-full h-[75.8vh] bg-red-900 flex flex-wrap justify-between px-2 py-2'>
          <h1>hero</h1>
          {
            track[0].map((e)=>{
              return(
                <h1>{e.name}</h1>
              )
            })
          }
        </div>
    </div>
    </div>
  )
}
export default App;