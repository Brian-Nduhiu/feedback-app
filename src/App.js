
import Header from "./components/Header";

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
    return (
        <>
            <Header />
            <div className="container">
                <h1>My App</h1>
            </div>
        </>
    );
};

export default App;