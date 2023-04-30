import { Link as RouteLink } from 'react-router-dom'
// import { Google, Padding } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'


const formData = {
    email: 'ejemplo@gmail.com',
    password: '123456',
    displayName: 'Ronald Dev'
};

const formValidator = {

    email: [(value) => value.includes('@'), 'El correo debe llevar un @'],
    password: [(value) => value.length >= 6, 'El password debe llevar 6 caracteres'],
    displayName: [(value) => value.length >= 1, 'El nombre es requerido']
};


export const RegisterPage = () => {

    const {
        displayName,
        email,
        password,
        onInputChange,
        formState,

        formValid,
        displayNameValid,
        emailValid,
        passwordValid,

    } = useForm(formData, formValidator);

    console.log(displayNameValid)

    const onSubmit = (e) => {
        e.preventDefault
        console.log(formState)
    };


    return (
        <AuthLayout title='Regístrate'>
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item xs={12} sx={{ my: 2, mx: 4 }}>
                        <TextField label='Nombre'
                            type="text"
                            placeholder="Nombre Completo"
                            fullWidth
                            name='displayName'
                            value={displayName}
                            onChange={onInputChange}

                            error={!displayNameValid}
                            helperText={displayNameValid}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ my: 2, mx: 4 }}>
                        <TextField label='correo'
                            type="email"
                            placeholder="correo.gmail.com"
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid item xs={14} sx={{ my: 2, mx: 4 }} >
                        <TextField label='contraseña'
                            type="password"
                            placeholder="contraseña"
                            fullWidth
                            name='password'
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mx: 4 }}>
                        <Grid item xs={12} >
                            <Button
                                variant="contained"
                                fullWidth
                                type='submit'
                            >
                                Crear Cuenta
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end' sx={{ mx: 4, mb: 1 }} >
                        <Typography sx={{ mx: 1 }}>¿Ya tienes una cuenta?</Typography>
                        <Link component={RouteLink} color='inherit' to='/auth/login' sx={{ mx: 1 }} >
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
