import { useState } from 'react'

const Navbar = () => {
  const [accountAddress, setAccountAddress] = useState("");

  const connectButtonOnClick = () => {
    console.log(window);
    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      getAccount().then((response) => {
        setAccountAddress(response);
      });
    } else {
      console.log("error");
    }
  };
  return ( 
      <div>
          <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,90 900i" rel="stylesheet" />
          <link rel="stylesheet" href="../index.css" />
          <link rel="icon" type="image/x-icon" href="src\components\assets\FD.ico" />
          <body className="fixed-top flex justify-between bg-gradient-to-r from-cyan-200 to-white-400 opacity-80 space-x-4">
           <div className="flex text 2xl cursor-pointer px-3 py-2 font-bold italic hover:not-italic">
             <img className="box-content h-6 w-6 mr-5" src="src\components\assets\FD.ico" alt="" />
             <a href="Freelancer DApp">It's Time to trust each other!</a>
           </div>
           <nav className="flex justify-center space-x-3 ">
               <a href="#contact" className="font- px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-200 hover:text-slate-900">Contact</a>
               <a href="#about" className="font- px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-200 hover:text-slate-900">About</a>
                <a href="#start" className="font- px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-200 hover:text-slate-900">Start</a>
                <a href="#home" className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-200 hover:text-slate-900">Home</a>
                <button  onClick={connectButtonOnClick} >{!!accountAddress ? accountAddress : <span className="is-link font-bold px-3 py-2 text-slate-700 rounded-full bg-cyan-200 hover:bg-slate-700 hover:text-slate-200 font-mono">CONNECT WALLET</span>}</button>
            </nav>
         </body>
     </div>
  );
}
 
export default Navbar;
async function getAccount() {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = accounts[0];

  return account;
}