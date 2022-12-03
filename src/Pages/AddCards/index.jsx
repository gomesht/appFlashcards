import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, TextInput } from "react-native";

import DefaultButton from "../../Components/Common/DefaultButton";

export default function AddCards() {

    const navigation = useNavigation();

    const handleNavAppSave = () => {
        alert("FlashCard salvo!");
        navigation.navigate("Start");
    };

    const handleNavAppBack = () => {
        navigation.navigate("Start");
    };
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={styles.title}>
                        Dica:
                    </Text>
                    <View>
                        <TextInput style={styles.dica}
                            multiline={true}
                            numberOfLines={2}
                        />
                    </View>

                    <Text style={styles.title2}>
                        Content:
                    </Text>
                    <View style={styles.content}>
                        <TextInput
                            style={styles.textArea}
                            multiline={true}
                            numberOfLines={6}
                        />
                    </View>
                    <View style={styles.botoes}>
                        <DefaultButton
                            style={styles.button}
                            buttonText={"Save"}
                            handlePress={handleNavAppSave}
                            width={145}
                            height={50}
                        />
                        <DefaultButton
                            style={styles.button}
                            buttonText={"Exit"}
                            handlePress={handleNavAppBack}
                            width={145}
                            height={50}
                        />

                    </View>



                </View>
            </ScrollView>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#BB2649",
        textAlign: "center",
        marginTop: 80,
        marginBottom: 10,
        backgroundColor: "#FFFF",
        padding: 2,
        borderRadius: 5,
    },
    title2: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#BB2649",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#FFFF",
        padding: 2,
        borderRadius: 5,
    },

    dica: {
        color: "#BB2649",
        textAlign: "center",
        marginBottom: 60,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#BB2649",
        borderRadius: 10,
        height: 100,
        width: 300,

    },
    content: {
        color: "#BB2649",
        textAlign: "center",
        marginBottom: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#BB2649",
        borderRadius: 10,
        height: 300,
        width: 300,

    },
    button: {
        alignSelf: "center",

    },
    logo: {
        width: 200,
        height: 200,
        marginTop: 40,
        marginBottom: 80,
        alignSelf: "center"
    },
    botoes: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textAreaContainer: {
        marginBottom: 60,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#BB2649",
        borderRadius: 10,
        height: 100,
        width: 300,
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start",
    },
});