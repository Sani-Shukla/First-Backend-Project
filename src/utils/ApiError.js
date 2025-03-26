class ApiError extends Error {
    constructor(
        statuscode,
        message = "Something went worng",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statuscode = statuscode
        this.data = null
        this.message = message
        this.succeess = false
        this.error = errors

        if(statck) {
            this.stack = statck
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}