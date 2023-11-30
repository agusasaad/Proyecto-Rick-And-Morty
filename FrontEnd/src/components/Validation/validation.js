const validation = (userData) => {
    const errors = {};
    const regexEmail = /^(?=.{1,35}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexPassword = /^(?=.*\d)/;
    const regexPasswordLength = /^.{6,10}$/;

    if (!regexEmail.test(userData.email)) {
        errors.email = 'El nombre de usuario tiene que ser un email';
    }

    if (!userData.email) {
        errors.email = 'El campo de email no puede estar vacio';
    }

    if (!regexPassword.test(userData.password)) {
        errors.password = 'La contraseña tiene que tener al menos un numero';
    }

    if (!regexPasswordLength.test(userData.password)) {
        errors.password = 'La contraseña tiene que tener una longitud maxima de entre 6 y 10 caracteres';
    }

    return errors
}

export default validation