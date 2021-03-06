import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import ListItem  from './ListItem';
import { novelsFetch } from '../actions';

class PageOne extends Component {

  componentWillMount() {
    this.props.novelsFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({novels}) {
    const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(novels);
  }

  renderRow(novel) {
     return <ListItem novel={novel} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

// npm install --save loadsh
const mapStateToProps = state => {
   return { novels: state.novels };
};

export default connect(mapStateToProps, { novelsFetch })(PageOne);
