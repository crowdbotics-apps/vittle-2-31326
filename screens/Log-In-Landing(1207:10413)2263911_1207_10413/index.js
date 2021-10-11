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
      <View style={styles.View_1207_10414} />
      <View style={styles.View_1207_10415}>
        <View style={styles.View_1207_10416}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d880/eda3/118f4507a719115c06eba0a1fc24407e"
            }}
            style={styles.ImageBackground_1207_10417}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd73/3b83/eda7fc8ad6932b0f90a3f3891fd4db6c"
            }}
            style={styles.ImageBackground_1207_10418}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd73/3b83/eda7fc8ad6932b0f90a3f3891fd4db6c"
            }}
            style={styles.ImageBackground_1207_10419}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abaf/fd08/ed2f9132c3418350ccf381d7fd890ffd"
            }}
            style={styles.ImageBackground_1207_10420}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/918b/3d03/065289b85169c620c702ab99477ca9d6"
            }}
            style={styles.ImageBackground_1207_10421}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c91c/d27c/cba9a2966711747bb2c381ad575bd85f"
            }}
            style={styles.ImageBackground_1207_10422}
          />
        </View>
      </View>
      <View style={styles.View_1207_10425}>
        <View style={styles.View_1207_10426}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64d0/a78f/9df8c97a8f4327d9e9d10afbd69d35ad"
            }}
            style={styles.ImageBackground_1207_10427}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e43f/5709/07a31d7a1fd346de2f83d343b4eade85"
            }}
            style={styles.ImageBackground_1207_10428}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62b4/65dd/b0e186e4bb5f98f357874640aeb9098b"
            }}
            style={styles.ImageBackground_1207_10429}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/53cd/8f1d/c33d4b7dc480bfa4698d3a76169ce592"
            }}
            style={styles.ImageBackground_1207_10430}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2471/4f8a/8785a10036931c6a7fe2cbf90ee86771"
            }}
            style={styles.ImageBackground_1207_10431}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2aa/741f/3203117611d7ed8966828cf5b89b25e2"
            }}
            style={styles.ImageBackground_1207_10432}
          />
        </View>
        <View style={styles.View_1207_10433}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84a7/da83/5b6ec2d2c540fdc9a9434e964826c7fa"
            }}
            style={styles.ImageBackground_1207_10434}
          />
        </View>
      </View>
      <View style={styles.View_1207_10435}>
        <View style={styles.View_I1207_10435_350_11901}>
          <View style={styles.View_I1207_10435_350_11902} />
          <View style={styles.View_I1207_10435_350_11903}>
            <Text style={styles.Text_I1207_10435_350_11903}>
              Create Account
            </Text>
          </View>
        </View>
        <View style={styles.View_I1207_10435_350_11904}>
          <View style={styles.View_I1207_10435_350_11905} />
          <View style={styles.View_I1207_10435_350_11906}>
            <Text style={styles.Text_I1207_10435_350_11906}>Sign In</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(250, 250, 250, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1207_10414: {
    width: wp("112.79999999999998%"),
    minWidth: wp("112.79999999999998%"),
    height: hp("39.61748633879781%"),
    minHeight: hp("39.61748633879781%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.2%"),
    top: hp("35.65573770491803%"),
    backgroundColor: "rgba(243, 176, 149, 1)"
  },
  View_1207_10415: {
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
  View_1207_10416: {
    width: wp("43.26744791666667%"),
    height: hp("5.801866875320185%"),
    top: hp("3.2816068722250673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.526432291666666%")
  },
  ImageBackground_1207_10417: {
    width: wp("5.559765625%"),
    height: hp("5.797506030140028%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.315885416666667%")
  },
  ImageBackground_1207_10418: {
    width: wp("6.146744791666666%"),
    height: hp("5.797506030140028%"),
    top: hp("0.004369183316256908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.981250000000003%")
  },
  ImageBackground_1207_10419: {
    width: wp("6.146744791666666%"),
    height: hp("5.797506030140028%"),
    top: hp("0.004369183316256908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.788541666666667%")
  },
  ImageBackground_1207_10420: {
    width: wp("4.997786458333333%"),
    height: hp("5.797506030140028%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.592057291666663%")
  },
  ImageBackground_1207_10421: {
    width: wp("9.691276041666667%"),
    height: hp("4.357968523202698%"),
    top: hp("1.4395375069373308%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.576171875%")
  },
  ImageBackground_1207_10422: {
    width: wp("12.921484375%"),
    height: hp("5.788750987235314%"),
    top: hp("0.004369183316256908%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_10425: {
    width: wp("138.93333333333334%"),
    minWidth: wp("138.93333333333334%"),
    height: hp("46.72131147540984%"),
    minHeight: hp("46.72131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-10.933333333333334%"),
    top: hp("32.10382513661202%")
  },
  View_1207_10426: {
    width: wp("138.93333333333334%"),
    minWidth: wp("138.93333333333334%"),
    height: hp("46.72131147540984%"),
    minHeight: hp("46.72131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1207_10427: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1207_10428: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1207_10429: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.4535519125683%"),
    resizeMode: "cover"
  },
  ImageBackground_1207_10430: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.733333333333334%"),
    top: hp("24.4535519125683%"),
    resizeMode: "cover"
  },
  ImageBackground_1207_10431: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.46666666666667%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1207_10432: {
    width: wp("43.46666666666666%"),
    minWidth: wp("43.46666666666666%"),
    height: hp("22.26775956284153%"),
    minHeight: hp("22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("95.46666666666667%"),
    top: hp("24.4535519125683%"),
    resizeMode: "cover"
  },
  View_1207_10433: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.0491803278688465%")
  },
  ImageBackground_1207_10434: {
    width: wp("6.4%"),
    height: hp("3.278688524590164%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1207_10435: {
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
  View_I1207_10435_350_11901: {
    flexGrow: 1,
    width: wp("43.93971354166666%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.206380208333336%"),
    top: hp("0%")
  },
  View_I1207_10435_350_11902: {
    width: wp("43.93971354166666%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(240, 95, 87, 1)"
  },
  View_I1207_10435_350_11903: {
    width: wp("36.76588541666666%"),
    top: hp("1.7759562841530254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5868489583333343%"),
    justifyContent: "flex-start"
  },
  Text_I1207_10435_350_11903: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1207_10435_350_11904: {
    flexGrow: 1,
    width: wp("43.93971354166666%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1207_10435_350_11905: {
    width: wp("43.93971354166666%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1207_10435_350_11906: {
    width: wp("36.76588541666666%"),
    top: hp("1.7759562841530254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5868489583333334%"),
    justifyContent: "flex-start"
  },
  Text_I1207_10435_350_11906: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 14,
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
