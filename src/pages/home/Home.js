import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Carousel } from 'antd';
import { switchNavMenu } from '../../redux/actions/nav';
import './style.less';

class Home extends Component {
  componentDidMount() {
    this.props.switchNavMenu('1');
  }
  cardChange = (a, b, c) => {
    console.log(a, b, c);
  };
  render() {
    return (
      <div className="home-content">
        <Carousel afterChange={this.cardChange}>
          <div className="cardItem">
            <img
              src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png"
              title="百度搜索"
            />
          </div>
          <div className="cardItem">
            <img
              src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=d7924a4e8013632715edc535a9b4c7d1/838ba61ea8d3fd1f877974a83a4e251f95ca5f34.jpg"
              title="新浪微博"
            />
          </div>
          <div className="cardItem">
            <img
              src="https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/20d5c57e839fa986939e2e6aec94728b_222_222.jpg"
              title="京东"
            />
          </div>
          <div className="cardItem">
            <img
              src="https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=ce79769a30f33a879e6d071cfe677705/34fae6cd7b899e5114f3cfbe48a7d933c8950d1e.jpg"
              title="QQ"
            />
          </div>
          <div className="cardItem">
            <img
              src="https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D250/sign=63f3c5378fd6277ff612353d183a1f63/500fd9f9d72a6059c1dfb0962034349b023bba6b.jpg"
              title="九州·海上牧云记"
            />
          </div>
        </Carousel>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  homeListData: state.homeQuery.homeListData,
  loading: state.homeQuery.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      switchNavMenu
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
