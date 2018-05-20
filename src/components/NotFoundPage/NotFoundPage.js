import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';

const NotFoundPage = () => (
  <Layout>
    404!
    <Link to="/">Go home</Link>
  </Layout>
);

export default NotFoundPage;
