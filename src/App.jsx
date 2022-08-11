import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import {useState} from 'react'
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {v4 as uuidv4} from 'uuid'


function App() {
    const [feedback, setFeedBack] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        newFeedback.aNewField = '123'
        console.log(newFeedback)
    }

    const deleteFeedback = (id)=>{
        if (window.confirm('Are you sure you want to delete?')){
            setFeedBack(feedback.filter((item)=>item.id !== id))
        }
    }
    
  return (
    <>
        <Header bgColor = 'red' textColor = 'blue' />
        <div className="container">
            <FeedbackForm handleAdd = {addFeedback}> </FeedbackForm>
            <FeedbackStats feedback={feedback}></FeedbackStats>
            <FeedbackList feedback={feedback}
            handleDelete={deleteFeedback}/>
        </div>
    </>
  )
}

export default App