import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1207_9606}>
        <View style={styles.View_1207_9607}>
          <Text style={styles.Text_1207_9607}>Cook what you love</Text>
        </View>
        <View style={styles.View_1207_9608}>
          <Text style={styles.Text_1207_9608}>
            Get recipe recommendations based on what’s already in your pantry{" "}
          </Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3a2/227e/7dbcedab63b1ba715da09eb7a8aae034"
        }}
        style={styles.ImageBackground_1207_9609}
      />
      <View style={styles.View_1207_9613}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64d0/a78f/9df8c97a8f4327d9e9d10afbd69d35ad"
          }}
          style={styles.ImageBackground_1207_9614}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e43f/5709/07a31d7a1fd346de2f83d343b4eade85"
          }}
          style={styles.ImageBackground_1207_9615}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1c0/2511/7e67b186ff911c520978c1ea34d53331"
          }}
          style={styles.ImageBackground_1207_9616}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53cd/8f1d/c33d4b7dc480bfa4698d3a76169ce592"
          }}
          style={styles.ImageBackground_1207_9617}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa92/0b46/9f3d2307b9e6f8547c80bb584bc6eff7"
          }}
          style={styles.ImageBackground_1207_9618}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a99f/4b53/7726db0cec2fcad166229fac5782c317"
          }}
          style={styles.ImageBackground_1207_9620}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a99f/4b53/7726db0cec2fcad166229fac5782c317"
          }}
          style={styles.ImageBackground_1207_9622}
        />
      </View>
      <View style={styles.View_1207_9624}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b136/2787/2aa5a95a85be8c6ffe1b1ec42e0efbd6"
          }}
          style={styles.ImageBackground_1207_9625}
        />
        <View style={styles.View_1207_9626} />
      </View>
      <View style={styles.View_1207_9627}>
        <View style={styles.View_I1207_9627_350_11901}>
          <View style={styles.View_I1207_9627_350_11902} />
          <View style={styles.View_I1207_9627_350_11903}>
            <Text style={styles.Text_I1207_9627_350_11903}>Create Account</Text>
          </View>
        </View>
        <View style={styles.View_I1207_9627_350_11904}>
          <View style={styles.View_I1207_9627_350_11905} />
          <View style={styles.View_I1207_9627_350_11906}>
            <Text style={styles.Text_I1207_9627_350_11906}>Sign In</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(56, 75, 153, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1207_9606: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("13.524590163934427%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("53.00546448087432%")
  },
  View_1207_9607: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9607: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9608: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038253%"),
    justifyContent: "center"
  },
  Text_1207_9608: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  ImageBackground_1207_9609: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.66666666666667%"),
    top: hp("71.99453551912568%")
  },
  View_1207_9613: {
    width: wp("91.2%"),
    minWidth: wp("91.2%"),
    height: hp("46.72131147540984%"),
    minHeight: hp("46.72131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.333333333333336%"),
    top: hp("-8.19672131147541%")
  },
  ImageBackground_1207_9614: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1207_9615: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.73333333333333%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1207_9616: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.4535519125683%"),
    resizeMode: "cover"
  },
  ImageBackground_1207_9617: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.73333333333333%"),
    top: hp("24.4535519125683%"),
    resizeMode: "cover"
  },
  ImageBackground_1207_9618: {
    width: wp("5.067447916666667%"),
    height: hp("2.458999717170424%"),
    top: hp("2.1857923497267757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%")
  },
  ImageBackground_1207_9620: {
    width: wp("5.067447916666667%"),
    height: hp("2.458999717170424%"),
    top: hp("26.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666667%")
  },
  ImageBackground_1207_9622: {
    width: wp("5.067447916666667%"),
    height: hp("2.458999717170424%"),
    top: hp("2.1857923497267757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.86666666666667%")
  },
  View_1207_9624: {
    width: wp("68.8%"),
    minWidth: wp("68.8%"),
    height: hp("25.40983606557377%"),
    minHeight: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%"),
    top: hp("17.349726775956285%")
  },
  ImageBackground_1207_9625: {
    width: wp("68.8%"),
    minWidth: wp("68.8%"),
    height: hp("25.40983606557377%"),
    minHeight: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_9626: {
    width: wp("68.8%"),
    minWidth: wp("68.8%"),
    height: hp("25.40983606557377%"),
    minHeight: hp("25.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 176, 149, 1)"
  },
  View_1207_9627: {
    width: wp("92.14609375%"),
    minWidth: wp("92.14609375%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("101.09289617486338%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_9627_350_11901: {
    flexGrow: 1,
    width: wp("43.93971354166666%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.206380208333336%"),
    top: hp("0%")
  },
  View_I1207_9627_350_11902: {
    width: wp("43.93971354166666%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(240, 95, 87, 1)"
  },
  View_I1207_9627_350_11903: {
    width: wp("36.76588541666666%"),
    top: hp("1.7759562841530254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5868489583333343%"),
    justifyContent: "flex-start"
  },
  Text_I1207_9627_350_11903: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1207_9627_350_11904: {
    flexGrow: 1,
    width: wp("43.93971354166666%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1207_9627_350_11905: {
    width: wp("43.93971354166666%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1207_9627_350_11906: {
    width: wp("36.76588541666666%"),
    top: hp("1.7759562841530254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5868489583333334%"),
    justifyContent: "flex-start"
  },
  Text_I1207_9627_350_11906: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
