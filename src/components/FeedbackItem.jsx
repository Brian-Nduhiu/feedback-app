
// import {useState} from 'react'
import Card from "./shared/Card"

function FeedbackItem({item}) {

// declare state 
//   const [rating,setRating] = useState(7)
//   const [text,setText] = useState("This is an example of a feedback item")

  //change state value using SetRating function
//   const handleClick = ()=>{
//     setRating((rating)=>rating+1)
//   }
  return (
    // <div className="card">
        // <div className="num-display">{item.rating}</div>
        // <div className="text-display">{item.text}</div>

    //     {/* button to change state value using setRating function */}
    //     {/* <button onClick={handleClick}>Click</button> */}
    // </div>

    <Card>
        <div className="num-display">{item.rating}</div>
        <div className="text-display">{item.text}</div>
    </Card>
    
  )
}

export default FeedbackItem