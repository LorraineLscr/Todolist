import { StyleSheet } from "react-native";

const monStyle = StyleSheet.create({
   title: {
        fontSize: 32,
        fontWeight: '900',
        color: 'black',
        marginBottom: 20,
        marginLeft: 40, 
    },

    txt: { 
        width: '80%',
        marginLeft: 40, 
        marginHorizontal: 50, 
        borderColor: 'black',
        borderWidth: 2, 
        marginBottom: 20, 
    },

    btn:{
        width: '60%',
        marginLeft: 75, 
        marginHorizontal: 50, 
    },

    containerStyle: { 
        backgroundColor: 'red', 
        padding: 20,
        height:'100%',
    },
});


export default monStyle;