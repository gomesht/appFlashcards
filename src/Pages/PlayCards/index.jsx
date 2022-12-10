import { useNavigation } from "@react-navigation/native";
import e from "cors";
import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import config from "../../../config/config.json"
import DefaultButton from "../../Components/Common/DefaultButton";

export default function PlayCards({ route }) {
    const { index, cardsArray } = route.params;
    const navigation = useNavigation();
    const [card, setCard] = useState(null);
    const [stackCard, setStackCard] = useState(cardsArray);
    const [showText, setShowText] = useState(false);


    const handleNavAppSee = () => {
        // criar função para mostrar a explicação apenas após o click
        setShowText(true)

        console.log("Ver explicação");
    };
    const handleNavAppNext = () => {
        //criar função para renderizar conteúdo do proximo card

        setShowText(false)
        navigation.navigate("PlayCards", { index: Number(index + 1), cardsArray: stackCard });
    };
    const handleNavAppBack = () => {
        navigation.navigate("Start");
    };

    async function selectCards() {
        let reqs = await fetch(config.urlRootNode + 'read/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        let ress = await reqs.json();
        // ress.data.map((stackCard[index]) => {
        //     console.log(stackCard[index].dica);
        // })
        setCard(ress);
    }
    useEffect(() => {
        index === 0 &&
            selectCards();
    }, [index]);
    function randOrd() {
        return (Math.round(Math.random()) - 0.5);
    }
    function orderCards() {
        card && (
            (setStackCard(card.sort(() => Math.random() - 0.5)))
        )

    }
    useEffect(() => {
        card && card.length && orderCards();
    }, [card]);



    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {stackCard && stackCard.length &&
                    <View>
                        <Text style={styles.title}>
                            Dica:
                        </Text>
                        <Text style={styles.dica}>
                            {stackCard[index].dica}
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
                        {showText &&
                            <Text style={styles.content}>
                                {stackCard[index].texto}
                            </Text>
                        }
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
                }

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
        marginBottom: 10,
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
    }
});