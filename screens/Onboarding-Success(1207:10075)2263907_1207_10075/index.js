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
      <View style={styles.View_1207_10076} />
      <View style={styles.View_1207_10077}>
        <View style={styles.View_1207_10078} />
        <View style={styles.View_1207_10079}>
          <View style={styles.View_1207_10080}>
            <Text style={styles.Text_1207_10080}>Start Cooking</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1207_10081}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8201/aa9b/53ac315122ca07d390ecc06c037e02b5"
          }}
          style={styles.ImageBackground_1207_10082}
        />
        <View style={styles.View_1207_10083} />
      </View>
      <View style={styles.View_1207_10084}>
        <Text style={styles.Text_1207_10084}>You’re all set!</Text>
      </View>
      <View style={styles.View_1207_10085}>
        <Text style={styles.Text_1207_10085}>
          Diam dolor amet hendrerit erat diam bibendum sit nisl. Donec varius et
          vitae, odio.
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1207_10076: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10077: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("101.09289617486338%")
  },
  View_1207_10078: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 232, 230, 1)"
  },
  View_1207_10079: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.93333333333333%"),
    top: hp("1.639344262295083%")
  },
  View_1207_10080: {
    width: wp("29.86666666666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1207_10080: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10081: {
    width: wp("54.655859375000006%"),
    minWidth: wp("54.655859375000006%"),
    height: hp("26.991847304047127%"),
    minHeight: hp("26.991847304047127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.666666666666664%"),
    top: hp("15.027322404371585%")
  },
  ImageBackground_1207_10082: {
    width: wp("54.655859375000006%"),
    minWidth: wp("54.655859375000006%"),
    height: hp("26.991847304047127%"),
    minHeight: hp("26.991847304047127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10083: {
    width: wp("54.655859375000006%"),
    minWidth: wp("54.655859375000006%"),
    height: hp("26.991847304047127%"),
    minHeight: hp("26.991847304047127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 176, 149, 1)"
  },
  View_1207_10084: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.46666666666667%"),
    top: hp("45.62841530054645%"),
    justifyContent: "flex-start"
  },
  Text_1207_10084: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10085: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("53.14207650273224%"),
    justifyContent: "flex-start"
  },
  Text_1207_10085: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
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
