
const initialState= {
  results : [],
  params: {
    searchTerm: "bars",
  },
}

export default function reducers(state=initialState, action) {

  switch(action.type)
    {
      case "DASHBOARD_RESULTS":
        debugger
        return {
          ...state, results: action.payload
          }
      case "SELECT_EVENT":
        return {
          ...state, selectEvent: action.payload
          }
      case "CURRENT_CHAT_EVENT":
        return {
          ...state, selectedChatEvent: action.payload
          }
      case "USER_EVENTS":
        return {
          ...state, userEvents: action.payload
        }
      case "DISPLAY_FORM":
        return {
          ...state, boolean: action.payload
        }


      default:
        return state
  }
}
