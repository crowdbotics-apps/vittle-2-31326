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
      <View style={styles.View_1207_11445}>
        <View style={styles.View_1207_11446}>
          <View style={styles.View_1207_11447}>
            <Text style={styles.Text_1207_11447}>Meat</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1207_11448}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b2e/cd39/7d8d298465ef97861c31b85223e2e1ed"
          }}
          style={styles.ImageBackground_1207_11449}
        />
        <View style={styles.View_1207_11450}>
          <Text style={styles.Text_1207_11450}>Add Item</Text>
        </View>
      </View>
      <View style={styles.View_1207_11451}>
        <Text style={styles.Text_1207_11451}>Cart</Text>
      </View>
      <View style={styles.View_1207_11452}>
        <View style={styles.View_I1207_11452_236_7276}>
          <View style={styles.View_I1207_11452_236_7277} />
          <View style={styles.View_I1207_11452_236_7282}>
            <Text style={styles.Text_I1207_11452_236_7282}>Home</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/255a/5f36/09d343d8e23e53261aff4eced400d329"
            }}
            style={styles.ImageBackground_I1207_11452_236_7436}
          />
        </View>
        <View style={styles.View_I1207_11452_236_7283}>
          <View style={styles.View_I1207_11452_236_7285} />
          <View style={styles.View_I1207_11452_236_7289}>
            <Text style={styles.Text_I1207_11452_236_7289}>Account</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0f6/5f5b/b4451c453d9812e1d9bd709030b8f11b"
            }}
            style={styles.ImageBackground_I1207_11452_236_7424}
          />
        </View>
        <View style={styles.View_I1207_11452_236_7292}>
          <View style={styles.View_I1207_11452_236_7293} />
          <View style={styles.View_I1207_11452_236_7295}>
            <Text style={styles.Text_I1207_11452_236_7295}>Cart</Text>
          </View>
          <View style={styles.View_I1207_11452_236_7427}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3863/5172/495c50257a7e9715d7036e86871b987f"
              }}
              style={styles.ImageBackground_I1207_11452_236_7427_236_7403}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3863/5172/495c50257a7e9715d7036e86871b987f"
              }}
              style={styles.ImageBackground_I1207_11452_236_7427_236_7404}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5be7/da69/d97b2da26e096ce3f0739f1931a72578"
              }}
              style={styles.ImageBackground_I1207_11452_236_7427_236_7407}
            />
          </View>
        </View>
        <View style={styles.View_I1207_11452_236_7297}>
          <View style={styles.View_I1207_11452_236_7299} />
          <View style={styles.View_I1207_11452_236_7301}>
            <Text style={styles.Text_I1207_11452_236_7301}>Planner</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/857e/bbc4/04184b125f3fdd23e23ee32840d13d90"
            }}
            style={styles.ImageBackground_I1207_11452_236_7431}
          />
        </View>
      </View>
      <View style={styles.View_1207_11453}>
        <View style={styles.View_1207_11454} />
        <View style={styles.View_1207_11455}>
          <View style={styles.View_1207_11456} />
          <View style={styles.View_1207_11457}>
            <Text style={styles.Text_1207_11457}>By Category</Text>
          </View>
        </View>
        <View style={styles.View_1207_11458}>
          <Text style={styles.Text_1207_11458}>By Recipe</Text>
        </View>
      </View>
      <View style={styles.View_1207_11459}>
        <View style={styles.View_1207_11460}>
          <View style={styles.View_1207_11461}>
            <View style={styles.View_1207_11462}>
              <Text style={styles.Text_1207_11462}>Produce</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1207_11463}>
          <View style={styles.View_1207_11464}>
            <Text style={styles.Text_1207_11464}>PRODUCT</Text>
          </View>
          <View style={styles.View_1207_11465}>
            <Text style={styles.Text_1207_11465}>QTY</Text>
          </View>
          <View style={styles.View_1207_11466}>
            <Text style={styles.Text_1207_11466}>PRICE</Text>
          </View>
        </View>
        <View style={styles.View_1207_11467}>
          <View style={styles.View_1207_11468}>
            <View style={styles.View_1207_11469}>
              <View style={styles.View_1207_11470} />
              <View style={styles.View_1207_11471}>
                <Text style={styles.Text_1207_11471}>Cauliflower</Text>
              </View>
              <View style={styles.View_1207_11472}>
                <Text style={styles.Text_1207_11472}>2</Text>
              </View>
              <View style={styles.View_1207_11473}>
                <Text style={styles.Text_1207_11473}>$6.00</Text>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f2d/5662/41688ec668eba2cd2a3184313323eaa2"
            }}
            style={styles.ImageBackground_1207_11474}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5817/ff3b/a69889aa5eca31edd1d317b365da3b55"
            }}
            style={styles.ImageBackground_1207_11475}
          />
        </View>
        <View style={styles.View_1207_11476}>
          <View style={styles.View_1207_11477}>
            <View style={styles.View_1207_11478}>
              <View style={styles.View_1207_11479} />
              <View style={styles.View_1207_11480}>
                <Text style={styles.Text_1207_11480}>Apples</Text>
              </View>
              <View style={styles.View_1207_11481}>
                <Text style={styles.Text_1207_11481}>1</Text>
              </View>
              <View style={styles.View_1207_11482}>
                <Text style={styles.Text_1207_11482}>$0.99</Text>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d4b1/b5c2/23fa15351f59bce8c783f4d282d76e8e"
            }}
            style={styles.ImageBackground_1207_11483}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5817/ff3b/a69889aa5eca31edd1d317b365da3b55"
            }}
            style={styles.ImageBackground_1207_11484}
          />
        </View>
        <View style={styles.View_1207_11485}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1470/765b/bd4e81024432a581488fff46f29b04e2"
            }}
            style={styles.ImageBackground_1207_11486}
          />
          <View style={styles.View_1207_11487}>
            <Text style={styles.Text_1207_11487}>Add Item</Text>
          </View>
        </View>
        <View style={styles.View_1207_11488} />
      </View>
      <View style={styles.View_1207_11489}>
        <View style={styles.View_1207_11490}>
          <Text style={styles.Text_1207_11490}>PRODUCT</Text>
        </View>
        <View style={styles.View_1207_11491}>
          <Text style={styles.Text_1207_11491}>QTY</Text>
        </View>
        <View style={styles.View_1207_11492}>
          <Text style={styles.Text_1207_11492}>PRICE</Text>
        </View>
      </View>
      <View style={styles.View_1207_11493}>
        <View style={styles.View_1207_11494}>
          <View style={styles.View_1207_11495} />
        </View>
        <View style={styles.View_1207_11496}>
          <Text style={styles.Text_1207_11496}>Proceed to Check Out</Text>
        </View>
      </View>
      <View style={styles.View_1207_11497}>
        <View style={styles.View_1207_11498} />
        <View style={styles.View_1207_11499}>
          <Text style={styles.Text_1207_11499}>$6.99</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68f2/9cd3/e630d3d943dcc09b118d556a46303807"
        }}
        style={styles.ImageBackground_1207_11500}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc1b/f998/e2be197f44f569e42dbfcdb4e6714de3"
        }}
        style={styles.ImageBackground_1207_11501}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1207_11445: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("73.90710382513662%")
  },
  View_1207_11446: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_11447: {
    width: wp("16.8%"),
    minWidth: wp("16.8%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1207_11447: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 20,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11448: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%"),
    top: hp("90.57377049180327%")
  },
  ImageBackground_1207_11449: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_11450: {
    width: wp("21.066666666666666%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333335%"),
    justifyContent: "flex-start"
  },
  Text_1207_11450: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_11451: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("5.46448087431694%"),
    justifyContent: "flex-start"
  },
  Text_1207_11451: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 26,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11452: {
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
  View_I1207_11452_236_7276: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1207_11452_236_7277: {
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1207_11452_236_7282: {
    width: wp("8.266666666666666%"),
    top: hp("6.284153005464475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    justifyContent: "center"
  },
  Text_I1207_11452_236_7282: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_11452_236_7436: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.8688524590164093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.333333333333334%")
  },
  View_I1207_11452_236_7283: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("0%")
  },
  View_I1207_11452_236_7285: {
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1207_11452_236_7289: {
    width: wp("11.733333333333333%"),
    top: hp("5.942622950819668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666671%"),
    justifyContent: "center"
  },
  Text_I1207_11452_236_7289: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_11452_236_7424: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.45901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.266666666666666%")
  },
  View_I1207_11452_236_7292: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("0%")
  },
  View_I1207_11452_236_7293: {
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1207_11452_236_7295: {
    width: wp("6.133333333333333%"),
    top: hp("6.147540983606547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.599999999999994%"),
    justifyContent: "center"
  },
  Text_I1207_11452_236_7295: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1207_11452_236_7427: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.8688524590164093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.199999999999996%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I1207_11452_236_7427_236_7403: {
    flexGrow: 1,
    width: wp("0.5333333333333333%"),
    height: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.133333333333333%"),
    top: hp("2.7322404371584383%")
  },
  ImageBackground_I1207_11452_236_7427_236_7404: {
    flexGrow: 1,
    width: wp("0.5333333333333333%"),
    height: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.06666666666667%"),
    top: hp("2.7322404371584383%")
  },
  ImageBackground_I1207_11452_236_7427_236_7407: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666728%"),
    top: hp("0.1366120218578999%")
  },
  View_I1207_11452_236_7297: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%")
  },
  View_I1207_11452_236_7299: {
    width: wp("25%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1207_11452_236_7301: {
    width: wp("10.666666666666668%"),
    top: hp("6.147540983606547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333337%"),
    justifyContent: "center"
  },
  Text_I1207_11452_236_7301: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I1207_11452_236_7431: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("2.7322404371584668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.133333333333333%")
  },
  View_1207_11453: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("15.846994535519126%")
  },
  View_1207_11454: {
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
  View_1207_11455: {
    width: wp("43.68557942708333%"),
    minWidth: wp("43.68557942708333%"),
    height: hp("3.6274894339139343%"),
    minHeight: hp("3.6274894339139343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0665039062499995%"),
    top: hp("0.3720809853142093%")
  },
  View_1207_11456: {
    width: wp("43.68557942708333%"),
    minWidth: wp("43.68557942708333%"),
    height: hp("3.6274894339139343%"),
    minHeight: hp("3.6274894339139343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(56, 75, 153, 1)"
  },
  View_1207_11457: {
    width: wp("22.666666666666664%"),
    minWidth: wp("22.666666666666664%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.866666666666667%"),
    top: hp("0.9940392332650241%"),
    justifyContent: "center"
  },
  Text_1207_11457: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_1207_11458: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("1.5027322404371584%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.46666666666667%"),
    top: hp("1.3661202185792334%"),
    justifyContent: "center"
  },
  Text_1207_11458: {
    color: "rgba(56, 75, 153, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_1207_11459: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("43.44262295081967%"),
    minHeight: hp("43.44262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.09289617486339%")
  },
  View_1207_11460: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("0%")
  },
  View_1207_11461: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_11462: {
    width: wp("27.46666666666667%"),
    minWidth: wp("27.46666666666667%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1207_11462: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11463: {
    width: wp("89.60000000000001%"),
    minWidth: wp("89.60000000000001%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("7.923497267759558%")
  },
  View_1207_11464: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1207_11464: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_1207_11465: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1207_11465: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_1207_11466: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1207_11466: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_1207_11467: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("13.387978142076499%")
  },
  View_1207_11468: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_11469: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_11470: {
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
  View_1207_11471: {
    width: wp("22.666666666666664%"),
    top: hp("2.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333334%"),
    justifyContent: "flex-start"
  },
  Text_1207_11471: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_11472: {
    width: wp("2.666666666666667%"),
    top: hp("2.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.8%"),
    justifyContent: "flex-start"
  },
  Text_1207_11472: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_11473: {
    width: wp("11.733333333333333%"),
    top: hp("2.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.66666666666667%"),
    justifyContent: "flex-start"
  },
  Text_1207_11473: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_11474: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("3.8251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%")
  },
  ImageBackground_1207_11475: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%")
  },
  View_1207_11476: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("23.22404371584699%")
  },
  View_1207_11477: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_11478: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_11479: {
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
  View_1207_11480: {
    width: wp("13.866666666666665%"),
    top: hp("2.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.733333333333334%"),
    justifyContent: "flex-start"
  },
  Text_1207_11480: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_11481: {
    width: wp("1.866666666666667%"),
    top: hp("2.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.8%"),
    justifyContent: "flex-start"
  },
  Text_1207_11481: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_11482: {
    width: wp("11.733333333333333%"),
    top: hp("2.322404371584703%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.66666666666667%"),
    justifyContent: "flex-start"
  },
  Text_1207_11482: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_11483: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("3.8251366120218577%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%")
  },
  ImageBackground_1207_11484: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.666666666666664%")
  },
  View_1207_11485: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("35.245901639344254%")
  },
  ImageBackground_1207_11486: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_11487: {
    width: wp("21.066666666666666%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    justifyContent: "flex-start"
  },
  Text_1207_11487: {
    color: "rgba(56, 75, 153, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_11488: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.546448087431694%"),
    minHeight: hp("0.546448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42.89617486338798%"),
    backgroundColor: "rgba(250, 250, 250, 1)"
  },
  View_1207_11489: {
    width: wp("89.60000000000001%"),
    minWidth: wp("89.60000000000001%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("81.83060109289617%")
  },
  View_1207_11490: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1207_11490: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_1207_11491: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1207_11491: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_1207_11492: {
    width: wp("9.6%"),
    minWidth: wp("9.6%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1207_11492: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_1207_11493: {
    width: wp("59.46666666666667%"),
    minWidth: wp("59.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("90.1639344262295%")
  },
  View_1207_11494: {
    width: wp("59.46666666666667%"),
    minWidth: wp("59.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_11495: {
    width: wp("59.46666666666667%"),
    minWidth: wp("59.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 95, 87, 1)"
  },
  View_1207_11496: {
    width: wp("46.666666666666664%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.2%"),
    justifyContent: "flex-start"
  },
  Text_1207_11496: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_11497: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("90.1639344262295%")
  },
  View_1207_11498: {
    width: wp("27.73333333333333%"),
    minWidth: wp("27.73333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1207_11499: {
    width: wp("12.266666666666666%"),
    top: hp("1.7759562841530112%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.733333333333334%"),
    justifyContent: "flex-start"
  },
  Text_1207_11499: {
    color: "rgba(33, 150, 83, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_11500: {
    width: wp("14.609765625000001%"),
    minWidth: wp("14.609765625000001%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("39.48087431693989%"),
    resizeMode: "cover"
  },
  ImageBackground_1207_11501: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("7.377049180327869%"),
    minHeight: hp("7.377049180327869%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("49.31693989071038%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
