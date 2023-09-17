'use client'
import React, { useState } from 'react'

const AddTransaction = ({ getList }: any) => {
  const [title, settitle] = useState('');
  // const [amount, setamount] = useState('');

  const addtitle = () => {
    return getList(title)
  }
  // const addamount = () => {
  //   return getList(amount)

  // }


  return (
    <div>
      {/* <p>{amount}</p> */}
      <h3>Add new transaction</h3>

      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>

          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            onChange={(e) =>  settitle(e.target.value) }

          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)</label>

          <input

            type="number"
            id="amount"
            placeholder="Enter amount..."
            // onChange={(e) => {
              // return setamount(e.target.value)
            // }}
          />

        </div>

        <span className="btn" onClick={() => {
        addtitle()
        // addamount()
        }} >Add transaction</span>
    </form>
    </div >
  )
}

export default AddTransaction

