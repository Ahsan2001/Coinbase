import Layout from "../../layout/index"
import { PageTitle } from "../../utils";

const Home:React.FC = () => {
  return (
    <Layout>
       <PageTitle title="My Awesome App" />
        <div>home</div>
    </Layout>
  )
}

export default Home