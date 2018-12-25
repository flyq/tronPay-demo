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
    this.contract = tronWeb.contract(contracts.abi, '41b16ddba4fc07bca3f6f0228660d8bd8284f8e385')
  }
}


const send = document.querySelector('#send')
const call = document.querySelector('#call')


send.addEventListener('click', () => {
  send.innerHTML = '发送中....'
  tronApi.contract.setGeneScienceAddress('41365e2e16871eb1718875cf1d4dff72cf364685e2').send({
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
  tronApi.contract.allOf(135).call().then(resp => {
    console.log(resp, parseInt(resp._hex, 16), 'toNumber')
 //   console.log(resp)
  })
})


