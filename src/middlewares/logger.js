const logger = (handler) => {
    return (req, res) => {
        //middleware code goes before you return the handler
        console.log("the incoming request headers are: ", req.headers)
        return handler(req, res)
    }
}

module.exports = logger