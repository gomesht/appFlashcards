import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, Alert } from "react-native";
import DefaultButton from "../../Components/Common/DefaultButton";
import config from "../../../config/config.json"

export default function SeeCards() {
    const navigation = useNavigation();
    const [card, setCard] = useState(null);
    const [id, setId] = useState(null);


    async function listCards() {
        let reqs = await fetch(config.urlRootNode + 'read/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        let ress = await reqs.json();
        // ress.data.map((elem) => {
        //     console.log(elem.dica);
        // })
        setCard(ress);
        console.log(ress);
    }
    useEffect(() => {
        listCards();
    }, []);

    const handleNavAppEdit = () => {
        navigation.navigate("AddCards");
    };
    async function handleNavAppExclude(item) {
        // fazer função para excluir Card
        console.log("chamou o exclude")
        let reqs = await fetch(config.urlRootNode + 'delete', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idFlashcard: item,
                statusFlashcard: false,

            })

        })

        // alert("FlashCard excluído!")
        // navigation.navigate("Start");
    };
    const handleNavAppBack = () => {
        navigation.navigate("Start");
    };



    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>
                    Cards:
                </Text>

                {card && (
                    card.map((elem, ind) => {
                        return (
                            <View key={ind} style={styles.itens}>

                                <Text style={styles.dica}>
                                    {elem.dica}
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
                                        handlePress={handleNavAppExclude(elem.id)}
                                        width={50}
                                        height={50}
                                    />

                                </View>
                            </View>
                        );
                    })
                )}
                <DefaultButton
                    style={styles.button}
                    buttonText={"Exit"}
                    handlePress={handleNavAppBack}
                    width={300}
                    height={50}
                />
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