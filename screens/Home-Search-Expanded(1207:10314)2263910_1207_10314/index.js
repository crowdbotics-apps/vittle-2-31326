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
      <View style={styles.View_1207_10315}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af0f/b10e/86d0ee2ec8c5bf8b03178ba771f1c566"
          }}
          style={styles.ImageBackground_1207_10316}
        />
      </View>
      <View style={styles.View_1207_10317}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/813c/fb62/1975670eae6a8a96ba8b9dfcbc5cf2be"
          }}
          style={styles.ImageBackground_1207_10318}
        />
      </View>
      <View style={styles.View_1207_10319}>
        <View style={styles.View_1207_10320}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eee7/3070/a62e12f3f45761fb87f571658e7c2d26"
            }}
            style={styles.ImageBackground_1207_10321}
          />
        </View>
        <View style={styles.View_1207_10322}>
          <Text style={styles.Text_1207_10322}>
            Risotto with Miso and Spring Vegetables
          </Text>
        </View>
      </View>
      <View style={styles.View_1207_10323}>
        <View style={styles.View_1207_10324}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32a7/cecc/55ec0faaddb9af6c803c36e24b0cf11c"
            }}
            style={styles.ImageBackground_1207_10325}
          />
        </View>
        <View style={styles.View_1207_10326}>
          <Text style={styles.Text_1207_10326}>Easy Vegan Cupcakes</Text>
        </View>
      </View>
      <View style={styles.View_1207_10327}>
        <View style={styles.View_1207_10328}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6283/bbb8/d5973a8efbebb6f141c53977ed2348ec"
            }}
            style={styles.ImageBackground_1207_10329}
          />
        </View>
        <View style={styles.View_1207_10330}>
          <Text style={styles.Text_1207_10330}>Hearty Lentil Soup</Text>
        </View>
      </View>
      <View style={styles.View_1207_10331}>
        <View style={styles.View_1207_10332}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ba1/ef9d/1846dc53f79f828be44462ca7bd820c5"
            }}
            style={styles.ImageBackground_1207_10333}
          />
        </View>
        <View style={styles.View_1207_10334}>
          <Text style={styles.Text_1207_10334}>Sesame Dumplings</Text>
        </View>
      </View>
      <View style={styles.View_1207_10335}>
        <View style={styles.View_1207_10336} />
        <View style={styles.View_1207_10337}>
          <Text style={styles.Text_1207_10337}>Search</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1e7/cbb4/2f2d6dcdfc695b91843d0a8927eed98e"
          }}
          style={styles.ImageBackground_1207_10338}
        />
      </View>
      <View style={styles.View_1207_10339}>
        <Text style={styles.Text_1207_10339}>Home</Text>
      </View>
      <View style={styles.View_1207_10340}>
        <View style={styles.View_1207_10341}>
          <View style={styles.View_1207_10342} />
          <View style={styles.View_1207_10343}>
            <View style={styles.View_1207_10344}>
              <Text style={styles.Text_1207_10344}>For You</Text>
            </View>
            <View style={styles.View_1207_10345}>
              <Text style={styles.Text_1207_10345}>Thai Curries</Text>
            </View>
            <View style={styles.View_1207_10346}>
              <Text style={styles.Text_1207_10346}>Coconut Desserts</Text>
            </View>
            <View style={styles.View_1207_10347}>
              <Text style={styles.Text_1207_10347}>Category 4</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1207_10348}>
        <View style={styles.View_1207_10349}>
          <View style={styles.View_1207_10350} />
        </View>
        <View style={styles.View_1207_10351}>
          <View style={styles.View_1207_10352}>
            <Text style={styles.Text_1207_10352}>Quick Match</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6eb/6084/78c571ae50c19cd35c7046d4da0573d2"
            }}
            style={styles.ImageBackground_1207_10353}
          />
        </View>
      </View>
      <View style={styles.View_1207_10354}>
        <View style={styles.View_1207_10355}>
          <Text style={styles.Text_1207_10355}>Trending</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9ea/0a57/f7d8f32f638da43676c64c551e98d7d8"
          }}
          style={styles.ImageBackground_1207_10356}
        />
      </View>
      <View style={styles.View_1207_10357}>
        <View style={styles.View_1207_10358}>
          <View style={styles.View_1207_10359}>
            <View style={styles.View_1207_10360} />
            <View style={styles.View_1207_10361}>
              <View style={styles.View_1207_10362}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f17/9e01/edf517d72543605871e9c8a7aa4e790d"
                  }}
                  style={styles.ImageBackground_1207_10363}
                />
              </View>
              <View style={styles.View_1207_10365}>
                <Text style={styles.Text_1207_10365}>Home</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1207_10366}>
            <View style={styles.View_1207_10367}>
              <View style={styles.View_1207_10368} />
            </View>
            <View style={styles.View_1207_10369}>
              <View style={styles.View_1207_10370}>
                <View style={styles.View_1207_10371}>
                  <View style={styles.View_1207_10372}>
                    <Text style={styles.Text_1207_10372}>Account</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5911/62a6/46d5fa59598a9af8bf6a390c35c6d82b"
                    }}
                    style={styles.ImageBackground_1207_10373}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f5/1872/5007f2fdd83224dd17ff4288d96be911"
                  }}
                  style={styles.ImageBackground_1207_10374}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_1207_10375}>
            <View style={styles.View_1207_10376} />
            <View style={styles.View_1207_10377}>
              <View style={styles.View_1207_10378}>
                <Text style={styles.Text_1207_10378}>Cart</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3f6/dc17/1e9fb0e34eb1cdc0755a8616cca3af37"
                }}
                style={styles.ImageBackground_1207_10379}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1207_10380}>
          <View style={styles.View_1207_10381}>
            <View style={styles.View_1207_10382} />
            <View style={styles.View_1207_10383}>
              <View style={styles.View_1207_10384}>
                <Text style={styles.Text_1207_10384}>Planner</Text>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/857e/bbc4/04184b125f3fdd23e23ee32840d13d90"
            }}
            style={styles.ImageBackground_1207_10385}
          />
        </View>
      </View>
      <View style={styles.View_1207_10386} />
      <View style={styles.View_1207_10387}>
        <View style={styles.View_1207_10388} />
        <View style={styles.View_1207_10389}>
          <Text style={styles.Text_1207_10389}>Recent Searches</Text>
        </View>
        <View style={styles.View_1207_10390}>
          <View style={styles.View_1207_10391} />
          <View style={styles.View_1207_10392}>
            <Text style={styles.Text_1207_10392}>|Search</Text>
          </View>
          <View style={styles.View_1207_10393}>
            <Text style={styles.Text_1207_10393}>Cancel</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1e7/cbb4/2f2d6dcdfc695b91843d0a8927eed98e"
            }}
            style={styles.ImageBackground_1207_10394}
          />
        </View>
        <View style={styles.View_1207_10395}>
          <View style={styles.View_1207_10396} />
          <View style={styles.View_1207_10397}>
            <Text style={styles.Text_1207_10397}>Green beans</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0e9/a7e8/cd969df50c0200ce439bba5f659f4cdb"
            }}
            style={styles.ImageBackground_1207_10398}
          />
        </View>
        <View style={styles.View_1207_10399}>
          <View style={styles.View_1207_10400} />
          <View style={styles.View_1207_10401}>
            <Text style={styles.Text_1207_10401}>Sourdough bread</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0e9/a7e8/cd969df50c0200ce439bba5f659f4cdb"
            }}
            style={styles.ImageBackground_1207_10402}
          />
        </View>
        <View style={styles.View_1207_10403}>
          <View style={styles.View_1207_10404} />
          <View style={styles.View_1207_10405}>
            <Text style={styles.Text_1207_10405}>Dumplings</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0e9/a7e8/cd969df50c0200ce439bba5f659f4cdb"
            }}
            style={styles.ImageBackground_1207_10406}
          />
        </View>
        <View style={styles.View_1207_10407}>
          <View style={styles.View_1207_10408} />
          <View style={styles.View_1207_10409}>
            <View style={styles.View_1207_10410} />
            <View style={styles.View_1207_10411}>
              <Text style={styles.Text_1207_10411}>All Recipes</Text>
            </View>
          </View>
          <View style={styles.View_1207_10412}>
            <Text style={styles.Text_1207_10412}>Saved Recipes</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1207_10315: {
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
  ImageBackground_1207_10316: {
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
  View_1207_10317: {
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
  ImageBackground_1207_10318: {
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
  View_1207_10319: {
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
  View_1207_10320: {
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
  ImageBackground_1207_10321: {
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
  View_1207_10322: {
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
  Text_1207_10322: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10323: {
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
  View_1207_10324: {
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
  ImageBackground_1207_10325: {
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
  View_1207_10326: {
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
  Text_1207_10326: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10327: {
    width: wp("44.00328776041667%"),
    minWidth: wp("44.00328776041667%"),
    height: hp("24.863387978142075%"),
    minHeight: hp("24.863387978142075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.46666666666667%"),
    top: hp("22.6775956284153%")
  },
  View_1207_10328: {
    width: wp("44.00328776041667%"),
    minWidth: wp("44.00328776041667%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1207_10329: {
    width: wp("44.00328776041667%"),
    minWidth: wp("44.00328776041667%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_1207_10330: {
    width: wp("26.984407552083333%"),
    minWidth: wp("26.984407552083333%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22.6775956284153%"),
    justifyContent: "flex-start"
  },
  Text_1207_10330: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10331: {
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
  View_1207_10332: {
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
  ImageBackground_1207_10333: {
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
  View_1207_10334: {
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
  Text_1207_10334: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10335: {
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
  View_1207_10336: {
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
  View_1207_10337: {
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
  Text_1207_10337: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_10338: {
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
  View_1207_10339: {
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
  Text_1207_10339: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 26,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10340: {
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
  View_1207_10341: {
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
  View_1207_10342: {
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
  View_1207_10343: {
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
  View_1207_10344: {
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
  Text_1207_10344: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10345: {
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
  Text_1207_10345: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10346: {
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
  Text_1207_10346: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10347: {
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
  Text_1207_10347: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10348: {
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
  View_1207_10349: {
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
  View_1207_10350: {
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
  View_1207_10351: {
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
  View_1207_10352: {
    width: wp("26.666666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666664%"),
    justifyContent: "flex-start"
  },
  Text_1207_10352: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_10353: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_10354: {
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
  View_1207_10355: {
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
  Text_1207_10355: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_10356: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%")
  },
  View_1207_10357: {
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
  View_1207_10358: {
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
  View_1207_10359: {
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
  View_1207_10360: {
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
  View_1207_10361: {
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
  View_1207_10362: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1207_10363: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0.27322404371587083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%")
  },
  View_1207_10365: {
    width: wp("8.266666666666666%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1207_10365: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10366: {
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
  View_1207_10367: {
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
  View_1207_10368: {
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
  View_1207_10369: {
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
  View_1207_10370: {
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
  View_1207_10371: {
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
  View_1207_10372: {
    width: wp("11.733333333333333%"),
    top: hp("3.0737704918032875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1207_10372: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_10373: {
    width: wp("2.548291015625%"),
    height: hp("1.3054686165898224%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.480208333333323%")
  },
  ImageBackground_1207_10374: {
    width: wp("4.03974609375%"),
    height: hp("0.8247750704405739%"),
    top: hp("1.8012875416239638%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.73333333333332%")
  },
  View_1207_10375: {
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
  View_1207_10376: {
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
  View_1207_10377: {
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
  View_1207_10378: {
    width: wp("6.133333333333333%"),
    top: hp("3.4153005464481083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666586%"),
    justifyContent: "center"
  },
  Text_1207_10378: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_10379: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_10380: {
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
  View_1207_10381: {
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
  View_1207_10382: {
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
  View_1207_10383: {
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
  View_1207_10384: {
    width: wp("10.666666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1207_10384: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_10385: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.133333333333333%")
  },
  View_1207_10386: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(93, 93, 93, 1)",
    opacity: 0.30000001192092896
  },
  View_1207_10387: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("55.19125683060109%"),
    minHeight: hp("55.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_10388: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("55.19125683060109%"),
    minHeight: hp("55.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_1207_10389: {
    width: wp("37.86666666666667%"),
    minWidth: wp("37.86666666666667%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("23.224043715846996%"),
    justifyContent: "flex-start"
  },
  Text_1207_10389: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10390: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("4.644808743169399%")
  },
  View_1207_10391: {
    width: wp("72.26666666666667%"),
    minWidth: wp("72.26666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_1207_10392: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.600000000000001%"),
    top: hp("2.3224043715846987%"),
    justifyContent: "flex-start"
  },
  Text_1207_10392: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10393: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.53333333333335%"),
    top: hp("2.3224043715846987%"),
    justifyContent: "flex-start"
  },
  Text_1207_10393: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_10394: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("2.4590163934426226%")
  },
  View_1207_10395: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.551912568306008%")
  },
  View_1207_10396: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1207_10397: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.1857923497267784%"),
    justifyContent: "flex-start"
  },
  Text_1207_10397: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_10398: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.049180327868857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%")
  },
  View_1207_10399: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35.92896174863388%")
  },
  View_1207_10400: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1207_10401: {
    width: wp("34.66666666666667%"),
    minWidth: wp("34.66666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726775%"),
    justifyContent: "flex-start"
  },
  Text_1207_10401: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_10402: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.0491803278688465%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%")
  },
  View_1207_10403: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.30601092896175%")
  },
  View_1207_10404: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1207_10405: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%"),
    top: hp("2.185792349726775%"),
    justifyContent: "flex-start"
  },
  Text_1207_10405: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_10406: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.0491803278688536%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%")
  },
  View_1207_10407: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("14.48087431693989%")
  },
  View_1207_10408: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_1207_10409: {
    width: wp("43.6855712890625%"),
    minWidth: wp("43.6855712890625%"),
    height: hp("3.6274894339139343%"),
    minHeight: hp("3.6274894339139343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0666422526041668%"),
    top: hp("0.3720809853142075%")
  },
  View_1207_10410: {
    width: wp("43.6855712890625%"),
    minWidth: wp("43.6855712890625%"),
    height: hp("3.6274894339139343%"),
    minHeight: hp("3.6274894339139343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 95, 87, 1)"
  },
  View_1207_10411: {
    width: wp("17.747265625%"),
    minWidth: wp("17.747265625%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.131119791666666%"),
    top: hp("0.9940392332650294%"),
    justifyContent: "center"
  },
  Text_1207_10411: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_1207_10412: {
    width: wp("24.53333333333333%"),
    minWidth: wp("24.53333333333333%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.733333333333334%"),
    top: hp("1.366120218579237%"),
    justifyContent: "center"
  },
  Text_1207_10412: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12,
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
