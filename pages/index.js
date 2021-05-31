import Layout from "../components/Common/Layout";
import Banner from "../components/Home/Banner";
import Feature from '../components/Home/Sobre';
import Service from '../components/Home/Service';
import About from '../components/Home/About';

const Index = () => {
  return (
    <Layout pageTitle="Home">
      <Banner />
      <Feature/>
      <Service />
      <About />
    </Layout>
  )
}
export default Index;