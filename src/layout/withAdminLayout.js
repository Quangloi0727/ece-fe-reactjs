/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import UilEllipsisV from '@iconscout/react-unicons/icons/uil-ellipsis-v';
import { Col, Layout, Row } from 'antd';
import propTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { LayoutContainer, SmallScreenAuthInfo, TopMenuSearch } from './Style';
import TopMenu from './TopMenu';
import AuthInfo from '../components/utilities/auth-info/info';

const { Header, Content } = Layout;

const ThemeLayout = (WrappedComponent) => {
  class LayoutComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        collapsed: false,
        hide: true,
        searchHide: true,
        customizerAction: true,
        activeSearch: false,
      };
      this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
      window.addEventListener('resize', this.updateDimensions);
      this.updateDimensions();
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions() {
      this.setState({
        collapsed: window.innerWidth <= 1200 && true,
      });
    }

    render() {
      const { collapsed, hide } = this.state;
      const { layoutMode, rtl, topMenu } = this.props;

      const toggleCollapsed = () => {
        this.setState({
          collapsed: !collapsed,
        });
      };

      const onShowHide = () => {
        this.setState({
          hide: !hide,
          searchHide: true,
        });
      };

      return (
        <LayoutContainer>
          <Layout className="layout">
            <Header
              style={{
                position: 'fixed',
                width: '100%',
                top: 0,
                [!rtl ? 'left' : 'right']: 0,
              }}
            >
              <div className="ninjadash-header-content d-flex">
                <div className="ninjadash-header-content__left">
                  <div className="navbar-brand align-cener-v">
                    <Link
                      className={topMenu && window.innerWidth > 991 ? 'ninjadash-logo top-menu' : 'ninjadash-logo'}
                      to="/list-email"
                    >
                      <img
                        src={
                          layoutMode === 'lightMode'
                            ? require(`../static/img/logo_dark.svg`).default
                            : require(`../static/img/logo_white.svg`).default
                        }
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
                <div className="ninjadash-header-content__right d-flex">
                  <div className="ninjadash-navbar-menu d-flex align-center-v">
                    {topMenu && window.innerWidth > 991 ? <TopMenu /> : null}
                  </div>
                  <div className="ninjadash-nav-actions">
                    {topMenu && window.innerWidth > 991 ? (
                      <TopMenuSearch>
                        <div className="top-right-wrap d-flex">
                          <span />
                          <AuthInfo />
                        </div>
                      </TopMenuSearch>
                    ) : (
                      <AuthInfo />
                    )}
                  </div>
                </div>
                <div className="ninjadash-header-content__mobile">
                  <div className="ninjadash-mobile-action">
                    <div className="btn-search" to="#">
                      {/* <Search /> */}
                    </div>

                    <Link className="btn-auth" onClick={onShowHide} to="#">
                      <UilEllipsisV />
                    </Link>
                  </div>
                </div>
              </div>
            </Header>
            <div className="ninjadash-header-more">
              <Row>
                <Col md={0} sm={24} xs={24}>
                  <div className="ninjadash-header-more-inner">
                    <SmallScreenAuthInfo hide={hide}>
                      <AuthInfo rtl={rtl} />
                    </SmallScreenAuthInfo>
                  </div>
                </Col>
              </Row>
            </div>
            <Content>
              <WrappedComponent {...this.props} />
            </Content>
          </Layout>
          {window.innerWidth <= 991 ? (
            <span className={collapsed ? 'ninjadash-shade' : 'ninjadash-shade show'} onClick={toggleCollapsed} />
          ) : (
            ''
          )}
        </LayoutContainer>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      layoutMode: state.ChangeLayoutMode.mode,
      rtl: state.ChangeLayoutMode.rtlData,
      topMenu: state.ChangeLayoutMode.topMenu,
    };
  };

  LayoutComponent.propTypes = {
    layoutMode: propTypes.string,
    rtl: propTypes.bool,
    topMenu: propTypes.bool,
  };

  return connect(mapStateToProps)(LayoutComponent);
};
export default ThemeLayout;
