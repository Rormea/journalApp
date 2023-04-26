
import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, Typography, TextField } from "@mui/material"
import { ImageGalery } from "../components"



export const NoteView = () => {
    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }} >
            <Grid Item>
                <Typography fontSize={39} fontWeight='light' >28 de agosto, 2023</Typography>
            </Grid>
            <Grid Item >
                <Button color='primary' sx={{ padding: 2 }} >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    fullWidth
                    type="text"
                    placeholder='Ingrese Título'
                    label="Título"
                    variant="filled"
                    sx={{ border: 'none', mb: 1 }}
                />
                <TextField
                    fullWidth
                    multiline
                    variant="filled"
                    type="text"
                    placeholder='¿Qué sucedió el día hoy?'
                    minRows={5}
                />
            </Grid>

            {/* galeria de images */}
            <ImageGalery />
        </Grid>
    )
}
