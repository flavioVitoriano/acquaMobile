import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa"
    },
    list: {
        padding: 20
    },
    productContainer: {

        backgroundColor: "#fff",
        borderWidth: 1,
        borderRadius: 5,
        padding: 20,
        marginBottom: 20,

    },

    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },

    productDescription: {
        fontSize: 16,
        color: "#999",
        marginTop: 5,
        lineHeight: 24
    },
    productButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#da552f",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },

    productButtonText: {
        fontSize: 16,
        color: "#da552f",
        fontWeight: "bold"
    }
})
