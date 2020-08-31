const username = (username) => {
    // check if the value is empty
    if (username.length !== 0) {
        // only allow numbers and digits and _ and -
        let regex = /^[a-zA-Z0-9_-]+$/;

        const valid = username.match(regex);

        if (valid)
        {
            // do not allow number on the first character
            if(!isNaN(username.charAt(0)))
            {
                let error =
                {
                    hasError: true,
                    message: 'The first letter must not be a number.'
                }
                return error;
            }
            else
            {
                let error = {
                    hasError: false,
                    message: 'No Errors.'
                }
                return error;
            }
        } else
        {
            let error = {
                hasError: true,
                message: 'Illegal characters detected.'
            }
            return error;
        }
    }
    else
    {
        let error = {
            hasError: true,
            message: 'The value must not be empty.'
        };
        return error;
    }
}


const text = (text) =>
{
    // check if text is shorter than 100 characters
    if(text.length === 0){
        let error = {
            hasError: true,
            message: 'The value must not be empty.'
        };
        return error;
    }
    if (text.length <= 100)
    {
        let regex = /^[a-zA-Z0-9 ,.!?_-]+$/;

        const valid = text.match(regex);

        // validate only text and numbers
        if (valid)
        {
            let error = {
                hasError: false,
                message: 'No Error.'
            };
            return error;
        } else
        {
            let error = {
                hasError: true,
                message: 'The value can only contain phrases of language.'
            };
            return error;
        }
    } else {
        let error = {
            hasError: true,
            message: 'The value must be shorter than 100 characters.'
        };
        return error;
    }

}

const number = (number) => {

    let regex = /^[0-9]+$/;
    const valid = number.match(regex);

    if (valid)
    {
        let error = {
            hasError: false,
            message: 'No Errors.'
        }
        return error;
    } else {

        let error = {
            hasError: true,
            message: 'The value must be a number.'
        };
        return error;
    }
}

const string = (string) => {
    if (string.length > 3)
    {
        let error = {
            hasError: true,
            message: 'Not a valid currency.'
        }
        return error;
    } else {
        let error = {
            hasError: false,
            message: 'No Errors.'
        }
        return error;
    }
}

const validators = {
    username,
    text,
    number,
    string
}

export default validators;
