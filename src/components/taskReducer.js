const taskReducer = (state, action) => {

    // eslint-disable-next-line default-case
    switch(action.type)
    {
        case 'ADD_TASK':
            return {
                ...state, 
                tasks: [...state.tasks, action.payload]
            }

          

        case 'DELETE_TASK':
            state.tasks.splice(action.payload, 1)
            return {
                ...state,
                tasks:  state.tasks
            }

            break;
         
    }


}
export default taskReducer