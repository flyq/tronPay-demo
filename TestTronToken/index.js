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
    this.contract = tronWeb.contract(contracts.abi, '41C44384B89791446CA9582D017129B74168B7C132') /// tron test token
  }
}
// sale


const send = document.querySelector('#send')
const call = document.querySelector('#call')


send_01.addEventListener('click', () => {
  send_01.innerHTML = '发送中....'
  tronApi.contract.transferOwnership('41D4E1AF09E3937460BD19ABBC0E68709AE4085C64').send({
    shouldPollResponse: true,
    callValue: 0,
  }).then(res => {
    send_01.innerHTML = '已发送'
    console.log('success', res)
  }).catch(err => {
    send_01.innerHTML = '已发送'
    console.log('error', err)
  })
})


send_02.addEventListener('click', () => {
  send_02.innerHTML = '发送中....'
  tronApi.contract.addAdmin('41D4E1AF09E3937460BD19ABBC0E68709AE4085C64').send({
    shouldPollResponse: true,
    callValue: 0,
  }).then(res => {
    send_02.innerHTML = '已发送'
    console.log('success', res)
  }).catch(err => {
    send_02.innerHTML = '已发送'
    console.log('error', err)
  })
})

send_03.addEventListener('click', () => {
  send_03.innerHTML = '发送中....'
  tronApi.contract.transfer('41D4E1AF09E3937460BD19ABBC0E68709AE4085C64',50000000000000).send({
    shouldPollResponse: true,
    callValue: 0,
  }).then(res => {
    send_03.innerHTML = '已发送'
    console.log('success', res)
  }).catch(err => {
    send_03.innerHTML = '已发送'
    console.log('error', err)
  })
})




call.addEventListener('click', () => {
  tronApi.contract.paused().call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})

call_2.addEventListener('click', () => {
  tronApi.contract.totalSupply().call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})


call_3.addEventListener('click', () => {
  tronApi.contract.admins('410948FA8C9DAB10C0DC7A5D7A0C550E99DAFF4D41').call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})

call_4.addEventListener('click', () => {
  tronApi.contract.admins('41D4E1AF09E3937460BD19ABBC0E68709AE4085C64').call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})

call_5.addEventListener('click', () => {
  tronApi.contract.balanceOf('41D4E1AF09E3937460BD19ABBC0E68709AE4085C64').call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})

call_6.addEventListener('click', () => {
  tronApi.contract.balanceOf('410948FA8C9DAB10C0DC7A5D7A0C550E99DAFF4D41').call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})

call_7.addEventListener('click', () => {
  tronApi.contract.owner().call().then(resp => {
    console.log(resp, 'toNumber')
 //   console.log(resp)
  })
})

call_8.addEventListener('click', () => {
  tronApi.contract.newOwner().call().then(resp => {
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

