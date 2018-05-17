import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { List, ListItem } from 'react-native-elements';


// Built based on
// https://facebook.github.io/react-native/blog/2017/03/13/better-list-views.html
// https://dev-blog.apollodata.com/loading-data-into-react-natives-flatlist-9646fa9a199b
// https://medium.com/react-native-development/how-to-use-the-flatlist-component-react-native-basics-92c482816fe6
class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      refreshing: false,
    };
  }

  // componentDidMount() {
  //   this.makeRemoteRequest();
  // }
  //
  // makeRemoteRequest = () => {
  //   const { page, seed } = this.state;
  //   // TODO: from our API  const url = `;
  //   this.setState({ loading: true });
  //
  //   fetch(url)
  //     .then(res => res.json())
  //     .then((res) => {
  //       this.setState({
  //         data: page === 1 ? res.results : [...this.state.data, ...res.results],
  //         loading: false,
  //         refreshing: false,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true,
      },
      () => {
        // this.makeRemoteRequest();
      },
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1,
      },
      () => {
        // this.makeRemoteRequest();
      },
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: '#CED0CE',
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              // roundAvatar
              // title={`${item.name.first} ${item.name.last}`}
              // subtitle={item.email}
              // avatar={{ uri: item.picture.thumbnail }}
              // TODO: style video here
              containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
      </List>
    );
  }
}

export default Feed;
