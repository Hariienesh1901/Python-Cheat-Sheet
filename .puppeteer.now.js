// Output installed Chromium path by chrome-aws-lambda
;(async () => console.log(await require('chrome-aws-lambda').executablePath))()
