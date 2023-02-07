

function TransactionCard({x}){

    console.log(x);
    // const txItem = tx.map((x) => (
    //     <TranscactionCard 
    //       key={tx.checking_id}
    //       transaction={tx}
    //     />
    //   ));
    return (
        <div>
        <h4> Transactions </h4>
          <p> Amount: {x.amount}</p>
          <p> from: {x.wallet_id}</p>
          <p> to: {x.checking_id}</p>
          <p> payment hash: {x.payment_hash}</p>
        </div>
    );
};

export default TransactionCard;