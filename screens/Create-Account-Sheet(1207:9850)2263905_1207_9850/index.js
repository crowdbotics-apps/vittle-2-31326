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
      <View style={styles.View_1207_9851}>
        <View style={styles.View_1207_9852} />
        <View style={styles.View_1207_9853}>
          <View style={styles.View_1207_9854}>
            <View style={styles.View_1207_9855}>
              <View style={styles.View_I1207_9855_2_8278} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/743a/0fb2/3fc3b5c0f5a0a3a3b208e23ffa5cb9ae"
                }}
                style={styles.ImageBackground_I1207_9855_2_8279}
              />
              <View style={styles.View_I1207_9855_2_8280}>
                <View style={styles.View_I1207_9855_2_8281}>
                  <Text style={styles.Text_I1207_9855_2_8281}>Recipe name</Text>
                </View>
                <View style={styles.View_I1207_9855_2_8282}>
                  <Text style={styles.Text_I1207_9855_2_8282}>95% Match</Text>
                </View>
                <View style={styles.View_I1207_9855_2_8283}>
                  <Text style={styles.Text_I1207_9855_2_8283}>Author Name</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1207_9856}>
              <View style={styles.View_I1207_9856_2_8278} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/743a/0fb2/3fc3b5c0f5a0a3a3b208e23ffa5cb9ae"
                }}
                style={styles.ImageBackground_I1207_9856_2_8279}
              />
              <View style={styles.View_I1207_9856_2_8280}>
                <View style={styles.View_I1207_9856_2_8281}>
                  <Text style={styles.Text_I1207_9856_2_8281}>Recipe name</Text>
                </View>
                <View style={styles.View_I1207_9856_2_8282}>
                  <Text style={styles.Text_I1207_9856_2_8282}>95% Match</Text>
                </View>
                <View style={styles.View_I1207_9856_2_8283}>
                  <Text style={styles.Text_I1207_9856_2_8283}>Author Name</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_1207_9857}>
              <View style={styles.View_1207_9858}>
                <Text style={styles.Text_1207_9858}>Monday, October 14</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1207_9861} />
        <View style={styles.View_1207_9862}>
          <Text style={styles.Text_1207_9862}>October 2020</Text>
        </View>
        <View style={styles.View_1207_9863}>
          <View style={styles.View_1207_9864}>
            <View style={styles.View_I1207_9864_25_3558}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f27b/3919/b92767ac1a50cac1fd9f0af0ac91b4a5"
                }}
                style={styles.ImageBackground_I1207_9864_25_3558_0_4030}
              />
            </View>
          </View>
          <View style={styles.View_1207_9865}>
            <View style={styles.View_1207_9866}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/40ac/2087/5f83e6a6c0d221a9f910f1a6af9a93ec"
                }}
                style={styles.ImageBackground_I1207_9866_0_3756}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1207_9867}>
          <View style={styles.View_1207_9868}>
            <View style={styles.View_1207_9869}>
              <View style={styles.View_1207_9870}>
                <Text style={styles.Text_1207_9870}>Mo</Text>
              </View>
              <View style={styles.View_1207_9871}>
                <Text style={styles.Text_1207_9871}>Tu</Text>
              </View>
              <View style={styles.View_1207_9872}>
                <Text style={styles.Text_1207_9872}>We</Text>
              </View>
              <View style={styles.View_1207_9873}>
                <Text style={styles.Text_1207_9873}>Th</Text>
              </View>
              <View style={styles.View_1207_9874}>
                <Text style={styles.Text_1207_9874}>Fr</Text>
              </View>
              <View style={styles.View_1207_9875}>
                <Text style={styles.Text_1207_9875}>Sa</Text>
              </View>
              <View style={styles.View_1207_9876}>
                <Text style={styles.Text_1207_9876}>Su</Text>
              </View>
              <View style={styles.View_1207_9877}>
                <Text style={styles.Text_1207_9877}>1</Text>
              </View>
              <View style={styles.View_1207_9878}>
                <Text style={styles.Text_1207_9878}>2</Text>
              </View>
              <View style={styles.View_1207_9879}>
                <Text style={styles.Text_1207_9879}>3</Text>
              </View>
              <View style={styles.View_1207_9880}>
                <Text style={styles.Text_1207_9880}>4</Text>
              </View>
              <View style={styles.View_1207_9881}>
                <Text style={styles.Text_1207_9881}>5</Text>
              </View>
              <View style={styles.View_1207_9882}>
                <Text style={styles.Text_1207_9882}>6</Text>
              </View>
              <View style={styles.View_1207_9883}>
                <Text style={styles.Text_1207_9883}>7</Text>
              </View>
              <View style={styles.View_1207_9884}>
                <Text style={styles.Text_1207_9884}>8</Text>
              </View>
              <View style={styles.View_1207_9885}>
                <Text style={styles.Text_1207_9885}>9</Text>
              </View>
              <View style={styles.View_1207_9886}>
                <Text style={styles.Text_1207_9886}>10</Text>
              </View>
              <View style={styles.View_1207_9887}>
                <Text style={styles.Text_1207_9887}>11</Text>
              </View>
              <View style={styles.View_1207_9888}>
                <Text style={styles.Text_1207_9888}>12</Text>
              </View>
              <View style={styles.View_1207_9889}>
                <Text style={styles.Text_1207_9889}>13</Text>
              </View>
              <View style={styles.View_1207_9890}>
                <Text style={styles.Text_1207_9890}>15</Text>
              </View>
              <View style={styles.View_1207_9891}>
                <Text style={styles.Text_1207_9891}>16</Text>
              </View>
              <View style={styles.View_1207_9892}>
                <Text style={styles.Text_1207_9892}>17</Text>
              </View>
              <View style={styles.View_1207_9893}>
                <Text style={styles.Text_1207_9893}>18</Text>
              </View>
              <View style={styles.View_1207_9894}>
                <Text style={styles.Text_1207_9894}>19</Text>
              </View>
              <View style={styles.View_1207_9895}>
                <Text style={styles.Text_1207_9895}>20</Text>
              </View>
              <View style={styles.View_1207_9896}>
                <Text style={styles.Text_1207_9896}>21</Text>
              </View>
              <View style={styles.View_1207_9897}>
                <Text style={styles.Text_1207_9897}>22</Text>
              </View>
              <View style={styles.View_1207_9898}>
                <Text style={styles.Text_1207_9898}>23</Text>
              </View>
              <View style={styles.View_1207_9899}>
                <Text style={styles.Text_1207_9899}>24</Text>
              </View>
              <View style={styles.View_1207_9900}>
                <Text style={styles.Text_1207_9900}>25</Text>
              </View>
              <View style={styles.View_1207_9901}>
                <Text style={styles.Text_1207_9901}>26</Text>
              </View>
              <View style={styles.View_1207_9902}>
                <Text style={styles.Text_1207_9902}>27</Text>
              </View>
              <View style={styles.View_1207_9903}>
                <Text style={styles.Text_1207_9903}>28</Text>
              </View>
              <View style={styles.View_1207_9904}>
                <Text style={styles.Text_1207_9904}>29</Text>
              </View>
              <View style={styles.View_1207_9905}>
                <Text style={styles.Text_1207_9905}>30</Text>
              </View>
              <View style={styles.View_1207_9906}>
                <Text style={styles.Text_1207_9906}>31</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9858/5c13/eb1db4d734184069d5d028c347a82ada"
                }}
                style={styles.ImageBackground_1207_9907}
              />
              <View style={styles.View_1207_9908}>
                <Text style={styles.Text_1207_9908}>14</Text>
              </View>
            </View>
            <View style={styles.View_1207_9909}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1091/2b64/597d4ae4525c2ec37a145c796960937b"
                }}
                style={styles.ImageBackground_1207_9910}
              />
              <View style={styles.View_1207_9911}>
                <Text style={styles.Text_1207_9911}>Mo</Text>
              </View>
              <View style={styles.View_1207_9912}>
                <Text style={styles.Text_1207_9912}>Tu</Text>
              </View>
              <View style={styles.View_1207_9913}>
                <Text style={styles.Text_1207_9913}>We</Text>
              </View>
              <View style={styles.View_1207_9914}>
                <Text style={styles.Text_1207_9914}>Th</Text>
              </View>
              <View style={styles.View_1207_9915}>
                <Text style={styles.Text_1207_9915}>Fr</Text>
              </View>
              <View style={styles.View_1207_9916}>
                <Text style={styles.Text_1207_9916}>Sa</Text>
              </View>
              <View style={styles.View_1207_9917}>
                <Text style={styles.Text_1207_9917}>Su</Text>
              </View>
              <View style={styles.View_1207_9918}>
                <Text style={styles.Text_1207_9918}>1</Text>
              </View>
              <View style={styles.View_1207_9919}>
                <Text style={styles.Text_1207_9919}>2</Text>
              </View>
              <View style={styles.View_1207_9920}>
                <Text style={styles.Text_1207_9920}>3</Text>
              </View>
              <View style={styles.View_1207_9921}>
                <Text style={styles.Text_1207_9921}>4</Text>
              </View>
              <View style={styles.View_1207_9922}>
                <Text style={styles.Text_1207_9922}>5</Text>
              </View>
              <View style={styles.View_1207_9923}>
                <Text style={styles.Text_1207_9923}>6</Text>
              </View>
              <View style={styles.View_1207_9924}>
                <Text style={styles.Text_1207_9924}>7</Text>
              </View>
              <View style={styles.View_1207_9925}>
                <Text style={styles.Text_1207_9925}>8</Text>
              </View>
              <View style={styles.View_1207_9926}>
                <Text style={styles.Text_1207_9926}>9</Text>
              </View>
              <View style={styles.View_1207_9927}>
                <Text style={styles.Text_1207_9927}>10</Text>
              </View>
              <View style={styles.View_1207_9928}>
                <Text style={styles.Text_1207_9928}>11</Text>
              </View>
              <View style={styles.View_1207_9929}>
                <Text style={styles.Text_1207_9929}>12</Text>
              </View>
              <View style={styles.View_1207_9930}>
                <Text style={styles.Text_1207_9930}>13</Text>
              </View>
              <View style={styles.View_1207_9931}>
                <Text style={styles.Text_1207_9931}>15</Text>
              </View>
              <View style={styles.View_1207_9932}>
                <Text style={styles.Text_1207_9932}>16</Text>
              </View>
              <View style={styles.View_1207_9933}>
                <Text style={styles.Text_1207_9933}>17</Text>
              </View>
              <View style={styles.View_1207_9934}>
                <Text style={styles.Text_1207_9934}>18</Text>
              </View>
              <View style={styles.View_1207_9935}>
                <Text style={styles.Text_1207_9935}>19</Text>
              </View>
              <View style={styles.View_1207_9936}>
                <Text style={styles.Text_1207_9936}>20</Text>
              </View>
              <View style={styles.View_1207_9937}>
                <Text style={styles.Text_1207_9937}>21</Text>
              </View>
              <View style={styles.View_1207_9938}>
                <Text style={styles.Text_1207_9938}>22</Text>
              </View>
              <View style={styles.View_1207_9939}>
                <Text style={styles.Text_1207_9939}>23</Text>
              </View>
              <View style={styles.View_1207_9940}>
                <Text style={styles.Text_1207_9940}>24</Text>
              </View>
              <View style={styles.View_1207_9941}>
                <Text style={styles.Text_1207_9941}>25</Text>
              </View>
              <View style={styles.View_1207_9942}>
                <Text style={styles.Text_1207_9942}>26</Text>
              </View>
              <View style={styles.View_1207_9943}>
                <Text style={styles.Text_1207_9943}>27</Text>
              </View>
              <View style={styles.View_1207_9944}>
                <Text style={styles.Text_1207_9944}>28</Text>
              </View>
              <View style={styles.View_1207_9945}>
                <Text style={styles.Text_1207_9945}>29</Text>
              </View>
              <View style={styles.View_1207_9946}>
                <Text style={styles.Text_1207_9946}>30</Text>
              </View>
              <View style={styles.View_1207_9947}>
                <Text style={styles.Text_1207_9947}>31</Text>
              </View>
              <View style={styles.View_1207_9948}>
                <Text style={styles.Text_1207_9948}>14</Text>
              </View>
            </View>
            <View style={styles.View_1207_9949}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1091/2b64/597d4ae4525c2ec37a145c796960937b"
                }}
                style={styles.ImageBackground_1207_9950}
              />
              <View style={styles.View_1207_9951}>
                <Text style={styles.Text_1207_9951}>Mo</Text>
              </View>
              <View style={styles.View_1207_9952}>
                <Text style={styles.Text_1207_9952}>Tu</Text>
              </View>
              <View style={styles.View_1207_9953}>
                <Text style={styles.Text_1207_9953}>We</Text>
              </View>
              <View style={styles.View_1207_9954}>
                <Text style={styles.Text_1207_9954}>Th</Text>
              </View>
              <View style={styles.View_1207_9955}>
                <Text style={styles.Text_1207_9955}>Fr</Text>
              </View>
              <View style={styles.View_1207_9956}>
                <Text style={styles.Text_1207_9956}>Sa</Text>
              </View>
              <View style={styles.View_1207_9957}>
                <Text style={styles.Text_1207_9957}>Su</Text>
              </View>
              <View style={styles.View_1207_9958}>
                <Text style={styles.Text_1207_9958}>1</Text>
              </View>
              <View style={styles.View_1207_9959}>
                <Text style={styles.Text_1207_9959}>2</Text>
              </View>
              <View style={styles.View_1207_9960}>
                <Text style={styles.Text_1207_9960}>3</Text>
              </View>
              <View style={styles.View_1207_9961}>
                <Text style={styles.Text_1207_9961}>4</Text>
              </View>
              <View style={styles.View_1207_9962}>
                <Text style={styles.Text_1207_9962}>5</Text>
              </View>
              <View style={styles.View_1207_9963}>
                <Text style={styles.Text_1207_9963}>6</Text>
              </View>
              <View style={styles.View_1207_9964}>
                <Text style={styles.Text_1207_9964}>7</Text>
              </View>
              <View style={styles.View_1207_9965}>
                <Text style={styles.Text_1207_9965}>8</Text>
              </View>
              <View style={styles.View_1207_9966}>
                <Text style={styles.Text_1207_9966}>9</Text>
              </View>
              <View style={styles.View_1207_9967}>
                <Text style={styles.Text_1207_9967}>10</Text>
              </View>
              <View style={styles.View_1207_9968}>
                <Text style={styles.Text_1207_9968}>11</Text>
              </View>
              <View style={styles.View_1207_9969}>
                <Text style={styles.Text_1207_9969}>12</Text>
              </View>
              <View style={styles.View_1207_9970}>
                <Text style={styles.Text_1207_9970}>13</Text>
              </View>
              <View style={styles.View_1207_9971}>
                <Text style={styles.Text_1207_9971}>15</Text>
              </View>
              <View style={styles.View_1207_9972}>
                <Text style={styles.Text_1207_9972}>16</Text>
              </View>
              <View style={styles.View_1207_9973}>
                <Text style={styles.Text_1207_9973}>17</Text>
              </View>
              <View style={styles.View_1207_9974}>
                <Text style={styles.Text_1207_9974}>18</Text>
              </View>
              <View style={styles.View_1207_9975}>
                <Text style={styles.Text_1207_9975}>19</Text>
              </View>
              <View style={styles.View_1207_9976}>
                <Text style={styles.Text_1207_9976}>20</Text>
              </View>
              <View style={styles.View_1207_9977}>
                <Text style={styles.Text_1207_9977}>21</Text>
              </View>
              <View style={styles.View_1207_9978}>
                <Text style={styles.Text_1207_9978}>22</Text>
              </View>
              <View style={styles.View_1207_9979}>
                <Text style={styles.Text_1207_9979}>23</Text>
              </View>
              <View style={styles.View_1207_9980}>
                <Text style={styles.Text_1207_9980}>24</Text>
              </View>
              <View style={styles.View_1207_9981}>
                <Text style={styles.Text_1207_9981}>25</Text>
              </View>
              <View style={styles.View_1207_9982}>
                <Text style={styles.Text_1207_9982}>26</Text>
              </View>
              <View style={styles.View_1207_9983}>
                <Text style={styles.Text_1207_9983}>27</Text>
              </View>
              <View style={styles.View_1207_9984}>
                <Text style={styles.Text_1207_9984}>28</Text>
              </View>
              <View style={styles.View_1207_9985}>
                <Text style={styles.Text_1207_9985}>29</Text>
              </View>
              <View style={styles.View_1207_9986}>
                <Text style={styles.Text_1207_9986}>30</Text>
              </View>
              <View style={styles.View_1207_9987}>
                <Text style={styles.Text_1207_9987}>31</Text>
              </View>
              <View style={styles.View_1207_9988}>
                <Text style={styles.Text_1207_9988}>14</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1207_9989}>
        <View style={styles.View_1207_9990}>
          <Text style={styles.Text_1207_9990}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </View>
        <View style={styles.View_1207_9991}>
          <Text style={styles.Text_1207_9991}>
            Take control of your kitchen
          </Text>
        </View>
      </View>
      <View style={styles.View_1207_9992}>
        <View style={styles.View_1207_9993} />
        <View style={styles.View_1207_9994} />
        <View style={styles.View_1207_9995}>
          <View style={styles.View_1207_9996}>
            <Text style={styles.Text_1207_9996}>Create an Account</Text>
          </View>
        </View>
        <View style={styles.View_1207_9997}>
          <View style={styles.View_1207_9998}>
            <View style={styles.View_1207_9999}>
              <Text style={styles.Text_1207_9999}>Sign In</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2de2/4010/629defc758ba2ba8ef440b8273b37ba8"
        }}
        style={styles.ImageBackground_1207_10000}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/355f/5858/e6ad304dbc9a685c0a80b33274dfd043"
        }}
        style={styles.ImageBackground_1207_10004}
      />
      <View style={styles.View_1207_10005} />
      <View style={styles.View_1207_10006}>
        <View style={styles.View_1207_10007} />
        <View style={styles.View_1207_10008}>
          <View style={styles.View_1207_10009} />
          <View style={styles.View_1207_10010}>
            <View style={styles.View_1207_10011}>
              <Text style={styles.Text_1207_10011}>Continue</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1207_10012}>
          <View style={styles.View_I1207_10012_138_2365}>
            <View style={styles.View_I1207_10012_138_2366}>
              <View style={styles.View_I1207_10012_138_2367}>
                <Text style={styles.Text_I1207_10012_138_2367}>
                  Email Address
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I1207_10012_138_2323}>
            <View style={styles.View_I1207_10012_138_2361}>
              <View style={styles.View_I1207_10012_138_2362}>
                <Text style={styles.Text_I1207_10012_138_2362}>
                  lazychef@aol.com
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1207_10013}>
          <View style={styles.View_I1207_10013_138_2365}>
            <View style={styles.View_I1207_10013_138_2366}>
              <View style={styles.View_I1207_10013_138_2367}>
                <Text style={styles.Text_I1207_10013_138_2367}>Password</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I1207_10013_138_2323}>
            <View style={styles.View_I1207_10013_138_2361}>
              <View style={styles.View_I1207_10013_138_2362}>
                <Text style={styles.Text_I1207_10013_138_2362}>
                  · · · · · · · · · · · · · ·{" "}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_1207_10014}>
          <Text style={styles.Text_1207_10014}>Forgot Password?</Text>
        </View>
        <View style={styles.View_1207_10015}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c403/57aa/9407e2817ad906c1f3dc70092171e936"
            }}
            style={styles.ImageBackground_I1207_10015_138_2407}
          />
        </View>
        <View style={styles.View_1207_10016}>
          <View style={styles.View_1207_10017}>
            <View style={styles.View_1207_10018}>
              <View style={styles.View_1207_10019} />
            </View>
            <View style={styles.View_1207_10020}>
              <View style={styles.View_1207_10021}>
                <Text style={styles.Text_1207_10021}>Continue with Apple</Text>
              </View>
              <View style={styles.View_1207_10022}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f3a/4177/b56d880737af29ad18411cdce1e62726"
                  }}
                  style={styles.ImageBackground_1207_10023}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e42a/d204/3588a4c441d0b7ef2f43223e856d867a"
                  }}
                  style={styles.ImageBackground_1207_10024}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_1207_10025}>
            <View style={styles.View_1207_10026}>
              <View style={styles.View_1207_10027} />
            </View>
            <View style={styles.View_1207_10028}>
              <View style={styles.View_1207_10029}>
                <Text style={styles.Text_1207_10029}>Continue with Google</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7192/1e7a/318a46686774bac47ba06a18367b6f32"
                }}
                style={styles.ImageBackground_1207_10030}
              />
            </View>
          </View>
          <View style={styles.View_1207_10031}>
            <View style={styles.View_1207_10032}>
              <View style={styles.View_1207_10033} />
            </View>
            <View style={styles.View_1207_10034}>
              <View style={styles.View_1207_10035}>
                <Text style={styles.Text_1207_10035}>
                  Continue with Facebook
                </Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2bbf/1498/c96583cd0df4a76743a9349c3f0526b3"
                }}
                style={styles.ImageBackground_1207_10036}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_1207_10037}>
          <Text style={styles.Text_1207_10037}>Create an Account</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3730/fe4a/2dee28fb58eabef3e0db53b035a798bd"
          }}
          style={styles.ImageBackground_1207_10038}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(32, 131, 113, 1)" },
  View_2: { height: hp("110.92896174863387%") },
  View_1207_9851: {
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
  View_1207_9852: {
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
  View_1207_9853: {
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
  View_1207_9854: {
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
  View_1207_9855: {
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
  View_I1207_9855_2_8278: {
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
  ImageBackground_I1207_9855_2_8279: {
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
  View_I1207_9855_2_8280: {
    flexGrow: 1,
    width: wp("43.26614583333333%"),
    height: hp("5.439349732112364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.644270833333337%"),
    top: hp("1.335519259093239%")
  },
  View_I1207_9855_2_8281: {
    width: wp("22.133333333333333%"),
    minWidth: wp("22.133333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_9855_2_8281: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1207_9855_2_8282: {
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
  Text_I1207_9855_2_8282: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1207_9855_2_8283: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.866145833333327%"),
    top: hp("3.390169404243508%"),
    justifyContent: "flex-start"
  },
  Text_I1207_9855_2_8283: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9856: {
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
  View_I1207_9856_2_8278: {
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
  ImageBackground_I1207_9856_2_8279: {
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
  View_I1207_9856_2_8280: {
    flexGrow: 1,
    width: wp("43.26614583333333%"),
    height: hp("5.439349732112364%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.644270833333337%"),
    top: hp("1.3355192590932354%")
  },
  View_I1207_9856_2_8281: {
    width: wp("22.133333333333333%"),
    minWidth: wp("22.133333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_9856_2_8281: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1207_9856_2_8282: {
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
  Text_I1207_9856_2_8282: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1207_9856_2_8283: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.866145833333327%"),
    top: hp("3.3901694042435118%"),
    justifyContent: "flex-start"
  },
  Text_I1207_9856_2_8283: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9857: {
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
  View_1207_9858: {
    width: wp("29.47838541666667%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_1207_9858: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 10.031999588012695,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1207_9861: {
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
  View_1207_9862: {
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
  Text_1207_9862: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.287999153137207,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9863: {
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
  View_1207_9864: {
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
  View_I1207_9864_25_3558: {
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
  ImageBackground_I1207_9864_25_3558_0_4030: {
    flexGrow: 1,
    width: wp("1.4037760416666667%"),
    height: hp("1.4382450958418715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7044270833333286%"),
    top: hp("0.5136625362875691%")
  },
  View_1207_9865: {
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
  View_1207_9866: {
    width: wp("4.812760416666666%"),
    height: hp("2.465570168417008%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1207_9866_0_3756: {
    flexGrow: 1,
    width: wp("1.4037760416666667%"),
    height: hp("1.4382450958418715%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.70455729166666%"),
    top: hp("0.5136625362875691%")
  },
  View_1207_9867: {
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
  View_1207_9868: {
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
  View_1207_9869: {
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
  View_1207_9870: {
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
  Text_1207_9870: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9871: {
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
  Text_1207_9871: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9872: {
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
  Text_1207_9872: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9873: {
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
  Text_1207_9873: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9874: {
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
  Text_1207_9874: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9875: {
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
  Text_1207_9875: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9876: {
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
  Text_1207_9876: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9877: {
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
  Text_1207_9877: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9878: {
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
  Text_1207_9878: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9879: {
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
  Text_1207_9879: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9880: {
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
  Text_1207_9880: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9881: {
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
  Text_1207_9881: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9882: {
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
  Text_1207_9882: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9883: {
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
  Text_1207_9883: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9884: {
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
  Text_1207_9884: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9885: {
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
  Text_1207_9885: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9886: {
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
  Text_1207_9886: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9887: {
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
  Text_1207_9887: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9888: {
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
  Text_1207_9888: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9889: {
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
  Text_1207_9889: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9890: {
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
  Text_1207_9890: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9891: {
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
  Text_1207_9891: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9892: {
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
  Text_1207_9892: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9893: {
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
  Text_1207_9893: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9894: {
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
  Text_1207_9894: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9895: {
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
  Text_1207_9895: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9896: {
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
  Text_1207_9896: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9897: {
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
  Text_1207_9897: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9898: {
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
  Text_1207_9898: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9899: {
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
  Text_1207_9899: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9900: {
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
  Text_1207_9900: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9901: {
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
  Text_1207_9901: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9902: {
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
  Text_1207_9902: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9903: {
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
  Text_1207_9903: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9904: {
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
  Text_1207_9904: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9905: {
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
  Text_1207_9905: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9906: {
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
  Text_1207_9906: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_9907: {
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
  View_1207_9908: {
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
  Text_1207_9908: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9909: {
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
  ImageBackground_1207_9910: {
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
  View_1207_9911: {
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
  Text_1207_9911: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9912: {
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
  Text_1207_9912: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9913: {
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
  Text_1207_9913: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9914: {
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
  Text_1207_9914: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9915: {
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
  Text_1207_9915: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9916: {
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
  Text_1207_9916: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9917: {
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
  Text_1207_9917: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9918: {
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
  Text_1207_9918: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9919: {
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
  Text_1207_9919: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9920: {
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
  Text_1207_9920: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9921: {
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
  Text_1207_9921: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9922: {
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
  Text_1207_9922: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9923: {
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
  Text_1207_9923: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9924: {
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
  Text_1207_9924: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9925: {
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
  Text_1207_9925: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9926: {
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
  Text_1207_9926: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9927: {
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
  Text_1207_9927: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9928: {
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
  Text_1207_9928: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9929: {
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
  Text_1207_9929: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9930: {
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
  Text_1207_9930: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9931: {
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
  Text_1207_9931: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9932: {
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
  Text_1207_9932: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9933: {
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
  Text_1207_9933: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9934: {
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
  Text_1207_9934: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9935: {
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
  Text_1207_9935: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9936: {
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
  Text_1207_9936: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9937: {
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
  Text_1207_9937: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9938: {
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
  Text_1207_9938: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9939: {
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
  Text_1207_9939: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9940: {
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
  Text_1207_9940: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9941: {
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
  Text_1207_9941: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9942: {
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
  Text_1207_9942: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9943: {
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
  Text_1207_9943: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9944: {
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
  Text_1207_9944: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9945: {
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
  Text_1207_9945: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9946: {
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
  Text_1207_9946: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9947: {
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
  Text_1207_9947: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9948: {
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
  Text_1207_9948: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9949: {
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
  ImageBackground_1207_9950: {
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
  View_1207_9951: {
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
  Text_1207_9951: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9952: {
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
  Text_1207_9952: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9953: {
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
  Text_1207_9953: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9954: {
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
  Text_1207_9954: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9955: {
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
  Text_1207_9955: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9956: {
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
  Text_1207_9956: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9957: {
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
  Text_1207_9957: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9958: {
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
  Text_1207_9958: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9959: {
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
  Text_1207_9959: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9960: {
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
  Text_1207_9960: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9961: {
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
  Text_1207_9961: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9962: {
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
  Text_1207_9962: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9963: {
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
  Text_1207_9963: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9964: {
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
  Text_1207_9964: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9965: {
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
  Text_1207_9965: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9966: {
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
  Text_1207_9966: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9967: {
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
  Text_1207_9967: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9968: {
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
  Text_1207_9968: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9969: {
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
  Text_1207_9969: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9970: {
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
  Text_1207_9970: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9971: {
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
  Text_1207_9971: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9972: {
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
  Text_1207_9972: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9973: {
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
  Text_1207_9973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9974: {
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
  Text_1207_9974: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9975: {
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
  Text_1207_9975: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9976: {
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
  Text_1207_9976: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9977: {
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
  Text_1207_9977: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9978: {
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
  Text_1207_9978: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9979: {
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
  Text_1207_9979: {
    color: "rgba(140, 141, 151, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9980: {
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
  Text_1207_9980: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9981: {
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
  Text_1207_9981: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9982: {
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
  Text_1207_9982: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9983: {
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
  Text_1207_9983: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9984: {
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
  Text_1207_9984: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9985: {
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
  Text_1207_9985: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9986: {
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
  Text_1207_9986: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9987: {
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
  Text_1207_9987: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9988: {
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
  Text_1207_9988: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9.279998779296875,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9989: {
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
  View_1207_9990: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.693989071038253%"),
    justifyContent: "center"
  },
  Text_1207_9990: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.18,
    textTransform: "none"
  },
  View_1207_9991: {
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
  Text_1207_9991: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9992: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("15.300546448087433%"),
    minHeight: hp("15.300546448087433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("91.2568306010929%")
  },
  View_1207_9993: {
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
  View_1207_9994: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8.7431693989071%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1207_9995: {
    width: wp("40.8%"),
    minWidth: wp("40.8%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.600000000000005%"),
    top: hp("1.639344262295083%")
  },
  View_1207_9996: {
    width: wp("40.8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1207_9996: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_9997: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.400000000000006%"),
    top: hp("10.382513661202182%")
  },
  View_1207_9998: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    height: hp("3.1420765027322406%"),
    minHeight: hp("3.1420765027322406%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1207_9999: {
    width: wp("14.933333333333335%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1207_9999: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_10000: {
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
  ImageBackground_1207_10004: {
    width: wp("70.00846354166667%"),
    minWidth: wp("70.00846354166667%"),
    height: hp("44.23494599556011%"),
    minHeight: hp("44.23494599556011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3.466536458333333%"),
    top: hp("13.797814207650273%")
  },
  View_1207_10005: {
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
  View_1207_10006: {
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
  View_1207_10007: {
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
  View_1207_10008: {
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
  View_1207_10009: {
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
  View_1207_10010: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.733333333333334%"),
    top: hp("1.639344262295083%")
  },
  View_1207_10011: {
    width: wp("20.266666666666666%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_1207_10011: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10012: {
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
  View_I1207_10012_138_2365: {
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
  View_I1207_10012_138_2366: {
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
  View_I1207_10012_138_2367: {
    flexGrow: 1,
    width: wp("20.533333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_10012_138_2367: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  View_I1207_10012_138_2323: {
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
  View_I1207_10012_138_2361: {
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
  View_I1207_10012_138_2362: {
    flexGrow: 1,
    width: wp("35.199999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.254098360655739%"),
    justifyContent: "flex-start"
  },
  Text_I1207_10012_138_2362: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10013: {
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
  View_I1207_10013_138_2365: {
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
  View_I1207_10013_138_2366: {
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
  View_I1207_10013_138_2367: {
    flexGrow: 1,
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I1207_10013_138_2367: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  View_I1207_10013_138_2323: {
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
  View_I1207_10013_138_2361: {
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
  View_I1207_10013_138_2362: {
    flexGrow: 1,
    width: wp("29.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.254098360655746%"),
    justifyContent: "flex-start"
  },
  Text_I1207_10013_138_2362: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1207_10014: {
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
  Text_1207_10014: {
    color: "rgba(240, 95, 87, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10015: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.6%"),
    top: hp("26.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1207_10015_138_2407: {
    flexGrow: 1,
    width: wp("5.866666666666666%"),
    height: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666667993%"),
    top: hp("0.614754098360649%")
  },
  View_1207_10016: {
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
  View_1207_10017: {
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
  View_1207_10018: {
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
  View_1207_10019: {
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
  View_1207_10020: {
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
  View_1207_10021: {
    width: wp("43.733333333333334%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    justifyContent: "flex-start"
  },
  Text_1207_10021: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_1207_10022: {
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
  ImageBackground_1207_10023: {
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
  ImageBackground_1207_10024: {
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
  View_1207_10025: {
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
  View_1207_10026: {
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
  View_1207_10027: {
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
  View_1207_10028: {
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
  View_1207_10029: {
    width: wp("46.666666666666664%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666669%"),
    justifyContent: "flex-start"
  },
  Text_1207_10029: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_10030: {
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
  View_1207_10031: {
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
  View_1207_10032: {
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
  View_1207_10033: {
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
  View_1207_10034: {
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
  View_1207_10035: {
    width: wp("52%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666669%"),
    justifyContent: "flex-start"
  },
  Text_1207_10035: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  ImageBackground_1207_10036: {
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
  View_1207_10037: {
    width: wp("61.06666666666667%"),
    minWidth: wp("61.06666666666667%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("4.371584699453553%"),
    justifyContent: "flex-start"
  },
  Text_1207_10037: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1207_10038: {
    width: wp("91.46666666666667%"),
    minWidth: wp("91.46666666666667%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.266666666666667%"),
    top: hp("52.59562841530054%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
