const SocksProxyAgent = require('socks-proxy-agent')
const axios = require('axios').create({
  httpAgent: new SocksProxyAgent('socks5://127.0.0.1:9150'),
  httpsAgent:new SocksProxyAgent('socks5://127.0.0.1:9150')
})

axios.get('https://tordetector.cf/json')
.then(res => console.log(res.data))
.catch(console.error)