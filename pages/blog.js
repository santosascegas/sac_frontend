import React from 'react';
import axios from 'axios';

import Layout from "../components/Common/Layout";
import PostPicker from '../components/Blog/postPicker';

import { FaCheckCircle } from 'react-icons/fa';

import { 
  Container, 
  Spinner
} from "reactstrap";


const Blog = ({ posts }) => {

  const [post, setPost] = React.useState(null);

  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  return (
    <Layout pageTitle="Santos as Cegas | Blog" inicio="blog" neverStick={true}>
      <section className="blog" id="blog" role="form">
        <Container>
          <h2 className='sac_blog_title'>Blog</h2>
          
          { error && (
            <p style={{ color: 'red' }}>{error}</p>
          ) }

          { !post && (
            <PostPicker posts={posts} setPost={setPost} />
          ) }

        </Container>
      </section>
    </Layout>
  )
}

Blog.getInitialProps = async ctx => {
  try {
    const res = await axios.get(`${process.env.URL_BACKEND}/post/`);
    const posts = res.data;
    return { posts };
  } catch (error) {
    return { error };
  }
};


export default Blog;