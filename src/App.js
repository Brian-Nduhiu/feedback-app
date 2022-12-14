
import { useState } from 'react';
import Header from "./components/Header";
// import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';

//
//app component that returns a list of objects if showComments variable is true
//

// const App = () => {

//     const title = 'Blog Post';
//     const body = 'This is my Blog post';
//     const comments = [
//         { id: 1, text: "Nairobi" },
//         { id: 2, text: "Mombasa" },
//         { id: 3, text: "Eldoret" },
//         { id: 4, text: "Nyeri" },
//         { id: 5, text: "Kilifi" }
//     ];

//     const showComments = false;
//     const commentBlock = ((<div className="comments">
//         <h3>Comments ({comments.length})</h3>
//         <ul>
//             {comments.map((comment, index) =>
//             (
//                 <li key={index}>{comment.text}</li>
//             ))}
//         </ul>
//     </div>));


//     return (

//         <div className="container">
//             <h1>
//                 {title.toUpperCase()}
//             </h1>
//             <p>
//                 {body}
//             </p>
//             {showComments && commentBlock}


//         </div>


//     );
// };

const App = () => {

    const [feedback, setFeedback] = useState(FeedbackData);
    return (
        <>
            <Header />
            <div className="container">
                <FeedbackList feedback={feedback} />
            </div>
        </>
    );
};

export default App;