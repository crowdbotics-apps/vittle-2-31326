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
      <View style={styles.View_1207_10925}>
        <Text style={styles.Text_1207_10925}>Account</Text>
      </View>
      <View style={styles.View_1207_10926}>
        <View style={styles.View_I1207_10926_236_7276}>
          <View style={styles.View_I1207_10926_236_7277} />
          <View style={styles.View_I1207_10926_236_7282}>
            <Text style={styles.Text_I1207_10926_236_7282}>Home</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/255a/5f36/09d343d8e23e53261aff4eced400d329"
            }}
            style={styles.ImageBackground_I1207_10926_236_7436}
          />
        </View>
        <View style={styles.View_I1207_10926_236_7283}>
          <View style={styles.View_I1207_10926_236_7285} />
          <View style={styles.View_I1207_10926_236_7289}>
            <Text style={styles.Text_I1207_10926_236_7289}>Account</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/91e4/1f22/8e9bc2d49ab15c8fa4aa569f3aaf1b4a"
            }}
            style={styles.ImageBackground_I1207_10926_236_7424}
          />
        </View>
        <View style={styles.View_I1207_10926_236_7292}>
          <View style={styles.View_I1207_10926_236_7293} />
          <View style={styles.View_I1207_10926_236_7295}>
            <Text style={styles.Text_I1207_10926_236_7295}>Cart</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e857/90f2/f4f48a1445e28ed495491575672de97c"
            }}
            style={styles.ImageBackground_I1207_10926_236_7427}
          />
        </View>
        <View style={styles.View_I1207_10926_236_7297}>
          <View style={styles.View_I1207_10926_236_7299} />
          <View style={styles.View_I1207_10926_236_7301}>
            <Text style={styles.Text_I1207_10926_236_7301}>Planner</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/857e/bbc4/04184b125f3fdd23e23ee32840d13d90"
            }}
            style={styles.ImageBackground_I1207_10926_236_7431}
          />
        </View>
      </View>
      <View style={styles.View_1207_10927}>
        <View style={styles.View_1207_10929}>
          <View style={styles.View_1207_10930}>
            <Text style={styles.Text_1207_10930}>Sign Out</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1207_10931} />
      <View style={styles.View_1207_10932} />
      <View style={styles.View_1207_10933} />
      <View style={styles.View_1207_10934} />
      <View style={styles.View_1207_10935}>
        <Text style={styles.Text_1207_10935}>Saved Recipes</Text>
      </View>
      <View style={styles.View_1207_10936}>
        <Text style={styles.Text_1207_10936}>My Pantry</Text>
      </View>
      <View style={styles.View_1207_10937}>
        <Text style={styles.Text_1207_10937}>Preferences</Text>
      </View>
      <View style={styles.View_1207_10938}>
        <Text style={styles.Text_1207_10938}>Order History</Text>
      </View>
      <View style={styles.View_1207_10939}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7f0b/8554/b4c9850e94d1133c7564de9fc90765bc"
          }}
          style={styles.ImageBackground_1207_10940}
        />
        <View style={styles.View_1207_10941} />
        <View style={styles.View_1207_10942} />
        <View style={styles.View_1207_10943} />
        <View style={styles.View_1207_10944} />
        <View style={styles.View_1207_10945} />
        <View style={styles.View_1207_10946} />
      </View>
      <View style={styles.View_1207_10947}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e68/8eab/ec1eb4e9b5b5e8eba3d6e71fdd579977"
          }}
          style={styles.ImageBackground_1207_10948}
        />
      </View>
      <View style={styles.View_1207_10949}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9884/7ff0/fe5718972e7f0e1b2e7c370d92441838"
          }}
          style={styles.ImageBackground_1207_10950}
        />
        <View style={styles.View_1207_10951} />
      </View>
      <View style={styles.View_1207_10952}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f304/519b/672e0aa1dfdac36251bf7c786fbffaae"
          }}
          style={styles.ImageBackground_1207_10953}
        />
        <View style={styles.View_1207_10954} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46ee/3534/8d65c3bdbcf95e75f3cc7198bcdfad81"
        }}
        style={styles.ImageBackground_1207_10955}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/361c/b0bd/01a5134f848f7966c97f7b813e5a695b"
        }}
        style={styles.ImageBackground_1207_10956}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1207_10925: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("5.46448087431694%"),
    justifyContent: "flex-start"
  },
  Text_1207_10925: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 26,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10926: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("100%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_10926_236_7276: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1207_10926_236_7277: {
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1207_10926_236_7282: {
    width: wp("8.266666666666666%"),
    top: hp("6.284153005464475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    justifyContent: "center"
  },
  Text_I1207_10926_236_7282: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_10926_236_7436: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.8688524590164093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%")
  },
  View_I1207_10926_236_7283: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("0%")
  },
  View_I1207_10926_236_7285: {
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1207_10926_236_7289: {
    width: wp("11.733333333333333%"),
    top: hp("5.942622950819668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666671%"),
    justifyContent: "center"
  },
  Text_I1207_10926_236_7289: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_10926_236_7424: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.45901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.266666666666666%")
  },
  View_I1207_10926_236_7292: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_I1207_10926_236_7293: {
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1207_10926_236_7295: {
    width: wp("6.133333333333333%"),
    top: hp("6.147540983606547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999994%"),
    justifyContent: "center"
  },
  Text_I1207_10926_236_7295: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_10926_236_7427: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.8688524590164093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.199999999999996%")
  },
  View_I1207_10926_236_7297: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%")
  },
  View_I1207_10926_236_7299: {
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1207_10926_236_7301: {
    width: wp("10.666666666666668%"),
    top: hp("6.147540983606547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333337%"),
    justifyContent: "center"
  },
  Text_I1207_10926_236_7301: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_10926_236_7431: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.133333333333333%")
  },
  View_1207_10927: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.8%"),
    top: hp("73.63387978142076%")
  },
  View_1207_10929: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10930: {
    width: wp("18.666666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1207_10930: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10931: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("17.62295081967213%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_1207_10932: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("42.07650273224044%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_1207_10933: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("42.07650273224044%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_1207_10934: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.26666666666666%"),
    top: hp("17.62295081967213%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_1207_10935: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.4%"),
    top: hp("32.51366120218579%"),
    justifyContent: "flex-start"
  },
  Text_1207_10935: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10936: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.4%"),
    top: hp("56.9672131147541%"),
    justifyContent: "flex-start"
  },
  Text_1207_10936: {
    color: "rgba(56, 75, 153, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10937: {
    width: wp("31.466666666666665%"),
    minWidth: wp("31.466666666666665%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.4%"),
    top: hp("56.9672131147541%"),
    justifyContent: "flex-start"
  },
  Text_1207_10937: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10938: {
    width: wp("28.799999999999997%"),
    minWidth: wp("28.799999999999997%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    top: hp("32.51366120218579%"),
    justifyContent: "flex-start"
  },
  Text_1207_10938: {
    color: "rgba(32, 131, 113, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10939: {
    width: wp("31.028092447916666%"),
    minWidth: wp("31.028092447916666%"),
    height: hp("16.786869236680328%"),
    minHeight: hp("16.786869236680328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.26650390625%"),
    top: hp("16.939890710382514%")
  },
  ImageBackground_1207_10940: {
    width: wp("31.028092447916666%"),
    minWidth: wp("31.028092447916666%"),
    height: hp("16.786869236680328%"),
    minHeight: hp("16.786869236680328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10941: {
    width: wp("31.028092447916666%"),
    minWidth: wp("31.028092447916666%"),
    height: hp("16.786869236680328%"),
    minHeight: hp("16.786869236680328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 176, 149, 1)"
  },
  View_1207_10942: {
    width: wp("2.0857747395833335%"),
    minWidth: wp("2.0857747395833335%"),
    height: hp("1.1148421490778688%"),
    minHeight: hp("1.1148421490778688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.239973958333335%"),
    top: hp("12.484674505848698%"),
    backgroundColor: "rgba(32, 131, 113, 1)"
  },
  View_1207_10943: {
    width: wp("2.0857747395833335%"),
    minWidth: wp("2.0857747395833335%"),
    height: hp("1.1148421490778688%"),
    minHeight: hp("1.1148421490778688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.050813802083333%"),
    top: hp("8.094495762892759%"),
    backgroundColor: "rgba(255, 224, 211, 1)"
  },
  View_1207_10944: {
    width: wp("2.0857747395833335%"),
    minWidth: wp("2.0857747395833335%"),
    height: hp("1.1148421490778688%"),
    minHeight: hp("1.1148421490778688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.277799479166669%"),
    top: hp("3.6418143517332666%"),
    backgroundColor: "rgba(32, 131, 113, 1)"
  },
  View_1207_10945: {
    width: wp("2.0857747395833335%"),
    minWidth: wp("2.0857747395833335%"),
    height: hp("1.1148421490778688%"),
    minHeight: hp("1.1148421490778688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.1670572916666675%"),
    top: hp("6.411493019979506%"),
    backgroundColor: "rgba(56, 75, 153, 1)"
  },
  View_1207_10946: {
    width: wp("2.0857747395833335%"),
    minWidth: wp("2.0857747395833335%"),
    height: hp("1.1148421490778688%"),
    minHeight: hp("1.1148421490778688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.194726562499994%"),
    top: hp("7.416805413251367%"),
    backgroundColor: "rgba(240, 95, 87, 1)"
  },
  View_1207_10947: {
    width: wp("8.608854166666667%"),
    minWidth: wp("8.608854166666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.022200520833334%"),
    top: hp("24.316939890710383%")
  },
  ImageBackground_1207_10948: {
    width: wp("8.608854166666667%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_10949: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("6.894137689976093%"),
    minHeight: hp("6.894137689976093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.8%"),
    top: hp("23.36065573770492%")
  },
  ImageBackground_1207_10950: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("6.894137689976093%"),
    minHeight: hp("6.894137689976093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10951: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("6.894137689976093%"),
    minHeight: hp("6.894137689976093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(32, 131, 113, 1)"
  },
  View_1207_10952: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("47.26775956284153%")
  },
  ImageBackground_1207_10953: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10954: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("7.5136612021857925%"),
    minHeight: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(56, 75, 153, 1)"
  },
  ImageBackground_1207_10955: {
    width: wp("8.266666666666666%"),
    height: hp("4.2349726775956285%"),
    top: hp("48.90710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.86666666666666%")
  },
  ImageBackground_1207_10956: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.06666666666666%"),
    top: hp("50.409836065573764%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
