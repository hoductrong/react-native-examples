import React, {useMemo} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

interface Item {
  id: string;
  title: string;
}

interface Props {
  // items: Item[];
}

const items: Item[] = [];

for (let index = 0; index < 1000; index++) {
  items.push({
    id: index.toString(),
    title: `Item ${index}`,
  });
}

const HeavyLoadedView: React.FC<Props> = () => {
  const renderedItems = useMemo(
    () =>
      items.map(item => (
        <View style={styles.itemContainer} key={item.id}>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
      )),
    [],
  );

  return (
    <FlatList
      data={items}
      renderItem={({item}) =>
        renderedItems.find(element => element.key === item.id) ?? <></>
      }
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default HeavyLoadedView;
