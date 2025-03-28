const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export {asyncHandler}


// this is the process of higer order function discribe in simple way  [this is other way]

// const asyncHandler = () => {}
// const asyncHandler = (fn) => () => {}
// const asyncHandler = (fn) => async () => {}

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).jsan({
//             success: false,
//             message: err.message
//         })    
//     }
// } 