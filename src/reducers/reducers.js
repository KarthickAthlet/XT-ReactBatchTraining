const filterIssues = (state = {}, action) => {
    switch (action.type) {
        case 'FILTERISSUE':
            return state = {};
        default:
            return state;
    }
};

export default filterIssues;