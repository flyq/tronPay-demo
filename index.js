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
    this.contract = tronWeb.contract(contracts.abi, '41640d100aa367deb818525c46fe02e7e13df5d693')
  }
}
// sale


const send = document.querySelector('#send')
const call = document.querySelector('#call')


send.addEventListener('click', () => {
  send.innerHTML = '发送中....'
  tronApi.contract.exchange(1,2,'EOS','CMU').send({
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
  tronApi.contract.owner().call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})

call_2.addEventListener('click', () => {
  tronApi.contract.paused().call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})


call_3.addEventListener('click', () => {
  tronApi.contract.getAuction(3).call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})

call_4.addEventListener('click', () => {
  tronApi.contract.getAuction(4).call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})

call_5.addEventListener('click', () => {
  tronApi.contract.getAuction(5).call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})

call_6.addEventListener('click', () => {
  tronApi.contract.getAuction(6).call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})

call_7.addEventListener('click', () => {
  tronApi.contract.getAuction(7).call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})

call_8.addEventListener('click', () => {
  tronApi.contract.getAuction(8).call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})

call_9.addEventListener('click', () => {
  tronApi.contract.getAuction(9).call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})

call_10.addEventListener('click', () => {
  tronApi.contract.getAuction(10).call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})

call_11.addEventListener('click', () => {
  tronApi.contract.getAuction(11).call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})

call_12.addEventListener('click', () => {
  tronApi.contract.getAuction(12).call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})

call_13.addEventListener('click', () => {
  tronApi.contract.getAuction(13).call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})

call_14.addEventListener('click', () => {
  tronApi.contract.getAuction(0).call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})

call_15.addEventListener('click', () => {
  tronApi.contract.getAuction(1).call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})

call_16.addEventListener('click', () => {
  tronApi.contract.getAuction(2).call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})

