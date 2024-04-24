// import { AnyZodObject, ZodError } from 'zod';

const validate =
    (schema ) =>
    async (req , res , next ) => {
        try {
            //  * await schema.parseAsync({
            //  *   body: req.body,
            //  *  query: req.query,
            //  *   params: req.params,
            //  * });
            await schema.parseAsync(req.body);

            return next();
        } catch (err) {
            let message = err.message || '';
            // if (err instanceof ZodError) {
                message = err.flatten().fieldErrors;
            // }

            // return next(
            //     new AppError({
            //         message: message || 'Error validating request body!!',
            //         statusCode: err.statusCode || 400,
            //         stack: err.stack || '',
            //     })
            // );

            res.status(400).json({message: message || 'Error validating request body!!'});
        }
    };

// export default validate;

module.exports=validate