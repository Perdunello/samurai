const validators = {
    required(value) {
        return value ? undefined : 'Field is required'
    },
    maxlenght(max) {
        return (value) => {
            return value ? (value.length < max ? undefined : `Max lenght is ${max}`) : 'Field is required'
        }
    }
}

export default validators
