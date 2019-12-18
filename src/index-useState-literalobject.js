import React, { useState } from 'react';
import { render } from 'react-dom';

//state as literal object

/* function FeedBack(props) {

      const state = { like: 10 };
      const [feedback, setFeedback] = useState(state);

      function increment() {
            let like = feedback.like + 1;
            setFeedback({ ...feedback, like });
      }
      return <div>
            <p>Your Feedback {feedback.like}</p>

            <button onClick={increment}>
                  increment
         </button>
      </div>
} */

//arrow version
const FeedBack = (props) => {
      const state = { like: 10 };
      const [feedback, setFeedback] = useState(state);
      const increment = () => {
            let like = feedback.like + 1;
            setFeedback({ ...feedback, like });
      };
      return <div>
            <p>Your Feedback {feedback.like}</p>
            <button onClick={increment}>
                  increment
         </button>
      </div>;
};


render(<FeedBack />, document.getElementById('root'));