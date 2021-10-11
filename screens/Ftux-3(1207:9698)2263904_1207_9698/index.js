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
      <View style={styles.View_1207_9699}>
        <View style={styles.View_1207_9700} />
        <View style={styles.View_1207_9701}>
          <View style={styles.View_1207_9702}>
            <View style={styles.View_1207_9703}>
              <View style={styles.View_I1207_9703_2_8278} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7148/6533/d63b1082f57b767ec594b4136a5f50d9"
                }}
                style={styles.ImageBackground_I1207_9703_2_8279}
              />
              <View style={styles.View_I1207_9703_2_8280}>
                <View style={styles.View_I1207_9703_2_8281}>
                  <Text style={styles.Text_I1207_9703_2_8281}>
                    Cheesy Bread
                  </Text>
                </View>
                <View style={styles.View_I1207_9703_2_8282}>
                  <Text style={styles.Text_I1207_9703_2_8282}>95% Match</Text>
                </View>
                <View style={styles.View_I1207_9703_2_8283}>
                  <Text style={styles.Text_I1207_9703_2_8283}>Sam Wilkes</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1207_9704}>
              <View style={styles.View_I1207_9704_2_8278} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/743a/0fb2/3fc3b5c0f5a0a3a3b208e23ffa5cb9ae"
                }}
                style={styles.ImageBackground_I1207_9704_2_8279}
              />
              <View style={styles.View_I1207_9704_2_8280}>
                <View style={styles.View_I1207_9704_2_8281}>
                  <Text style={styles.Text_I1207_9704_2_8281}>
                    Chia Seed Pudding
                  </Text>
                </View>
                <View style={styles.View_I1207_9704_2_8282}>
                  <Text style={styles.Text_I1207_9704_2_8282}>80% Match</Text>
                </View>
                <View style={styles.View_I1207_9704_2_8283}>
                  <Text style={styles.Text_I1207_9704_2_8283}>
                    Tierra Whack
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1207_9705}>
              <View style={styles.View_1207_9706}>
                <Text style={styles.Text_1207_9706}>Monday, April 1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1207_9709} />
        <View style={styles.View_1207_9710}>
          <Text style={styles.Text_1207_9710}>October 2020</Text>
        </View>
        <View style={styles.View_1207_9711}>
          <View style={styles.View_1207_9712}>
            <View style={styles.View_I1207_9712_25_3558}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f27b/3919/b92767ac1a50cac1fd9f0af0ac91b4a5"
                }}
                style={styles.ImageBackground_I1207_9712_25_3558_0_4030}
              />
            </View>
          </View>
          <View style={styles.View_1207_9713}>
            <View style={styles.View_1207_9714}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40ac/2087/5f83e6a6c0d221a9f910f1a6af9a93ec"
                }}
                style={styles.ImageBackground_I1207_9714_0_3756}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1207_9715}>
          <View style={styles.View_1207_9716}>
            <View style={styles.View_1207_9717}>
              <View style={styles.View_1207_9718}>
                <Text style={styles.Text_1207_9718}>Mo</Text>
              </View>
              <View style={styles.View_1207_9719}>
                <Text style={styles.Text_1207_9719}>Tu</Text>
              </View>
              <View style={styles.View_1207_9720}>
                <Text style={styles.Text_1207_9720}>We</Text>
              </View>
              <View style={styles.View_1207_9721}>
                <Text style={styles.Text_1207_9721}>Th</Text>
              </View>
              <View style={styles.View_1207_9722}>
                <Text style={styles.Text_1207_9722}>Fr</Text>
              </View>
              <View style={styles.View_1207_9723}>
                <Text style={styles.Text_1207_9723}>Sa</Text>
              </View>
              <View style={styles.View_1207_9724}>
                <Text style={styles.Text_1207_9724}>Su</Text>
              </View>
              <View style={styles.View_1207_9725}>
                <Text style={styles.Text_1207_9725}>1</Text>
              </View>
              <View style={styles.View_1207_9726}>
                <Text style={styles.Text_1207_9726}>2</Text>
              </View>
              <View style={styles.View_1207_9727}>
                <Text style={styles.Text_1207_9727}>3</Text>
              </View>
              <View style={styles.View_1207_9728}>
                <Text style={styles.Text_1207_9728}>4</Text>
              </View>
              <View style={styles.View_1207_9729}>
                <Text style={styles.Text_1207_9729}>5</Text>
              </View>
              <View style={styles.View_1207_9730}>
                <Text style={styles.Text_1207_9730}>6</Text>
              </View>
              <View style={styles.View_1207_9731}>
                <Text style={styles.Text_1207_9731}>7</Text>
              </View>
              <View style={styles.View_1207_9732}>
                <Text style={styles.Text_1207_9732}>8</Text>
              </View>
              <View style={styles.View_1207_9733}>
                <Text style={styles.Text_1207_9733}>9</Text>
              </View>
              <View style={styles.View_1207_9734}>
                <Text style={styles.Text_1207_9734}>10</Text>
              </View>
              <View style={styles.View_1207_9735}>
                <Text style={styles.Text_1207_9735}>11</Text>
              </View>
              <View style={styles.View_1207_9736}>
                <Text style={styles.Text_1207_9736}>12</Text>
              </View>
              <View style={styles.View_1207_9737}>
                <Text style={styles.Text_1207_9737}>13</Text>
              </View>
              <View style={styles.View_1207_9738}>
                <Text style={styles.Text_1207_9738}>15</Text>
              </View>
              <View style={styles.View_1207_9739}>
                <Text style={styles.Text_1207_9739}>16</Text>
              </View>
              <View style={styles.View_1207_9740}>
                <Text style={styles.Text_1207_9740}>17</Text>
              </View>
              <View style={styles.View_1207_9741}>
                <Text style={styles.Text_1207_9741}>18</Text>
              </View>
              <View style={styles.View_1207_9742}>
                <Text style={styles.Text_1207_9742}>19</Text>
              </View>
              <View style={styles.View_1207_9743}>
                <Text style={styles.Text_1207_9743}>20</Text>
              </View>
              <View style={styles.View_1207_9744}>
                <Text style={styles.Text_1207_9744}>21</Text>
              </View>
              <View style={styles.View_1207_9745}>
                <Text style={styles.Text_1207_9745}>22</Text>
              </View>
              <View style={styles.View_1207_9746}>
                <Text style={styles.Text_1207_9746}>23</Text>
              </View>
              <View style={styles.View_1207_9747}>
                <Text style={styles.Text_1207_9747}>24</Text>
              </View>
              <View style={styles.View_1207_9748}>
                <Text style={styles.Text_1207_9748}>25</Text>
              </View>
              <View style={styles.View_1207_9749}>
                <Text style={styles.Text_1207_9749}>26</Text>
              </View>
              <View style={styles.View_1207_9750}>
                <Text style={styles.Text_1207_9750}>27</Text>
              </View>
              <View style={styles.View_1207_9751}>
                <Text style={styles.Text_1207_9751}>28</Text>
              </View>
              <View style={styles.View_1207_9752}>
                <Text style={styles.Text_1207_9752}>29</Text>
              </View>
              <View style={styles.View_1207_9753}>
                <Text style={styles.Text_1207_9753}>30</Text>
              </View>
              <View style={styles.View_1207_9754}>
                <Text style={styles.Text_1207_9754}>31</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9858/5c13/eb1db4d734184069d5d028c347a82ada"
                }}
                style={styles.ImageBackground_1207_9755}
              />
              <View style={styles.View_1207_9756}>
                <Text style={styles.Text_1207_9756}>14</Text>
              </View>
            </View>
            <View style={styles.View_1207_9757}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1091/2b64/597d4ae4525c2ec37a145c796960937b"
                }}
                style={styles.ImageBackground_1207_9758}
              />
              <View style={styles.View_1207_9759}>
                <Text style={styles.Text_1207_9759}>Mo</Text>
              </View>
              <View style={styles.View_1207_9760}>
                <Text style={styles.Text_1207_9760}>Tu</Text>
              </View>
              <View style={styles.View_1207_9761}>
                <Text style={styles.Text_1207_9761}>We</Text>
              </View>
              <View style={styles.View_1207_9762}>
                <Text style={styles.Text_1207_9762}>Th</Text>
              </View>
              <View style={styles.View_1207_9763}>
                <Text style={styles.Text_1207_9763}>Fr</Text>
              </View>
              <View style={styles.View_1207_9764}>
                <Text style={styles.Text_1207_9764}>Sa</Text>
              </View>
              <View style={styles.View_1207_9765}>
                <Text style={styles.Text_1207_9765}>Su</Text>
              </View>
              <View style={styles.View_1207_9766}>
                <Text style={styles.Text_1207_9766}>1</Text>
              </View>
              <View style={styles.View_1207_9767}>
                <Text style={styles.Text_1207_9767}>2</Text>
              </View>
              <View style={styles.View_1207_9768}>
                <Text style={styles.Text_1207_9768}>3</Text>
              </View>
              <View style={styles.View_1207_9769}>
                <Text style={styles.Text_1207_9769}>4</Text>
              </View>
              <View style={styles.View_1207_9770}>
                <Text style={styles.Text_1207_9770}>5</Text>
              </View>
              <View style={styles.View_1207_9771}>
                <Text style={styles.Text_1207_9771}>6</Text>
              </View>
              <View style={styles.View_1207_9772}>
                <Text style={styles.Text_1207_9772}>7</Text>
              </View>
              <View style={styles.View_1207_9773}>
                <Text style={styles.Text_1207_9773}>8</Text>
              </View>
              <View style={styles.View_1207_9774}>
                <Text style={styles.Text_1207_9774}>9</Text>
              </View>
              <View style={styles.View_1207_9775}>
                <Text style={styles.Text_1207_9775}>10</Text>
              </View>
              <View style={styles.View_1207_9776}>
                <Text style={styles.Text_1207_9776}>11</Text>
              </View>
              <View style={styles.View_1207_9777}>
                <Text style={styles.Text_1207_9777}>12</Text>
              </View>
              <View style={styles.View_1207_9778}>
                <Text style={styles.Text_1207_9778}>13</Text>
              </View>
              <View style={styles.View_1207_9779}>
                <Text style={styles.Text_1207_9779}>15</Text>
              </View>
              <View style={styles.View_1207_9780}>
                <Text style={styles.Text_1207_9780}>16</Text>
              </View>
              <View style={styles.View_1207_9781}>
                <Text style={styles.Text_1207_9781}>17</Text>
              </View>
              <View style={styles.View_1207_9782}>
                <Text style={styles.Text_1207_9782}>18</Text>
              </View>
              <View style={styles.View_1207_9783}>
                <Text style={styles.Text_1207_9783}>19</Text>
              </View>
              <View style={styles.View_1207_9784}>
                <Text style={styles.Text_1207_9784}>20</Text>
              </View>
              <View style={styles.View_1207_9785}>
                <Text style={styles.Text_1207_9785}>21</Text>
              </View>
              <View style={styles.View_1207_9786}>
                <Text style={styles.Text_1207_9786}>22</Text>
              </View>
              <View style={styles.View_1207_9787}>
                <Text style={styles.Text_1207_9787}>23</Text>
              </View>
              <View style={styles.View_1207_9788}>
                <Text style={styles.Text_1207_9788}>24</Text>
              </View>
              <View style={styles.View_1207_9789}>
                <Text style={styles.Text_1207_9789}>25</Text>
              </View>
              <View style={styles.View_1207_9790}>
                <Text style={styles.Text_1207_9790}>26</Text>
              </View>
              <View style={styles.View_1207_9791}>
                <Text style={styles.Text_1207_9791}>27</Text>
              </View>
              <View style={styles.View_1207_9792}>
                <Text style={styles.Text_1207_9792}>28</Text>
              </View>
              <View style={styles.View_1207_9793}>
                <Text style={styles.Text_1207_9793}>29</Text>
              </View>
              <View style={styles.View_1207_9794}>
                <Text style={styles.Text_1207_9794}>30</Text>
              </View>
              <View style={styles.View_1207_9795}>
                <Text style={styles.Text_1207_9795}>31</Text>
              </View>
              <View style={styles.View_1207_9796}>
                <Text style={styles.Text_1207_9796}>14</Text>
              </View>
            </View>
            <View style={styles.View_1207_9797}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1091/2b64/597d4ae4525c2ec37a145c796960937b"
                }}
                style={styles.ImageBackground_1207_9798}
              />
              <View style={styles.View_1207_9799}>
                <Text style={styles.Text_1207_9799}>Mo</Text>
              </View>
              <View style={styles.View_1207_9800}>
                <Text style={styles.Text_1207_9800}>Tu</Text>
              </View>
              <View style={styles.View_1207_9801}>
                <Text style={styles.Text_1207_9801}>We</Text>
              </View>
              <View style={styles.View_1207_9802}>
                <Text style={styles.Text_1207_9802}>Th</Text>
              </View>
              <View style={styles.View_1207_9803}>
                <Text style={styles.Text_1207_9803}>Fr</Text>
              </View>
              <View style={styles.View_1207_9804}>
                <Text style={styles.Text_1207_9804}>Sa</Text>
              </View>
              <View style={styles.View_1207_9805}>
                <Text style={styles.Text_1207_9805}>Su</Text>
              </View>
              <View style={styles.View_1207_9806}>
                <Text style={styles.Text_1207_9806}>1</Text>
              </View>
              <View style={styles.View_1207_9807}>
                <Text style={styles.Text_1207_9807}>2</Text>
              </View>
              <View style={styles.View_1207_9808}>
                <Text style={styles.Text_1207_9808}>3</Text>
              </View>
              <View style={styles.View_1207_9809}>
                <Text style={styles.Text_1207_9809}>4</Text>
              </View>
              <View style={styles.View_1207_9810}>
                <Text style={styles.Text_1207_9810}>5</Text>
              </View>
              <View style={styles.View_1207_9811}>
                <Text style={styles.Text_1207_9811}>6</Text>
              </View>
              <View style={styles.View_1207_9812}>
                <Text style={styles.Text_1207_9812}>7</Text>
              </View>
              <View style={styles.View_1207_9813}>
                <Text style={styles.Text_1207_9813}>8</Text>
              </View>
              <View style={styles.View_1207_9814}>
                <Text style={styles.Text_1207_9814}>9</Text>
              </View>
              <View style={styles.View_1207_9815}>
                <Text style={styles.Text_1207_9815}>10</Text>
              </View>
              <View style={styles.View_1207_9816}>
                <Text style={styles.Text_1207_9816}>11</Text>
              </View>
              <View style={styles.View_1207_9817}>
                <Text style={styles.Text_1207_9817}>12</Text>
              </View>
              <View style={styles.View_1207_9818}>
                <Text style={styles.Text_1207_9818}>13</Text>
              </View>
              <View style={styles.View_1207_9819}>
                <Text style={styles.Text_1207_9819}>15</Text>
              </View>
              <View style={styles.View_1207_9820}>
                <Text style={styles.Text_1207_9820}>16</Text>
              </View>
              <View style={styles.View_1207_9821}>
                <Text style={styles.Text_1207_9821}>17</Text>
              </View>
              <View style={styles.View_1207_9822}>
                <Text style={styles.Text_1207_9822}>18</Text>
              </View>
              <View style={styles.View_1207_9823}>
                <Text style={styles.Text_1207_9823}>19</Text>
              </View>
              <View style={styles.View_1207_9824}>
                <Text style={styles.Text_1207_9824}>20</Text>
              </View>
              <View style={styles.View_1207_9825}>
                <Text style={styles.Text_1207_9825}>21</Text>
              </View>
              <View style={styles.View_1207_9826}>
                <Text style={styles.Text_1207_9826}>22</Text>
              </View>
              <View style={styles.View_1207_9827}>
                <Text style={styles.Text_1207_9827}>23</Text>
              </View>
              <View style={styles.View_1207_9828}>
                <Text style={styles.Text_1207_9828}>24</Text>
              </View>
              <View style={styles.View_1207_9829}>
                <Text style={styles.Text_1207_9829}>25</Text>
              </View>
              <View style={styles.View_1207_9830}>
                <Text style={styles.Text_1207_9830}>26</Text>
              </View>
              <View style={styles.View_1207_9831}>
                <Text style={styles.Text_1207_9831}>27</Text>
              </View>
              <View style={styles.View_1207_9832}>
                <Text style={styles.Text_1207_9832}>28</Text>
              </View>
              <View style={styles.View_1207_9833}>
                <Text style={styles.Text_1207_9833}>29</Text>
              </View>
              <View style={styles.View_1207_9834}>
                <Text style={styles.Text_1207_9834}>30</Text>
              </View>
              <View style={styles.View_1207_9835}>
                <Text style={styles.Text_1207_9835}>31</Text>
              </View>
              <View style={styles.View_1207_9836}>
                <Text style={styles.Text_1207_9836}>14</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1207_9837}>
        <View style={styles.View_1207_9838}>
          <Text style={styles.Text_1207_9838}>
            Receive personalized recipe boxes delivered to your door
          </Text>
        </View>
        <View style={styles.View_1207_9839}>
          <Text style={styles.Text_1207_9839}>
            Take control of your kitchen
          </Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cfd/c80a/87d318bf3095be7b33abcbde0b83c75e"
        }}
        style={styles.ImageBackground_1207_9840}
      />
      <View style={styles.View_1207_9844}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/355f/5858/e6ad304dbc9a685c0a80b33274dfd043"
          }}
          style={styles.ImageBackground_1207_9845}
        />
        <View style={styles.View_1207_9846} />
        <View style={styles.View_1207_9847} />
        <View style={styles.View_1207_9848} />
      </View>
      <View style={styles.View_1207_9849}>
        <View style={styles.View_I1207_9849_350_11901}>
          <View style={styles.View_I1207_9849_350_11902} />
          <View style={styles.View_I1207_9849_350_11903}>
            <Text style={styles.Text_I1207_9849_350_11903}>Create Account</Text>
          </View>
        </View>
        <View style={styles.View_I1207_9849_350_11904}>
          <View style={styles.View_I1207_9849_350_11905} />
          <View style={styles.View_I1207_9849_350_11906}>
            <Text style={styles.Text_I1207_9849_350_11906}>Sign In</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(32, 131, 113, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1207_9699: {
    width: wp("75.2%"),
    minWidth: wp("75.2%"),
    height: hp("61.74208010480704%"),
    minHeight: hp("61.74208010480704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.06666666666666%"),
    top: hp("-26.912568306010932%")
  },
  View_1207_9700: {
    width: wp("75.2%"),
    minWidth: wp("75.2%"),
    height: hp("61.74208010480704%"),
    minHeight: hp("61.74208010480704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1207_9701: {
    width: wp("67.17877604166667%"),
    minWidth: wp("67.17877604166667%"),
    height: hp("21.984679842255805%"),
    minHeight: hp("21.984679842255805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.010807291666673%"),
    top: hp("38.21637930114413%")
  },
  View_1207_9702: {
    width: wp("67.17877604166667%"),
    minWidth: wp("67.17877604166667%"),
    height: hp("21.984679842255805%"),
    minHeight: hp("21.984679842255805%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_9703: {
    width: wp("67.17864583333333%"),
    minWidth: wp("67.17864583333333%"),
    height: hp("8.218583904328893%"),
    minHeight: hp("8.218583904328893%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.006524424735314%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_9703_2_8278: {
    flexGrow: 1,
    width: wp("67.17864583333333%"),
    height: hp("8.218583904328893%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1207_9703_2_8279: {
    flexGrow: 1,
    width: wp("13.636328125%"),
    height: hp("6.98579048198429%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6163883730361999%"),
    resizeMode: "cover"
  },
  View_I1207_9703_2_8280: {
    flexGrow: 1,
    width: wp("40.59947916666667%"),
    height: hp("5.439349732112364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.644270833333337%"),
    top: hp("1.335519259093239%")
  },
  View_I1207_9703_2_8281: {
    width: wp("23.733333333333334%"),
    minWidth: wp("23.733333333333334%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_9703_2_8281: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1207_9703_2_8282: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.390169404243508%"),
    justifyContent: "flex-start"
  },
  Text_I1207_9703_2_8282: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1207_9703_2_8283: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.866145833333327%"),
    top: hp("3.390169404243508%"),
    justifyContent: "flex-start"
  },
  Text_I1207_9703_2_8283: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9704: {
    width: wp("67.17864583333333%"),
    minWidth: wp("67.17864583333333%"),
    height: hp("8.218583904328893%"),
    minHeight: hp("8.218583904328893%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.766095937926913%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_9704_2_8278: {
    flexGrow: 1,
    width: wp("67.17864583333333%"),
    height: hp("8.218583904328893%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I1207_9704_2_8279: {
    flexGrow: 1,
    width: wp("13.636328125%"),
    height: hp("6.98579048198429%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.6163883730362016%"),
    resizeMode: "cover"
  },
  View_I1207_9704_2_8280: {
    flexGrow: 1,
    width: wp("42.99947916666667%"),
    height: hp("5.439349732112364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.644270833333337%"),
    top: hp("1.3355192590932354%")
  },
  View_I1207_9704_2_8281: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_9704_2_8281: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1207_9704_2_8282: {
    width: wp("15.733333333333333%"),
    minWidth: wp("15.733333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.3901694042435118%"),
    justifyContent: "flex-start"
  },
  Text_I1207_9704_2_8282: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1207_9704_2_8283: {
    width: wp("18.133333333333333%"),
    minWidth: wp("18.133333333333333%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.866145833333327%"),
    top: hp("3.3901694042435118%"),
    justifyContent: "flex-start"
  },
  Text_I1207_9704_2_8283: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9705: {
    width: wp("67.17864583333333%"),
    minWidth: wp("67.17864583333333%"),
    height: hp("2.465570168417008%"),
    minHeight: hp("2.465570168417008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1207_9706: {
    width: wp("29.47838541666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1207_9706: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 10.031999588012695,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1207_9709: {
    width: wp("67.17864583333333%"),
    minWidth: wp("67.17864583333333%"),
    height: hp("33.49070731407958%"),
    minHeight: hp("33.49070731407958%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.010807291666673%"),
    top: hp("2.671038518186478%"),
    backgroundColor: "rgba(247, 247, 254, 1)"
  },
  View_1207_9710: {
    width: wp("34.93190104166667%"),
    minWidth: wp("34.93190104166667%"),
    minHeight: hp("1.849181795380806%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.021614583333339%"),
    top: hp("5.855706220116122%"),
    justifyContent: "center"
  },
  Text_1207_9710: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.287999153137207,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9711: {
    width: wp("15.641406250000001%"),
    minWidth: wp("15.641406250000001%"),
    height: hp("2.4655868446892075%"),
    minHeight: hp("2.4655868446892075%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.537239583333346%"),
    top: hp("5.547545386142421%")
  },
  View_1207_9712: {
    width: wp("4.812760416666666%"),
    minWidth: wp("4.812760416666666%"),
    height: hp("2.465570168417008%"),
    minHeight: hp("2.465570168417008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1207_9712_25_3558: {
    flexGrow: 1,
    width: wp("4.812760416666666%"),
    height: hp("2.465570168417008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1207_9712_25_3558_0_4030: {
    flexGrow: 1,
    width: wp("1.4037760416666667%"),
    height: hp("1.4382450958418715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7044270833333286%"),
    top: hp("0.5136625362875691%")
  },
  View_1207_9713: {
    width: wp("4.812760416666666%"),
    minWidth: wp("4.812760416666666%"),
    height: hp("2.465570168417008%"),
    minHeight: hp("2.465570168417008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.828645833333326%"),
    top: hp("0.000016676272199589448%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1207_9714: {
    width: wp("4.812760416666666%"),
    height: hp("2.465570168417008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1207_9714_0_3756: {
    flexGrow: 1,
    width: wp("1.4037760416666667%"),
    height: hp("1.4382450958418715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.70455729166666%"),
    top: hp("0.5136625362875691%")
  },
  View_1207_9715: {
    width: wp("59.157291666666666%"),
    minWidth: wp("59.157291666666666%"),
    height: hp("21.88197068177937%"),
    minHeight: hp("21.88197068177937%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.021614583333339%"),
    top: hp("10.992398288080606%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1207_9716: {
    width: wp("197.176953125%"),
    minWidth: wp("197.176953125%"),
    height: hp("21.86699538934426%"),
    minHeight: hp("21.86699538934426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.00006670508880013415%")
  },
  View_1207_9717: {
    width: wp("58.80872395833333%"),
    minWidth: wp("58.80872395833333%"),
    height: hp("21.866912007983267%"),
    minHeight: hp("21.866912007983267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_9718: {
    width: wp("5.258984375%"),
    minWidth: wp("5.258984375%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.00006670508880013415%"),
    justifyContent: "center"
  },
  Text_1207_9718: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9719: {
    width: wp("4.121875%"),
    minWidth: wp("4.121875%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.955598958333333%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9719: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9720: {
    width: wp("5.258984375%"),
    minWidth: wp("5.258984375%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.76796875%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9720: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9721: {
    width: wp("4.406119791666667%"),
    minWidth: wp("4.406119791666667%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.717057291666656%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9721: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9722: {
    width: wp("3.4111979166666666%"),
    minWidth: wp("3.4111979166666666%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.67174479166666%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9722: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9723: {
    width: wp("4.2640625000000005%"),
    minWidth: wp("4.2640625000000005%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.630989583333324%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9723: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9724: {
    width: wp("4.2640625000000005%"),
    minWidth: wp("4.2640625000000005%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.54479166666666%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9724: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9725: {
    width: wp("1.7055989583333333%"),
    minWidth: wp("1.7055989583333333%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.996614583333333%"),
    top: hp("3.9935836375085394%"),
    justifyContent: "center"
  },
  Text_1207_9725: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9726: {
    width: wp("2.1320312500000003%"),
    minWidth: wp("2.1320312500000003%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.38229166666667%"),
    top: hp("3.9935836375085394%"),
    justifyContent: "center"
  },
  Text_1207_9726: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9727: {
    width: wp("2.2740885416666665%"),
    minWidth: wp("2.2740885416666665%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.62604166666666%"),
    top: hp("3.9935836375085394%"),
    justifyContent: "center"
  },
  Text_1207_9727: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9728: {
    width: wp("2.2740885416666665%"),
    minWidth: wp("2.2740885416666665%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.43841145833333%"),
    top: hp("3.9935836375085394%"),
    justifyContent: "center"
  },
  Text_1207_9728: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9729: {
    width: wp("2.1320312500000003%"),
    minWidth: wp("2.1320312500000003%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5696614583333357%"),
    top: hp("7.987317361466872%"),
    justifyContent: "center"
  },
  Text_1207_9729: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9730: {
    width: wp("2.2740885416666665%"),
    minWidth: wp("2.2740885416666665%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.808723958333331%"),
    top: hp("7.987317361466872%"),
    justifyContent: "center"
  },
  Text_1207_9730: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9731: {
    width: wp("1.9898437500000001%"),
    minWidth: wp("1.9898437500000001%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.33138020833333%"),
    top: hp("7.987317361466872%"),
    justifyContent: "center"
  },
  Text_1207_9731: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9732: {
    width: wp("2.2740885416666665%"),
    minWidth: wp("2.2740885416666665%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.7125%"),
    top: hp("7.987317361466872%"),
    justifyContent: "center"
  },
  Text_1207_9732: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9733: {
    width: wp("2.2740885416666665%"),
    minWidth: wp("2.2740885416666665%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.24010416666666%"),
    top: hp("7.987317361466872%"),
    justifyContent: "center"
  },
  Text_1207_9733: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9734: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.91575520833333%"),
    top: hp("7.987317361466872%"),
    justifyContent: "center"
  },
  Text_1207_9734: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9735: {
    width: wp("3.269140625%"),
    minWidth: wp("3.269140625%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.012109375%"),
    top: hp("7.987317361466872%"),
    justifyContent: "center"
  },
  Text_1207_9735: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9736: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.716796875%"),
    top: hp("11.980967704064208%"),
    justifyContent: "center"
  },
  Text_1207_9736: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9737: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.097916666666663%"),
    top: hp("11.980967704064208%"),
    justifyContent: "center"
  },
  Text_1207_9737: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9738: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.0015625%"),
    top: hp("11.980967704064208%"),
    justifyContent: "center"
  },
  Text_1207_9738: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9739: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.52981770833333%"),
    top: hp("11.980967704064208%"),
    justifyContent: "center"
  },
  Text_1207_9739: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9740: {
    width: wp("3.695442708333333%"),
    minWidth: wp("3.695442708333333%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.91549479166667%"),
    top: hp("11.980967704064208%"),
    justifyContent: "center"
  },
  Text_1207_9740: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9741: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.727864583333336%"),
    top: hp("11.980967704064208%"),
    justifyContent: "center"
  },
  Text_1207_9741: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9742: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.716796875%"),
    top: hp("15.974634722933743%"),
    justifyContent: "center"
  },
  Text_1207_9742: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9743: {
    width: wp("4.406119791666667%"),
    minWidth: wp("4.406119791666667%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.813411458333334%"),
    top: hp("15.974634722933743%"),
    justifyContent: "center"
  },
  Text_1207_9743: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9744: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.47864583333333%"),
    top: hp("15.974634722933743%"),
    justifyContent: "center"
  },
  Text_1207_9744: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9745: {
    width: wp("4.2640625000000005%"),
    minWidth: wp("4.2640625000000005%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.717057291666656%"),
    top: hp("15.974634722933743%"),
    justifyContent: "center"
  },
  Text_1207_9745: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9746: {
    width: wp("4.406119791666667%"),
    minWidth: wp("4.406119791666667%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.24531249999999%"),
    top: hp("15.974634722933743%"),
    justifyContent: "center"
  },
  Text_1207_9746: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9747: {
    width: wp("4.406119791666667%"),
    minWidth: wp("4.406119791666667%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.63138020833333%"),
    top: hp("15.974634722933743%"),
    justifyContent: "center"
  },
  Text_1207_9747: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9748: {
    width: wp("4.2640625000000005%"),
    minWidth: wp("4.2640625000000005%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.44375%"),
    top: hp("15.974634722933743%"),
    justifyContent: "center"
  },
  Text_1207_9748: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9749: {
    width: wp("4.2640625000000005%"),
    minWidth: wp("4.2640625000000005%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.45559895833333286%"),
    top: hp("19.96828506553108%"),
    justifyContent: "center"
  },
  Text_1207_9749: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9750: {
    width: wp("4.121875%"),
    minWidth: wp("4.121875%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.978906250000001%"),
    top: hp("19.96828506553108%"),
    justifyContent: "center"
  },
  Text_1207_9750: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9751: {
    width: wp("4.2640625000000005%"),
    minWidth: wp("4.2640625000000005%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.217447916666664%"),
    top: hp("19.96828506553108%"),
    justifyContent: "center"
  },
  Text_1207_9751: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9752: {
    width: wp("4.2640625000000005%"),
    minWidth: wp("4.2640625000000005%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.74036458333334%"),
    top: hp("19.96828506553108%"),
    justifyContent: "center"
  },
  Text_1207_9752: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9753: {
    width: wp("4.406119791666667%"),
    minWidth: wp("4.406119791666667%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.268359374999996%"),
    top: hp("19.96828506553108%"),
    justifyContent: "center"
  },
  Text_1207_9753: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9754: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.223307291666664%"),
    top: hp("19.96828506553108%"),
    justifyContent: "center"
  },
  Text_1207_9754: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_9755: {
    width: wp("7.2191406250000005%"),
    minWidth: wp("7.2191406250000005%"),
    height: hp("3.698363590761612%"),
    minHeight: hp("3.698363590761612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.847265625%"),
    top: hp("11.036323589053962%")
  },
  View_1207_9756: {
    width: wp("3.9796875000000003%"),
    minWidth: wp("3.9796875000000003%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.336718749999996%"),
    top: hp("11.980967704064208%"),
    justifyContent: "center"
  },
  Text_1207_9756: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9757: {
    width: wp("58.80911458333333%"),
    minWidth: wp("58.80911458333333%"),
    height: hp("21.866912007983267%"),
    minHeight: hp("21.866912007983267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("138.36770833333333%"),
    top: hp("0.00008338136099794724%")
  },
  ImageBackground_1207_9758: {
    width: wp("7.2191406250000005%"),
    minWidth: wp("7.2191406250000005%"),
    height: hp("3.698363590761612%"),
    minHeight: hp("3.698363590761612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.27278645833337%"),
    top: hp("3.081975217725409%")
  },
  View_1207_9759: {
    width: wp("5.258984375%"),
    minWidth: wp("5.258984375%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.000033352544399178896%"),
    justifyContent: "center"
  },
  Text_1207_9759: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9760: {
    width: wp("4.121875%"),
    minWidth: wp("4.121875%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.955729166666686%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9760: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9761: {
    width: wp("5.258984375%"),
    minWidth: wp("5.258984375%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.768098958333354%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9761: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9762: {
    width: wp("4.406119791666667%"),
    minWidth: wp("4.406119791666667%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.717578125000017%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9762: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9763: {
    width: wp("3.4111979166666666%"),
    minWidth: wp("3.4111979166666666%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.67187500000003%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9763: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9764: {
    width: wp("4.2640625000000005%"),
    minWidth: wp("4.2640625000000005%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.631380208333326%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9764: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9765: {
    width: wp("4.2640625000000005%"),
    minWidth: wp("4.2640625000000005%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.54518229166669%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9765: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9766: {
    width: wp("1.7055989583333333%"),
    minWidth: wp("1.7055989583333333%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.996744791666657%"),
    top: hp("3.993566961236338%"),
    justifyContent: "center"
  },
  Text_1207_9766: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9767: {
    width: wp("2.1320312500000003%"),
    minWidth: wp("2.1320312500000003%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.3828125%"),
    top: hp("3.993566961236338%"),
    justifyContent: "center"
  },
  Text_1207_9767: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9768: {
    width: wp("2.2740885416666665%"),
    minWidth: wp("2.2740885416666665%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.626432291666674%"),
    top: hp("3.993566961236338%"),
    justifyContent: "center"
  },
  Text_1207_9768: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9769: {
    width: wp("2.2740885416666665%"),
    minWidth: wp("2.2740885416666665%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.438932291666674%"),
    top: hp("3.993566961236338%"),
    justifyContent: "center"
  },
  Text_1207_9769: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9770: {
    width: wp("2.1320312500000003%"),
    minWidth: wp("2.1320312500000003%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5700520833333371%"),
    top: hp("7.987300685194673%"),
    justifyContent: "center"
  },
  Text_1207_9770: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9771: {
    width: wp("2.2740885416666665%"),
    minWidth: wp("2.2740885416666665%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.808854166666663%"),
    top: hp("7.987300685194673%"),
    justifyContent: "center"
  },
  Text_1207_9771: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9772: {
    width: wp("1.9898437500000001%"),
    minWidth: wp("1.9898437500000001%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.33190104166667%"),
    top: hp("7.987300685194673%"),
    justifyContent: "center"
  },
  Text_1207_9772: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9773: {
    width: wp("2.2740885416666665%"),
    minWidth: wp("2.2740885416666665%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.712630208333366%"),
    top: hp("7.987300685194673%"),
    justifyContent: "center"
  },
  Text_1207_9773: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9774: {
    width: wp("2.2740885416666665%"),
    minWidth: wp("2.2740885416666665%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.24049479166669%"),
    top: hp("7.987300685194673%"),
    justifyContent: "center"
  },
  Text_1207_9774: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9775: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.91588541666667%"),
    top: hp("7.987300685194673%"),
    justifyContent: "center"
  },
  Text_1207_9775: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9776: {
    width: wp("3.269140625%"),
    minWidth: wp("3.269140625%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.01250000000002%"),
    top: hp("7.987300685194673%"),
    justifyContent: "center"
  },
  Text_1207_9776: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9777: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7171875000000227%"),
    top: hp("11.980967704064208%"),
    justifyContent: "center"
  },
  Text_1207_9777: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9778: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.098046875000023%"),
    top: hp("11.980967704064208%"),
    justifyContent: "center"
  },
  Text_1207_9778: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9779: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.001692708333337%"),
    top: hp("11.980967704064208%"),
    justifyContent: "center"
  },
  Text_1207_9779: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9780: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.529947916666686%"),
    top: hp("11.980967704064208%"),
    justifyContent: "center"
  },
  Text_1207_9780: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9781: {
    width: wp("3.695442708333333%"),
    minWidth: wp("3.695442708333333%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.91588541666667%"),
    top: hp("11.980967704064208%"),
    justifyContent: "center"
  },
  Text_1207_9781: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9782: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.72825520833334%"),
    top: hp("11.980967704064208%"),
    justifyContent: "center"
  },
  Text_1207_9782: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9783: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7171875000000227%"),
    top: hp("15.974618046661544%"),
    justifyContent: "center"
  },
  Text_1207_9783: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9784: {
    width: wp("4.406119791666667%"),
    minWidth: wp("4.406119791666667%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.813802083333343%"),
    top: hp("15.974618046661544%"),
    justifyContent: "center"
  },
  Text_1207_9784: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9785: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.47877604166669%"),
    top: hp("15.974618046661544%"),
    justifyContent: "center"
  },
  Text_1207_9785: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9786: {
    width: wp("4.2640625000000005%"),
    minWidth: wp("4.2640625000000005%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.717578125000017%"),
    top: hp("15.974618046661544%"),
    justifyContent: "center"
  },
  Text_1207_9786: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9787: {
    width: wp("4.406119791666667%"),
    minWidth: wp("4.406119791666667%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.245703125000034%"),
    top: hp("15.974618046661544%"),
    justifyContent: "center"
  },
  Text_1207_9787: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9788: {
    width: wp("4.406119791666667%"),
    minWidth: wp("4.406119791666667%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.63177083333332%"),
    top: hp("15.974618046661544%"),
    justifyContent: "center"
  },
  Text_1207_9788: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9789: {
    width: wp("4.2640625000000005%"),
    minWidth: wp("4.2640625000000005%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.443880208333354%"),
    top: hp("15.974618046661544%"),
    justifyContent: "center"
  },
  Text_1207_9789: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9790: {
    width: wp("4.2640625000000005%"),
    minWidth: wp("4.2640625000000005%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4559895833333485%"),
    top: hp("19.96828506553108%"),
    justifyContent: "center"
  },
  Text_1207_9790: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9791: {
    width: wp("4.121875%"),
    minWidth: wp("4.121875%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.979036458333354%"),
    top: hp("19.96828506553108%"),
    justifyContent: "center"
  },
  Text_1207_9791: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9792: {
    width: wp("4.2640625000000005%"),
    minWidth: wp("4.2640625000000005%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.21783854166668%"),
    top: hp("19.96828506553108%"),
    justifyContent: "center"
  },
  Text_1207_9792: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9793: {
    width: wp("4.2640625000000005%"),
    minWidth: wp("4.2640625000000005%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.740755208333326%"),
    top: hp("19.96828506553108%"),
    justifyContent: "center"
  },
  Text_1207_9793: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9794: {
    width: wp("4.406119791666667%"),
    minWidth: wp("4.406119791666667%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.26875000000001%"),
    top: hp("19.96828506553108%"),
    justifyContent: "center"
  },
  Text_1207_9794: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9795: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.223307291666686%"),
    top: hp("19.96828506553108%"),
    justifyContent: "center"
  },
  Text_1207_9795: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9796: {
    width: wp("3.9796875000000003%"),
    minWidth: wp("3.9796875000000003%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.33684895833335%"),
    top: hp("11.980967704064208%"),
    justifyContent: "center"
  },
  Text_1207_9796: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9797: {
    width: wp("58.80924479166667%"),
    minWidth: wp("58.80924479166667%"),
    height: hp("21.866912007983267%"),
    minHeight: hp("21.866912007983267%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.18372395833333%"),
    top: hp("0.00008338136099794724%")
  },
  ImageBackground_1207_9798: {
    width: wp("7.2191406250000005%"),
    minWidth: wp("7.2191406250000005%"),
    height: hp("3.698363590761612%"),
    minHeight: hp("3.698363590761612%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.895703125%"),
    top: hp("15.10163187329235%")
  },
  View_1207_9799: {
    width: wp("5.258984375%"),
    minWidth: wp("5.258984375%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.000033352544399178896%"),
    justifyContent: "center"
  },
  Text_1207_9799: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9800: {
    width: wp("4.121875%"),
    minWidth: wp("4.121875%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.956119791666652%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9800: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9801: {
    width: wp("5.258984375%"),
    minWidth: wp("5.258984375%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.76822916666667%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9801: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9802: {
    width: wp("4.406119791666667%"),
    minWidth: wp("4.406119791666667%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.717578125000003%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9802: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9803: {
    width: wp("3.4111979166666666%"),
    minWidth: wp("3.4111979166666666%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.67226562499998%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9803: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9804: {
    width: wp("4.2640625000000005%"),
    minWidth: wp("4.2640625000000005%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.63151041666667%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9804: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9805: {
    width: wp("4.2640625000000005%"),
    minWidth: wp("4.2640625000000005%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.54518229166668%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_1207_9805: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9806: {
    width: wp("1.7055989583333333%"),
    minWidth: wp("1.7055989583333333%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.997135416666666%"),
    top: hp("4.006541101007514%"),
    justifyContent: "center"
  },
  Text_1207_9806: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9807: {
    width: wp("2.1320312500000003%"),
    minWidth: wp("2.1320312500000003%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.382812499999986%"),
    top: hp("3.993566961236338%"),
    justifyContent: "center"
  },
  Text_1207_9807: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9808: {
    width: wp("2.2740885416666665%"),
    minWidth: wp("2.2740885416666665%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.62656249999999%"),
    top: hp("3.993566961236338%"),
    justifyContent: "center"
  },
  Text_1207_9808: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9809: {
    width: wp("2.2740885416666665%"),
    minWidth: wp("2.2740885416666665%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.43893229166666%"),
    top: hp("3.993566961236338%"),
    justifyContent: "center"
  },
  Text_1207_9809: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9810: {
    width: wp("2.1320312500000003%"),
    minWidth: wp("2.1320312500000003%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5701822916666544%"),
    top: hp("7.987300685194673%"),
    justifyContent: "center"
  },
  Text_1207_9810: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9811: {
    width: wp("2.2740885416666665%"),
    minWidth: wp("2.2740885416666665%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.82903645833332%"),
    top: hp("7.987300685194673%"),
    justifyContent: "center"
  },
  Text_1207_9811: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9812: {
    width: wp("1.9898437500000001%"),
    minWidth: wp("1.9898437500000001%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.331901041666654%"),
    top: hp("7.987300685194673%"),
    justifyContent: "center"
  },
  Text_1207_9812: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9813: {
    width: wp("2.2740885416666665%"),
    minWidth: wp("2.2740885416666665%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.713020833333346%"),
    top: hp("7.987300685194673%"),
    justifyContent: "center"
  },
  Text_1207_9813: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9814: {
    width: wp("2.2740885416666665%"),
    minWidth: wp("2.2740885416666665%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.24049479166665%"),
    top: hp("7.987300685194673%"),
    justifyContent: "center"
  },
  Text_1207_9814: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9815: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.916015625000014%"),
    top: hp("7.987300685194673%"),
    justifyContent: "center"
  },
  Text_1207_9815: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9816: {
    width: wp("3.269140625%"),
    minWidth: wp("3.269140625%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.0125%"),
    top: hp("7.987300685194673%"),
    justifyContent: "center"
  },
  Text_1207_9816: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9817: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.71731770833334%"),
    top: hp("11.980967704064208%"),
    justifyContent: "center"
  },
  Text_1207_9817: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9818: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.098046874999994%"),
    top: hp("11.980967704064208%"),
    justifyContent: "center"
  },
  Text_1207_9818: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9819: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.002083333333346%"),
    top: hp("11.980967704064208%"),
    justifyContent: "center"
  },
  Text_1207_9819: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9820: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.52994791666664%"),
    top: hp("11.980967704064208%"),
    justifyContent: "center"
  },
  Text_1207_9820: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9821: {
    width: wp("3.695442708333333%"),
    minWidth: wp("3.695442708333333%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.916015625000014%"),
    top: hp("11.980967704064208%"),
    justifyContent: "center"
  },
  Text_1207_9821: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9822: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.728385416666654%"),
    top: hp("11.980967704064208%"),
    justifyContent: "center"
  },
  Text_1207_9822: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9823: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.71731770833334%"),
    top: hp("15.974618046661544%"),
    justifyContent: "center"
  },
  Text_1207_9823: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9824: {
    width: wp("4.406119791666667%"),
    minWidth: wp("4.406119791666667%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.813802083333329%"),
    top: hp("15.974618046661544%"),
    justifyContent: "center"
  },
  Text_1207_9824: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9825: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.47903645833334%"),
    top: hp("15.974618046661544%"),
    justifyContent: "center"
  },
  Text_1207_9825: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9826: {
    width: wp("4.2640625000000005%"),
    minWidth: wp("4.2640625000000005%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.717578125000003%"),
    top: hp("15.974618046661544%"),
    justifyContent: "center"
  },
  Text_1207_9826: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9827: {
    width: wp("4.406119791666667%"),
    minWidth: wp("4.406119791666667%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.24583333333332%"),
    top: hp("15.974618046661544%"),
    justifyContent: "center"
  },
  Text_1207_9827: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9828: {
    width: wp("4.406119791666667%"),
    minWidth: wp("4.406119791666667%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.631770833333334%"),
    top: hp("15.974618046661544%"),
    justifyContent: "center"
  },
  Text_1207_9828: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9829: {
    width: wp("4.2640625000000005%"),
    minWidth: wp("4.2640625000000005%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.444140625%"),
    top: hp("15.974618046661544%"),
    justifyContent: "center"
  },
  Text_1207_9829: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9830: {
    width: wp("4.2640625000000005%"),
    minWidth: wp("4.2640625000000005%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4561197916666657%"),
    top: hp("19.96828506553108%"),
    justifyContent: "center"
  },
  Text_1207_9830: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9831: {
    width: wp("4.121875%"),
    minWidth: wp("4.121875%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.97942708333332%"),
    top: hp("19.96828506553108%"),
    justifyContent: "center"
  },
  Text_1207_9831: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9832: {
    width: wp("4.2640625000000005%"),
    minWidth: wp("4.2640625000000005%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.217838541666666%"),
    top: hp("19.96828506553108%"),
    justifyContent: "center"
  },
  Text_1207_9832: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9833: {
    width: wp("4.2640625000000005%"),
    minWidth: wp("4.2640625000000005%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4013020833333343%"),
    top: hp("4.006541101007514%"),
    justifyContent: "center"
  },
  Text_1207_9833: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9834: {
    width: wp("4.406119791666667%"),
    minWidth: wp("4.406119791666667%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.826432291666663%"),
    top: hp("4.006541101007514%"),
    justifyContent: "center"
  },
  Text_1207_9834: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9835: {
    width: wp("3.8376302083333336%"),
    minWidth: wp("3.8376302083333336%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.452083333333334%"),
    top: hp("4.006541101007514%"),
    justifyContent: "center"
  },
  Text_1207_9835: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9836: {
    width: wp("3.9796875000000003%"),
    minWidth: wp("3.9796875000000003%"),
    minHeight: hp("1.8986269424521858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.336848958333334%"),
    top: hp("11.980967704064208%"),
    justifyContent: "center"
  },
  Text_1207_9836: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9837: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("13.524590163934427%"),
    minHeight: hp("13.524590163934427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("53.00546448087432%")
  },
  View_1207_9838: {
    width: wp("87.73333333333333%"),
    minWidth: wp("87.73333333333333%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666666%"),
    top: hp("6.693989071038253%"),
    justifyContent: "center"
  },
  Text_1207_9838: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_1207_9839: {
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
  Text_1207_9839: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_9840: {
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
  View_1207_9844: {
    width: wp("70.00859375%"),
    minWidth: wp("70.00859375%"),
    height: hp("44.23494599556011%"),
    minHeight: hp("44.23494599556011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.466536458333333%"),
    top: hp("13.797814207650273%")
  },
  ImageBackground_1207_9845: {
    width: wp("70.00846354166667%"),
    minWidth: wp("70.00846354166667%"),
    height: hp("44.23494599556011%"),
    minHeight: hp("44.23494599556011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_9846: {
    width: wp("70.00846354166667%"),
    minWidth: wp("70.00846354166667%"),
    height: hp("44.23494599556011%"),
    minHeight: hp("44.23494599556011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 176, 149, 1)"
  },
  View_1207_9847: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.599869791666666%"),
    top: hp("10.928961748633881%"),
    backgroundColor: "rgba(56, 75, 153, 1)"
  },
  View_1207_9848: {
    width: wp("15.466666666666667%"),
    minWidth: wp("15.466666666666667%"),
    height: hp("6.693989071038252%"),
    minHeight: hp("6.693989071038252%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.533203125%"),
    top: hp("18.715846994535514%"),
    backgroundColor: "rgba(240, 95, 87, 1)"
  },
  View_1207_9849: {
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
  View_I1207_9849_350_11901: {
    flexGrow: 1,
    width: wp("43.93971354166666%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.206380208333336%"),
    top: hp("0%")
  },
  View_I1207_9849_350_11902: {
    width: wp("43.93971354166666%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(240, 95, 87, 1)"
  },
  View_I1207_9849_350_11903: {
    width: wp("36.76588541666666%"),
    top: hp("1.7759562841530254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5868489583333343%"),
    justifyContent: "flex-start"
  },
  Text_I1207_9849_350_11903: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1207_9849_350_11904: {
    flexGrow: 1,
    width: wp("43.93971354166666%"),
    height: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I1207_9849_350_11905: {
    width: wp("43.93971354166666%"),
    height: hp("6.557377049180328%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I1207_9849_350_11906: {
    width: wp("36.76588541666666%"),
    top: hp("1.7759562841530254%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5868489583333334%"),
    justifyContent: "flex-start"
  },
  Text_I1207_9849_350_11906: {
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
