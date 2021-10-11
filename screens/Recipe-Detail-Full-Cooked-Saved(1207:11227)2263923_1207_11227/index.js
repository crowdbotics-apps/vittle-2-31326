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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3365/cbb7/213110af477a1b168393b903c5e61707"
        }}
        style={styles.ImageBackground_1207_11228}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7285/075c/e7be176c1dbcb69fd3d7bef79df3d1d2"
        }}
        style={styles.ImageBackground_1207_11229}
      />
      <View style={styles.View_1207_11230}>
        <Text style={styles.Text_1207_11230}>Recipe Detail</Text>
      </View>
      <View style={styles.View_1207_11231} />
      <View style={styles.View_1207_11232}>
        <View style={styles.View_1207_11233}>
          <View style={styles.View_1207_11234}>
            <Text style={styles.Text_1207_11234}>More Like This</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1c0/2511/7e67b186ff911c520978c1ea34d53331"
            }}
            style={styles.ImageBackground_1207_11235}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1c0/2511/7e67b186ff911c520978c1ea34d53331"
            }}
            style={styles.ImageBackground_1207_11236}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1c0/2511/7e67b186ff911c520978c1ea34d53331"
            }}
            style={styles.ImageBackground_1207_11237}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1c0/2511/7e67b186ff911c520978c1ea34d53331"
            }}
            style={styles.ImageBackground_1207_11238}
          />
        </View>
        <View style={styles.View_1207_11239}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84a7/da83/5b6ec2d2c540fdc9a9434e964826c7fa"
            }}
            style={styles.ImageBackground_1207_11240}
          />
        </View>
      </View>
      <View style={styles.View_1207_11241}>
        <View style={styles.View_1207_11242} />
        <View style={styles.View_1207_11243}>
          <Text style={styles.Text_1207_11243}>Add to Cart</Text>
        </View>
      </View>
      <View style={styles.View_1207_11244}>
        <View style={styles.View_1207_11245}>
          <Text style={styles.Text_1207_11245}>Ingredients</Text>
        </View>
        <View style={styles.View_1207_11246}>
          <View style={styles.View_1207_11247}>
            <Text style={styles.Text_1207_11247}>2 cups bread flour</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7708/e90d/e6d1f34ed3dfde68dde9996892ede24c"
            }}
            style={styles.ImageBackground_1207_11248}
          />
        </View>
        <View style={styles.View_1207_11249}>
          <View style={styles.View_1207_11250}>
            <Text style={styles.Text_1207_11250}>2 tbsp olive oil</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7708/e90d/e6d1f34ed3dfde68dde9996892ede24c"
            }}
            style={styles.ImageBackground_1207_11251}
          />
        </View>
        <View style={styles.View_1207_11252}>
          <View style={styles.View_1207_11253}>
            <Text style={styles.Text_1207_11253}>1/2 cup chia seeds</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7708/e90d/e6d1f34ed3dfde68dde9996892ede24c"
            }}
            style={styles.ImageBackground_1207_11254}
          />
        </View>
        <View style={styles.View_1207_11255}>
          <View style={styles.View_1207_11256}>
            <Text style={styles.Text_1207_11256}>1 cup milk</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7708/e90d/e6d1f34ed3dfde68dde9996892ede24c"
            }}
            style={styles.ImageBackground_1207_11257}
          />
        </View>
        <View style={styles.View_1207_11258}>
          <View style={styles.View_1207_11259}>
            <Text style={styles.Text_1207_11259}>1 ¾ tsp instant yeast</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7708/e90d/e6d1f34ed3dfde68dde9996892ede24c"
            }}
            style={styles.ImageBackground_1207_11260}
          />
        </View>
        <View style={styles.View_1207_11261}>
          <View style={styles.View_1207_11262}>
            <Text style={styles.Text_1207_11262}>1 tbsp honey</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7708/e90d/e6d1f34ed3dfde68dde9996892ede24c"
            }}
            style={styles.ImageBackground_1207_11263}
          />
        </View>
      </View>
      <View style={styles.View_1207_11264}>
        <View style={styles.View_1207_11265}>
          <Text style={styles.Text_1207_11265}>Author</Text>
        </View>
        <View style={styles.View_1207_11266}>
          <View style={styles.View_1207_11267}>
            <View style={styles.View_1207_11268}>
              <View style={styles.View_1207_11269}>
                <Text style={styles.Text_1207_11269}>Minimalist Baker</Text>
              </View>
              <View style={styles.View_1207_11270}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7d0e/527b/8b20343d6dae3ffe4ce98854e22367a7"
                  }}
                  style={styles.ImageBackground_1207_11271}
                />
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4cee/549b/6b00d6d7ea6bb297c47b424ab9298e0f"
            }}
            style={styles.ImageBackground_1207_11272}
          />
        </View>
      </View>
      <View style={styles.View_1207_11273}>
        <View style={styles.View_1207_11274}>
          <View style={styles.View_1207_11275} />
          <View style={styles.View_1207_11276}>
            <View style={styles.View_1207_11277}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/42e9/c44f/b397dfc0efcd649567e0f639300dc085"
                }}
                style={styles.ImageBackground_1207_11278}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1207_11279}>
          <View style={styles.View_1207_11280} />
          <View style={styles.View_1207_11281}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20c6/b20d/ef7e5d4e93252b34fe3bf0ffdb6e2d24"
              }}
              style={styles.ImageBackground_1207_11282}
            />
          </View>
        </View>
        <View style={styles.View_1207_11293}>
          <View style={styles.View_1207_11294} />
          <View style={styles.View_1207_11295}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20a4/e70d/9161c000a6c5401d6d73ee7be7a97c19"
              }}
              style={styles.ImageBackground_1207_11296}
            />
          </View>
        </View>
        <View style={styles.View_1207_11297}>
          <View style={styles.View_1207_11298} />
          <View style={styles.View_1207_11299}>
            <Text style={styles.Text_1207_11299}>Open Recipe</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_1207_11300}>
        <View style={styles.View_1207_11301}>
          <View style={styles.View_1207_11302}>
            <View style={styles.View_1207_11303}>
              <View style={styles.View_1207_11304}>
                <Text style={styles.Text_1207_11304}>Cook Time</Text>
              </View>
              <View style={styles.View_1207_11305}>
                <Text style={styles.Text_1207_11305}>1 h 30m</Text>
              </View>
            </View>
            <View style={styles.View_1207_11306}>
              <View style={styles.View_1207_11307}>
                <Text style={styles.Text_1207_11307}>Serves</Text>
              </View>
              <View style={styles.View_1207_11308}>
                <Text style={styles.Text_1207_11308}>6-8</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1207_11309}>
          <View style={styles.View_1207_11310}>
            <Text style={styles.Text_1207_11310}>342</Text>
          </View>
          <View style={styles.View_1207_11311}>
            <View style={styles.View_1207_11312}>
              <View style={styles.View_1207_11313}>
                <Text style={styles.Text_1207_11313}>Saves</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1207_11314}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84a7/da83/5b6ec2d2c540fdc9a9434e964826c7fa"
              }}
              style={styles.ImageBackground_1207_11315}
            />
          </View>
        </View>
        <View style={styles.View_1207_11316}>
          <View style={styles.View_1207_11317}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/51d6/4f87/1c3687fd1b9866b2ce33aa51df3e3885"
              }}
              style={styles.ImageBackground_1207_11318}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3322/60d5/2f3acdf83f1d8ed6d7f5d1eef5e9f39c"
              }}
              style={styles.ImageBackground_1207_11320}
            />
          </View>
          <View style={styles.View_1207_11322}>
            <Text style={styles.Text_1207_11322}>In Pantry</Text>
          </View>
          <View style={styles.View_1207_11323}>
            <Text style={styles.Text_1207_11323}>73%</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25c1/1d6e/d0560adadf4c5e758395b35055dbd41c"
          }}
          style={styles.ImageBackground_1207_11324}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25c1/1d6e/d0560adadf4c5e758395b35055dbd41c"
          }}
          style={styles.ImageBackground_1207_11325}
        />
      </View>
      <View style={styles.View_1207_11326}>
        <View style={styles.View_1207_11327}>
          <Text style={styles.Text_1207_11327}>Deep Dish Pizza</Text>
        </View>
      </View>
      <View style={styles.View_1207_11328}>
        <View style={styles.View_1207_11329} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/706d/0cd5/b552fe746715ed2fcfd8c4092a1625a2"
          }}
          style={styles.ImageBackground_1207_11330}
        />
        <View style={styles.View_1207_11331}>
          <Text style={styles.Text_1207_11331}>I Cooked This</Text>
        </View>
      </View>
      <View style={styles.View_1207_11332}>
        <View style={styles.View_1207_11333}>
          <View style={styles.View_1207_11334}>
            <Text style={styles.Text_1207_11334}>Italian</Text>
          </View>
        </View>
        <View style={styles.View_1207_11335}>
          <View style={styles.View_1207_11336}>
            <Text style={styles.Text_1207_11336}>Dinner</Text>
          </View>
        </View>
        <View style={styles.View_1207_11337}>
          <View style={styles.View_1207_11338}>
            <Text style={styles.Text_1207_11338}>Date Night</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("191.12021857923497%") },
  ImageBackground_1207_11228: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-18.852459016393443%"),
    resizeMode: "cover"
  },
  ImageBackground_1207_11229: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%")
  },
  View_1207_11230: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.199999999999996%"),
    top: hp("5.46448087431694%"),
    justifyContent: "center"
  },
  Text_1207_11230: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11231: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("165.0273224043716%"),
    minHeight: hp("165.0273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.09289617486339%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1207_11232: {
    width: wp("91.2%"),
    minWidth: wp("91.2%"),
    height: hp("52.04918032786885%"),
    minHeight: hp("52.04918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("127.04918032786885%")
  },
  View_1207_11233: {
    width: wp("91.2%"),
    minWidth: wp("91.2%"),
    height: hp("52.04918032786885%"),
    minHeight: hp("52.04918032786885%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_11234: {
    width: wp("31.733333333333334%"),
    minWidth: wp("31.733333333333334%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_11234: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_11235: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.327868852459019%"),
    resizeMode: "cover"
  },
  ImageBackground_1207_11236: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.73333333333333%"),
    top: hp("5.327868852459019%"),
    resizeMode: "cover"
  },
  ImageBackground_1207_11237: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.781420765027306%"),
    resizeMode: "cover"
  },
  ImageBackground_1207_11238: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.73333333333333%"),
    top: hp("29.781420765027306%"),
    resizeMode: "cover"
  },
  View_1207_11239: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("7.513661202185787%")
  },
  ImageBackground_1207_11240: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_11241: {
    width: wp("38.93333333333333%"),
    minWidth: wp("38.93333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("116.12021857923497%")
  },
  View_1207_11242: {
    width: wp("38.93333333333333%"),
    minWidth: wp("38.93333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1207_11243: {
    width: wp("29.333333333333332%"),
    top: hp("1.639344262295097%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000004%"),
    justifyContent: "flex-start"
  },
  Text_1207_11243: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11244: {
    width: wp("68.26666666666667%"),
    minWidth: wp("68.26666666666667%"),
    height: hp("36.20218579234973%"),
    minHeight: hp("36.20218579234973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("77.59562841530054%")
  },
  View_1207_11245: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_11245: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11246: {
    width: wp("65.06666666666666%"),
    minWidth: wp("65.06666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("5.327868852459019%")
  },
  View_1207_11247: {
    width: wp("52.26666666666666%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    justifyContent: "center"
  },
  Text_1207_11247: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_11248: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_11249: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("10.792349726775967%")
  },
  View_1207_11250: {
    width: wp("43.46666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    justifyContent: "center"
  },
  Text_1207_11250: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_11251: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_11252: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("27.459016393442624%")
  },
  View_1207_11253: {
    width: wp("43.46666666666666%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    justifyContent: "center"
  },
  Text_1207_11253: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_11254: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_11255: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("32.92349726775957%")
  },
  View_1207_11256: {
    width: wp("43.46666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    justifyContent: "center"
  },
  Text_1207_11256: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_11257: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_11258: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("16.2568306010929%")
  },
  View_1207_11259: {
    width: wp("43.46666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    justifyContent: "center"
  },
  Text_1207_11259: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_11260: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_11261: {
    width: wp("56.266666666666666%"),
    minWidth: wp("56.266666666666666%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1999999999999993%"),
    top: hp("21.857923497267763%")
  },
  View_1207_11262: {
    width: wp("43.46666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    justifyContent: "center"
  },
  Text_1207_11262: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_11263: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.1366120218579283%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_11264: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("7.650273224043716%"),
    minHeight: hp("7.650273224043716%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("39.48087431693989%")
  },
  View_1207_11265: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_11265: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11266: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%")
  },
  View_1207_11267: {
    width: wp("49.86666666666667%"),
    minWidth: wp("49.86666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_11268: {
    width: wp("49.86666666666667%"),
    minWidth: wp("49.86666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_11269: {
    width: wp("37.06666666666666%"),
    minWidth: wp("37.06666666666666%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("0.6830601092896131%"),
    justifyContent: "center"
  },
  Text_1207_11269: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11270: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1207_11271: {
    width: wp("8.533333333333333%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1207_11272: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.06666666666666%")
  },
  View_1207_11273: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("181.28415300546447%")
  },
  View_1207_11274: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.13333333333333%"),
    top: hp("0%")
  },
  View_1207_11275: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.30000001192092896
  },
  View_1207_11276: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("1.639344262295083%")
  },
  View_1207_11277: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1207_11278: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_11279: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.199999999999996%"),
    top: hp("0%")
  },
  View_1207_11280: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.30000001192092896
  },
  View_1207_11281: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333337%"),
    top: hp("1.9125683060109395%")
  },
  ImageBackground_1207_11282: {
    width: wp("4.8%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_11293: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.8%"),
    top: hp("0%")
  },
  View_1207_11294: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.30000001192092896
  },
  View_1207_11295: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.13333333333334%"),
    top: hp("1.639344262295083%")
  },
  ImageBackground_1207_11296: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_11297: {
    width: wp("46.93333333333333%"),
    minWidth: wp("46.93333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_11298: {
    width: wp("46.93333333333333%"),
    minWidth: wp("46.93333333333333%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(240, 95, 87, 1)"
  },
  View_1207_11299: {
    width: wp("30.133333333333333%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666666%"),
    justifyContent: "flex-start"
  },
  Text_1207_11299: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11300: {
    width: wp("90.13333333333333%"),
    minWidth: wp("90.13333333333333%"),
    height: hp("13.25136612021858%"),
    minHeight: hp("13.25136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("51.502732240437155%")
  },
  View_1207_11301: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.800000000000004%"),
    top: hp("3.278688524590166%")
  },
  View_1207_11302: {
    width: wp("35.733333333333334%"),
    minWidth: wp("35.733333333333334%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_11303: {
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
  View_1207_11304: {
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
  Text_1207_11304: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11305: {
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
  Text_1207_11305: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11306: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    top: hp("0%")
  },
  View_1207_11307: {
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
  Text_1207_11307: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11308: {
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
  Text_1207_11308: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11309: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%")
  },
  View_1207_11310: {
    width: wp("8.533333333333333%"),
    minWidth: wp("8.533333333333333%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.533333333333331%"),
    top: hp("3.278688524590166%"),
    justifyContent: "center"
  },
  Text_1207_11310: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11311: {
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
  View_1207_11312: {
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
  View_1207_11313: {
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
  Text_1207_11313: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11314: {
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
  ImageBackground_1207_11315: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_11316: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    top: hp("3.278688524590166%")
  },
  View_1207_11317: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("3.278688524590166%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1207_11318: {
    width: wp("4.883984375%"),
    height: hp("1.639344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.515625%")
  },
  ImageBackground_1207_11320: {
    width: wp("6.4%"),
    height: hp("3.0333305317196038%"),
    top: hp("0.24535799287055937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_11322: {
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
  Text_1207_11322: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11323: {
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
  Text_1207_11323: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_11324: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("0%")
  },
  ImageBackground_1207_11325: {
    width: wp("89.33333333333333%"),
    minWidth: wp("89.33333333333333%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8000000000000007%"),
    top: hp("13.251366120218592%")
  },
  View_1207_11326: {
    width: wp("50.66666666666667%"),
    minWidth: wp("50.66666666666667%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("30.46448087431694%")
  },
  View_1207_11327: {
    width: wp("50.66666666666667%"),
    minWidth: wp("50.66666666666667%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_11327: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_11328: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.2%"),
    top: hp("30.87431693989071%")
  },
  View_1207_11329: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(210, 230, 227, 1)"
  },
  ImageBackground_1207_11330: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("1.092896174863391%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4000000000000057%")
  },
  View_1207_11331: {
    width: wp("21.6%"),
    minWidth: wp("21.6%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.799999999999997%"),
    top: hp("1.092896174863391%"),
    justifyContent: "center"
  },
  Text_1207_11331: {
    color: "rgba(32, 131, 113, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_1207_11332: {
    width: wp("68.53333333333333%"),
    minWidth: wp("68.53333333333333%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("68.98907103825137%")
  },
  View_1207_11333: {
    width: wp("18.933333333333334%"),
    minWidth: wp("18.933333333333334%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(56, 75, 153, 0.10000000149011612)"
  },
  View_1207_11334: {
    width: wp("10.4%"),
    minWidth: wp("10.4%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_1207_11334: {
    color: "rgba(56, 75, 153, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_1207_11335: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.06666666666667%"),
    top: hp("0%"),
    backgroundColor: "rgba(56, 75, 153, 0.10000000149011612)"
  },
  View_1207_11336: {
    width: wp("10.933333333333334%"),
    minWidth: wp("10.933333333333334%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666662%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_1207_11336: {
    color: "rgba(56, 75, 153, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.12,
    textTransform: "none"
  },
  View_1207_11337: {
    width: wp("25.866666666666667%"),
    minWidth: wp("25.866666666666667%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.666666666666664%"),
    top: hp("0%"),
    backgroundColor: "rgba(56, 75, 153, 0.10000000149011612)"
  },
  View_1207_11338: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666673%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_1207_11338: {
    color: "rgba(56, 75, 153, 1)",
    fontSize: 10,
    fontWeight: "800",
    textAlign: "left",
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
