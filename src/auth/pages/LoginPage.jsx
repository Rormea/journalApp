
import { useMemo } from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { Google, Padding } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { chekingAuthentication, startGoogleSingIn } from '../../store/auth/thunks'



export const LoginPage = () => {

    const { status } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const { email, password, onInputChange, formState } = useForm(
        {
            email: 'ejemplo@gmail.com',
            password: '123456',
        }
    );

    const isAuthenticating = useMemo(() => status === 'checking', [status])

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(chekingAuthentication());
    };

    const onGoogleSignIn = () => {
        console.log('onGoogleSignIn')
        dispatch(startGoogleSingIn());
    };

    return (
        <AuthLayout title='Login'>

            <form onSubmit={onSubmit}>
                <Grid container>
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
                        <Grid item xs={12} sm={6}  >
                            <Button type='submit' variant="contained" fullWidth disabled={isAuthenticating} >Login</Button>
                        </Grid>
                        <Grid item xs={12} sm={6}  >
                            <Button variant="contained" fullWidth onClick={onGoogleSignIn} disabled={isAuthenticating} >
                                <Google />
                                <Typography sx={{ ml: 1 }} >Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction='row' justifyContent='end' sx={{ mx: 4, mb: 1 }} >
                        <Link component={RouteLink} color='inherit' to='/auth/register' >
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
        // <Grid
        //     container
        //     spacing={0}
        //     direction="column"
        //     alignItems="center"
        //     justifyContent="center"
        //     sx={{ minHeight: '100vh', backgroundColor: 'primary.main', Padding: 4 }}

        // >
        //     <Grid item
        //         className="box-shadow"
        //         xs={3}
        //         sx={{ backgroundColor: 'white', padding: '3', borderRadius: 2 }}
        //     >
        //         <Typography variant="h5" sx={{ mb: 1 }}>
        //             Login
        //         </Typography>      
        //    </Grid >
        //</Grid >
    )
}
