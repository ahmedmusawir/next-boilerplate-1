import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import Head from 'next/head';
import PropTypes from 'prop-types';

import { fetchPost } from 'store/posts/actions';
import Store from 'store';
import { Router } from 'routes';
import NProgress from 'components/NProgress';
import Layout from 'components/layout/Layout';
import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import { H1, H2, H3, H4, H5, H6, P, A, Img } from 'components/general';

class Post extends Component {
  static getInitialProps({ query, store }) {
    const { id } = query;
    store.dispatch(fetchPost(id));

    return { id };
  }

  render() {
    const { post } = this.props;
    return (
      <Layout title={post.title}>
        <Head>{post && <title>{post.title}</title>}</Head>
        <NProgress />

        <Container>
          <Button color="info" onClick={() => Router.back()}>
            Back
          </Button>
          {post && (
            <div key={post.id}>
              {/* <h2>{post.title}</h2> */}
              <P>{post.body}</P>
            </div>
          )}
        </Container>
      </Layout>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({}).isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPost
    },
    dispatch
  );

const mapStateToProps = state => ({
  post: state.posts.currentPost
});

export default withRedux(Store, mapStateToProps, mapDispatchToProps)(
  withReduxSaga(Post)
);
