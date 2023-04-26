import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'



export const NothingSelecterView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
        >
            <Grid Item xs={12} >
                <StarOutline sx={{ fontSize: 100, color: 'whitesmoke' }} />
            </Grid>
            <Grid Item xs={12} >
                <Typography color='whitesmoke' variant='h5' >Selecciona o crea una nota</Typography>
            </Grid>
        </Grid>
    )
}
