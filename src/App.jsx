import {useState} from 'react'
import axios from 'axios'
function App(){
  const [value,setValue] = useState("")
  const [track,setTrack] = useState([])
  let arr;
  const getResponse = async() => {
    const response = await axios.get(`https://v1.nocodeapi.com/thedeveloper/spotify/HIelmoEvnRwNKoKB/search?q=${value}&type=track`)
    setTrack([response.data.tracks.items[0],...track])
    console.log(track)
  }

  const getSong = () => {
    getResponse()
  }
  return(
    <div className="w-full min-h-[100vh] bg-zinc-900">
      <div className="w-full h-24 bg-zinc-800 flex items-center justify-center">
        <h1 className="text-6xl font-bold text-center text-white">Music Player</h1>
      </div>
      <div className="w-full min-h-[85.3vh] bg-zinc-900 px-3 py-3">
        <div className="w-full h-12 flex items-center justify-center">
          <input className="px-2 rounded-md outline-none" type="text" placeholder="Search" value={value} onChange={(e)=>setValue(e.target.value)} />
          <button className='px-3 py-2 bg-blue-600 rounded-lg text-white ml-4' onClick={()=>getSong()}>Search</button>
        </div>

        <div className='w-full min-h-[75.8vh] flex flex-wrap gap-3 px-2 py-2 max-[900px]:justify-center'>
          {
            track.map((e)=>{
              return(
                <div className='w-60 h-[50vh] mr-10'>
                <img src={e.album.images[0].url} alt="photo" className='w-[100%] h-[50%] object-contain'></img>
                <audio src={e.preview_url} controls className='mt-3 '></audio>
                </div>
              )
            })
          }
        </div>
    </div>
    </div>
  )
}
export default App;