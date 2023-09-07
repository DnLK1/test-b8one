import React from 'react';
import Products from '../data/products';
import ProductList from '../components/ProductList';
import Layout from '../components/Layout';

const Home: React.FC = () => {

  return (
    <Layout>
      <ProductList products={Products} />
    </Layout>
  );
};

export default Home;
