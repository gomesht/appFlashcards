import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

import DefaultButton from "../../Components/Common/DefaultButton";

export default function SeeCards() {

    const handleNavAppEdit = () => {
        console.log("editar Card");
    };
    const handleNavAppExclude = () => {
        console.log("excluir Card");
    };
    const handleNavAppBack = () => {
        console.log("Voltar");
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
        color: "#000",
        textAlign: "center",
        marginTop: 80,
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