import { Link as RouteLink } from 'react-router-dom'
import { Google, Padding } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
    return (
        <AuthLayout title='Regístrate'>
            <form>
                <Grid container>
                    <Grid item xs={12} sx={{ my: 2, mx: 4 }}>
                        <TextField label='Nombre'
                            type="text"
                            placeholder="Nombre Completo"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ my: 2, mx: 4 }}>
                        <TextField label='correo'
                            type="email"
                            placeholder="correo.gmail.com"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={14} sx={{ my: 2, mx: 4 }} >
                        <TextField label='contraseña'
                            type="password"
                            placeholder="contraseña"
                            fullWidth
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mx: 4 }}>
                        <Grid item xs={12} >
                            <Button variant="contained" fullWidth >Crear Cuenta</Button>
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
