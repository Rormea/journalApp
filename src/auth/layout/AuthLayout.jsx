import { Button, Grid, Link, TextField, Typography } from "@mui/material"



export const AuthLayout = ({ children, title = '' }) => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: 'primary.main', Padding: 4 }}

        >
            <Grid item
                className="box-shadow"
                xs={3}
                sx={{
                    width: { md: 450 },
                    backgroundColor: 'white',
                    padding: '3',
                    mx: 4,
                    borderRadius: 2
                }}
            >
                <Typography variant="h5" sx={{ my: 1, ml: 4 }}>{title}</Typography>

                {/* children */}
                {children}

            </Grid>
        </Grid>
    )
};
