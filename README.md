# 波场合约和前端交互


## 安装谷歌TronPay钱包

```javascript
// chrome网上应用店
https://chrome.google.com/webstore/detail/tronpay/gjdneabihbmcpobmfhcnljaojmgoihfk

// github
https://github.com/tronpay/TronPay-Extension
```

## 全局声明

```javascript
const tronWeb = window.tronWeb
const contract = tronWeb.contract(合约abi, 合约哈希)
```

## call合约消息

```javascript
contract.getuint256(1).call().then(resp => {
  console.log(resp)
})

// getuint256 为合约里面的函数 后面的1 为给合约函数传参,参数是1
// 成功就会打印
```

## send合约消息

```javascript
contract.teststore().send({
  shouldPollResponse: true,
  callValue: 2000000000,
}).then(res => {
  console.log('success', res)
})

// teststore 为合约里面的函数,如果有参数则传递在teststore函数里面就行
// 成功就会打印success

// shouldPollResponse 如果设置为true，则会等到区块链节点确认后在返回消息
// callValue 如果需要用户支付钱 则设置 数量，如果不需要支付钱则是0,单位为SUN
// 1000000 SUN = 1 TRX
```

## 调用不同合约

如果要调用不同合约的函数。需要修改三个地方：
1. 更改`index.js`里面的合约地址。即更改下面的`41F8ADE63F6294B1E3256C469C05A7E08AE6F1532C`参数。需要将base58地址格式转换称Hex。   
可以参考：
https://tronscan.org/#/tools/tron-convert-tool

```javascript
const tronApi = {
  tronWeb: false,
  contract: false,
  setTronWeb (tronWeb) {
    this.tronWeb = tronWeb;
    this.contract = tronWeb.contract(contracts.abi, '41F8ADE63F6294B1E3256C469C05A7E08AE6F1532C')
  }
}
```
2. 更改`Test.json`里面的ABI。改为你需要调用的合约的ABI。   
token合约的abi在这里：https://github.com/flyq/tron_trc20_abi/blob/master/build/contracts/ERC20.json
```javascript
   "abi": [
   ],
```
3. 更改`index.js`里面要调用的函数
```javascript
tronApi.contract.transfer('4110B740908FC6D1E08B0A550463677E4E8F52EF2F',100000).send({
```