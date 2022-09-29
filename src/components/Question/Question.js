import React from 'react';

const Question = () => {
    return (
        <div className='p-4 m-4 text-center'>
            <h1 className='mb-3 mt-5'>Ans. To The Question:</h1>
            <div>
                <h3 className='text-center'>
                    How Does React Work?
                </h3>
                <p> Ans : ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div>
                <h3 className='text-center'>
                    what is difference between props and state in react?
                </h3>
                <p> Ans : Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div>
                <h3 className='text-center'>
                    where are use useeffect without data load?
                </h3>
                <p> Ans : If we pass in the prop variable to the array in the 2nd argument of useEffect , the callback that we pass into the 1st argument will run as the prop changes.

                    For instance, we can write the following code fetch data from an API as our prop changes: We can use the react-promise-tracker package to watch for loading promises and sets a state to indicate that one or more promises are loading. </p>
            </div>
        </div>
    );
};

export default Question;