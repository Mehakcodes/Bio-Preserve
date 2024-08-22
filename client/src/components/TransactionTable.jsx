const TransactionTable = (props) => {
    const data=props.data;
    return ( 
        <div className="transactionTable flex justify-center items-center mb-16 mt-4">
            
            <table className="border-separate border-spacing-y-[5px] border-spacing-x-[2px] mx-36 md:mx-20 ">
            <tr className="bg-black text-white">
                <th className="px-5 py-2 border-r-0 font-normal" >Date</th>
                <th className="px-5 py-2 border-r-0 font-normal" colSpan={2}>Narration</th>
                <th className="px-5 py-2 border-r-0 font-normal">Cheque/ Reference </th>
                <th className="px-5 py-2 border-r-0 font-normal">Value Date</th>
                <th className="px-5 py-2 border-r-0 font-normal">Withdrawal</th>
                <th className="px-5 py-2 border-r-0 font-normal">Deposit</th>
                <th className="px-5 py-2 border-r-0 font-normal">Closing Balance</th>
            </tr>
            {data.map((transaction,index)=>(
                <tr  className="bg-green-100  border-solid border-green-950 hover:bg-green-300 "key={index}>
                    <td className="px-5 py-1 ">{transaction.Date}</td>
                    <td className="px-5 py-1 " colSpan={2}>{transaction.Narration}</td>
                    <td className="px-5 py-1 ">{transaction.ch_ref}</td>
                    <td className="px-5 py-1 ">{transaction.ValueDate}</td>
                    <td className="px-5 py-1 ">{transaction. Widthdraw}</td>
                    <td className="px-5 py-1 ">{transaction.Deposit}</td>
                    <td className="px-5 py-1 ">{transaction.closingBalance}</td>
                </tr>
            ))}
            </table>
            
        </div>
     );
}
 
export default TransactionTable;