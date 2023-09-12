import React from 'react'
import Transaction from './Transaction'

const History = () => {
    let list = [
        { title: 'Income', amount: '150000' },
        { title: 'House Rent', amount: '-15000' },
        { title: 'Shop Rent', amount: '7000' },
        { title: 'Shopping Dues', amount: '-12000' },
        { title: 'Home Accessories', amount: '-20000' },
    ]
    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {
                    list.map(obj => (

                        <Transaction transaction={obj} />
                    ))
                }
            </ul>
        </div>
    )
}

export default History
