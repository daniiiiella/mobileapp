import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, Image, StyleSheet, ScrollView, Text, TextInput } from 'react-native';


export function Feed() {
  
  function handleSearch(text) {
  setSearchTerm(text);
}
  const [searchTerm, setSearchTerm] = React.useState('');

  const data = [
    {
      id: '1',
      image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d702d6f5f14fe00581e79536166f790b',
     
    },
    {
      id: '2',
      image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/596016daa21205a15437e04a66012e4d',
      
    },
    {
      id: '3',
      image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/52db3a1566dd2833370b43179494ded2',
      
    },
    {
      id: '4',
      image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/43cd5c171611264e85ee19077237caa5',
      
    },
    {
      id: '5',
      image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/97cfb9de273859180f019e093b304bc4',
     
    },
    {
      id: '6',
      image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2b5e8e728a0529b2aa217b957721a550',
     
    },
    {
      id: '7',
      image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/275f7af0968c71437a4fc210f9eacfe7',
     
    },
    {
      id: '8',
      image: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/f5cdf0e21525ba54173a90f40f63c4aa',
      avatar: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/d702d6f5f14fe00581e79536166f790b',
    },
  ];

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <AntDesign name="search1" size={24} color="black" style={styles.icon} />
        <View style={styles.header}>

       <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar"
        value={searchTerm}
        onChangeText={setSearchTerm}
        />
  </View>
</View>

      <View style={styles.content}>
        {data.map((item) => (
          <View key={item.id} style={styles.post}>
            <Image source={{ uri: item.image }} style={styles.postImage} />
            <View style={styles.postFooter}>
              <View style={styles.avatar}>
                <Image source={{ uri:"https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/c0004eaa1caaef1494a3a1466977a9c9"  }} style={styles.avatarImage} />
              </View>
              
              <View style={styles.postUser}>
                <AntDesign name="user" size={16} color="black" />
                <Text style={styles.username}>{item.user}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  searchInput: {
  flex: 1,
  marginLeft: 10,
  marginRight: 150,
},

  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  icon: {
    marginLeft: 10,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  post: {
    width: '48%',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 150,
  },
  postFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
  },
  postUser:{
   marginTop: 1,
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    backgroundColor: '#DCDCDC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
   avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12.5,
  },
});
