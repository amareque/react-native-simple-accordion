<div align="center">
  <a href="#">
  	<img src="http://#.com/media/react-native-simple-accordion/example-gif.gif" alt="Simple Accordion Gif" height="160" />
  </a>
  <br>
  <br>
  <p>
    <b>React Native Simple Accordion</b>
  </p>
  <p>
     <i>React Native Simple Accordion is a lightweight and easy to use package that lets you encapsulate a view inside an accordion that's expandable and collapsable</i>
  </p>
  <p>

[![NPM version](https://img.shields.io/npm/v/react-native-simple-accordion)]()
[![Github Stars](https://img.shields.io/github/stars/#/react-native-simple-accordion?style=social)](https://github.com/#/react-native-simple-accordion#readme)
  </p>
</div>


## Features ✨

* Fast.
* Lightweight.
* Easy to use.
* Highly customizable.

<br>

## Install 🧰

You can install react-native-simple-accordion by running the following command
```
npm install react-native-simple-accordion
```

<br>

## Usage 💡
1. Add the following import statement
```
import { SimpleAccordion } from 'react-native-simple-accordion';
```
2. Add the Simple Accordion Component
```
<SimpleAccordion viewInside={<View/>} title={"My Accordion Title"}/>
```
3. Replace the <View/> for whatever view you want to display inside the accordion. 

4. Customize your accordion with the customization options.

<br>

## Necessary Attributes ⚠️

| Attribute         | Description                                        | Type        | 
| ----------------- |:--------------------------------------------------:| ----------- |
| viewInside        | The view that goes inside of the accordion         | JSX.Element |

<br>

## Customizable Attributes 🕹️
<table>
   <thead>
      <th>Attribute</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default Value</th>
   </thead>
   <tbody>
      <tr>
         <td>title</td>
         <td>The accordions title	</td>
         <td>string</td>
         <td>""</td>
      </tr>
      <tr>
         <td>startCollapsed</td>
         <td>Defines if the accordion starts collapsed or expanded	</td>
         <td>boolean</td>
         <td>true</td>
      </tr>
      <tr>
         <td>showContentInsideOfCard</td>
         <td>Defines if the accordion shows it's content inside a card or not	</td>
         <td>boolean</td>
         <td>true</td>
      </tr>
      <tr>
         <td>showArrows</td>
         <td>Defines if the accordion shows arrows at it's right side	</td>
         <td>boolean</td>
         <td>true</td>
      </tr>
      <tr>
         <td>viewContainerStyle</td>
         <td>The style of the container of viewInside attribute	</td>
         <td>StyleProp&lt;ViewStyle&gt;</td>
         <td>
<pre>
{
   padding: 8,
   backgroundColor: '#FFFFFF'
}
</pre>
         </td>
      </tr>
      <tr>
         <td>bannerStyle</td>
         <td>The style of the banner	</td>
         <td>StyleProp&lt;ViewStyle&gt;</td>
         <td>
<pre>
{
     height: 60,
     flexDirection: "row",
     backgroundColor: "#E9E9E9",
     padding: 16,
     alignItems: "center"
 }
</pre>
         </td>
      </tr>
      <tr>
         <td>titleStyle	</td>
         <td>The style of the title	</td>
         <td>StyleProp&lt;TextStyle&gt;</td>
         <td>
<pre>
{
   flex: 1
}
</pre>
      </tr>
      <tr>
         <td>arrowColor</td>
         <td>The tint color of the arrows</td>
         <td>string</td>
         <td>"#000000"</td>
      </tr>
   </tbody>
</table>

<br>

## Try it yourself 📱
Try it on the expo app on your device

[![Expo QR](http://#.com/media/react-native-simple-accordion/expo-qr.png)](https://expo.io/@#/simple-accordion-example)

or try this [Snack](https://snack.expo.io/@#/simple-accordion-example-snack)

## Examples 📝

With view =
```
<View>
  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue lacus ligula, at auctor felis ultrices at. Nullam porta metus nec odio fringilla fringilla. Nullam eget scelerisque metus. Nunc nec leo porta, pulvinar elit non, sagittis ipsum. Maecenas vel sem vel ipsum aliquet pharetra non eget neque. Cras vitae pulvinar purus, sed dictum augue. Proin mauris risus, dignissim a placerat ut, porta id lorem. Ut sit amet sapien nec metus porta dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas sit amet augue vestibulum, imperdiet massa vitae, mollis diam. Suspendisse dictum suscipit metus, et hendrerit orci. Integer id posuere velit. Ut aliquam auctor augue egestas tincidunt. Nulla tempus cursus sapien.</Text>
</View>
```

<img src="http://#.com/media/react-native-simple-accordion/example-1.jpg" alt="Simple Accordion Gif" height="160" />


Simple accordion
```
<SimpleAccordion viewInside={view} title={"Simple Accordion"}/>
```

<img src="http://#.com/media/react-native-simple-accordion/example-2.jpg" alt="Simple Accordion Gif" height="160" />


No Card accordion
```
<SimpleAccordion viewInside={view} title={"No Card Accordion"} showContentInsideOfCard={false} viewContainerStyle={{backgroundColor: "#E0E0E0"}}/>
```

<img src="http://#.com/media/react-native-simple-accordion/example-3.jpg" alt="Simple Accordion Gif" height="160" />

Custom Style accordion
```
<SimpleAccordion viewInside={view} title={"Custom Style Accordion"} titleStyle={{fontStyle: "italic", color: "#FFFFFF", textDecorationLine: "underline"}} bannerStyle={{backgroundColor: "#7CA5B8"}} viewContainerStyle={{backgroundColor: "#C6EBBE"}}/>
```

<img src="http://#.com/media/react-native-simple-accordion/example-4.jpg" alt="Simple Accordion Gif" height="160" />

No Arrow accordion
```
<SimpleAccordion viewInside={view} title={"No Arrows Accordion"} showArrows={false}/>
```

<img src="http://#.com/media/react-native-simple-accordion/example-5.jpg" alt="Simple Accordion Gif" height="160" />

Custom Arrow Color Accordion
```
<SimpleAccordion viewInside={view} title={"Custom Arrow Color Accordion"} />
```

<img src="http://#.com/media/react-native-simple-accordion/example-6.jpg" alt="Simple Accordion Gif" height="160" />


With view (with button) = 
```
<View>
  <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum congue lacus ligula, at auctor felis ultrices at. Nullam porta metus nec odio fringilla fringilla. Nullam eget scelerisque metus. Nunc nec leo porta, pulvinar elit non, sagittis ipsum. Maecenas vel sem vel ipsum aliquet pharetra non eget neque. Cras vitae pulvinar purus, sed dictum augue. Proin mauris risus, dignissim a placerat ut, porta id lorem. Ut sit amet sapien nec metus porta dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas sit amet augue vestibulum, imperdiet massa vitae, mollis diam. Suspendisse dictum suscipit metus, et hendrerit orci. Integer id posuere velit. Ut aliquam auctor augue egestas tincidunt. Nulla tempus cursus sapien.</Text>
  <Button title={"Test Button"} onPress={() => Alert.alert("Test button clicked")}/>
</View>
```

```
<SimpleAccordion viewInside={viewWithButton} title={"Simple Accordion With Button"}/>
```

<br>

## Contributing 🍰 

This is my first publicly available package so until I figure out some guidelines and tools to work with others I won't
be looking at forks and pull requests. If you want me to improve this package, feel free to reach out to me and I'll 
gladly update it.

<br>

## License ⚖️
MIT