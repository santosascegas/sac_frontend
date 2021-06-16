import Layout from "../components/Common/Layout";
import Banner from "../components/Home/Banner";
import Feature from '../components/Home/Sobre';
import Experiencias from '../components/Home/Experiencias';

const Index = () => {
  return (
    <Layout pageTitle="Santos as Cegas | Página Inicial" inicio="bannerInicio" neverStick={true}>
      <Banner />
      <Feature/>
      <Experiencias />
    </Layout>
  )
}
export default Index;