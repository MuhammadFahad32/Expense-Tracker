import AddTransaction from '@/components/AddTransaction'
import Balance from '@/components/Balance'
import BalanceIncome from '@/components/BalanceIncome'
import Header from '@/components/Header'
import History from '@/components/History'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Header />
      <div className="container">
        <Balance />
        <BalanceIncome />
        <History />
        <AddTransaction />
      </div>
    </main>
  )
}
