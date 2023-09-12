import React from 'react'

const Transaction = ({ transaction }: any) => {
    const { title, amount } = transaction;
    return (
        <div>
            <li className={amount < 0 ? "minus" : "plus"}>
                {title} <span>{amount}</span><button className="delete-btn">x</button>
            </li>

        </div>
    )
}

export default Transaction
