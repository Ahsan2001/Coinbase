import { Container, Grid } from "@mui/material";
import style from "./style.module.css"

const Footer: React.FC = () => {
    return (
        <Container maxWidth="xl">
            <Grid container>
                <Grid item xs={12}>
                    <footer className={style.footer__line}>
                      <p> Personal Blog Web App Developed By Ahsan Shaikh   </p>
                    </footer>
                </Grid>
            </Grid>
        </Container>
    )

}


export default Footer;