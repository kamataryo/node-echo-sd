const echoSd = require('./')

echoSd('--tanzaku', '唐揚げ食べたい')
  .then(data => {
    console.log(data)
    if (!data.includes('唐') || !data.includes('揚')) {
      console.error('正常系エラー')
      process.exit(1)
    } else {
      console.log('正常系OK')
    }
  })
  .catch(err => {
    console.error(err)
  })

echoSd('--hogehogehoge')
  .then(data => {
    console.error('異常系エラー')
    process.exit(1)
  })
  .catch(err => {
    console.log('異常系OK')
  })
