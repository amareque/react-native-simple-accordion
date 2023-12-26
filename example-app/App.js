import {Alert, Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import SimpleAccordion from "react-native-simple-accordion";
import Constants from 'expo-constants';
import {useRef, useState} from "react";

export default function App() {
    const view = (
        <View>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue lacus ligula, at auctor felis ultrices at. Nullam porta metus nec odio fringilla fringilla. Nullam eget scelerisque metus. Nunc nec leo porta, pulvinar elit non, sagittis ipsum. Maecenas vel sem vel ipsum aliquet pharetra non eget neque. Cras vitae pulvinar purus, sed dictum augue. Proin mauris risus, dignissim a placerat ut, porta id lorem. Ut sit amet sapien nec metus porta dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas sit amet augue vestibulum, imperdiet massa vitae, mollis diam. Suspendisse dictum suscipit metus, et hendrerit orci. Integer id posuere velit. Ut aliquam auctor augue egestas tincidunt. Nulla tempus cursus sapien.</Text>
        </View>
    )

    const viewWithButton = (
        <View>
            <Text style={{marginBottom: 8}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue lacus ligula, at auctor felis ultrices at. Nullam porta metus nec odio fringilla fringilla. Nullam eget scelerisque metus. Nunc nec leo porta, pulvinar elit non, sagittis ipsum. Maecenas vel sem vel ipsum aliquet pharetra non eget neque. Cras vitae pulvinar purus, sed dictum augue. Proin mauris risus, dignissim a placerat ut, porta id lorem. Ut sit amet sapien nec metus porta dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas sit amet augue vestibulum, imperdiet massa vitae, mollis diam. Suspendisse dictum suscipit metus, et hendrerit orci. Integer id posuere velit. Ut aliquam auctor augue egestas tincidunt. Nulla tempus cursus sapien.</Text>
            <Button title={"Test Button"} onPress={() => Alert.alert("Alert", "Test Button inside Accordion clicked.")}/>
        </View>
    )

    const simpleAccordionExample = (
        <View>
            <View style={styles.exampleBox}>
                <Text style={styles.exampleNumber}>Example #1</Text>
                <Text style={styles.exampleTitle}>Simple Accordion</Text>
            </View>
            <SimpleAccordion viewInside={view} title={"Simple Accordion"}/>
        </View>
    )

    const noCardExample = (
        <View>
            <View style={styles.exampleBox}>
                <Text style={styles.exampleNumber}>Example #2</Text>
                <Text style={styles.exampleTitle}>Simple Accordion - No Card</Text>
            </View>
            <SimpleAccordion viewInside={view} title={"No Card Accordion"} showContentInsideOfCard={false} viewContainerStyle={{backgroundColor: "#E0E0E0"}}/>
        </View>
    )

    const customStylesExample = (
        <View>
            <View style={styles.exampleBox}>
                <Text style={styles.exampleNumber}>Example #3</Text>
                <Text style={styles.exampleTitle}>Simple Accordion - Custom Styles</Text>
            </View>
            <SimpleAccordion viewInside={view} title={"Custom Style Accordion"} titleStyle={{fontStyle: "italic", color: "#FFFFFF", textDecorationLine: "underline"}} bannerStyle={{backgroundColor: "#7CA5B8"}} viewContainerStyle={{backgroundColor: "#C6EBBE"}}/>
        </View>
    )

    const noArrowsExample = (
        <View>
            <View style={styles.exampleBox}>
                <Text style={styles.exampleNumber}>Example #4</Text>
                <Text style={styles.exampleTitle}>Simple Accordion - No Arrows</Text>
            </View>
            <SimpleAccordion viewInside={view} title={"No Arrows Accordion"} showArrows={false}/>
        </View>
    )

    const customArrowColorExample = (
        <View>
            <View style={styles.exampleBox}>
                <Text style={styles.exampleNumber}>Example #5</Text>
                <Text style={styles.exampleTitle}>Simple Accordion - Custom Arrow Color</Text>
            </View>
            <SimpleAccordion viewInside={view} title={"Custom Arrow Color Accordion"} arrowColor={"#FF4A1C"}/>
        </View>
    )

    const accordionWithButton = (
        <View>
            <View style={styles.exampleBox}>
                <Text style={styles.exampleNumber}>Example #7</Text>
                <Text style={styles.exampleTitle}>Simple Accordion with button in view</Text>
            </View>
            <SimpleAccordion viewInside={viewWithButton} title={"Simple Accordion With Button"}/>
        </View>
    )

    const accordionRef = useRef(null);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const accordionWithRefAndCallback = (
        <View>
            <View style={styles.exampleBox}>
                <Text style={styles.exampleNumber}>Example #6</Text>
                <Text style={styles.exampleTitle}>Simple Accordion with ref and callback</Text>
                <Text style={styles.exampleTitle}>IsCollapsed: {isCollapsed.toString()}</Text>
            </View>
            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-around", marginBottom: 16}}>
                <Button title={"Open"} onPress={() => accordionRef.current?.open()}/>
                <Button title={"Close"} onPress={() => accordionRef.current?.close()}/>
                <Button title={"Toggle"} onPress={() => accordionRef.current?.toggle()}/>
            </View>
            <SimpleAccordion
                ref={accordionRef}
                viewInside={view} title={"Simple Accordion With ref and callback"}
                onStateChange={(isCollapsed) => setIsCollapsed(isCollapsed)}
            />
            <View>
            </View>
        </View>
    )

    return (
        <ScrollView style={styles.container}>
            {
                simpleAccordionExample
            }
            <View style={styles.separator}/>
            {
                noCardExample
            }
            <View style={styles.separator}/>
            {
                customStylesExample
            }
            <View style={styles.separator}/>
            {
                noArrowsExample
            }
            <View style={styles.separator}/>
            {
                customArrowColorExample
            }

            <View style={styles.separator}/>
            {
                accordionWithRefAndCallback
            }
            <View style={styles.separator}/>
            {
                accordionWithButton
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#fff',
        marginBottom: 32
    },
    exampleBox: {
        marginVertical: 16,
        paddingHorizontal: 16
    },
    exampleNumber: {
        fontSize: 18,
        fontWeight: "bold"
    },
    exampleTitle: {
        fontSize: 16
    },
    separator: {
        height: 5,
        backgroundColor: "#000000",
        marginVertical: 16
    }
});
