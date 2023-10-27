# Try it [here](https://text-sentiment-machine.netlify.app/)

# Overview

In this project, I create a text sentiment web app! Users can input text, and my machine learning model will predict whether the text's sentiment is positive or negative.

# Contents

### Languages:
- Python
- HTML
- CSS
- Javascript

### Technologies:
- Flask
- scikit-learn
- Vite
- React
- Bootstrap

# Explanation

### Model

For the project's model, I used a support vector machine (SVM) from a machine learning library in Python, scikit-learn. I trained it on a dataset of 20,000 IMDB movie reviews that were categorized as either positive or negative in sentiment. 

To prepare the movie reviews for training, I used a tool called "CountVectorizer" to create a matrix of token counts wherein each word throughout all movie reviews was indexed in accordance with its frequency. Next, I used a tool called "Term Frequency times Inverse Document Frequency". Term frequency refers to dividing word occurrences in each review by the review's total number of words, to minimize the potential discrepancy created by long reviews versus short reviews. Inverse document frequency refers to downscaling weights for heavily used words that appear in many reviews compared to more informative words that appear in fewer reviews.

When tested against an additional 5000 movie reviews, the model correctly predicted sentiment at a rate of 85%.

### Backend

The project's backend was written in Python with Flask. I loaded my model into it with joblib, and created a route for post requests. The route feeds strings to my model, and returns the model's prediction as to whether they're positive or negative. I hosted the backend on a PAAS so I could make API calls to it from my frontend.

### Frontend

The project's frontend was primarily written in Javascript with React. I used Vite for a build tool, and CSS with Bootstrap for styling. My SubmitString component keeps user form inputs in state, then makes a post request to my API with it when the user clicks submit.

# Sources

### Dataset

Andrew L. Maas, Raymond E. Daly, Peter T. Pham, Dan Huang, Andrew Y. Ng, and Christopher Potts. 2011. Learning Word Vectors for Sentiment Analysis. In Proceedings of the 49th Annual Meeting of the Association for Computational Linguistics: Human Language Technologies, pages 142–150, Portland, Oregon, USA. Association for Computational Linguistics.

### Model

https://scikit-learn.org/stable/