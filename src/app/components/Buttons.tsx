

import { useState } from 'react';
import {View, Text, Pressable, StyleSheet,} from 'react-native';

const TabBar = () => {
    
  const [activeTab, setActiveTab] = useState('Chat');
  const tabs = ['Chat', 'Status', 'Calls'];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        return (
          <Pressable
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tab,
              isActive && styles.activeTab,
            ]}
          >
            <Text
              style={[
                styles.tabText,
                isActive && styles.activeText,
              ]}
            >
              {tab}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FCE9E1',
    borderRadius: 15,
    padding: 4,
    marginHorizontal: 20,
    marginTop: 15,
    height: 58,
    alignItems: 'center',
  },

  tab: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },

  activeTab: {
    backgroundColor: '#F15A24',
    elevation: 4,
    shadowColor: '#F15A24',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  tabText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#A76543',
  },

  activeText: {
    color: '#FFFFFF',
  },
});
