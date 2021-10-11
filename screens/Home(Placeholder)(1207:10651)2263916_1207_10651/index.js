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
      <View style={styles.View_1207_10652}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af0f/b10e/86d0ee2ec8c5bf8b03178ba771f1c566"
          }}
          style={styles.ImageBackground_1207_10653}
        />
      </View>
      <View style={styles.View_1207_10654}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/813c/fb62/1975670eae6a8a96ba8b9dfcbc5cf2be"
          }}
          style={styles.ImageBackground_1207_10655}
        />
      </View>
      <View style={styles.View_1207_10656}>
        <View style={styles.View_1207_10657}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eee7/3070/a62e12f3f45761fb87f571658e7c2d26"
            }}
            style={styles.ImageBackground_1207_10658}
          />
        </View>
        <View style={styles.View_1207_10659}>
          <Text style={styles.Text_1207_10659}>
            Risotto with Miso and Spring Vegetables
          </Text>
        </View>
      </View>
      <View style={styles.View_1207_10660}>
        <View style={styles.View_1207_10661}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32a7/cecc/55ec0faaddb9af6c803c36e24b0cf11c"
            }}
            style={styles.ImageBackground_1207_10662}
          />
        </View>
        <View style={styles.View_1207_10663}>
          <Text style={styles.Text_1207_10663}>Easy Vegan Cupcakes</Text>
        </View>
      </View>
      <View style={styles.View_1207_10664}>
        <View style={styles.View_1207_10665}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6283/bbb8/d5973a8efbebb6f141c53977ed2348ec"
            }}
            style={styles.ImageBackground_1207_10666}
          />
        </View>
        <View style={styles.View_1207_10667}>
          <Text style={styles.Text_1207_10667}>Hearty Lentil Soup</Text>
        </View>
      </View>
      <View style={styles.View_1207_10668}>
        <View style={styles.View_1207_10669}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ba1/ef9d/1846dc53f79f828be44462ca7bd820c5"
            }}
            style={styles.ImageBackground_1207_10670}
          />
        </View>
        <View style={styles.View_1207_10671}>
          <Text style={styles.Text_1207_10671}>Sesame Dumplings</Text>
        </View>
      </View>
      <View style={styles.View_1207_10672}>
        <View style={styles.View_1207_10673} />
        <View style={styles.View_1207_10674}>
          <Text style={styles.Text_1207_10674}>Search</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1e7/cbb4/2f2d6dcdfc695b91843d0a8927eed98e"
          }}
          style={styles.ImageBackground_1207_10675}
        />
      </View>
      <View style={styles.View_1207_10676}>
        <Text style={styles.Text_1207_10676}>Home</Text>
      </View>
      <View style={styles.View_1207_10677}>
        <View style={styles.View_1207_10678}>
          <View style={styles.View_1207_10679} />
          <View style={styles.View_1207_10680}>
            <View style={styles.View_1207_10681}>
              <Text style={styles.Text_1207_10681}>For You</Text>
            </View>
            <View style={styles.View_1207_10682}>
              <Text style={styles.Text_1207_10682}>Thai Curries</Text>
            </View>
            <View style={styles.View_1207_10683}>
              <Text style={styles.Text_1207_10683}>Coconut Desserts</Text>
            </View>
            <View style={styles.View_1207_10684}>
              <Text style={styles.Text_1207_10684}>Category 4</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1207_10685}>
        <View style={styles.View_1207_10686}>
          <View style={styles.View_1207_10687} />
        </View>
        <View style={styles.View_1207_10688}>
          <View style={styles.View_1207_10689}>
            <Text style={styles.Text_1207_10689}>Quick Match</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6eb/6084/78c571ae50c19cd35c7046d4da0573d2"
            }}
            style={styles.ImageBackground_1207_10690}
          />
        </View>
      </View>
      <View style={styles.View_1207_10691}>
        <View style={styles.View_1207_10692}>
          <Text style={styles.Text_1207_10692}>Trending</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9ea/0a57/f7d8f32f638da43676c64c551e98d7d8"
          }}
          style={styles.ImageBackground_1207_10693}
        />
      </View>
      <View style={styles.View_1207_10694}>
        <View style={styles.View_1207_10695}>
          <View style={styles.View_1207_10696}>
            <View style={styles.View_1207_10697} />
            <View style={styles.View_1207_10698}>
              <View style={styles.View_1207_10699}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f17/9e01/edf517d72543605871e9c8a7aa4e790d"
                  }}
                  style={styles.ImageBackground_1207_10700}
                />
              </View>
              <View style={styles.View_1207_10702}>
                <Text style={styles.Text_1207_10702}>Home</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1207_10703}>
            <View style={styles.View_1207_10704}>
              <View style={styles.View_1207_10705} />
            </View>
            <View style={styles.View_1207_10706}>
              <View style={styles.View_1207_10707}>
                <View style={styles.View_1207_10708}>
                  <View style={styles.View_1207_10709}>
                    <Text style={styles.Text_1207_10709}>Account</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5911/62a6/46d5fa59598a9af8bf6a390c35c6d82b"
                    }}
                    style={styles.ImageBackground_1207_10710}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7f5/1872/5007f2fdd83224dd17ff4288d96be911"
                  }}
                  style={styles.ImageBackground_1207_10711}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_1207_10712}>
            <View style={styles.View_1207_10713} />
            <View style={styles.View_1207_10714}>
              <View style={styles.View_1207_10715}>
                <Text style={styles.Text_1207_10715}>Cart</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3f6/dc17/1e9fb0e34eb1cdc0755a8616cca3af37"
                }}
                style={styles.ImageBackground_1207_10716}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1207_10717}>
          <View style={styles.View_1207_10718}>
            <View style={styles.View_1207_10719} />
            <View style={styles.View_1207_10720}>
              <View style={styles.View_1207_10721}>
                <Text style={styles.Text_1207_10721}>Planner</Text>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/857e/bbc4/04184b125f3fdd23e23ee32840d13d90"
            }}
            style={styles.ImageBackground_1207_10722}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1207_10652: {
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
  ImageBackground_1207_10653: {
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
  View_1207_10654: {
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
  ImageBackground_1207_10655: {
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
  View_1207_10656: {
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
  View_1207_10657: {
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
  ImageBackground_1207_10658: {
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
  View_1207_10659: {
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
  Text_1207_10659: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10660: {
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
  View_1207_10661: {
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
  ImageBackground_1207_10662: {
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
  View_1207_10663: {
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
  Text_1207_10663: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10664: {
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
  View_1207_10665: {
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
  ImageBackground_1207_10666: {
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
  View_1207_10667: {
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
  Text_1207_10667: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10668: {
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
  View_1207_10669: {
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
  ImageBackground_1207_10670: {
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
  View_1207_10671: {
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
  Text_1207_10671: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10672: {
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
  View_1207_10673: {
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
  View_1207_10674: {
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
  Text_1207_10674: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_10675: {
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
  View_1207_10676: {
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
  Text_1207_10676: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 26,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10677: {
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
  View_1207_10678: {
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
  View_1207_10679: {
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
  View_1207_10680: {
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
  View_1207_10681: {
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
  Text_1207_10681: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10682: {
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
  Text_1207_10682: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10683: {
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
  Text_1207_10683: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10684: {
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
  Text_1207_10684: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10685: {
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
  View_1207_10686: {
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
  View_1207_10687: {
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
  View_1207_10688: {
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
  View_1207_10689: {
    width: wp("26.666666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666664%"),
    justifyContent: "flex-start"
  },
  Text_1207_10689: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_10690: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_10691: {
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
  View_1207_10692: {
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
  Text_1207_10692: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_10693: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%")
  },
  View_1207_10694: {
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
  View_1207_10695: {
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
  View_1207_10696: {
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
  View_1207_10697: {
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
  View_1207_10698: {
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
  View_1207_10699: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1207_10700: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("0.27322404371587083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6666666666666661%")
  },
  View_1207_10702: {
    width: wp("8.266666666666666%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1207_10702: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10703: {
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
  View_1207_10704: {
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
  View_1207_10705: {
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
  View_1207_10706: {
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
  View_1207_10707: {
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
  View_1207_10708: {
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
  View_1207_10709: {
    width: wp("11.733333333333333%"),
    top: hp("3.0737704918032875%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1207_10709: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_10710: {
    width: wp("2.548291015625%"),
    height: hp("1.3054769547259222%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.480208333333323%")
  },
  ImageBackground_1207_10711: {
    width: wp("4.03974609375%"),
    height: hp("0.8247750704405739%"),
    top: hp("1.80127920348788%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.73333333333332%")
  },
  View_1207_10712: {
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
  View_1207_10713: {
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
  View_1207_10714: {
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
  View_1207_10715: {
    width: wp("6.133333333333333%"),
    top: hp("3.4153005464481083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666586%"),
    justifyContent: "center"
  },
  Text_1207_10715: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_10716: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_10717: {
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
  View_1207_10718: {
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
  View_1207_10719: {
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
  View_1207_10720: {
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
  View_1207_10721: {
    width: wp("10.666666666666668%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1207_10721: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_10722: {
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
