- [ ] What problem does the context API help solve?
     It enables us to share specific forms and data across all levels of an application. IT helps to solve prop drilling.

- [ ] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    Actions are JavaScript objects that contain information on what to do.
    Reducers are functions that tell the application how to act.
    A store hold the state of the application.


- [ ] What is the difference between Application state and Component state? When would be a good time to use one over the other?
    The Component State is local and the Application State is global. Component States can be serializable while the Application cannot. This is good for controlled versions.

- [ ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
`   Redux-thunk is a middleware that allows you to call action-creators to return a function instead of an action.
    
- [ ] What is your favorite state management system you've learned and this sprint? Please explain why!
    I have not been coding Redux long enough to choose a favorite. The reason why is that I hardly understand this at all.

