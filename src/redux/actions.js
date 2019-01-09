
export function dashboardResults(results) {
  return {
    type: "DASHBOARD_RESULTS",
    payload: results
  }
}
export function selectPlaceAction(selectedBusiness) {
  return {
    type: "SELECT_EVENT",
    payload: selectedBusiness
  }
}
export function wristbandData(drinkingPoints) {
  return {
    type: "SELECT_EVENT",
    payload: drinkingPoints
  }
}
export function selectedChatEventAction(chatEvent) {
  return {
    type: "CURRENT_CHAT_EVENT",
    payload: chatEvent
  }
}
