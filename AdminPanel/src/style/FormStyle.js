import {
    StyleSheet
} from 'react-native';
import GlobalStyleConstants from './GlobalStyleConstant';

const textInput = {
    borderColor : 'grey',
    borderWidth : 1,
    borderRadius :  GlobalStyleConstants.borderRadius,
    margin : 10,
    padding : 5,
    color : GlobalStyleConstants.SecondryFontColor,
}

const FormStyle = StyleSheet.create({
    name_text_input :{
       ...textInput,
       marginTop : 20,
       width : '44%',
       marginVertical : 10,
       marginHorizontal : '3%'
    },
    text_input :{
        ...textInput,
        marginVertical : 10,
        marginHorizontal : '3%'

    },
    button:{
        backgroundColor : GlobalStyleConstants.PrimaryColor,
        width : 100,
        alignSelf : 'center',
        borderRadius : GlobalStyleConstants.borderRadius,
        marginTop : 10,
        elevation : GlobalStyleConstants.elevation
    },
    card_container_style: { 
        flex: 1, 
        justifyContent: 'center' 
    },
    card_style: { 
        width: '90%', 
        alignSelf: 'center', 
        elevation: 10 
    },
    name_container_style: { 
        justifyContent: 'space-around', 
        flexDirection: 'row' 
    },
    button_container: { 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        marginLeft: '20%',
        marginVertical: 20,
    }
})

export default FormStyle;