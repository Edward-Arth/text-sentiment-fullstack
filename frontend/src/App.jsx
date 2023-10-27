import SubmitString from "./SubmitString"

const App = () => {
  return (
    <div className="page-container">
      <div className="meat-container">
        <SubmitString />
        <div className="text-container">
          <div className="instructions-container">
            <div className="text-head">
              Instructions
            </div>
            <p>Submit text, and the model will predict whether it is positive or negative in sentiment.</p> 
            <p>The model may be more accurate at predicting longer and less neutral submissions.</p>
          </div>
          <div className="about-container">
            <div className="text-head">
              About
            </div>
            <p>This is a support vector machine. It has been trained on 20,000 IMDB movie reviews that were categorized as either positive or negative in sentiment.</p> 
            <p>Tested against an additional 5000 movie reviews, it correctly predicted sentiment at a rate of 85%.</p>
            <p>Please see my <a href="https://github.com/Edward-Arth/text-sentiment-fullstack">GitHub repository</a> for more information!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App