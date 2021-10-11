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
      <View style={styles.View_1207_10796}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af0f/b10e/86d0ee2ec8c5bf8b03178ba771f1c566"
          }}
          style={styles.ImageBackground_1207_10797}
        />
      </View>
      <View style={styles.View_1207_10798}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/813c/fb62/1975670eae6a8a96ba8b9dfcbc5cf2be"
          }}
          style={styles.ImageBackground_1207_10799}
        />
      </View>
      <View style={styles.View_1207_10800}>
        <View style={styles.View_1207_10801}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eee7/3070/a62e12f3f45761fb87f571658e7c2d26"
            }}
            style={styles.ImageBackground_1207_10802}
          />
        </View>
        <View style={styles.View_1207_10803}>
          <Text style={styles.Text_1207_10803}>
            Risotto with Miso and Spring Vegetables
          </Text>
        </View>
      </View>
      <View style={styles.View_1207_10804}>
        <View style={styles.View_1207_10805}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32a7/cecc/55ec0faaddb9af6c803c36e24b0cf11c"
            }}
            style={styles.ImageBackground_1207_10806}
          />
        </View>
        <View style={styles.View_1207_10807}>
          <Text style={styles.Text_1207_10807}>Easy Vegan Cupcakes</Text>
        </View>
      </View>
      <View style={styles.View_1207_10808}>
        <View style={styles.View_1207_10809}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6283/bbb8/d5973a8efbebb6f141c53977ed2348ec"
            }}
            style={styles.ImageBackground_1207_10810}
          />
        </View>
        <View style={styles.View_1207_10811}>
          <Text style={styles.Text_1207_10811}>Hearty Lentil Soup</Text>
        </View>
      </View>
      <View style={styles.View_1207_10812}>
        <View style={styles.View_1207_10813}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ba1/ef9d/1846dc53f79f828be44462ca7bd820c5"
            }}
            style={styles.ImageBackground_1207_10814}
          />
        </View>
        <View style={styles.View_1207_10815}>
          <Text style={styles.Text_1207_10815}>Sesame Dumplings</Text>
        </View>
      </View>
      <View style={styles.View_1207_10816}>
        <View style={styles.View_1207_10817} />
        <View style={styles.View_1207_10818}>
          <Text style={styles.Text_1207_10818}>Search</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1e7/cbb4/2f2d6dcdfc695b91843d0a8927eed98e"
          }}
          style={styles.ImageBackground_1207_10819}
        />
      </View>
      <View style={styles.View_1207_10820}>
        <Text style={styles.Text_1207_10820}>Home</Text>
      </View>
      <View style={styles.View_1207_10821}>
        <View style={styles.View_1207_10822}>
          <View style={styles.View_1207_10823} />
          <View style={styles.View_1207_10824}>
            <View style={styles.View_1207_10825}>
              <Text style={styles.Text_1207_10825}>For You</Text>
            </View>
            <View style={styles.View_1207_10826}>
              <Text style={styles.Text_1207_10826}>Thai Curries</Text>
            </View>
            <View style={styles.View_1207_10827}>
              <Text style={styles.Text_1207_10827}>Coconut Desserts</Text>
            </View>
            <View style={styles.View_1207_10828}>
              <Text style={styles.Text_1207_10828}>Category 4</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1207_10829}>
        <View style={styles.View_1207_10830}>
          <View style={styles.View_1207_10831} />
        </View>
        <View style={styles.View_1207_10832}>
          <View style={styles.View_1207_10833}>
            <Text style={styles.Text_1207_10833}>Quick Match</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6eb/6084/78c571ae50c19cd35c7046d4da0573d2"
            }}
            style={styles.ImageBackground_1207_10834}
          />
        </View>
      </View>
      <View style={styles.View_1207_10835}>
        <View style={styles.View_1207_10836}>
          <Text style={styles.Text_1207_10836}>Trending</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9ea/0a57/f7d8f32f638da43676c64c551e98d7d8"
          }}
          style={styles.ImageBackground_1207_10837}
        />
      </View>
      <View style={styles.View_1207_10838}>
        <View style={styles.View_1207_10839}>
          <View style={styles.View_1207_10840}>
            <View style={styles.View_1207_10841} />
            <View style={styles.View_1207_10842}>
              <View style={styles.View_1207_10843}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f17/9e01/edf517d72543605871e9c8a7aa4e790d"
                  }}
                  style={styles.ImageBackground_1207_10844}
                />
              </View>
              <View style={styles.View_1207_10846}>
                <Text style={styles.Text_1207_10846}>Home</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1207_10847}>
            <View style={styles.View_1207_10848}>
              <View style={styles.View_1207_10849} />
            </View>
            <View style={styles.View_1207_10850}>
              <View style={styles.View_1207_10851}>
                <View style={styles.View_1207_10852}>
                  <View style={styles.View_1207_10853}>
                    <Text style={styles.Text_1207_10853}>Account</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5911/62a6/46d5fa59598a9af8bf6a390c35c6d82b"
                    }}
                    style={styles.ImageBackground_1207_10854}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f5/1872/5007f2fdd83224dd17ff4288d96be911"
                  }}
                  style={styles.ImageBackground_1207_10855}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_1207_10856}>
            <View style={styles.View_1207_10857} />
            <View style={styles.View_1207_10858}>
              <View style={styles.View_1207_10859}>
                <Text style={styles.Text_1207_10859}>Cart</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3f6/dc17/1e9fb0e34eb1cdc0755a8616cca3af37"
                }}
                style={styles.ImageBackground_1207_10860}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1207_10861}>
          <View style={styles.View_1207_10862}>
            <View style={styles.View_1207_10863} />
            <View style={styles.View_1207_10864}>
              <View style={styles.View_1207_10865}>
                <Text style={styles.Text_1207_10865}>Planner</Text>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/857e/bbc4/04184b125f3fdd23e23ee32840d13d90"
            }}
            style={styles.ImageBackground_1207_10866}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1207_10796: {
    width: wp("63.733333333333334%"),
    minWidth: wp("63.733333333333334%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("84.8360655737705%")
  },
  ImageBackground_1207_10797: {
    width: wp("63.733333333333334%"),
    minWidth: wp("63.733333333333334%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1207_10798: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.26666666666667%"),
    top: hp("84.8360655737705%")
  },
  ImageBackground_1207_10799: {
    width: wp("23.466666666666665%"),
    minWidth: wp("23.466666666666665%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10800: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("26.775956284153008%"),
    minHeight: hp("26.775956284153008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("49.72677595628415%")
  },
  View_1207_10801: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1207_10802: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1207_10803: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.814207650273225%"),
    justifyContent: "flex-start"
  },
  Text_1207_10803: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10804: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("31.420765027322407%"),
    minHeight: hp("31.420765027322407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("43.44262295081967%")
  },
  View_1207_10805: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("28.688524590163933%"),
    minHeight: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1207_10806: {
    width: wp("43.733333333333334%"),
    minWidth: wp("43.733333333333334%"),
    height: hp("28.688524590163933%"),
    minHeight: hp("28.688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1207_10807: {
    width: wp("33.6%"),
    minWidth: wp("33.6%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.234972677595636%"),
    justifyContent: "flex-start"
  },
  Text_1207_10807: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10808: {
    width: wp("44.00325520833333%"),
    minWidth: wp("44.00325520833333%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.46666666666667%"),
    top: hp("22.6775956284153%")
  },
  View_1207_10809: {
    width: wp("44.00325520833333%"),
    minWidth: wp("44.00325520833333%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1207_10810: {
    width: wp("44.00325520833333%"),
    minWidth: wp("44.00325520833333%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1207_10811: {
    width: wp("26.984375%"),
    minWidth: wp("26.984375%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.6775956284153%"),
    justifyContent: "flex-start"
  },
  Text_1207_10811: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10812: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("18.579234972677597%"),
    minHeight: hp("18.579234972677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("22.6775956284153%")
  },
  View_1207_10813: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("15.983606557377051%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1207_10814: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("15.983606557377051%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1207_10815: {
    width: wp("37.06666666666666%"),
    minWidth: wp("37.06666666666666%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16.39344262295082%"),
    justifyContent: "flex-start"
  },
  Text_1207_10815: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10816: {
    width: wp("58.13333333333334%"),
    minWidth: wp("58.13333333333334%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.6%"),
    top: hp("4.644808743169399%")
  },
  View_1207_10817: {
    width: wp("58.13333333333334%"),
    minWidth: wp("58.13333333333334%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_1207_10818: {
    width: wp("14.133333333333335%"),
    minWidth: wp("14.133333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000001%"),
    top: hp("2.3224043715846987%"),
    justifyContent: "flex-start"
  },
  Text_1207_10818: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_10819: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333331%"),
    top: hp("2.4590163934426226%")
  },
  View_1207_10820: {
    width: wp("24.8%"),
    minWidth: wp("24.8%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("5.46448087431694%"),
    justifyContent: "flex-start"
  },
  Text_1207_10820: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 26,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10821: {
    width: wp("132.53333333333333%"),
    minWidth: wp("132.53333333333333%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("16.666666666666664%")
  },
  View_1207_10822: {
    width: wp("132.53333333333333%"),
    minWidth: wp("132.53333333333333%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10823: {
    width: wp("21.066666666666666%"),
    minWidth: wp("21.066666666666666%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(51, 51, 51, 1)"
  },
  View_1207_10824: {
    width: wp("130.4%"),
    minWidth: wp("130.4%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.1333333333333337%"),
    top: hp("0.13661202185792476%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1207_10825: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1207_10825: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10826: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.93333333333333%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1207_10826: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10827: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.06666666666667%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1207_10827: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10828: {
    width: wp("25.333333333333336%"),
    minWidth: wp("25.333333333333336%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("105.06666666666666%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1207_10828: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10829: {
    width: wp("54.666666666666664%"),
    minWidth: wp("54.666666666666664%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.06666666666667%"),
    top: hp("90.02732240437157%")
  },
  View_1207_10830: {
    width: wp("54.666666666666664%"),
    minWidth: wp("54.666666666666664%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10831: {
    width: wp("54.666666666666664%"),
    minWidth: wp("54.666666666666664%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 95, 87, 1)"
  },
  View_1207_10832: {
    width: wp("37.333333333333336%"),
    minWidth: wp("37.333333333333336%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999997%"),
    top: hp("1.639344262295083%")
  },
  View_1207_10833: {
    width: wp("26.666666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666664%"),
    justifyContent: "flex-start"
  },
  Text_1207_10833: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_10834: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_10835: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("79.23497267759562%")
  },
  View_1207_10836: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1207_10836: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_10837: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%")
  },
  View_1207_10838: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("99.86338797814209%")
  },
  View_1207_10839: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10840: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10841: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1207_10842: {
    width: wp("8.266666666666666%"),
    minWidth: wp("8.266666666666666%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    top: hp("2.7322404371584526%")
  },
  View_1207_10843: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1207_10844: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0.27322404371587083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%")
  },
  View_1207_10846: {
    width: wp("8.266666666666666%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1207_10846: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10847: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("0%")
  },
  View_1207_10848: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10849: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1207_10850: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("5.122950819672131%"),
    minHeight: hp("5.122950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666671%"),
    top: hp("2.868852459016381%")
  },
  View_1207_10851: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("5.122950819672131%"),
    minHeight: hp("5.122950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10852: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    height: hp("5.122950819672131%"),
    minHeight: hp("5.122950819672131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10853: {
    width: wp("11.733333333333333%"),
    top: hp("3.0737704918032875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1207_10853: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_10854: {
    width: wp("2.5483072916666667%"),
    height: hp("1.3054686165898224%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.480208333333323%")
  },
  ImageBackground_1207_10855: {
    width: wp("4.039713541666667%"),
    height: hp("0.8247750704405739%"),
    top: hp("1.8012875416239638%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.73333333333332%")
  },
  View_1207_10856: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_1207_10857: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1207_10858: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333336%"),
    top: hp("2.7322404371584526%")
  },
  View_1207_10859: {
    width: wp("6.133333333333333%"),
    top: hp("3.4153005464481083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666586%"),
    justifyContent: "center"
  },
  Text_1207_10859: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_10860: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_10861: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%")
  },
  View_1207_10862: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10863: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1207_10864: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333337%"),
    top: hp("6.147540983606561%")
  },
  View_1207_10865: {
    width: wp("10.666666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1207_10865: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_10866: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.133333333333333%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
