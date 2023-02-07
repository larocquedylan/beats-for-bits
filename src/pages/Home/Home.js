import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
// import { isCompositeComponent } from "react-dom/test-utils";
import TransactionCard from "../../components/TransactionCard/TransactionCard";

function Home(){
    const [difficulty, setDifficulty] = useState(null);
    const [btcPrice, setBtcPrice] = useState(null);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [walletDetails, setWalletDetails] = useState({});
    const [walletLoaded, setWalletLoaded] = useState(false);
    const [tx, setTx] = useState([]);
    const [txLoaded, setTxLoaded] = useState(false);

    // get bitcoin price
    const getBtcPrice = () => {
      const btcEndpoint = "https://api.coinbase.com/v2/prices/BTC-CAD/spot";
      axios.get(btcEndpoint)
        .then(({ data }) => {
          setBtcPrice(data);
          setDataLoaded(true);
        })
        .catch(error => {
          console.log(error);
        });
    }

    // get difficulty adjustment
    const getDifficulty = async () => {
      const miningEnpoint = "https://mempool.space/api/v1/difficulty-adjustment";
      try {
        const {data} = await axios.get(miningEnpoint);
        setDifficulty(data);
      } catch (error) {
        console.log(error);
      }
    }

    // get wallet info
    // const getWalletDetails = async () => {
    //   const walletEndpoint = "https://legend.lnbits.com/api/v1/wallet";
    //   try {
    //     const {data} = await axios.get(walletEndpoint, { 
    //       headers: {
    //         'X-api-key': '0dc7444ff5fc446aa53949f96adb7dc1'
    //       }
    //     });
    //     console.log("1");
    //     setWalletDetails(data);
    //     setWalletLoaded(true);
    //   } catch(error){
    //     console.log(error);
    //   }
    // }
    const getWalletDetails = async () => {
      const backend = "http://localhost:8080/wallet";
      try {
        const {data} = await axios.get(backend);
        console.log(data);
        console.log("1");
        setWalletDetails(data);
        setWalletLoaded(true);
      } catch(error){
        console.log(error);
      }
    }

    // const payload = {"out": false, "amount": 123, "memo": "hesdlo", "expiry": 12, "unit": "hello", "webhook": "localhost", "internal": true}


    // const getTransactions = async () => {
    //   const transactionsEndpoint = 'https://legend.lnbits.com/api/v1/payments';
    //   const headers = {headers: {
    //     'X-api-key': '0dc7444ff5fc446aa53949f96adb7dc1', 'Content-Type': 'application/json'
    //   }};
    //   try {
    //     const { data } = await axios
    //     .post(transactionsEndpoint, headers);
    //     console.log(data)
    //     setTx(data);
    //     setTxLoaded(true);
    //   } catch(error) {
    //     console.log(error);
    //   }
    // }
    async function getData(url, apikey, content_type) {
      let headers = {};
      if (apikey) {
        headers["X-Api-Key"] = apikey;
      }
      if (content_type) {
        headers["Content-Type"] = content_type;
      }
    
      const response = await axios.get(url, { headers });
      return response.data;
    }

    async function getLnbitsTransactions() {
      let data = await getData(`https://legend.lnbits.com/api/v1/payments`, 
      `0dc7444ff5fc446aa53949f96adb7dc1`,
      `application/json` );
      setTx(data);
      setTxLoaded(true);
      console.log(data);
      console.log(tx);
      return data;
    }

    async function downloadSong() {
      const endpoint = "http://localhost:8080/songs/122G2.wav";
      try {
        let data = await axios(endpoint);
        console.log(data);
        console.log("yes!!!");
      } catch(error){
        console.log(error);
        console.log(2);
      }
    }

  

    // const payload = {
    //   out: false,
    //   amount: 123,
    //   memo: 'hesdlo',
    //   expiry: 12,
    //   unit: 'hello',
    //   webhook: 'localhost',
    //   internal: true
    // };
    
    // const headers = {
    //   'X-Api-Key': '1',
    //   'Content-Type': 'application/json'
    // };
    
    // axios
    //   .post('https://legend.lnbits.com/api/v1/payments', payload, { headers })
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
      
    useEffect(() => {
      getBtcPrice();
      getDifficulty();
      getWalletDetails();
      // getTransactions();
      getLnbitsTransactions();
      console.log(tx);
      
      // axios
      // .post('https://legend.lnbits.com/api/v1/payments', payload, { headers })
      // .then(res => {
      //   console.log(res.data);
      // })
      // .catch(error => {
      //   console.log(error);
      // });

      

    }, []);
    
    if (!dataLoaded && !walletLoaded && !txLoaded) return <div>Loading...</div>;

    const txItem = tx.map((x) => (
      <TransactionCard 
        key={x.checking_id}
        x={x}
      />
    ));

    const dollarValue = (btcPrice.data.amount) * (walletDetails.balance) / 1000000000;


  
    return (
      <>
      <Header />
      <button onClick={downloadSong} className="button"> Download!</button>
      <a href="http://localhost:8080/songs/122G2.wav"> downloadsong </a>
        <h1> BTC Price</h1>
        <h1>${btcPrice.data.amount}</h1>

        <h2>Wallet Name: {walletDetails.name}</h2>
        <div><h4> Wallet Balance:</h4>
        <h5>{walletDetails.balance} </h5> 
        <h5> $ {dollarValue} Canadian</h5>
        </div>
        
       <div>
         {txItem}

       </div> 

      </>
    )
  };
  
  export default Home;