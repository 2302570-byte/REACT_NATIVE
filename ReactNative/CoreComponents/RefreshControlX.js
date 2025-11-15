import React from 'react';
import { RefreshControl, ScrollView, StyleSheet, Text } from 'react-native';

const RefreshControlX = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text style={styles.text}>
        Pull down to see RefreshControl indicator
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1, 
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  text: {
    fontSize: 16,
  },
});

export default RefreshControlX;
