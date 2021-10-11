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
      <View style={styles.View_1207_10202}>
        <View style={styles.View_1207_10203} />
        <View style={styles.View_1207_10204}>
          <Text style={styles.Text_1207_10204}>Pantry List</Text>
        </View>
        <View style={styles.View_1207_10205}>
          <View style={styles.View_1207_10206} />
          <View style={styles.View_1207_10207}>
            <Text style={styles.Text_1207_10207}>Cauliflower</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/516d/efa7/87134c21d00a5f029562463a417db35f"
            }}
            style={styles.ImageBackground_1207_10208}
          />
        </View>
        <View style={styles.View_1207_10209}>
          <View style={styles.View_1207_10210} />
          <View style={styles.View_1207_10211}>
            <Text style={styles.Text_1207_10211}>Brown rice</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/516d/efa7/87134c21d00a5f029562463a417db35f"
            }}
            style={styles.ImageBackground_1207_10212}
          />
        </View>
        <View style={styles.View_1207_10213}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7717/5181/a1c4683de8df1374d342617283269df7"
            }}
            style={styles.ImageBackground_1207_10214}
          />
          <View style={styles.View_1207_10215}>
            <Text style={styles.Text_1207_10215}>Add Item</Text>
          </View>
        </View>
        <View style={styles.View_1207_10216}>
          <View style={styles.View_1207_10217}>
            <Text style={styles.Text_1207_10217}>Listening...</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c63/4713/ef7b41915bc455668e1821ec6ce61598"
            }}
            style={styles.ImageBackground_1207_10218}
          />
        </View>
      </View>
      <View style={styles.View_1207_10295}>
        <Text style={styles.Text_1207_10295}>
          What ingredients do you have at home right now?
        </Text>
      </View>
      <View style={styles.View_1207_10296}>
        <Text style={styles.Text_1207_10296}>Skip for Now</Text>
      </View>
      <View style={styles.View_1207_10297}>
        <Text style={styles.Text_1207_10297}>
          We’ll help keep track of what’s in your pantry and recommend new
          recipes based on ingredients you already have.
        </Text>
      </View>
      <View style={styles.View_1207_10298}>
        <Text style={styles.Text_1207_10298}>2 of 2</Text>
      </View>
      <View style={styles.View_1207_10299}>
        <Text style={styles.Text_1207_10299}>
          Tap the mic and we’ll transcribe the list for you or add items
          manually
        </Text>
      </View>
      <View style={styles.View_1207_10300}>
        <View style={styles.View_1207_10301} />
      </View>
      <View style={styles.View_1207_10302}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/866e/e2dc/c29bb1985b89815f29daf9773d92ec66"
          }}
          style={styles.ImageBackground_1207_10303}
        />
        <View style={styles.View_1207_10304} />
        <View style={styles.View_1207_10305} />
        <View style={styles.View_1207_10306} />
        <View style={styles.View_1207_10307} />
        <View style={styles.View_1207_10308} />
        <View style={styles.View_1207_10309} />
      </View>
      <View style={styles.View_1207_10310}>
        <View style={styles.View_1207_10311}>
          <View style={styles.View_1207_10312}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ced8/617f/bb3b333f3ddcd9c5e46eb0f4cab1e521"
              }}
              style={styles.ImageBackground_I1207_10312_141_971}
            />
          </View>
        </View>
        <View style={styles.View_1207_10313}>
          <Text style={styles.Text_1207_10313}>Tap to Talk</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1207_10202: {
    width: wp("56.00000000000001%"),
    minWidth: wp("56.00000000000001%"),
    height: hp("39.24590564164959%"),
    minHeight: hp("39.24590564164959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.33333333333333%"),
    top: hp("56.4207650273224%")
  },
  View_1207_10203: {
    width: wp("56.00000000000001%"),
    minWidth: wp("56.00000000000001%"),
    height: hp("39.24590564164959%"),
    minHeight: hp("39.24590564164959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8.960000038146973,
    borderTopRightRadius: 8.960000038146973,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1207_10204: {
    width: wp("19.861328125%"),
    minWidth: wp("19.861328125%"),
    minHeight: hp("2.6010898944458676%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3893229166666714%"),
    top: hp("2.448093435151982%"),
    justifyContent: "flex-start"
  },
  Text_1207_10204: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 11,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10205: {
    width: wp("51.221354166666664%"),
    minWidth: wp("51.221354166666664%"),
    height: hp("4.284151004311817%"),
    minHeight: hp("4.284151004311817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3893229166666714%"),
    top: hp("7.497268426613729%")
  },
  View_1207_10206: {
    width: wp("51.221354166666664%"),
    minWidth: wp("51.221354166666664%"),
    height: hp("4.284151004311817%"),
    minHeight: hp("4.284151004311817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1207_10207: {
    width: wp("12.693359374999998%"),
    top: hp("1.2240467175760017%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.557356770833337%"),
    justifyContent: "flex-start"
  },
  Text_1207_10207: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 6.960000038146973,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.08960000038146973,
    textTransform: "none"
  },
  ImageBackground_1207_10208: {
    width: wp("3.5839843750000004%"),
    height: hp("1.8360659072959358%"),
    top: hp("1.1475443188609944%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.583984375%")
  },
  View_1207_10209: {
    width: wp("51.221354166666664%"),
    minWidth: wp("51.221354166666664%"),
    height: hp("4.284151004311817%"),
    minHeight: hp("4.284151004311817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3893229166666714%"),
    top: hp("12.393446958781595%")
  },
  View_1207_10210: {
    width: wp("51.221354166666664%"),
    minWidth: wp("51.221354166666664%"),
    height: hp("4.284151004311817%"),
    minHeight: hp("4.284151004311817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1207_10211: {
    width: wp("11.797330729166667%"),
    top: hp("1.2240550557120855%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.557356770833337%"),
    justifyContent: "flex-start"
  },
  Text_1207_10211: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 6.960000038146973,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.08960000038146973,
    textTransform: "none"
  },
  ImageBackground_1207_10212: {
    width: wp("3.5839843750000004%"),
    height: hp("1.8360659072959358%"),
    top: hp("1.1475526569970924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.583984375%")
  },
  View_1207_10213: {
    width: wp("16.57610677083333%"),
    minWidth: wp("16.57610677083333%"),
    height: hp("1.8360659072959358%"),
    minHeight: hp("1.8360659072959358%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.27200520833334%"),
    top: hp("19.125683060109296%")
  },
  ImageBackground_1207_10214: {
    width: wp("3.5839843750000004%"),
    height: hp("1.8360659072959358%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_10215: {
    width: wp("11.797330729166667%"),
    top: hp("0.0765107368510769%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.778776041666674%"),
    justifyContent: "flex-start"
  },
  Text_1207_10215: {
    color: "rgba(56, 75, 153, 1)",
    fontSize: 6.960000038146973,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.08960000038146973,
    textTransform: "none"
  },
  View_1207_10216: {
    width: wp("54.58138020833333%"),
    minWidth: wp("54.58138020833333%"),
    height: hp("8.032785217618683%"),
    minHeight: hp("8.032785217618683%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7467447916666785%"),
    top: hp("27.61750768442623%")
  },
  View_1207_10217: {
    width: wp("12.245312499999999%"),
    top: hp("6.349724107752735%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.50397135416666%"),
    justifyContent: "flex-start"
  },
  Text_1207_10217: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 6.960000038146973,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.08960000038146973,
    textTransform: "none"
  },
  ImageBackground_1207_10218: {
    width: wp("54.58138020833333%"),
    height: hp("4.437155801741803%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_10295: {
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
  Text_1207_10295: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 20,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10296: {
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
  Text_1207_10296: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10297: {
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
  Text_1207_10297: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10298: {
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
  Text_1207_10298: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10299: {
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
  Text_1207_10299: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10300: {
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
  View_1207_10301: {
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
  View_1207_10302: {
    width: wp("89.019921875%"),
    minWidth: wp("89.019921875%"),
    height: hp("46.83795366130891%"),
    minHeight: hp("46.83795366130891%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333463541666667%"),
    top: hp("37.295081967213115%")
  },
  ImageBackground_1207_10303: {
    width: wp("69.84824218749999%"),
    minWidth: wp("69.84824218749999%"),
    height: hp("33.25020211641906%"),
    minHeight: hp("33.25020211641906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.585807291666665%"),
    top: hp("6.7938716033768785%")
  },
  View_1207_10304: {
    width: wp("69.84824218749999%"),
    minWidth: wp("69.84824218749999%"),
    height: hp("33.25020211641906%"),
    minHeight: hp("33.25020211641906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.585807291666665%"),
    top: hp("6.7938716033768785%"),
    backgroundColor: "rgba(243, 176, 149, 1)"
  },
  View_1207_10305: {
    width: wp("16.157942708333334%"),
    minWidth: wp("16.157942708333334%"),
    height: hp("8.515538283384563%"),
    minHeight: hp("8.515538283384563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.6953125%"),
    top: hp("10.944945955537058%"),
    backgroundColor: "rgba(255, 224, 211, 1)"
  },
  View_1207_10306: {
    width: wp("16.157942708333334%"),
    minWidth: wp("16.157942708333334%"),
    height: hp("8.515538283384563%"),
    minHeight: hp("8.515538283384563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.165429687499994%"),
    top: hp("23.227670805050373%"),
    backgroundColor: "rgba(56, 75, 153, 1)"
  },
  View_1207_10307: {
    width: wp("16.157942708333334%"),
    minWidth: wp("16.157942708333334%"),
    height: hp("8.515538283384563%"),
    minHeight: hp("8.515538283384563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.18352864583333%"),
    top: hp("18.86435753660775%"),
    backgroundColor: "rgba(32, 131, 113, 1)"
  },
  View_1207_10308: {
    width: wp("16.157942708333334%"),
    minWidth: wp("16.157942708333334%"),
    height: hp("8.515538283384563%"),
    minHeight: hp("8.515538283384563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.297265624999998%"),
    top: hp("20.647751438161713%"),
    backgroundColor: "rgba(32, 131, 113, 1)"
  },
  View_1207_10309: {
    width: wp("16.157877604166668%"),
    minWidth: wp("16.157877604166668%"),
    height: hp("8.515538283384563%"),
    minHeight: hp("8.515538283384563%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.41328125%"),
    top: hp("31.79827413923754%"),
    backgroundColor: "rgba(243, 176, 149, 1)"
  },
  View_1207_10310: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%"),
    top: hp("102.45901639344261%")
  },
  View_1207_10311: {
    width: wp("7.199999999999999%"),
    minWidth: wp("7.199999999999999%"),
    height: hp("3.6885245901639343%"),
    minHeight: hp("3.6885245901639343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10312: {
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
  ImageBackground_I1207_10312_141_971: {
    flexGrow: 1,
    width: wp("4.2%"),
    height: hp("2.920081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5%"),
    top: hp("0.3842213114754287%")
  },
  View_1207_10313: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333329%"),
    top: hp("0.40983606557379915%"),
    justifyContent: "flex-start"
  },
  Text_1207_10313: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "800",
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
