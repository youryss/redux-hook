export const ADD_BOOKING = 'APP/BOOK_TABLE/ADD_BOOKING';

export const initialState = {
  bookings: [],
};

export const addBooking = (booking) => ({
  type: ADD_BOOKING,
  booking,
});

export const bookTableReducer = (state = initialState, action) => {
  if (action.type === ADD_BOOKING) {
    return {
      ...state,
      bookings: state.bookings.concat(action.booking),
    };
  }
};
