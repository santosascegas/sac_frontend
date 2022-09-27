import Layout from "../components/Common/Layout";
import Banner from "../components/Home/Banner";
import Feature from '../components/Home/Sobre';
import Experiencias from '../components/Home/Experiencias';
import axios from "axios";

const Index = ( {posts} ) => {
  return (
    <Layout pageTitle="Santos as Cegas | Página Inicial" inicio="bannerInicio" neverStick={true}>
      <Banner />
      <Feature/>
      <Experiencias posts={posts}/>
    </Layout>
  )
}

export const getServerSideProps = async ctx => {
  const posts = await axios.get(`${process.env.URL_BACKEND}/post/`)
  return { props: { posts: posts.data } }
}

export default Index;