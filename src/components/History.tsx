import React from 'react'
import Transaction from './Transaction'

const History = ({ addHistory }: any) => {

    return (
        <div>
            <h3>History</h3>
            <ul id="list" className="list">
                {
                    addHistory.map((obj: any, key: any) => (

                        <Transaction key={key} transaction={obj} />
                    ))
                }
            </ul>
        </div>
    )
}

export default History
