import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

import DefaultButton from "../../Components/Common/DefaultButton";

export default function Start() {

    const handleNavAppSeeCards = () => {
        console.log("Testando o clique see cards");
    };
    const handleNavAppAddCards = () => {
        console.log("Testando o clique add");
    };
    const handleNavAppPlay = () => {
        console.log("Testando o clique play");
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={styles.title}>
                        App FlashCards
                    </Text>
                    <Text style={styles.description}>
                        The best way to memorize.
                    </Text>
                    <Image
                        source={require("../../assets/img/cards.png")}
                        style={styles.logo}
                    />
                    <DefaultButton
                        style={styles.button}
                        buttonText={"See my FlashCards"}
                        handlePress={handleNavAppSeeCards}
                        width={250}
                        height={50}
                    />
                    <DefaultButton
                        style={styles.button}
                        buttonText={"Add FlashCards"}
                        handlePress={handleNavAppAddCards}
                        width={250}
                        height={50}
                    />
                    <DefaultButton
                        style={styles.button}
                        buttonText={"Play FlashCards"}
                        handlePress={handleNavAppPlay}
                        width={250}
                        height={50}
                    />


                </View>
            </ScrollView>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(21, 21, 21, 0.98)",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
        marginVertical: 40,
        backgroundColor: "#FFFF",
        padding: 5,
        borderRadius: 5,
    },

    description: {
        color: "white",
        textAlign: "center",
        marginBottom: 30,
        fontSize: 16,
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
});