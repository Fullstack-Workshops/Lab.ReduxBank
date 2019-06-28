import { createStore, applyMiddleware } from "redux";
import loggingMiddleware from 'redux-logger'

const balance = document.getElementById("balance");
const deposit5 = document.getElementById("deposit5");
const deposit25 = document.getElementById("deposit25");
const withdraw5 = document.getElementById("withdraw5");
const withdraw25 = document.getElementById("withdraw25");

//Action Creators
const depositMoney = amount => ({
  type: 'deposit',
  amount
})
const withdrawMoney = amount => ({
  type: 'withdraw',
  amount
})


const reducer = (state = { balance: 0 }, action) => {
  switch (action.type) {
    case 'deposit':
      return { balance: state.balance + action.amount }
    case "withdraw":
      return { balance: state.balance - action.amount }
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(loggingMiddleware))

deposit5.onclick = () => store.dispatch(depositMoney(5))
deposit25.onclick = () => store.dispatch(depositMoney(25))
withdraw5.onclick = () => store.dispatch(withdrawMoney(5))
withdraw25.onclick = () => store.dispatch(withdrawMoney(25))

store.subscribe(() => {
  balance.innerText = `$ ${store.getState().balance}`
})
