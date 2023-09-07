import AddTransaction from "./AddTransaction";
import Balance from "./Balance"
import Header from "./Header";
import Histery from "./History";
import Expense from "./Income_expense";

const Container = () => {
    return (
        <>
        <Header />
            <div className="container">
                <Balance />
                <Expense />
                <Histery />
                <AddTransaction/>
            </div>
        </>

    )
}
export default Container;