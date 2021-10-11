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
      <View style={styles.View_1207_11503}>
        <Text style={styles.Text_1207_11503}>Planner</Text>
      </View>
      <View style={styles.View_1207_11504}>
        <View style={styles.View_I1207_11504_236_7276}>
          <View style={styles.View_I1207_11504_236_7277} />
          <View style={styles.View_I1207_11504_236_7282}>
            <Text style={styles.Text_I1207_11504_236_7282}>Home</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/255a/5f36/09d343d8e23e53261aff4eced400d329"
            }}
            style={styles.ImageBackground_I1207_11504_236_7436}
          />
        </View>
        <View style={styles.View_I1207_11504_236_7283}>
          <View style={styles.View_I1207_11504_236_7285} />
          <View style={styles.View_I1207_11504_236_7289}>
            <Text style={styles.Text_I1207_11504_236_7289}>Account</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0f6/5f5b/b4451c453d9812e1d9bd709030b8f11b"
            }}
            style={styles.ImageBackground_I1207_11504_236_7424}
          />
        </View>
        <View style={styles.View_I1207_11504_236_7292}>
          <View style={styles.View_I1207_11504_236_7293} />
          <View style={styles.View_I1207_11504_236_7295}>
            <Text style={styles.Text_I1207_11504_236_7295}>Cart</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e857/90f2/f4f48a1445e28ed495491575672de97c"
            }}
            style={styles.ImageBackground_I1207_11504_236_7427}
          />
        </View>
        <View style={styles.View_I1207_11504_236_7297}>
          <View style={styles.View_I1207_11504_236_7299} />
          <View style={styles.View_I1207_11504_236_7301}>
            <Text style={styles.Text_I1207_11504_236_7301}>Planner</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e28a/3b6d/d324a345508629c3fe6b514d09c5f307"
            }}
            style={styles.ImageBackground_I1207_11504_236_7431}
          />
        </View>
      </View>
      <View style={styles.View_1207_11505} />
      <View style={styles.View_1207_11506}>
        <View style={styles.View_1207_11507}>
          <Text style={styles.Text_1207_11507}>Mo</Text>
        </View>
        <View style={styles.View_1207_11508}>
          <Text style={styles.Text_1207_11508}>19</Text>
        </View>
      </View>
      <View style={styles.View_1207_11509}>
        <View style={styles.View_1207_11510}>
          <Text style={styles.Text_1207_11510}>Tu</Text>
        </View>
        <View style={styles.View_1207_11511}>
          <Text style={styles.Text_1207_11511}>20</Text>
        </View>
      </View>
      <View style={styles.View_1207_11512}>
        <View style={styles.View_1207_11513}>
          <Text style={styles.Text_1207_11513}>We</Text>
        </View>
        <View style={styles.View_1207_11514}>
          <Text style={styles.Text_1207_11514}>21</Text>
        </View>
      </View>
      <View style={styles.View_1207_11515}>
        <View style={styles.View_1207_11516}>
          <Text style={styles.Text_1207_11516}>Th</Text>
        </View>
        <View style={styles.View_1207_11517}>
          <Text style={styles.Text_1207_11517}>22</Text>
        </View>
      </View>
      <View style={styles.View_1207_11518}>
        <View style={styles.View_1207_11519}>
          <Text style={styles.Text_1207_11519}>Fr</Text>
        </View>
        <View style={styles.View_1207_11520}>
          <Text style={styles.Text_1207_11520}>23</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/508c/0e90/f386356f8900a32c148e42631c20f9a7"
        }}
        style={styles.ImageBackground_1207_11521}
      />
      <View style={styles.View_1207_11522}>
        <View style={styles.View_1207_11523}>
          <Text style={styles.Text_1207_11523}>Sa</Text>
        </View>
        <View style={styles.View_1207_11524}>
          <Text style={styles.Text_1207_11524}>24</Text>
        </View>
      </View>
      <View style={styles.View_1207_11525}>
        <View style={styles.View_1207_11526}>
          <Text style={styles.Text_1207_11526}>Su</Text>
        </View>
        <View style={styles.View_1207_11527}>
          <Text style={styles.Text_1207_11527}>18</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8145/02d8/ae21532102bf516fbe5f4ee8bdf7b7c5"
        }}
        style={styles.ImageBackground_1207_11528}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f9ea/0a57/f7d8f32f638da43676c64c551e98d7d8"
        }}
        style={styles.ImageBackground_1207_11529}
      />
      <View style={styles.View_1207_11530}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6022/7ef5/46ac32332b482ff5b4f95fece4a31aa4"
          }}
          style={styles.ImageBackground_1207_11531}
        />
        <View style={styles.View_1207_11532}>
          <Text style={styles.Text_1207_11532}>Next 7 Day</Text>
        </View>
      </View>
      <View style={styles.View_1207_11533}>
        <View style={styles.View_I1207_11533_2_8278} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66ff/cdec/89d04f1b4e4c617ffe31559fb87d0754"
          }}
          style={styles.ImageBackground_I1207_11533_2_8279}
        />
        <View style={styles.View_I1207_11533_2_8280}>
          <View style={styles.View_I1207_11533_2_8281}>
            <Text style={styles.Text_I1207_11533_2_8281}>Recipe name</Text>
          </View>
          <View style={styles.View_I1207_11533_2_8282}>
            <Text style={styles.Text_I1207_11533_2_8282}>15 minutes</Text>
          </View>
          <View style={styles.View_I1207_11533_2_8283}>
            <Text style={styles.Text_I1207_11533_2_8283}>Author Name</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1207_11534}>
        <View style={styles.View_I1207_11534_2_8278} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66ff/cdec/89d04f1b4e4c617ffe31559fb87d0754"
          }}
          style={styles.ImageBackground_I1207_11534_2_8279}
        />
        <View style={styles.View_I1207_11534_2_8280}>
          <View style={styles.View_I1207_11534_2_8281}>
            <Text style={styles.Text_I1207_11534_2_8281}>Recipe name</Text>
          </View>
          <View style={styles.View_I1207_11534_2_8282}>
            <Text style={styles.Text_I1207_11534_2_8282}>15 minutes</Text>
          </View>
          <View style={styles.View_I1207_11534_2_8283}>
            <Text style={styles.Text_I1207_11534_2_8283}>Author Name</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1207_11535}>
        <View style={styles.View_I1207_11535_2_8278} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/66ff/cdec/89d04f1b4e4c617ffe31559fb87d0754"
          }}
          style={styles.ImageBackground_I1207_11535_2_8279}
        />
        <View style={styles.View_I1207_11535_2_8280}>
          <View style={styles.View_I1207_11535_2_8281}>
            <Text style={styles.Text_I1207_11535_2_8281}>Recipe name</Text>
          </View>
          <View style={styles.View_I1207_11535_2_8282}>
            <Text style={styles.Text_I1207_11535_2_8282}>15 minutes</Text>
          </View>
          <View style={styles.View_I1207_11535_2_8283}>
            <Text style={styles.Text_I1207_11535_2_8283}>Author Name</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1207_11536}>
        <View style={styles.View_1207_11537}>
          <Text style={styles.Text_1207_11537}>Sunday, March 18</Text>
        </View>
      </View>
      <View style={styles.View_1207_11540}>
        <Text style={styles.Text_1207_11540}>Monday, March 19</Text>
      </View>
      <View style={styles.View_1207_11541} />
      <View style={styles.View_1207_11542} />
      <View style={styles.View_1207_11543}>
        <Text style={styles.Text_1207_11543}>Edit</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1207_11503: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("5.46448087431694%"),
    justifyContent: "flex-start"
  },
  Text_1207_11503: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 26,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11504: {
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
  View_I1207_11504_236_7276: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1207_11504_236_7277: {
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1207_11504_236_7282: {
    width: wp("8.266666666666666%"),
    top: hp("6.284153005464475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    justifyContent: "center"
  },
  Text_I1207_11504_236_7282: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_11504_236_7436: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.8688524590164093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%")
  },
  View_I1207_11504_236_7283: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("0%")
  },
  View_I1207_11504_236_7285: {
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1207_11504_236_7289: {
    width: wp("11.733333333333333%"),
    top: hp("5.942622950819668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666671%"),
    justifyContent: "center"
  },
  Text_I1207_11504_236_7289: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_11504_236_7424: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.45901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.266666666666666%")
  },
  View_I1207_11504_236_7292: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_I1207_11504_236_7293: {
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1207_11504_236_7295: {
    width: wp("6.133333333333333%"),
    top: hp("6.147540983606547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999994%"),
    justifyContent: "center"
  },
  Text_I1207_11504_236_7295: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_11504_236_7427: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.8688524590164093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.199999999999996%")
  },
  View_I1207_11504_236_7297: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%")
  },
  View_I1207_11504_236_7299: {
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1207_11504_236_7301: {
    width: wp("10.666666666666668%"),
    top: hp("6.147540983606547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333337%"),
    justifyContent: "center"
  },
  Text_I1207_11504_236_7301: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_11504_236_7431: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.133333333333333%")
  },
  View_1207_11505: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("15.027322404371585%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("17.89617486338798%"),
    backgroundColor: "rgba(56, 75, 153, 1)"
  },
  View_1207_11506: {
    width: wp("6.993294270833333%"),
    minWidth: wp("6.993294270833333%"),
    height: hp("6.759743612320697%"),
    minHeight: hp("6.759743612320697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.804166666666667%"),
    top: hp("21.994535519125684%")
  },
  View_1207_11507: {
    width: wp("6.993294270833333%"),
    minWidth: wp("6.993294270833333%"),
    minHeight: hp("2.524770934725068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_11507: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11508: {
    width: wp("5.103206380208333%"),
    minWidth: wp("5.103206380208333%"),
    minHeight: hp("2.524770934725068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.953125%"),
    top: hp("4.2349726775956285%"),
    justifyContent: "center"
  },
  Text_1207_11508: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11509: {
    width: wp("5.859244791666667%"),
    minWidth: wp("5.859244791666667%"),
    height: hp("6.759743612320697%"),
    minHeight: hp("6.759743612320697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.06458333333333%"),
    top: hp("21.994535519125684%")
  },
  View_1207_11510: {
    width: wp("5.481233723958334%"),
    minWidth: wp("5.481233723958334%"),
    minHeight: hp("2.524770934725068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18958333333333144%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_11510: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11511: {
    width: wp("5.859244791666667%"),
    minWidth: wp("5.859244791666667%"),
    minHeight: hp("2.524770934725068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.2349726775956285%"),
    justifyContent: "center"
  },
  Text_1207_11511: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11512: {
    width: wp("6.993294270833333%"),
    minWidth: wp("6.993294270833333%"),
    height: hp("6.759743612320697%"),
    minHeight: hp("6.759743612320697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.190625000000004%"),
    top: hp("21.994535519125684%")
  },
  View_1207_11513: {
    width: wp("6.993294270833333%"),
    minWidth: wp("6.993294270833333%"),
    minHeight: hp("2.524770934725068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_11513: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11514: {
    width: wp("5.103206380208333%"),
    minWidth: wp("5.103206380208333%"),
    minHeight: hp("2.524770934725068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9447916666666671%"),
    top: hp("4.2349726775956285%"),
    justifyContent: "center"
  },
  Text_1207_11514: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11515: {
    width: wp("5.859244791666667%"),
    minWidth: wp("5.859244791666667%"),
    height: hp("6.759743612320697%"),
    minHeight: hp("6.759743612320697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.45104166666667%"),
    top: hp("21.994535519125684%")
  },
  View_1207_11516: {
    width: wp("5.859244791666667%"),
    minWidth: wp("5.859244791666667%"),
    minHeight: hp("2.524770934725068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_11516: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11517: {
    width: wp("5.670231119791667%"),
    minWidth: wp("5.670231119791667%"),
    minHeight: hp("2.524770934725068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.2349726775956285%"),
    justifyContent: "center"
  },
  Text_1207_11517: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11518: {
    width: wp("5.859244791666667%"),
    minWidth: wp("5.859244791666667%"),
    height: hp("6.759743612320697%"),
    minHeight: hp("6.759743612320697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.57708333333333%"),
    top: hp("21.994535519125684%")
  },
  View_1207_11519: {
    width: wp("4.536181640625%"),
    minWidth: wp("4.536181640625%"),
    minHeight: hp("2.524770934725068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5677083333333428%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_11519: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11520: {
    width: wp("5.859244791666667%"),
    minWidth: wp("5.859244791666667%"),
    minHeight: hp("2.524770934725068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.2349726775956285%"),
    justifyContent: "center"
  },
  Text_1207_11520: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_11521: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.399999999999999%"),
    top: hp("25.40983606557377%")
  },
  View_1207_11522: {
    width: wp("5.859244791666667%"),
    minWidth: wp("5.859244791666667%"),
    height: hp("6.759743612320697%"),
    minHeight: hp("6.759743612320697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.703125%"),
    top: hp("21.994535519125684%")
  },
  View_1207_11523: {
    width: wp("5.670247395833333%"),
    minWidth: wp("5.670247395833333%"),
    minHeight: hp("2.524770934725068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_11523: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11524: {
    width: wp("5.859244791666667%"),
    minWidth: wp("5.859244791666667%"),
    minHeight: hp("2.524770934725068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.2349726775956285%"),
    justifyContent: "center"
  },
  Text_1207_11524: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11525: {
    width: wp("5.804606119791666%"),
    minWidth: wp("5.804606119791666%"),
    height: hp("6.759743612320697%"),
    minHeight: hp("6.759743612320697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333333%"),
    top: hp("21.994535519125684%")
  },
  View_1207_11526: {
    width: wp("5.670231119791667%"),
    minWidth: wp("5.670231119791667%"),
    minHeight: hp("2.524770934725068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.13437500000000036%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_11526: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11527: {
    width: wp("5.670231119791667%"),
    minWidth: wp("5.670231119791667%"),
    minHeight: hp("2.524770934725068%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.2349726775956285%"),
    justifyContent: "center"
  },
  Text_1207_11527: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_11528: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("23.770491803278688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4%")
  },
  ImageBackground_1207_11529: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("23.770491803278688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%")
  },
  View_1207_11530: {
    width: wp("23.200000000000003%"),
    minWidth: wp("23.200000000000003%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("13.524590163934427%")
  },
  ImageBackground_1207_11531: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.933333333333337%")
  },
  View_1207_11532: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1207_11532: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_1207_11533: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("43.0327868852459%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_11533_2_8278: {
    flexGrow: 1,
    width: wp("89.33333333333333%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1207_11533_2_8279: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    resizeMode: "cover"
  },
  View_I1207_11533_2_8280: {
    flexGrow: 1,
    width: wp("59.46666666666667%"),
    height: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333336%"),
    top: hp("1.7759562841530112%")
  },
  View_I1207_11533_2_8281: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_11533_2_8281: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1207_11533_2_8282: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311471%"),
    justifyContent: "flex-start"
  },
  Text_I1207_11533_2_8282: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1207_11533_2_8283: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("4.508196721311471%"),
    justifyContent: "flex-start"
  },
  Text_I1207_11533_2_8283: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_11534: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("54.50819672131148%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_11534_2_8278: {
    flexGrow: 1,
    width: wp("89.33333333333333%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1207_11534_2_8279: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    resizeMode: "cover"
  },
  View_I1207_11534_2_8280: {
    flexGrow: 1,
    width: wp("59.46666666666667%"),
    height: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333336%"),
    top: hp("1.775956284152997%")
  },
  View_I1207_11534_2_8281: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_11534_2_8281: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1207_11534_2_8282: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311478%"),
    justifyContent: "flex-start"
  },
  Text_I1207_11534_2_8282: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1207_11534_2_8283: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("4.508196721311478%"),
    justifyContent: "flex-start"
  },
  Text_I1207_11534_2_8283: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_11535: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("80.73770491803278%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_11535_2_8278: {
    flexGrow: 1,
    width: wp("89.33333333333333%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1207_11535_2_8279: {
    flexGrow: 1,
    width: wp("18.133333333333333%"),
    height: hp("9.289617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.8196721311475414%"),
    resizeMode: "cover"
  },
  View_I1207_11535_2_8280: {
    flexGrow: 1,
    width: wp("59.46666666666667%"),
    height: hp("7.5136612021857925%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.133333333333336%"),
    top: hp("1.7759562841530254%")
  },
  View_I1207_11535_2_8281: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_11535_2_8281: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1207_11535_2_8282: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.508196721311464%"),
    justifyContent: "flex-start"
  },
  Text_I1207_11535_2_8282: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_I1207_11535_2_8283: {
    width: wp("26.400000000000002%"),
    minWidth: wp("26.400000000000002%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("4.508196721311464%"),
    justifyContent: "flex-start"
  },
  Text_I1207_11535_2_8283: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_11536: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("37.295081967213115%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1207_11537: {
    width: wp("56.53333333333334%"),
    top: hp("-1.0928961748633839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1207_11537: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 20,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11540: {
    width: wp("57.599999999999994%"),
    top: hp("74.72677595628416%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    justifyContent: "center"
  },
  Text_1207_11540: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 20,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11541: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("69.80874316939891%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_1207_11542: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("96.03825136612022%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_1207_11543: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("6.967213114754098%"),
    justifyContent: "center"
  },
  Text_1207_11543: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "left",
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
