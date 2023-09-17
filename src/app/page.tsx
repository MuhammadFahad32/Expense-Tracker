'use client'
import AddTransaction from '@/components/AddTransaction'
import Balance from '@/components/Balance'
import BalanceIncome from '@/components/BalanceIncome'
import ExpenseTracker from '@/components/ExpenseTracker'
import Header from '@/components/Header'
import History from '@/components/History'
import Image from 'next/image'
import { title } from 'process'
import { useState } from 'react'

export default function Home() {


  return (
    <main>
      <ExpenseTracker />
    </main>
  )
}
