import { SET_COMPANY_DETAILS } from "./actionTypes";

export const actions = {
  setCompanyDetails: payload => ({
    type: SET_COMPANY_DETAILS,
    payload
  })
};

const initialState = {
 companyDetails: {}
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPANY_DETAILS:
      return {
        ...state,
        companyDetails: action.payload
      };

  }
  return state;
};
