const validate =
    (schema ) =>
    async (req , res , next ) => {
        try {

            await schema.parseAsync(req.body);

            return next();
        } catch (err) {
            let message = err.message || '';
                message = err.flatten().fieldErrors;
            res.status(400).json({message: message || 'Error validating request body!!'});
        }
    };

module.exports=validate