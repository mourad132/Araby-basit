function errHandler(err, req, res, next){
    res.send({
        status: err.status || 500,
        message: err.message || "Oops! Something Went Wrong!",
    })
}

export default errHandler