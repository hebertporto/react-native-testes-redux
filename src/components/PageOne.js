import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from './common';
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
    // this.dataSource = ds.cloneWithRows([
    //     'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
    //   ]);
      this.dataSource = ds.cloneWithRows(novels);
  }

  renderRow(novel) {
     return <Text>{novel.title}</Text>;
  }

  render() {
    return (
      // <View>
      //   <Text> Element Here </Text>
      // </View>
      // <ListView
      //   enableEmptySections
      //   dataSource={this.dataSource}
      //   renderRow={this.renderRow}
      // />
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          // renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

// npm install --save loadsh
const mapStateToProps = state => {
   return { novels: state.novels };
};

export default connect(mapStateToProps, { novelsFetch })(PageOne);
