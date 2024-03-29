import * as React from 'react'
import { Image, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import Collapsible from 'react-native-collapsible';
import {forwardRef, useEffect, useImperativeHandle} from "react";

const downArrow = require('./assets/ic-expand-more.png');
const upArrow = require('./assets/ic-expand-less.png');

type SimpleAccordionProps = {
    title?: string,
    viewInside: React.ReactElement,
    startCollapsed?: boolean,
    showContentInsideOfCard?: boolean,
    showArrows?: boolean,
    arrowColor?: string,
    viewContainerStyle?: StyleProp<ViewStyle>,
    bannerStyle?: StyleProp<ViewStyle>,
    titleStyle?: StyleProp<TextStyle>,
    onStateChange?: (isCollapsed: boolean) => void
}

const SimpleAccordion = forwardRef(({
    title = "",
    viewInside,
    startCollapsed = true,
    showContentInsideOfCard = true,
    showArrows = true,
    arrowColor = "#000000",
    viewContainerStyle = {},
    bannerStyle = {},
    titleStyle = {},
    onStateChange = () => {}
} : SimpleAccordionProps, ref) => {
    const [isCollapsed, setIsCollapsed] = React.useState(startCollapsed);

    const open = () => {
        setIsCollapsed(false);
    }

    const close = () => {
        setIsCollapsed(true);
    }

    const toggle = () => {
        setIsCollapsed(!isCollapsed);
    }

    useImperativeHandle(ref, () => ({
        isCollapsed,
        open,
        close,
        toggle
    }));

    useEffect(() => {
        onStateChange(isCollapsed);
    }, [isCollapsed]);

    return (
        <View>
            <TouchableOpacity style={[
                styles.defaultBannerStyle,
                bannerStyle
            ]} onPress={() => setIsCollapsed(!isCollapsed)}>
                <View style={[styles.titleContainer]}>
                    <Text allowFontScaling={false} style={[styles.defaultTitleStyle, titleStyle]}>{title}</Text>
                </View>
                {
                    showArrows &&
                    <Image source={isCollapsed ? downArrow : upArrow} style={[styles.arrows, {tintColor: arrowColor}]}/>
                }
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed} style={[styles.collapsible]}>
                <View style={[
                    styles.defaultViewContainer,
                    showContentInsideOfCard ? styles.card : styles.nothing,
                    viewContainerStyle
                ]}>
                    {
                        viewInside
                    }
                </View>
            </Collapsible>
        </View>
    )
});

const styles = StyleSheet.create({
    nothing: {},
    arrows: {
        height: 32,
        width: 32,
        resizeMode: "contain"
    },
    defaultBannerStyle: {
        height: 60,
        flexDirection: "row",
        backgroundColor: "#E9E9E9",
        padding: 16,
        alignItems: "center"
    },
    defaultTitleStyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000000"
    },
    defaultViewContainer : {
        padding: 8,
        backgroundColor: '#FFFFFF'
    },
    card : {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5
    },
    titleContainer: {
        flex: 1
    },
    collapsible: {
        paddingBottom: 8
    }
});

export default SimpleAccordion;
