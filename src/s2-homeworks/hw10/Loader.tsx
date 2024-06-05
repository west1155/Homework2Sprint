import s from './Loader.module.css'
import {Box, CircularProgress} from "@mui/material";

export const Loader = () => <div className={s.loader}>
    <Box sx={{ display: 'flex' }}>
        <CircularProgress />
    </Box>
</div>
