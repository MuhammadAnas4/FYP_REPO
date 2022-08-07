import React, { useEffect, useState, useRef } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, FlatList, Image } from 'react-native';
import Axios from 'axios';
import Like from 'react-native-vector-icons/Feather'
import BASE_URL from '../../../Config';

const Cameras = ({ navigation }) => {

    const [page, setPage] = React.useState(1);
    const [limit, setLimit] = React.useState(10);
    const [loading, setLoading] = React.useState(false);
    

    const [addList, setAddList] = React.useState([]);

    const [endReached , setOnEndReached ] = React.useState(false);

    const [isFetching, setIsFetching] = React.useState(false)

    const isMountedRef = useRef(null);

    useEffect(() => {
        isMountedRef.current = true;
        if (isMountedRef.current) {
            allAds();
        }
        return () => isMountedRef.current = false;
    }, [page]);

    const allAds = () => {
        Axios.get(`${BASE_URL}/user/cameraAds?page=${page}&limit=${limit}`)
            .then((res) => {
                if (isMountedRef.current) {
                    console.log('camera---')
                    console.log(res.data)
                    setAddList(addList.concat(res.data))
                    setLoading(false)
                    setIsFetching(false)
                }
            }).catch((error) => {
                console.log(error)
            });
    }

    const renderFooter = () => {
        return loading ?
            <View style={{ flex: 0.1 }}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View> : null
    }

    const handleLoadMore = () => {
        setLoading(true)
        if(loading){
            setPage(page + 1)
        }
    }


    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.15 }}>
            </View>
            <FlatList
                style={{ flex: 1 }}
                numColumns={2}
                data={addList}
                keyExtractor={(item, index) => String(index)}
                ListFooterComponent={renderFooter}
                onEndReached={handleLoadMore}
                // onEndReachedThreshold={10}
                // scrollEventThrottle={150}
                
                renderItem={({ item, index }) =>
                    <TouchableOpacity style={{ flex: 1, backgroundColor: '#ffff', height: 200, borderRadius: 5, margin: 5 }} onPress={() => { navigation.navigate('ProductDetails', { otherParam: item._id }) }}>
                        <View style={{ flex: 0.5, backgroundColor: '#A9A9A9' }}>
                            {
                                item.image ?
                                    (
                                        <Image
                                            source={{ uri: item.image }} resizeMode='stretch' style={{ flex: 1 }}
                                        />
                                    ) : null
                            }
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <View style={{ flex: 0.3, flexDirection: 'row' }}>
                                <View style={{ flex: 0.7, backgroundColor: 'white', justifyContent: 'center' }}>
                                    <Text style={{ color: "black", fontSize: 15, fontWeight: '400' }}> {item.title}</Text>
                                </View>
                                <View style={{ flex: 0.3, justifyContent: 'center', flexDirection: 'row-reverse', alignContent: 'center', alignItems: 'center' }}>
                                    <Like name="heart" size={20} color="black" />
                                </View>
                            </View>
                            <View style={{ flex: 0.3, justifyContent: 'center' }}>
                                <Text style={{ color: "black", fontSize: 18, fontWeight: '500' }}> Rs.{item.price} <Text style={{ fontSize: 10 }}>/ day</Text></Text>
                            </View>
                            <View style={{ flex: 0.4, flexDirection: 'row' }}>
                                <View style={{ flex: 0.5, justifyContent: 'center' }}>
                                    {/* <Text style={{ color: "grey", fontSize: 13, fontWeight: '300', marginLeft: 5 }}>{item.address}</Text> */}
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                }
            />
            <View style={{ flex: 0.17 }}>
            </View>
        </View>
    );
}

export default Cameras;


// {/* <View style={{ flex: 1 }}>
//             <View style={{flex:0.2}}>
//             </View>
//             <ScrollView style={{flex:0.8}}>
//                 <View style={{
//                     shadowColor: "#000",
//                     shadowOffset: {
//                         width: 0,
//                         height: 2,
//                     },
//                     shadowOpacity: 0.23,
//                     shadowRadius: 2.62,
//                     elevation: 4,
//                     backgroundColor: 'white', padding: 5, margin: 5, marginTop: 7, marginRight: 10, marginLeft: 10
//                 }}>
//                     <View style={{ flexDirection: 'row' }}>
//                         <View style={{ width: 150, height: 100, backgroundColor: 'red', margin: 10 }}>
//                             <Text style={{ color: "red" }}>

//                             </Text>
//                         </View>
//                         <View style={{ margin: 10, justifyContent: 'space-around' }} >
//                             <View style={{ flex: 0.3, }}>
//                                 <Text style={{ color: "black", fontSize: 15, fontWeight: '500' }}>Headphone 3.5mm</Text>
//                                 <Text style={{ color: "grey", fontSize: 13, fontWeight: '300' }}>No Brand, Color Family Black</Text>
//                             </View>
//                             <View style={{ flex: 0.3, marginTop: 10 }}>
//                                 <Text style={{ color: "orange", fontSize: 15, fontWeight: '500' }}>Rs. 3500</Text>
//                                 {/* <Text style={{color:"grey", fontSize:13, fontWeight:'300'}}>No Brand, Color Family Black</Text> */}
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//                 <View style={{
//                     shadowColor: "#000",
//                     shadowOffset: {
//                         width: 0,
//                         height: 2,
//                     },
//                     shadowOpacity: 0.23,
//                     shadowRadius: 2.62,
//                     elevation: 4,
//                     backgroundColor: 'white', padding: 5, margin: 5, marginTop: 7, marginRight: 10, marginLeft: 10
//                 }}>
//                     <View style={{ flexDirection: 'row' }}>
//                         <View style={{ width: 150, height: 100, backgroundColor: 'red', margin: 10 }}>
//                             <Text style={{ color: "red" }}>
//                             </Text>
//                         </View>
//                         <View style={{ margin: 10, justifyContent: 'space-around' }} >
//                             <View style={{ flex: 0.3, }}>
//                                 <Text style={{ color: "black", fontSize: 15, fontWeight: '500' }}>Headphone 3.5mm</Text>
//                                 <Text style={{ color: "grey", fontSize: 13, fontWeight: '300' }}>No Brand, Color Family Black</Text>
//                             </View>
//                             <View style={{ flex: 0.3, marginTop: 10 }}>
//                                 <Text style={{ color: "orange", fontSize: 15, fontWeight: '500' }}>Rs. 3500</Text>
//                                 {/* <Text style={{color:"grey", fontSize:13, fontWeight:'300'}}>No Brand, Color Family Black</Text> */}
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//                 <View style={{
//                     shadowColor: "#000",
//                     shadowOffset: {
//                         width: 0,
//                         height: 2,
//                     },
//                     shadowOpacity: 0.23,
//                     shadowRadius: 2.62,
//                     elevation: 4,
//                     backgroundColor: 'white', padding: 5, margin: 5, marginTop: 7, marginRight: 10, marginLeft: 10
//                 }}>
//                     <View style={{ flexDirection: 'row' }}>
//                         <View style={{ width: 150, height: 100, backgroundColor: 'red', margin: 10 }}>
//                             <Text style={{ color: "red" }}>
//                                 GOOD
//                             </Text>
//                         </View>
//                         <View style={{ margin: 10, justifyContent: 'space-around' }} >
//                             <View style={{ flex: 0.3, }}>
//                                 <Text style={{ color: "black", fontSize: 15, fontWeight: '500' }}>Headphone 3.5mm</Text>
//                                 <Text style={{ color: "grey", fontSize: 13, fontWeight: '300' }}>No Brand, Color Family Black</Text>
//                             </View>
//                             <View style={{ flex: 0.3, marginTop: 10 }}>
//                                 <Text style={{ color: "orange", fontSize: 15, fontWeight: '500' }}>Rs. 3500</Text>
//                                 {/* <Text style={{color:"grey", fontSize:13, fontWeight:'300'}}>No Brand, Color Family Black</Text> */}
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//                 <View style={{
//                     shadowColor: "#000",
//                     shadowOffset: {
//                         width: 0,
//                         height: 2,
//                     },
//                     shadowOpacity: 0.23,
//                     shadowRadius: 2.62,
//                     elevation: 4,
//                     backgroundColor: 'white', padding: 5, margin: 5, marginTop: 7, marginRight: 10, marginLeft: 10
//                 }}>
//                     <View style={{ flexDirection: 'row' }}>
//                         <View style={{ width: 150, height: 100, backgroundColor: 'red', margin: 10 }}>
//                             <Text style={{ color: "red" }}>
//                                 GOOD
//                             </Text>
//                         </View>
//                         <View style={{ margin: 10, justifyContent: 'space-around' }} >
//                             <View style={{ flex: 0.3, }}>
//                                 <Text style={{ color: "black", fontSize: 15, fontWeight: '500' }}>Headphone 3.5mm</Text>
//                                 <Text style={{ color: "grey", fontSize: 13, fontWeight: '300' }}>No Brand, Color Family Black</Text>
//                             </View>
//                             <View style={{ flex: 0.3, marginTop: 10 }}>
//                                 <Text style={{ color: "orange", fontSize: 15, fontWeight: '500' }}>Rs. 3500</Text>
//                                 {/* <Text style={{color:"grey", fontSize:13, fontWeight:'300'}}>No Brand, Color Family Black</Text> */}
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//                 <View style={{
//                     shadowColor: "#000",
//                     shadowOffset: {
//                         width: 0,
//                         height: 2,
//                     },
//                     shadowOpacity: 0.23,
//                     shadowRadius: 2.62,
//                     elevation: 4,
//                     backgroundColor: 'white', padding: 5, margin: 5, marginTop: 7, marginRight: 10, marginLeft: 10
//                 }}>
//                     <View style={{ flexDirection: 'row' }}>
//                         <View style={{ width: 150, height: 100, backgroundColor: 'red', margin: 10 }}>
//                             <Text style={{ color: "red" }}>
//                                 GOOD
//                             </Text>
//                         </View>
//                         <View style={{ margin: 10, justifyContent: 'space-around' }} >
//                             <View style={{ flex: 0.3, }}>
//                                 <Text style={{ color: "black", fontSize: 15, fontWeight: '500' }}>Headphone 3.5mm</Text>
//                                 <Text style={{ color: "grey", fontSize: 13, fontWeight: '300' }}>No Brand, Color Family Black</Text>
//                             </View>
//                             <View style={{ flex: 0.3, marginTop: 10 }}>
//                                 <Text style={{ color: "orange", fontSize: 15, fontWeight: '500' }}>Rs. 3500</Text>
//                                 {/* <Text style={{color:"grey", fontSize:13, fontWeight:'300'}}>No Brand, Color Family Black</Text> */}
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//                 <View style={{
//                     shadowColor: "#000",
//                     shadowOffset: {
//                         width: 0,
//                         height: 2,
//                     },
//                     shadowOpacity: 0.23,
//                     shadowRadius: 2.62,
//                     elevation: 4,
//                     backgroundColor: 'white', padding: 5, margin: 5, marginTop: 7, marginRight: 10, marginLeft: 10
//                 }}>
//                     <View style={{ flexDirection: 'row' }}>
//                         <View style={{ width: 150, height: 100, backgroundColor: 'red', margin: 10 }}>
//                             <Text style={{ color: "red" }}>
//                                 GOOD
//                             </Text>
//                         </View>
//                         <View style={{ margin: 10, justifyContent: 'space-around' }} >
//                             <View style={{ flex: 0.3, }}>
//                                 <Text style={{ color: "black", fontSize: 15, fontWeight: '500' }}>Headphone 3.5mm</Text>
//                                 <Text style={{ color: "grey", fontSize: 13, fontWeight: '300' }}>No Brand, Color Family Black</Text>
//                             </View>
//                             <View style={{ flex: 0.3, marginTop: 10 }}>
//                                 <Text style={{ color: "orange", fontSize: 15, fontWeight: '500' }}>Rs. 3500</Text>
//                                 {/* <Text style={{color:"grey", fontSize:13, fontWeight:'300'}}>No Brand, Color Family Black</Text> */}
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//                 <View style={{
//                     shadowColor: "#000",
//                     shadowOffset: {
//                         width: 0,
//                         height: 2,
//                     },
//                     shadowOpacity: 0.23,
//                     shadowRadius: 2.62,
//                     elevation: 4,
//                     backgroundColor: 'white', padding: 5, margin: 5, marginTop: 7, marginRight: 10, marginLeft: 10
//                 }}>
//                     <View style={{ flexDirection: 'row' }}>
//                         <View style={{ width: 150, height: 100, backgroundColor: 'red', margin: 10 }}>
//                             <Text style={{ color: "red" }}>
//                                 GOOD
//                             </Text>
//                         </View>
//                         <View style={{ margin: 10, justifyContent: 'space-around' }} >
//                             <View style={{ flex: 0.3, }}>
//                                 <Text style={{ color: "black", fontSize: 15, fontWeight: '500' }}>Headphone 3.5mm</Text>
//                                 <Text style={{ color: "grey", fontSize: 13, fontWeight: '300' }}>No Brand, Color Family Black</Text>
//                             </View>
//                             <View style={{ flex: 0.3, marginTop: 10 }}>
//                                 <Text style={{ color: "orange", fontSize: 15, fontWeight: '500' }}>Rs. 3500</Text>
//                                 {/* <Text style={{color:"grey", fontSize:13, fontWeight:'300'}}>No Brand, Color Family Black</Text> */}
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//                 <View style={{
//                     shadowColor: "#000",
//                     shadowOffset: {
//                         width: 0,
//                         height: 2,
//                     },
//                     shadowOpacity: 0.23,
//                     shadowRadius: 2.62,
//                     elevation: 4,
//                     backgroundColor: 'white', padding: 5, margin: 5, marginTop: 7, marginRight: 10, marginLeft: 10
//                 }}>
//                     <View style={{ flexDirection: 'row' }}>
//                         <View style={{ width: 150, height: 100, backgroundColor: 'red', margin: 10 }}>
//                             <Text style={{ color: "red" }}>
//                                 GOOD
//                             </Text>
//                         </View>
//                         <View style={{ margin: 10, justifyContent: 'space-around' }} >
//                             <View style={{ flex: 0.3, }}>
//                                 <Text style={{ color: "black", fontSize: 15, fontWeight: '500' }}>Headphone 3.5mm</Text>
//                                 <Text style={{ color: "grey", fontSize: 13, fontWeight: '300' }}>No Brand, Color Family Black</Text>
//                             </View>
//                             <View style={{ flex: 0.3, marginTop: 10 }}>
//                                 <Text style={{ color: "orange", fontSize: 15, fontWeight: '500' }}>Rs. 3500</Text>
//                                 {/* <Text style={{color:"grey", fontSize:13, fontWeight:'300'}}>No Brand, Color Family Black</Text> */}
//                             </View>
//                         </View>
//                     </View>
//                 </View>
//             </ScrollView>
//         </View> */}