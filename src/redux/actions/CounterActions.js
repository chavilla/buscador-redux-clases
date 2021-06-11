const counterActions = {
  STARTCOMPONENT: "STARTCOMPONENT",
  SUCCESSUSERS: "SUCCESSUSERS",

  // functions
  startComponent: () => {
    return (dispatch) => {
      dispatch({
        type: counterActions.STARTCOMPONENT,
      });
    };
  },

  successUsers: (users) => {
    return (dispatch) => {
      dispatch({
        type: counterActions.SUCCESSUSERS,
        users,
      });
    };
  },
};

export default counterActions;
