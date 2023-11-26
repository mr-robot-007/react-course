import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;
        else {
          state.loan = action.payload.amount;
          state.loanPurpose = action.payload.purpose;
          state.balance = state.balance + action.payload.amount;
        }
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

console.log(accountSlice);

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

// for testing
console.log(requestLoan(1000, "buy a car"));

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };
  // if we return a fn, then redux knows this is an sync function, before dispatching anything to the store
  return async function (dispatch, getState) {
    // API call
    dispatch({ type: "account/convertingCurrency" });

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    // return action
    dispatch({ type: "account/deposit", payload: converted });
  };
}

export default accountSlice.reducer;

// export default function accountReducer(state = initialStateAccount, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload,isLoading:false };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       // LATER
//       else
//         return {
//           ...state,
//           loan: action.payload.amount,
//           loanPurpose: action.payload.purpose,
//           balance: state.balance + action.payload.amount,
//         };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     case "account/convertingCurrency":
//       return { ...state, isLoading: true };
//     default:
//       return state;
//   }
// }

// export function deposit(amount, currency) {
//   if (currency === "USD") return { type: "account/deposit", payload: amount };
//   // if we return a fn, then redux knows this is an sync function, before dispatching anything to the store
//   return async function (dispatch, getState) {
//     // API call
//     dispatch({ type: "account/convertingCurrency" });

//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );
//     const data = await res.json();
//     const converted = data.rates.USD;

//     // return action
//     dispatch({ type: "account/deposit", payload: converted });
//   };
// }
// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }
// export function requestLoan(amount, reason) {
//   return {
//     type: "account/requestLoan",
//     payload: {
//       amount: amount,
//       purpose: reason,
//     },
//   };
// }
// export function payLoan() {
//   return { type: "account/payLoan" };
// }

// export {deposit,withdraw,requestLoan,payLoan};
