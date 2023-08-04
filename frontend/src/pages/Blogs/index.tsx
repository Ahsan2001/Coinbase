import { useEffect, useState } from "react"
import Layout from "../../layout/index"
import { PageTitle } from "../../utils"
import { BlogsApi } from "../../api/internal";
import { PageLoader } from "../../components";
import { Box, Container, Grid } from "@mui/material";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

interface Blog {
  title: string;
  photo: string;
  author: string;
  content: string;
  _id: string;
}

const Blogs: React.FC = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog[]>([]);

  useEffect(() => {
    (async () => {
      const response: any = await BlogsApi()
      if (response.status === 200) {
        setBlog(response.data.blogs)
      }
    })()
    return () => {
      setBlog([])
    }
  }, []);

  if (blog.length === 0) {
    return (
      <Layout>
        <PageLoader />
      </Layout>
    )
  }

  return (
    <Layout>
      <PageTitle title="My Awesome App" />
      <section>
        <h1 className={style.heading_one}>Blogs Listing</h1>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            {blog.map((item, ind) => {
              return (
                <Grid key={ind} item xs={12} sm={12} md={6} lg={4} p={2}>
                  <Box className={style.blog__Box} onClick={ () =>  navigate(`/blog/${item._id}`)  }>
                    <img src={item.photo} alt={item.author} />
                    <h4>{item.title}</h4>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </section>
    </Layout>
  )
}

export default Blogs