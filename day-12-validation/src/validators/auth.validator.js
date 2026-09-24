import {body, validationResult} from "express-validator"

export const registerValidation = [
        body("email")
        .exists().withMessage("Email is required")
        .isEmail().withMessage("Invalid Email Address"),

        body("phone")
        .exists().withMessage("Phone Number is required")
        .isMobilePhone("en-IN").withMessage("Invalid Phone Number"),

        body("password")
        .exists().withMessage("Password is required")
        .trim().isLength({min: 6}).withMessage("Password should be atleast of 6 characters"),
        (req, res, next) => {
            const errors = validationResult(req)

            if(!errors.isEmpty()){
                return res.status(400).json({
                    message: "Invalid request",
                    errors: errors.array()
                })
            }

            next()
        }
    ]