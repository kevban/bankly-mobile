import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        marginTop: 5
    },
    background: {
        flex: 1,
        backgroundColor: '#e0e0e0'
    },
    alertText: {
        width: '100%',
        margin: '10px'
    },
    loginPaper: {
        marginTop: 8,
        marginBottom: 8,
        padding: 24,
        width: `80%`
    },
    transactionListPaper: {
        marginTop: 8,
        marginBottom: 8,
        marginHorizontal: 'auto',
        padding: 12,
        backgroundColor: 'white',
        width: `95%`
    },
    loginContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    linkStyle: {
        color: '#6495ED',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    stack: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    stackItem: {
        marginVertical: 5,
    },
    column: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    columnItem: {
        marginHorizontal: 5,
    },
    drawerHeader: {
        padding: 20
    },
    drawerFooter: {
        padding: 20
    },
    drawerButtons: {
        flexDirection: 'row',
        marginVertical: 20,
        alignItems: 'center'
    },
    modal: {
        display: 'flex',
        width: '80%',
        height: '60%',
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 'auto',
        backgroundColor: 'white',
        padding: 20
    },
    FAB: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    fullWidth: {
        width: '100%',
        marginVertical: 5
    }
})

export default styles