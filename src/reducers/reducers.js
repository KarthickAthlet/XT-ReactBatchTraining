//define the initial state
const initialState = {
    userName : "",
    repoName : "",
    isIssuePresent: false,
    issues:[]
}   

const filterIssues = (state = initialState, action) => {
    switch (action.type) {
        case 'COMPLETE_ISSUES':
        // debugger;
        return state.issues = action.data;
        case 'FILTER_ACTION':
        // debugger;
        let selectedQuestion = action.data.completeIssues.findIndex((element)=>{
            return element.number == action.data.issueNumber;
        });
        return state = (selectedQuestion > -1)? action.data.completeIssues[selectedQuestion]: state;
        default:
            return state;
    }
};

export default filterIssues;