import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  RefreshControl,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { renderItem } from "./component/renderItem";
import getNotification from "../../service/notification/notification";
import styles from "./styles";

const AlertScreen = () => {
  const [data, getData] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getNotification.getData().then((notf) => {
      getData(notf);
    });
  }, []);

  const onRefresh = React.useCallback(() => {
    getNotification.getData().then((notf) => {
      getData(notf);
    });
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={styles.container}>
        <Text>bildirim ekranı</Text>

        <View style={styles.listContainer}>
          {data ? (
            data.map((alert) => {
              return (
                <View key={alert.id}>
                  {renderItem({
                    id: alert.id,
                    fname: alert.name,
                    desc: alert.description,
                    time: alert.time,
                  })}
                </View>
              );
            })
          ) : (
            <ActivityIndicator size={40} />
          )}
        </View>
      </View>
    </ScrollView>
  );
};
export { AlertScreen };
