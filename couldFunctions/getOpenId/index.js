const cloud = require('wx-server-sdk')

could.init({
    env:'cloud1-4git8l8o868abd47',
})

exports.main = async (event,context) => {
    const wxContext =  cloud.getWXContext()

    return {
        openid: wxContext.OPENID,
        appid: wxContext.APPID,
        unionid: wxContext.UNIONID,
    }
}