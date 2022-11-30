import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

import DefaultButton from "../../Components/Common/DefaultButton";

export default function PlayCards() {

    const handleNavAppSee = () => {
        console.log("Ver explicação");
    };
    const handleNavAppNext = () => {
        console.log("Proximo card");
    };
    const handleNavAppBack = () => {
        console.log("Voltar");
    };
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={styles.title}>
                        Dica:
                    </Text>
                    <Text style={styles.dica}>
                        Aqui tem que colocar a dica de maneira dinamica.
                    </Text>

                    <DefaultButton
                        style={styles.button}
                        buttonText={"Show-me"}
                        handlePress={handleNavAppSee}
                        width={300}
                        height={50}
                    />
                    <Text style={styles.title2}>
                        Content:
                    </Text>
                    <Text style={styles.content}>
                        Aqui tem que colocar o conteudo de maneira dinamica.
                    </Text>
                    <View style={styles.botoes}>
                        <DefaultButton
                            style={styles.button}
                            buttonText={"Next"}
                            handlePress={handleNavAppNext}
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
        color: "#000",
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
        color: "#000",
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#FFFF",
        padding: 2,
        borderRadius: 5,
    },

    dica: {
        color: "white",
        textAlign: "center",
        marginBottom: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        borderRadius: 10,
        height: 100,
        width: 300,

    },
    content: {
        color: "white",
        textAlign: "center",
        marginBottom: 10,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#FFFFFF",
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
    }
});