const validatorsMap = {

    minLength: (value="", ruleValue) => {
        return value.length >= ruleValue;
    },

    maxLength: (value="", ruleValue) => {
        return value.length <= ruleValue;
    },

    minNumberCount: (value, ruleValue) => {
        let numbersCount = 0;
        for (var i in value) {
            if (+value[i] >= 0) {
                numbersCount++;
            }
        }
        return numbersCount >= ruleValue;
    },

    minUppercaseCount: (value, ruleValue) => {
        let uppercaseCount = 0;
        for (var i in value) {
            if (value[i].toLowerCase() != value[i]) {
                uppercaseCount++;
            }
        }
        return uppercaseCount >= ruleValue;
    },

    confirm: (value, ruleValue) => {
        return value == ruleValue;
    },

    email: (value, ruleValue) => {
        if (value.split("@")[1]) {
            if ((value.split("@")[0].length >= ruleValue &&
                ((value.split("@")[1]).split("."))[0].length >= 2 &&
                ((value.split("@")[1]).split("."))[1] )) {
                    if(((value.split("@")[1]).split("."))[1].length >= 2){
                        return true;
                    }
            }
        }
        return false;
    }

}


export const getValidator = (validatorName: string) => {
    const validator = validatorsMap[validatorName];
    if (!validator) {
        throw new Error("Invalid validator function");
    }
    return validator;

}

interface IValidationRule {
    validator: string;
    value: any;
    errorMessage: string;
}

export const validate = (value: any, rules: IValidationRule[]) => {
    const returnObject = {
        isValid: true,
        errorMessage: null
    }

    for (let i in rules) {
        var r = rules[i];
        if(r.validator != 'confirm'){
            if (!getValidator(r.validator)(value, r.value)) {
                return {
                    isValid: false,
                    errorMessage: r.errorMessage
                }
            }
        }
        else{
            if (!getValidator(r.validator)(value, r.value, )) {
                return {
                    isValid: false,
                    errorMessage: r.errorMessage
                }
            }
        }
    }

    return returnObject;

}
