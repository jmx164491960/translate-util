const config = {
    entry: 'src/APP',
    isEnableReg: /\*.*need to translate.*\*/,
    time: 40000 // 每次请求延迟的时间
};

module.exports = config;
exports = config;