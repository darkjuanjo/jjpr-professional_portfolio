export const validname = (name) => {
    const validation = !name || name.length < 3 ? false : true;
    return validation;
}

export const validemail = (email) => {
    // eslint-disable-next-line
    const email_expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validation = !email || !email_expression.test(email) ? false : true;
    return validation;
}

export const validphone = (phone) => {
    const phone_expression = /^(\+{1}\d{1,2})?[(. -\s]*\d{3}[). -\s]*\d{3}[. -\s]?\d{4}/;
    const validation = !phone || !phone_expression.test(phone) ? false: true;
    return validation;
}

export const validtext = (text) => {
    const validation = !text || text.length < 2 ? false : true;
    return validation
}