export const validate = (schema) => {
    return (req, res, next) => {
        try {
            let data = {};
            if (req.file) {
                data = {
                    image: req.file,
                    ...req.body,
                    ...req.params,
                    ...req.query,
                }
            } else if (req.files) {
                data = {
                    ...req.files,
                    ...req.body,
                    ...req.params,
                    ...req.query,
                }

            }else{
                data = {
                    ...req.body,
                    ...req.params,
                    ...req.query,
                }
            }

            const { error: errors } = schema.validate(data, {
                abortEarly: false,
                errors: {
                    wrap: {
                        label: ""
                    }
                }
            });

            if (errors) {
                const formatted = errors.details.map((detail) => ({
                    field: detail.path.join("."),
                    message: detail.message
                }));

                return res.status(400).json({
                    status: "validation error",
                    errors: formatted
                });
            }

            next();
        } catch (error) {
            return res.status(500).json({
                status: "validation failed",
                message: "something went wrong",
                error: error.message
            });
        }
    };
};
