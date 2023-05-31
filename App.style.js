import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    // columnShadow: {
    //     width: 100,
    //     shadowColor: '#000000',
    //     shadowOffset: {
    //         width: 2,
    //         height: 3,
    //     },
    //     shadowOpacity: 0.3,
    //     shadowRadius: 2,
    //     borderTopLeftRadius: 16,
    //     borderTopRightRadius: 16,
    //     marginTop: 20,
    //     elevation:2,

    // }
    columnShadow: {
        width: 70,
        shadowColor: '#000000',
        shadowOffset: {
            width: 3,
            height: 2
        },
        elevation: 2,
        borderBottomEndRadius: 16,
        borderBottomLeftRadius: 16,
        // borderBottomRightRadius: 16,
        // borderBottomStartRadius: 16,
        shadowColor: 'rgba(0, 0, 0, 0.2)'

    }
    ,
    RetailerPluss:{
        background: '#2196F3',
        backgroundColor:"#2196F3",
        /* box shadow */
        color:'#fff',
        height:35,
        fontSize:12,
        // box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
        borderRadius: 6
    },
    ShopComponent: {
        width: "100%",
        height: 140,
        marginTop: 10,
        shadowOffset: {
            width: 0,
            height: 1
        },
        elevation: 2,
        borderRadius:3,
        shadowColor: "rgba(0, 0, 0, 0.2)"
    },
   ActiveShopComponent: {
        width: "100%",
        height: 140,
        marginTop: 10,
        shadowOffset: {
            width: 0,
            height: 1
        },
        elevation: 2,
        borderRadius: 3,
        shadowColor: "rgba(0, 0, 0, 0.2)",
        borderColor:"#19A703",
        borderWidth:1.2,
        borderLeftWidth:10,
        borderRightWidth:10
    },
    ShopComponentInner: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        position:"relative",

    },
    saleName: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 8,
        lineHeight: 12,
        color: "#828282"
    },
    price: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 12,
        lineHeight: 18,
        color: '#2196F3'

    }
})