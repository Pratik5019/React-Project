import { ThumbsUp,ThumbsDown } from 'lucide-react'
import { Firstproject } from '../type'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Card:React.FC<any> = ({project}:{project:Firstproject}) => {
  const navigate = useNavigate();
  const [likes,setLikes] = useState<number>(0)
  const [dislikes,setDislikes] = useState<number>(0)
  const handleLike = () => {
    setLikes(likes + 1)
  }
  const handleDislike = () => {
    setDislikes(dislikes + 1)
  }
  return (
    <div> <div
    key={1}
    className="bg-black border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
  >
    <div className="relative">
      <img
        src={project.coverImageUrl}
        alt="E-Commerce Platform"
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-2 right-2 bg-black/70 text-white px-3 py-1 rounded-lg font-semibold">
        ${project.price}
      </div>
    </div>
    <div className="p-4 sm:p-6 relative z-20">
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
        {project.title}
      </h3>
      <p className="text-sm sm:text-base text-gray-400 mb-4">
       {project.description}
      </p>
      <div className="flex gap-3 md:gap-4 items-center">
        <button onClick={() => {handleLike()}}
        className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
          <ThumbsUp size={20} /> {likes}
        </button>
        <button onClick={() => {handleDislike()}}
        className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors">
          <ThumbsDown size={20} /> {dislikes}
        </button>
        <button onClick={()=>navigate(`/dashboard/${project._id}`)} className="ml-auto p-1 md:px-2 md:py-2 bg-black text-purple-400 rounded-lg border border-purple-500/50 hover:border-purple-500 hover:text-white hover:bg-purple-500/10 transition-all duration-300 text-sm">
          View Details
        </button>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Card