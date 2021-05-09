
async function getChinpokomons(req, res, next){
  res.send('getChinpokomons')
}

async function createChinpokomon(req, res, next){
  console.log(req)
}

module.exports = { getChinpokomons, createChinpokomon }