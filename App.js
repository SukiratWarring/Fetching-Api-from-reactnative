import { loadPartialConfig } from "@babel/core";
import React, { useEffect, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from "react-native";
export default function react_4() {

  let [data, setdata] = useState(null);


  useEffect(() => { readDataFromServer() }, [])
  function readDataFromServer() {
    fetch("https://reqres.in/api/users?page=2").then((data) => { return data.json() }).then((data) => {
      setdata(data.data)
    });
  }


  function renderListItem(item) {
    return (
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          marginBottom: 10,
          elevation: 2,
        }}>
        <Image style={{height: 100, width: 100}} source={{uri: item.avatar}} />
        <View>
          <Text style={{fontWeight: 'bold'}}>{item.first_name}</Text>
          <Text>{item.last_name}</Text>
          <Text>{item.email}</Text>
        </View>
      </View>
    );
  }


  if (data !== null) {
    return (
      <FlatList
        data={data}
        renderItem={({item}) => {
          return renderListItem(item);
        }}
      />
    );
  } else {
    return <Text>Loaindg....</Text>;
  }
}


