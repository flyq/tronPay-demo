// 环境检查 
const waitForGlobal = async () => {
  if (window.tronWeb) {
    const tronWeb = window.tronWeb
    const nodes = await tronWeb.isConnected()
    const connected = !Object.entries(nodes).map(([key, value]) => {
      if (!value) {
        console.error(`Error: ${key} is not connected`)
      }
      return value
    }).includes(false)
    if (connected) {
      const tronWeb = tronPay.tronWeb || tronWeb
      tronApi.setTronWeb(tronWeb)
    } else {
      console.error('Error: TRON node is not connected')
      console.error('wait for tronLink')
      setTimeout(async () => {
        await waitForGlobal()
      }, 100)
    }
  } else {
    console.error('wait for tronLink')
    setTimeout(async () => {
      await waitForGlobal()
    }, 100)
  }
}

waitForGlobal().then()


const tronApi = {
  tronWeb: false,
  contract: false,
  setTronWeb (tronWeb) {
    this.tronWeb = tronWeb;
    this.contract = tronWeb.contract(contracts.abi, '415bd21658fa76a733f23d798dc394081d93ded24d')
  }
}


const send = document.querySelector('#send')
const call = document.querySelector('#call')


send.addEventListener('click', () => {
  send.innerHTML = '发送中....'
  tronApi.contract.init(1,10,1000000000).send({
    shouldPollResponse: true,
    callValue: 0,
  }).then(res => {
    send.innerHTML = '已发送'
    console.log('success', res)
  }).catch(err => {
    send.innerHTML = '已发送'
    console.log('error', err)
  })
})

call.addEventListener('click', () => {
  tronApi.contract.totalSupply().call().then(resp => {
    console.log(resp, parseInt(resp._hex, 16), 'toNumber')
 //   console.log(resp)
  })
})


