'use client'
import React, { useEffect, useState } from 'react'
import "./Expensetracker.css"

const ExpenseTracker = () => {
    const [transactionList, setTransactionList] = useState<any[]>([
    ])
    const [loading, setLoading] = useState(true)
    const [title, setTiltle] = useState('')
    const [amount, setAmount] = useState('')

    const calculateBalance = () => {
        let sum = 0;
        for (let i = 0; i < transactionList.length; i++) {
            sum += +transactionList[i].amount;
        }
        return sum
    }

    const calculateIncome = () => {
        let income = 0;
        for (let i = 0; i < transactionList.length; i++) {
            if (+transactionList[i].amount > 0) {
                income += +transactionList[i].amount;
            }
        }
        return income;
    }
    const calculateExpense = () => {
        let expense = 0;
        for (let i = 0; i < transactionList.length; i++) {
            if (+transactionList[i].amount < 0) {
                expense += +transactionList[i].amount;
            }
        }
        return expense
    }

    useEffect(() => {
        const apiUrl = `http://localhost:8000/transaction`;
        setLoading(true);
        fetch(apiUrl, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                setLoading(false)
                setTransactionList(data);
            })
            .catch(error =>
                setLoading(false)
            );
    }, [])

    const addTransaction = (e: any) => {
        e.preventDefault();
        if (title.length > 0 && +amount != 0) {
            const newTransaction = { id: new Date(), title: title, amount: amount }
            const apiUrl = `http://localhost:8000/transaction`;
            setLoading(true);
            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTransaction)
            })
                .then(response => response.json())
                .then(data => {
                    setTransactionList(prev => (
                        [...prev, data]
                    ))
                    setLoading(false)
                })
                .catch(error =>
                    setLoading(false)
                );

        }
        else {
            alert("PLease Enter the Correct Input");
        }
        setTiltle('');
        setAmount('');
    }

    // Delete transactionList here 

    const deleteTransaction = (id: any) => {
        const apiUrl = `http://localhost:8000/transaction/${id}`;
        setLoading(true);
        fetch(apiUrl, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                setLoading(false)
            })
            .catch(error =>
                setLoading(false)
            );
        setTransactionList(prev => {
            return prev.filter(transaction => {
                return transaction.id != id;
            });
        })
    }


    return (
        <>



            {
                !(loading)  ?
                    <>
                        <h2>Expense Tracker</h2>
                        <div className="container">
                            <h4>Your Balance</h4>
                            <h1 id="balance">${calculateBalance()}</h1>
                            <div className="inc-exp-container">
                                <div>
                                    <h4>Income</h4>
                                    <p id="money-plus" className="money plus">+{calculateIncome()}</p>
                                </div>
                                <div>
                                    <h4>Expense</h4>
                                    <p id="money-minus" className="money minus">-${calculateExpense()}</p>
                                </div>
                            </div>


                            <h3>History</h3>
                            <ul id="list" className="list">

                                {
                                    transactionList.map((transaction, key) => {
                                        return <li key={key} className={transaction.amount < 0 ? 'minus' : 'plus'}>
                                            {transaction.title} <span>{transaction.amount}
                                            </span><span className="delete-btn"
                                                onClick={() => deleteTransaction(transaction.id)

                                                }
                                            >x</span>
                                        </li>
                                    })
                                }

                            </ul>
                            <div>
                                <h3>Add new transaction</h3>

                                <form id="form" onSubmit={(e) => addTransaction(e)}>
                                    <div className="form-control">
                                        <label htmlFor="text">Text</label>

                                        <input
                                            type="text"
                                            id="text"
                                            placeholder="Enter text..."
                                            onChange={(e) => setTiltle(e.target.value)}
                                            value={title}
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label htmlFor="amount">Amount <br />
                                            (negative - expense, positive - income)</label>

                                        <input

                                            type="number"
                                            id="amount"
                                            placeholder="Enter amount..."
                                            onChange={(e) => setAmount(e.target.value)}
                                            value={amount}

                                        />

                                    </div>
                                    <button className="btn">Add transaction</button>
                                </form>
                            </div>
                        </div>
                    </> :
                    <>
                        <div className="h-screen bg-white">
                            <div className="flex justify-center items-center h-full">
                                <img className="h-16 w-16" src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif" alt="" />
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

export default ExpenseTracker
