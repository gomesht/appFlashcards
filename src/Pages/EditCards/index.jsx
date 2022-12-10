import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TextInput } from "react-native";
import config from "../../../config/config.json";
import DefaultButton from "../../Components/Common/DefaultButton";

export default function EditCards({ route }) {
    const { elem } = route.params;

    const [dica, setDica] = useState(elem.dica);
    const [texto, setTexto] = useState(elem.texto);
    const id = elem.id;
    const [message, setMessage] = useState(null);

    const navigation = useNavigation();



    const handleNavAppBack = () => {
        navigation.navigate("Start");
    };


    //Envia os dados do formulário para o backend
    async function updateFlashcard() {
        console.log("chamou o register")
        let reqs = await fetch(config.urlRootNode + 'update', {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dicaFlashcard: dica,
                textoFlashcard: texto,
                statusFlashcard: true,
                idFlashcard: id

            })

        })
        let ress = await reqs.json();
        setMessage(ress);
        {
            ress && (
                alert(ress),
                navigation.navigate("Start")
            )
        }

    }
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
                            maxLength={120}
                            value={dica}
                            placeholder="Digite aqui..."
                            onChangeText={(text) => setDica(text)}
                        />
                    </View>

                    <Text style={styles.title2}>
                        Content:
                    </Text>
                    <View style={styles.content}>
                        <TextInput
                            style={styles.textArea}
                            multiline={true}
                            maxLength={360}
                            value={texto}
                            placeholder="Digite aqui..."
                            onChangeText={(text) => setTexto(text)}
                        />
                    </View>
                    <View style={styles.botoes}>
                        <DefaultButton
                            style={styles.button}
                            buttonText={"Save"}
                            handlePress={updateFlashcard}
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
        flex: 1,
        color: "#BB2649",
        textAlign: "left",
        textAlignVertical: "top",
        padding: 10,
        marginBottom: 60,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#BB2649",
        borderRadius: 10,
        height: 100,
        width: 300,
        justifyContent: "flex-start",


    },
    content: {
        flex: 1,
        color: "#BB2649",
        textAlign: "left",
        textAlignVertical: "top",
        marginBottom: 10,
        padding: 10,
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
});