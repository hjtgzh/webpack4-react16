import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { switchNavMenu } from '../../redux/actions/nav';
import { fetchHomeList } from '../../redux/actions/home';
import { Row, Col, Input, Table, Button, Icon } from 'antd';
import './style.less';

const Search = Input.Search;
const data = {
  北京: 0.35,
  上海: 0.3,
  广州: 0.18,
  深圳: 0.17
};

class Visualization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btShow: false
    };
  }

  componentDidMount() {
    this.props.fetchHomeList();
    this.props.switchNavMenu('2');
  }

  // 可视化图形样式
  getStyles = () => {
    return {
      width: 180,
      height: 180,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      boxShadow: '0 0 5px rgba(25, 25, 25, 0.25)'
    };
  };

  // 搜索列表
  listSearch = value => {
    this.props.fetchHomeList(value);
  };

  // table头部
  tableHeader = () => {
    return [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        filters: [
          {
            text: '盖伦',
            value: '盖伦'
          },
          {
            text: '蛮王',
            value: '蛮王'
          }
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.name.includes(value)
      },
      {
        title: '标记',
        dataIndex: 'id',
        key: 'id',
        sorter: (a, b) => a.id - b.id
      },
      {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex'
      },
      {
        title: '昵称',
        dataIndex: 'nickName',
        key: 'nickName'
      },
      {
        title: '婚姻状况',
        dataIndex: 'status',
        key: 'status'
      },
      {
        title: '电话',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber'
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address'
      }
    ];
  };

  // 列表左侧批量筛选
  rowSelection = () => {
    return {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          `selectedRowKeys: ${selectedRowKeys}`,
          'selectedRows: ',
          selectedRows
        );
        if (selectedRows.length > 0) {
          this.setState({
            btShow: true
          });
        } else {
          this.setState({
            btShow: false
          });
        }
      },
      getCheckboxProps: record => ({
        disabled: record.name === '赵六' // 设置不能选择的条目
      })
    };
  };

  render() {
    const { homeListData, loading } = this.props;
    return (
      <div className="summary">
        <div className="search-wrap">
          <Search placeholder="请输入搜索关键字" onSearch={this.listSearch} />
        </div>
        <div className="search-list">
          <Table
            dataSource={homeListData && homeListData.list}
            columns={this.tableHeader()}
            rowSelection={this.rowSelection()}
            rowKey={record => record.id}
            expandedRowRender={record => <div>{record.description}</div>}
            loading={loading}
          />
          {this.state.btShow ? (
            <div className="btWrap">
              <Button type="primary">
                <a
                  download="下载"
                  href="http://attach-ment.oss-cn-shanghai.aliyuncs.com/template/custom.csv"
                >
                  <Icon type="download" />下载
                </a>
              </Button>
            </div>
          ) : null}
        </div>
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
      switchNavMenu,
      fetchHomeList
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Visualization);
