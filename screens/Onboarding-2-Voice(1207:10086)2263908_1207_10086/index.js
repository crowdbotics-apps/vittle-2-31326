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
      <View style={styles.View_1207_10087}>
        <Text style={styles.Text_1207_10087}>
          What ingredients do you have at home right now?
        </Text>
      </View>
      <View style={styles.View_1207_10088}>
        <Text style={styles.Text_1207_10088}>Skip for Now</Text>
      </View>
      <View style={styles.View_1207_10089}>
        <Text style={styles.Text_1207_10089}>
          We’ll help keep track of what’s in your pantry and recommend new
          recipes based on ingredients you already have.
        </Text>
      </View>
      <View style={styles.View_1207_10090}>
        <Text style={styles.Text_1207_10090}>2 of 2</Text>
      </View>
      <View style={styles.View_1207_10091}>
        <Text style={styles.Text_1207_10091}>
          Tap the mic and we’ll transcribe the list for you or enter it manually
        </Text>
      </View>
      <View style={styles.View_1207_10092}>
        <View style={styles.View_1207_10093} />
        <View style={styles.View_1207_10094}>
          <View style={styles.View_1207_10095}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ced8/617f/bb3b333f3ddcd9c5e46eb0f4cab1e521"
              }}
              style={styles.ImageBackground_I1207_10095_141_971}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1207_10096}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65b1/a0da/2b47e0584f6e1b864985a59a8cb1a597"
          }}
          style={styles.ImageBackground_1207_10097}
        />
        <View style={styles.View_1207_10098} />
        <View style={styles.View_1207_10099} />
        <View style={styles.View_1207_10100} />
        <View style={styles.View_1207_10101} />
        <View style={styles.View_1207_10102} />
        <View style={styles.View_1207_10103} />
      </View>
      <View style={styles.View_1207_10104} />
      <View style={styles.View_1207_10105} />
      <View style={styles.View_1207_10106}>
        <Text style={styles.Text_1207_10106}>Pantry List</Text>
      </View>
      <View style={styles.View_1207_10107}>
        <View style={styles.View_1207_10108} />
        <View style={styles.View_1207_10109}>
          <Text style={styles.Text_1207_10109}>Cauliflower</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b417/4361/52b6335af7befb2e84b14e053138a82b"
          }}
          style={styles.ImageBackground_1207_10110}
        />
      </View>
      <View style={styles.View_1207_10111}>
        <View style={styles.View_1207_10112} />
        <View style={styles.View_1207_10113}>
          <Text style={styles.Text_1207_10113}>Brown rice</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b417/4361/52b6335af7befb2e84b14e053138a82b"
          }}
          style={styles.ImageBackground_1207_10114}
        />
      </View>
      <View style={styles.View_1207_10115}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b2e/cd39/7d8d298465ef97861c31b85223e2e1ed"
          }}
          style={styles.ImageBackground_1207_10116}
        />
        <View style={styles.View_1207_10117}>
          <Text style={styles.Text_1207_10117}>Add Item</Text>
        </View>
      </View>
      <View style={styles.View_1207_10118}>
        <View style={styles.View_1207_10119} />
        <View style={styles.View_1207_10120}>
          <View style={styles.View_1207_10121}>
            <Text style={styles.Text_1207_10121}>Done</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1207_10122}>
        <View style={styles.View_1207_10123}>
          <Text style={styles.Text_1207_10123}>Listening...</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/972e/aebd/9eb28fc7f7a34a536ba70cf032e5d727"
          }}
          style={styles.ImageBackground_1207_10124}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1207_10087: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    minHeight: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("15.027322404371585%"),
    justifyContent: "flex-start"
  },
  Text_1207_10087: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 20,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10088: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.06666666666666%"),
    top: hp("4.371584699453552%"),
    justifyContent: "flex-start"
  },
  Text_1207_10088: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10089: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("26.50273224043716%"),
    justifyContent: "flex-start"
  },
  Text_1207_10089: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10090: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("4.371584699453552%"),
    justifyContent: "flex-start"
  },
  Text_1207_10090: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10091: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("39.89071038251366%"),
    justifyContent: "flex-start"
  },
  Text_1207_10091: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10092: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.93333333333334%"),
    top: hp("101.09289617486338%")
  },
  View_1207_10093: {
    width: wp("12.8%"),
    minWidth: wp("12.8%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10094: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("1.3661202185792263%")
  },
  View_1207_10095: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1207_10095_141_971: {
    flexGrow: 1,
    width: wp("4.2%"),
    height: hp("2.920081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5%"),
    top: hp("0.3842213114754287%")
  },
  View_1207_10096: {
    width: wp("83.47845052083333%"),
    minWidth: wp("83.47845052083333%"),
    height: hp("45.97023718995475%"),
    minHeight: hp("45.97023718995475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7334635416666666%"),
    top: hp("48.08743169398907%")
  },
  ImageBackground_1207_10097: {
    width: wp("77.06243489583333%"),
    minWidth: wp("77.06243489583333%"),
    height: hp("41.42295128660775%"),
    minHeight: hp("41.42295128660775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.208007812500001%"),
    top: hp("2.2736429516735086%")
  },
  View_1207_10098: {
    width: wp("77.06243489583333%"),
    minWidth: wp("77.06243489583333%"),
    height: hp("41.42295128660775%"),
    minHeight: hp("41.42295128660775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.208007812500001%"),
    top: hp("2.2736429516735086%"),
    backgroundColor: "rgba(243, 176, 149, 1)"
  },
  View_1207_10099: {
    width: wp("15.129752604166665%"),
    minWidth: wp("15.129752604166665%"),
    height: hp("8.368953850751366%"),
    minHeight: hp("8.368953850751366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.678906250000004%"),
    top: hp("29.092473931651305%"),
    backgroundColor: "rgba(255, 224, 211, 1)"
  },
  View_1207_10100: {
    width: wp("15.129752604166665%"),
    minWidth: wp("15.129752604166665%"),
    height: hp("8.368953850751366%"),
    minHeight: hp("8.368953850751366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.416927083333334%"),
    top: hp("13.405121349897541%"),
    backgroundColor: "rgba(18, 55, 209, 1)"
  },
  View_1207_10101: {
    width: wp("15.129752604166665%"),
    minWidth: wp("15.129752604166665%"),
    height: hp("8.368953850751366%"),
    minHeight: hp("8.368953850751366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.676041666666666%"),
    top: hp("14.86554588776469%"),
    backgroundColor: "rgba(32, 131, 113, 1)"
  },
  View_1207_10102: {
    width: wp("15.129752604166665%"),
    minWidth: wp("15.129752604166665%"),
    height: hp("8.368953850751366%"),
    minHeight: hp("8.368953850751366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.678776041666666%"),
    top: hp("20.460693692900442%"),
    backgroundColor: "rgba(32, 131, 113, 1)"
  },
  View_1207_10103: {
    width: wp("15.129752604166665%"),
    minWidth: wp("15.129752604166665%"),
    height: hp("8.368953850751366%"),
    minHeight: hp("8.368953850751366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.64075520833333%"),
    top: hp("5.421772941214144%"),
    backgroundColor: "rgba(243, 176, 149, 1)"
  },
  View_1207_10104: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.30000001192092896
  },
  View_1207_10105: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("85.10928961748634%"),
    minHeight: hp("85.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.50273224043716%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1207_10106: {
    width: wp("35.46666666666667%"),
    minWidth: wp("35.46666666666667%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("30.87431693989071%"),
    justifyContent: "flex-start"
  },
  Text_1207_10106: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10107: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("39.89071038251366%")
  },
  View_1207_10108: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1207_10109: {
    width: wp("22.666666666666664%"),
    top: hp("2.185792349726782%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    justifyContent: "flex-start"
  },
  Text_1207_10109: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_10110: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000001%")
  },
  View_1207_10111: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("48.63387978142077%")
  },
  View_1207_10112: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1207_10113: {
    width: wp("21.066666666666666%"),
    top: hp("2.185792349726775%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.06666666666667%"),
    justifyContent: "flex-start"
  },
  Text_1207_10113: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_10114: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.0491803278688465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.400000000000001%")
  },
  View_1207_10115: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.200000000000001%"),
    top: hp("60.65573770491803%")
  },
  ImageBackground_1207_10116: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_10117: {
    width: wp("21.066666666666666%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333333%"),
    justifyContent: "flex-start"
  },
  Text_1207_10117: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10118: {
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
  View_1207_10119: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 95, 87, 1)"
  },
  View_1207_10120: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.26666666666667%"),
    top: hp("1.639344262295083%")
  },
  View_1207_10121: {
    width: wp("11.200000000000001%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1207_10121: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10122: {
    width: wp("97.46666666666667%"),
    minWidth: wp("97.46666666666667%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333335%"),
    top: hp("75.81967213114754%")
  },
  View_1207_10123: {
    width: wp("21.866666666666667%"),
    top: hp("11.338797814207652%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.4%"),
    justifyContent: "flex-start"
  },
  Text_1207_10123: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_10124: {
    width: wp("97.46666666666667%"),
    height: hp("7.923497267759563%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
