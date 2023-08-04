import Layout from "../../layout";
import { PageTitle } from "../../utils";
import style from "./style.module.css";
import { Button, Container, Grid } from "@mui/material";
import { useState } from "react";
import { SubmitBlogApi } from "../../api/internal";
import { useSelector } from "react-redux";


const SubmitBlog: React.FC = () => {


    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [photo, setPhoto] = useState("");
  
    const author = useSelector((state: any) => state.user._id);
  
    const getPhoto = (e: any) => {
      const file = e.target.files[0];
      const reader : any = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
    };
  
    const submitHandler = async () => {
      const data = {
        author,
        title,
        content,
        photo,
      };
  
      const response: any = await SubmitBlogApi(data);
  
      if (response.status === 201) {
         console.log("Chal gaya")
      }
    };

    return (
        <Layout>
            <section className={style.auth__login}>
                <h4>Post a Blog :) </h4>
                <PageTitle title="Post a Blog" />

                <Container maxWidth="xl">
                    <Grid container>
                        <Grid item lg={6} md={6} xs={12} sx={{ mx: 'auto' }}>
                        <form onSubmit={submitHandler}>
                            <div className={style.input__boxess}>
                                <label htmlFor="title">Title</label>
                                <input
                                    type='text'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <div className={style.input__boxess}>
                                <label htmlFor="content">Content</label>
                                <textarea
                                    id='content'
                                    placeholder="your content goes here..."
                                    maxLength={400}
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                            </div>



                            <div className={style.input__boxess}>
                            <p>Choose a photo</p>
                                <input
                                type="file"
                                name="photo"
                                id="photo"
                                accept="image/jpg, image/jpeg, image/png"
                                onChange={getPhoto}
                                />
                                {photo !== "" ? <img src={photo} width={150} height={150} /> : ""}
                                                    </div>

                            <Button variant="outlined"  onClick={submitHandler} >
                               Submit Blog
                            </Button>
                        </form> 
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </Layout>
    )
}

export default SubmitBlog