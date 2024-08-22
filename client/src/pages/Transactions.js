import TransactionTable from "../components/TransactionTable";

const Transactions = () => {
    const transactionData=[
        {
            Date:'2021-10-10',
            Narration:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            ch_ref:'123456789', 
            ValueDate:'2021-10-10',
            Widthdraw:'1000',
            Deposit:'0',
            closingBalance:'1000'
        },
        {
            Date:'2021-10-10',
            Narration:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            ch_ref:'123456789',
            ValueDate:'2021-10-10',
            Widthdraw:'0',
            Deposit:'6200',
            closingBalance:'6200'
        },
        {
            Date:'2021-10-10',
            Narration:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            ch_ref:'123456789',
            ValueDate:'2021-10-10',
            Widthdraw:'1000',
            Deposit:'0',
            closingBalance:'1000'
        },
    ]
    return ( 
        <div className="transactions">
            <h1 className="pb-3 text-3xl font-bold text-center mt-8"   >Transactions</h1>
            <TransactionTable data={transactionData}/>
        </div>
     );
}
 
export default Transactions;