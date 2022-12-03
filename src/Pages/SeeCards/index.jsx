import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Alert } from "react-native";

import DefaultButton from "../../Components/Common/DefaultButton";

export default function SeeCards() {
    const navigation = useNavigation();

    const handleNavAppEdit = () => {
        navigation.navigate("AddCards");
    };
    const handleNavAppExclude = () => {
        // fazer função para excluir Card
        alert("FlashCard excluído!")
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
                        Cards:
                    </Text>
                    <View style={styles.itens}>

                        <Text style={styles.dica}>
                            Aqui tem que colocar a dica de maneira dinamica.
                        </Text>
                        <View style={styles.edit}>
                            <DefaultButton
                                style={styles.button}
                                buttonText={"🖊️"}
                                handlePress={handleNavAppEdit}
                                width={50}
                                height={50}
                            />
                            <DefaultButton
                                style={styles.button}
                                buttonText={"🗑️"}
                                handlePress={handleNavAppExclude}
                                width={50}
                                height={50}
                            />

                        </View>
                    </View>





                    <View style={styles.botoes}>

                        <DefaultButton
                            style={styles.button}
                            buttonText={"Exit"}
                            handlePress={handleNavAppBack}
                            width={300}
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


    dica: {
        color: "#BB2649",
        textAlign: "center",
        marginBottom: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#BB2649",
        borderRadius: 10,
        height: 110,
        width: 240,

    },


    logo: {
        width: 200,
        height: 200,
        marginTop: 40,
        marginBottom: 80,
        alignSelf: "center"
    },
    itens: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: 300,
        borderBottomWidth: 2,
        borderBottomColor: "#FFFFFF",
        marginTop: 10,
    },
    botoes: {
        marginTop: 10,
    }
});