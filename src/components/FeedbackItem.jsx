
import {useState} from 'react'

function FeedbackItem() {
  const [rating,setRating] = useState(7)
  const [text,setText] = useState("This is an example of a feedback item")

  //change state value using SetRating function
//   const handleClick = ()=>{
//     setRating((rating)=>rating+1)
//   }
  return (
    <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>

        {/* button to change state value using setRating function */}
        {/* <button onClick={handleClick}>Click</button> */}
    </div>
  )
}

export default FeedbackItem