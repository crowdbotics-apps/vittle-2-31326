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
      <View style={styles.View_1207_9629}>
        <View style={styles.View_1207_9630}>
          <Text style={styles.Text_1207_9630}>
            Curated suggestions based on recipes you love
          </Text>
        </View>
        <View style={styles.View_1207_9631}>
          <Text style={styles.Text_1207_9631}>Discover new favorites</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c09a/67bc/22c759740b4de8c4defb7f05dc1af06f"
        }}
        style={styles.ImageBackground_1207_9632}
      />
      <View style={styles.View_1207_9636}>
        <View style={styles.View_1207_9637} />
        <View style={styles.View_1207_9638}>
          <Text style={styles.Text_1207_9638}>Chia Seed Pudding</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25c1/1d6e/d0560adadf4c5e758395b35055dbd41c"
          }}
          style={styles.ImageBackground_1207_9639}
        />
        <View style={styles.View_1207_9641}>
          <View style={styles.View_1207_9642} />
          <View style={styles.View_1207_9643}>
            <Text style={styles.Text_1207_9643}>Jump to Recipe</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bf0/4dea/f604849a03629b4715fd6f5fe3938692"
            }}
            style={styles.ImageBackground_1207_9644}
          />
        </View>
        <View style={styles.View_1207_9647}>
          <View style={styles.View_1207_9648} />
        </View>
        <View style={styles.View_1207_9649}>
          <View style={styles.View_1207_9650} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0928/3bc9/eddde9ac4eac67f6e236f162da8e5786"
            }}
            style={styles.ImageBackground_1207_9651}
          />
        </View>
        <View style={styles.View_1207_9656}>
          <View style={styles.View_1207_9657} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd0a/afe7/1ff2214d0596783dcc5f3bd950e27e17"
            }}
            style={styles.ImageBackground_1207_9658}
          />
        </View>
      </View>
      <View style={styles.View_1207_9669}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8201/aa9b/53ac315122ca07d390ecc06c037e02b5"
          }}
          style={styles.ImageBackground_1207_9670}
        />
        <View style={styles.View_1207_9671} />
      </View>
      <View style={styles.View_1207_9672}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84a7/da83/5b6ec2d2c540fdc9a9434e964826c7fa"
          }}
          style={styles.ImageBackground_1207_9673}
        />
      </View>
      <View style={styles.View_1207_9674}>
        <View style={styles.View_I1207_9674_350_11901}>
          <View style={styles.View_I1207_9674_350_11902} />
          <View style={styles.View_I1207_9674_350_11903}>
            <Text style={styles.Text_I1207_9674_350_11903}>Create Account</Text>
          </View>
        </View>
        <View style={styles.View_I1207_9674_350_11904}>
          <View style={styles.View_I1207_9674_350_11905} />
          <View style={styles.View_I1207_9674_350_11906}>
            <Text style={styles.Text_I1207_9674_350_11906}>Sign In</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1207_9675}>
        <View style={styles.View_1207_9676}>
          <View style={styles.View_1207_9677}>
            <View style={styles.View_1207_9678}>
              <Text style={styles.Text_1207_9678}>Cook Time</Text>
            </View>
            <View style={styles.View_1207_9679}>
              <Text style={styles.Text_1207_9679}>1 h 30m</Text>
            </View>
          </View>
          <View style={styles.View_1207_9680}>
            <View style={styles.View_1207_9681}>
              <Text style={styles.Text_1207_9681}>Serves</Text>
            </View>
            <View style={styles.View_1207_9682}>
              <Text style={styles.Text_1207_9682}>6-8</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1207_9683}>
        <View style={styles.View_1207_9684}>
          <Text style={styles.Text_1207_9684}>342</Text>
        </View>
        <View style={styles.View_1207_9685}>
          <View style={styles.View_1207_9686}>
            <View style={styles.View_1207_9687}>
              <Text style={styles.Text_1207_9687}>Saves</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1207_9688}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a69d/bb3e/fb054b5e421760fe6369f8f511438c63"
            }}
            style={styles.ImageBackground_1207_9689}
          />
        </View>
      </View>
      <View style={styles.View_1207_9690}>
        <View style={styles.View_1207_9691}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51d6/4f87/1c3687fd1b9866b2ce33aa51df3e3885"
            }}
            style={styles.ImageBackground_1207_9692}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3322/60d5/2f3acdf83f1d8ed6d7f5d1eef5e9f39c"
            }}
            style={styles.ImageBackground_1207_9694}
          />
        </View>
        <View style={styles.View_1207_9696}>
          <Text style={styles.Text_1207_9696}>In Pantry</Text>
        </View>
        <View style={styles.View_1207_9697}>
          <Text style={styles.Text_1207_9697}>73%</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(243, 176, 149, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1207_9629: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("13.661202185792352%"),
    minHeight: hp("13.661202185792352%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("53.00546448087432%")
  },
  View_1207_9630: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.830601092896167%"),
    justifyContent: "center"
  },
  Text_1207_9630: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_1207_9631: {
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
  Text_1207_9631: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_9632: {
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
  View_1207_9636: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("36.885245901639344%"),
    minHeight: hp("36.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-15.2%"),
    top: hp("8.743169398907105%")
  },
  View_1207_9637: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("36.885245901639344%"),
    minHeight: hp("36.885245901639344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1207_9638: {
    width: wp("61.06666666666667%"),
    minWidth: wp("61.06666666666667%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("4.371584699453551%"),
    justifyContent: "center"
  },
  Text_1207_9638: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_9639: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("23.224043715846996%")
  },
  View_1207_9641: {
    width: wp("50.13333333333333%"),
    minWidth: wp("50.13333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666666%"),
    top: hp("26.502732240437155%")
  },
  View_1207_9642: {
    width: wp("50.13333333333333%"),
    minWidth: wp("50.13333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 232, 230, 1)"
  },
  View_1207_9643: {
    width: wp("34.13333333333333%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    justifyContent: "flex-start"
  },
  Text_1207_9643: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_9644: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.46666666666667%")
  },
  View_1207_9647: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.400000000000006%"),
    top: hp("26.502732240437155%")
  },
  View_1207_9648: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 232, 230, 1)"
  },
  View_1207_9649: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.73333333333333%"),
    top: hp("26.502732240437155%")
  },
  View_1207_9650: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 232, 230, 1)"
  },
  ImageBackground_1207_9651: {
    width: wp("4.933333333333334%"),
    height: hp("2.4725742027407787%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.86666666666666%")
  },
  View_1207_9656: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%"),
    top: hp("26.502732240437155%")
  },
  View_1207_9657: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(252, 232, 230, 1)"
  },
  ImageBackground_1207_9658: {
    width: wp("4.8%"),
    height: hp("2.73224043715847%"),
    top: hp("1.9125683060109324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333337%")
  },
  View_1207_9669: {
    width: wp("54.655859375000006%"),
    minWidth: wp("54.655859375000006%"),
    height: hp("26.991847304047127%"),
    minHeight: hp("26.991847304047127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.13333333333333%"),
    top: hp("-4.781420765027322%")
  },
  ImageBackground_1207_9670: {
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
  View_1207_9671: {
    width: wp("54.655859375000006%"),
    minWidth: wp("54.655859375000006%"),
    height: hp("26.991847304047127%"),
    minHeight: hp("26.991847304047127%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(56, 75, 153, 1)"
  },
  View_1207_9672: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.06666666666666%"),
    top: hp("36.885245901639344%")
  },
  ImageBackground_1207_9673: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_9674: {
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
  View_I1207_9674_350_11901: {
    flexGrow: 1,
    width: wp("43.93971354166666%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.206380208333336%"),
    top: hp("0%")
  },
  View_I1207_9674_350_11902: {
    width: wp("43.93971354166666%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(240, 95, 87, 1)"
  },
  View_I1207_9674_350_11903: {
    width: wp("36.76588541666666%"),
    top: hp("1.7759562841530254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5868489583333343%"),
    justifyContent: "flex-start"
  },
  Text_I1207_9674_350_11903: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1207_9674_350_11904: {
    flexGrow: 1,
    width: wp("43.93971354166666%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1207_9674_350_11905: {
    width: wp("43.93971354166666%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1207_9674_350_11906: {
    width: wp("36.76588541666666%"),
    top: hp("1.7759562841530254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5868489583333334%"),
    justifyContent: "flex-start"
  },
  Text_I1207_9674_350_11906: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9675: {
    width: wp("33.6%"),
    minWidth: wp("33.6%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.93333333333333%"),
    top: hp("22.26775956284153%")
  },
  View_1207_9676: {
    width: wp("33.6%"),
    minWidth: wp("33.6%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_9677: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_9678: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9678: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9679: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "center"
  },
  Text_1207_9679: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9680: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.46666666666666%"),
    top: hp("0%")
  },
  View_1207_9681: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9681: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9682: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%"),
    justifyContent: "center"
  },
  Text_1207_9682: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9683: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0666666666666667%"),
    top: hp("22.26775956284153%")
  },
  View_1207_9684: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    top: hp("3.278688524590166%"),
    justifyContent: "center"
  },
  Text_1207_9684: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9685: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_9686: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_9687: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9687: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9688: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%")
  },
  ImageBackground_1207_9689: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_9690: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.400000000000002%"),
    top: hp("22.26775956284153%")
  },
  View_1207_9691: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1207_9692: {
    width: wp("4.883984375%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5156249999999964%")
  },
  ImageBackground_1207_9694: {
    width: wp("6.4%"),
    height: hp("3.0333305317196038%"),
    top: hp("0.24535799287055937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_9696: {
    width: wp("13.066666666666665%"),
    minWidth: wp("13.066666666666665%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9696: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9697: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("3.278688524590166%"),
    justifyContent: "center"
  },
  Text_1207_9697: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
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
