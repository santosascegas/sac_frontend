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

  const [post, setPosts] = React.useState(null);

  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  return (
    <Layout pageTitle="Santos as Cegas | Blog" inicio="blog" neverStick={true}>
      <section className="blog" id="blog" role="form">
        <Container>
          <h2>Blog</h2>
          
          { error && (
            <p style={{ color: 'red' }}>{error}</p>
          ) }

          { !post && (
            <PostPicker posts={post} setPosts={setPosts} />
          ) }

        </Container>
      </section>
    </Layout>
  )
}

Blog.getInitialProps = async ctx => { //create new context
  try {
    const res = await axios.get('localhost:8080/post/');
    const posts = res;
    return {posts};
  } catch (error) {
    return {error};
  }
};


export default Blog;