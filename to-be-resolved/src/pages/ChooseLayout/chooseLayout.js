import React from 'react';
import Layout from '../../layout';
import styles from "./style.module.css";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { TabTitles } from "../../utils/tabTtile";
import { useSelector } from "react-redux";
import { store } from "../../redux/store";
import actions from "../../redux/actions";


const ChooseLayout = () => {
    TabTitles("Design");

    const { data, selected_design } = useSelector(s => s);
    const { setLayout } = actions;

    const handleLayoutSelection = (layout) => {
        store.dispatch(
            setLayout(layout)
        );
    }
    return (
        <Layout>
            <Box component="section" className={styles.MainStepsWrap}>
                <Grid container sx={{ width: '80%', margin: '0 auto' }} >
                    <Grid item lg={12} xs={12} align="center">
                        <Typography variant="h1">{data[selected_design].h1}</Typography>
                        <Typography variant="h2"><span>2</span>{data[selected_design].h2}</Typography>
                    </Grid>
                    <Grid container sx={{ width: '80%', margin: '0 auto' }}>
                        {data[selected_design].data.map((item, index) => {
                            return (
                                    <Grid key={index} item lg={data[selected_design].lg} md={data[selected_design].md} xs={data[selected_design].xs} className={styles.innerSizes}>
                                        <Link to="/create-collage">
                                            <img src={item.url} alt={item.id} onClick={() => handleLayoutSelection(item.id)} />
                                        </Link>
                                    </Grid>
                                )
                            }
                          )
                        }
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    )
}

export default ChooseLayout