import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

const SubmitString = () => {

    const [stringData, setStringData] = useState({
        string: '',
    });

    const [modelResponse, setModelResponse] = useState("");

    const stringInput = (e) => {
        const { value } = e.target;
        setStringData({ ...stringData, string: value });
    };

    const submitString = async (e) => {
        e.preventDefault();
        console.log(stringData.string)
        try {
            const response = await fetch(import.meta.env.VITE_API_KEY, {
                method:'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ text: stringData.string }),
            });
            if (response.ok) {
                const processPrediction = await response.json();
                const modelPrediction = processPrediction.prediction;
                console.log(modelPrediction);
                modelPrediction === 1 ? setModelResponse("Positive") : setModelResponse("Negative"); 
            } else {
                throw "Server response failed"
            }
        } catch (error) {
            console.error(error);
        }
    };

    const tryAgain = () => {
        setModelResponse("");
    };

    return (
        <div className='form-and-sentiment-container'>
            <div className='form-title'>Text Sentiment Machine</div>
            {modelResponse.length > 0 ? (
                <div className='sentiment-container'>
                    {modelResponse}!
                    <div className='try-again-button'><Button onClick={tryAgain}>Try Again</Button></div>
                </div>
            ) : (
            <div className='form-container'>
                <Form onSubmit={submitString}>
                    <Form.Group className="mb-3" controlId="create-string.ControlInput">
                        <Form.Control as="textarea" name="string" rows={8} placeholder="I love being a dev because..." onChange={stringInput} />
                    </Form.Group>
                    <div className="submit-button"><Button type="submit">Submit</Button></div>
                </Form>
            </div>
            )}
        </div>
    )
}

export default SubmitString;