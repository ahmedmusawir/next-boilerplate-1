import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import Head from 'next/head';
import PropTypes from 'prop-types';
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

import Store from 'store';
import { fetchPosts } from 'store/posts/actions';
import { Link } from 'routes';
import NProgress from 'components/NProgress';

class PostsIndex extends Component {
  static getInitialProps({ store }) {
    store.dispatch(fetchPosts());
  }
  HandleClick = e => {
    this.props.fetchPostsAction();
  };
  render() {
    const { posts } = this.props;
    return (
      <Layout>
        <Head>
          <title>Posts Index</title>
        </Head>
        <NProgress />

        <Container>
          <H1>Posts with Redux and Saga</H1>
          <hr />
          <Button color="success" onClick={this.HandleClick}>
            Refresh
          </Button>
          <ListGroup>
            {posts.length > 0 &&
              posts.map(post => (
                <ListGroupItem key={post.id}>
                  <H2>
                    <Link prefetch route="post" params={{ id: post.id }}>
                      <a>{post.title}</a>
                    </Link>
                  </H2>
                  <p>{post.body}</p>
                </ListGroupItem>
              ))}
          </ListGroup>
        </Container>
      </Layout>
    );
  }
}

PostsIndex.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchPostsAction: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPostsAction: fetchPosts
    },
    dispatch
  );

export default withRedux(Store, mapStateToProps, mapDispatchToProps)(
  withReduxSaga(PostsIndex)
);
