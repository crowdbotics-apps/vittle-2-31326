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
      <View style={styles.View_1207_10443}>
        <View style={styles.View_1207_10444}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d880/eda3/118f4507a719115c06eba0a1fc24407e"
            }}
            style={styles.ImageBackground_1207_10445}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd73/3b83/eda7fc8ad6932b0f90a3f3891fd4db6c"
            }}
            style={styles.ImageBackground_1207_10446}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd73/3b83/eda7fc8ad6932b0f90a3f3891fd4db6c"
            }}
            style={styles.ImageBackground_1207_10447}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abaf/fd08/ed2f9132c3418350ccf381d7fd890ffd"
            }}
            style={styles.ImageBackground_1207_10448}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/918b/3d03/065289b85169c620c702ab99477ca9d6"
            }}
            style={styles.ImageBackground_1207_10449}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c91c/d27c/cba9a2966711747bb2c381ad575bd85f"
            }}
            style={styles.ImageBackground_1207_10450}
          />
        </View>
      </View>
      <View style={styles.View_1207_10453} />
      <View style={styles.View_1207_10454}>
        <View style={styles.View_1207_10455} />
        <View style={styles.View_1207_10456}>
          <View style={styles.View_1207_10457} />
          <View style={styles.View_1207_10458}>
            <View style={styles.View_1207_10459}>
              <Text style={styles.Text_1207_10459}>Sign In</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1207_10460}>
          <View style={styles.View_I1207_10460_138_2365}>
            <View style={styles.View_I1207_10460_138_2366}>
              <View style={styles.View_I1207_10460_138_2367}>
                <Text style={styles.Text_I1207_10460_138_2367}>
                  Email Address
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I1207_10460_138_2323}>
            <View style={styles.View_I1207_10460_138_2361}>
              <View style={styles.View_I1207_10460_138_2362}>
                <Text style={styles.Text_I1207_10460_138_2362}>
                  lazychef@aol.com
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1207_10461}>
          <View style={styles.View_I1207_10461_138_2365}>
            <View style={styles.View_I1207_10461_138_2366}>
              <View style={styles.View_I1207_10461_138_2367}>
                <Text style={styles.Text_I1207_10461_138_2367}>Password</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I1207_10461_138_2323}>
            <View style={styles.View_I1207_10461_138_2361}>
              <View style={styles.View_I1207_10461_138_2362}>
                <Text style={styles.Text_I1207_10461_138_2362}>
                  · · · · · · · · · · · · · ·{" "}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1207_10462}>
          <Text style={styles.Text_1207_10462}>Forgot Password?</Text>
        </View>
        <View style={styles.View_1207_10463}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c403/57aa/9407e2817ad906c1f3dc70092171e936"
            }}
            style={styles.ImageBackground_I1207_10463_138_2407}
          />
        </View>
        <View style={styles.View_1207_10464}>
          <View style={styles.View_1207_10465}>
            <View style={styles.View_1207_10466}>
              <View style={styles.View_1207_10467} />
            </View>
            <View style={styles.View_1207_10468}>
              <View style={styles.View_1207_10469}>
                <Text style={styles.Text_1207_10469}>Continue with Apple</Text>
              </View>
              <View style={styles.View_1207_10470}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f3a/4177/b56d880737af29ad18411cdce1e62726"
                  }}
                  style={styles.ImageBackground_1207_10471}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d89/4a44/ab9b7007209e7e977b0135be04b4f879"
                  }}
                  style={styles.ImageBackground_1207_10472}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_1207_10473}>
            <View style={styles.View_1207_10474}>
              <View style={styles.View_1207_10475} />
            </View>
            <View style={styles.View_1207_10476}>
              <View style={styles.View_1207_10477}>
                <Text style={styles.Text_1207_10477}>Continue with Google</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7192/1e7a/318a46686774bac47ba06a18367b6f32"
                }}
                style={styles.ImageBackground_1207_10478}
              />
            </View>
          </View>
          <View style={styles.View_1207_10479}>
            <View style={styles.View_1207_10480}>
              <View style={styles.View_1207_10481} />
            </View>
            <View style={styles.View_1207_10482}>
              <View style={styles.View_1207_10483}>
                <Text style={styles.Text_1207_10483}>
                  Continue with Facebook
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bbf/1498/c96583cd0df4a76743a9349c3f0526b3"
                }}
                style={styles.ImageBackground_1207_10484}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3730/fe4a/2dee28fb58eabef3e0db53b035a798bd"
          }}
          style={styles.ImageBackground_1207_10485}
        />
        <View style={styles.View_1207_10486}>
          <Text style={styles.Text_1207_10486}>Sign In</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(250, 250, 250, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1207_10443: {
    width: wp("52.26666666666666%"),
    minWidth: wp("52.26666666666666%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("12.158469945355192%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1207_10444: {
    width: wp("43.26744791666667%"),
    height: hp("5.801866875320185%"),
    top: hp("3.2816068722250673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.526432291666666%")
  },
  ImageBackground_1207_10445: {
    width: wp("5.559765625%"),
    height: hp("5.797506030140028%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.315885416666667%")
  },
  ImageBackground_1207_10446: {
    width: wp("6.146744791666666%"),
    height: hp("5.797506030140028%"),
    top: hp("0.004369183316256908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.981250000000003%")
  },
  ImageBackground_1207_10447: {
    width: wp("6.146744791666666%"),
    height: hp("5.797506030140028%"),
    top: hp("0.004369183316256908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.788541666666667%")
  },
  ImageBackground_1207_10448: {
    width: wp("4.997786458333333%"),
    height: hp("5.797506030140028%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.592057291666663%")
  },
  ImageBackground_1207_10449: {
    width: wp("9.691276041666667%"),
    height: hp("4.357968523202698%"),
    top: hp("1.4395375069373308%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.576171875%")
  },
  ImageBackground_1207_10450: {
    width: wp("12.921484375%"),
    height: hp("5.788750987235314%"),
    top: hp("0.004369183316256908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_10453: {
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
  View_1207_10454: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("85.10928961748634%"),
    minHeight: hp("85.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.81967213114754%")
  },
  View_1207_10455: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("85.10928961748634%"),
    minHeight: hp("85.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1207_10456: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("40.43715846994536%")
  },
  View_1207_10457: {
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
  View_1207_10458: {
    width: wp("14.666666666666666%"),
    minWidth: wp("14.666666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.66666666666667%"),
    top: hp("1.639344262295083%")
  },
  View_1207_10459: {
    width: wp("14.666666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1207_10459: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10460: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("13.387978142076499%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_10460_138_2365: {
    flexGrow: 1,
    width: wp("22.666666666666664%"),
    height: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1207_10460_138_2366: {
    width: wp("20.533333333333335%"),
    minWidth: wp("20.533333333333335%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666673%"),
    top: hp("-0.6830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1207_10460_138_2367: {
    flexGrow: 1,
    width: wp("20.533333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_10460_138_2367: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  View_I1207_10460_138_2323: {
    flexGrow: 1,
    width: wp("89.33333333333333%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("0.2732240437158495%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_10460_138_2361: {
    width: wp("84%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1207_10460_138_2362: {
    flexGrow: 1,
    width: wp("35.199999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.254098360655739%"),
    justifyContent: "flex-start"
  },
  Text_I1207_10460_138_2362: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10461: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("24.31693989071038%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_10461_138_2365: {
    flexGrow: 1,
    width: wp("16.53333333333333%"),
    height: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1207_10461_138_2366: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666666666666673%"),
    top: hp("-0.6830601092896131%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1207_10461_138_2367: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_10461_138_2367: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  View_I1207_10461_138_2323: {
    flexGrow: 1,
    width: wp("89.33333333333333%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("0.2732240437158424%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_10461_138_2361: {
    width: wp("84%"),
    height: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999996%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I1207_10461_138_2362: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.254098360655746%"),
    justifyContent: "flex-start"
  },
  Text_I1207_10461_138_2362: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10462: {
    width: wp("38.13333333333333%"),
    minWidth: wp("38.13333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.599999999999994%"),
    top: hp("33.06010928961749%"),
    justifyContent: "flex-start"
  },
  Text_1207_10462: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10463: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.6%"),
    top: hp("26.502732240437155%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1207_10463_138_2407: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666667993%"),
    top: hp("0.6147540983606632%")
  },
  View_1207_10464: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("24.043715846994534%"),
    minHeight: hp("24.043715846994534%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("57.786885245901644%")
  },
  View_1207_10465: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.4863387978142%")
  },
  View_1207_10466: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10467: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1207_10468: {
    width: wp("50.93333333333333%"),
    minWidth: wp("50.93333333333333%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333334%"),
    top: hp("1.639344262295083%")
  },
  View_1207_10469: {
    width: wp("43.733333333333334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    justifyContent: "flex-start"
  },
  Text_1207_10469: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10470: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.546448087431699%")
  },
  ImageBackground_1207_10471: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1207_10472: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1207_10473: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.7431693989071%")
  },
  View_1207_10474: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10475: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(82, 143, 222, 1)"
  },
  View_1207_10476: {
    width: wp("54.13333333333333%"),
    minWidth: wp("54.13333333333333%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.133333333333336%"),
    top: hp("1.639344262295083%")
  },
  View_1207_10477: {
    width: wp("46.666666666666664%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666669%"),
    justifyContent: "flex-start"
  },
  Text_1207_10477: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_10478: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    resizeMode: "cover"
  },
  View_1207_10479: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10480: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10481: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 88, 158, 1)"
  },
  View_1207_10482: {
    width: wp("59.46666666666667%"),
    minWidth: wp("59.46666666666667%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.466666666666669%"),
    top: hp("1.6393442622950687%")
  },
  View_1207_10483: {
    width: wp("52%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666669%"),
    justifyContent: "flex-start"
  },
  Text_1207_10483: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_10484: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("1.639344262295082%"),
    minHeight: hp("1.639344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    resizeMode: "cover"
  },
  ImageBackground_1207_10485: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("52.59562841530054%")
  },
  View_1207_10486: {
    width: wp("22.400000000000002%"),
    minWidth: wp("22.400000000000002%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("4.371584699453553%"),
    justifyContent: "flex-start"
  },
  Text_1207_10486: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 20,
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
