import React from "react";
import {TextInput, StyleSheet} from "react-native";
import PropTypes from "prop-types"; // properties to input


const PaymentInput = (props) => {
    const {value, setValue, placeholderText, isSecureText, keyboardType,autoCorrect,autoCapitalize} = props;
    return (
        <TextInput
            placeholder={placeholderText}
            style={styles.defaultTextInputStyle}
            onChangeText={setValue}
            keyboardType={keyboardType}
            value={value}
            autoCorrect={autoCorrect}
            autoCapitalize={autoCapitalize}
        />
    );
}

const styles = StyleSheet.create({

    defaultTextInputStyle: {
        marginTop:10,
        borderWidth: 1,
        borderRadius: 8,
        height: 48,
        width:300,
        fontSize: 16,
        paddingLeft: 12,
        marginBottom: 16
    }
})

PaymentInput.propTypes = { // property types
    placeholderText: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func.isRequired,
    isSecureText: PropTypes.bool,
    autoCorrect: PropTypes.bool,
    autoCapitalize: PropTypes.oneOf(["none","characters","words","sentences"]),
    keyboardType: PropTypes.oneOf(["default", "number-pad", "decimal-pad", "numeric", "email-address", "phone-pad"])

}

PaymentInput.defaultProps={
    placeholderText: "",
    value: "",
    autoCorrect: false,
    autoCapitalize: "none",
    keyboardType: "default"
}

export default PaymentInput;