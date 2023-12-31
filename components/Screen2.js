import { LinearGradient } from "expo-linear-gradient";
import {
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import {
  Actionsheet,
  useDisclose,
  Box,
  Center,
  NativeBaseProvider,
} from "native-base";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Dimensions } from "react-native";

function Screen2(props) {
  const { isOpen, onOpen, onClose } = useDisclose();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectDate, setSelectedDate] = useState("Select a date");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    // console.warn("A date has been picked: ", date);
    const dt = new Date(date);
    const x = dt.toISOString().split("T");
    const x1 = x[0].split("-");

    setSelectedDate(x1[2] + "/" + x1[1] + "/" + x1[0]);
    hideDatePicker();
  };
  return (
    <Center>
      <View style={{ height: "100%", backgroundColor: "black" }}>
        <ScrollView>
          <LinearGradient
            colors={["black", "#8020FF", "black"]}
            style={{ height: "100%" }}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
          >
            <View
              style={{
                marginLeft: 13,
                marginRight: 13,
                marginTop: 50,
                backgroundColor: "#191717",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  borderColor: "#2D2727",
                  borderWidth: 1,
                }}
              >
                <Image
                  style={{
                    width: 19,
                    height: 19,
                    borderRadius: 50,
                    marginTop: 12,
                    marginLeft: 10,
                  }}
                  source={require("./img/search.png")}
                ></Image>
                <TextInput
                  placeholder="Search for party by name, type or venue"
                  style={{ color: "grey", padding: 9 }}
                  placeholderTextColor={"grey"}
                ></TextInput>
              </View>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
              />
              <TouchableOpacity
                style={{
                  width: "100%",
                  borderWidth: 1,
                  borderColor: "#2D2727",
                  justifyContent: "flex-start",
                  alignItems: "left",
                  flexDirection: "row",
                }}
                onPress={() => {
                  showDatePicker();
                }}
              >
                <Image
                  style={{
                    width: 19,
                    height: 19,
                    borderRadius: 50,
                    marginTop: 10,
                    marginLeft: 15,
                  }}
                  source={require("./img/date.png")}
                />
                <Text style={{ color: "grey", padding: 10 }}>{selectDate}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#8000FF",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 8,
                }}
              >
                <Text style={{ fontWeight: 900, color: "white", fontSize: 12 }}>
                  SEARCH
                </Text>
              </TouchableOpacity>
            </View>
            {/* </LinearGradient> */}
            {/* ----------------------- */}

            {/* <LinearGradient
        colors={["black", "#8020FF","#18182C"]}
        // style={{ height: "10%" }}
        start={{ x: 0, y:1  }}
        end={{ x: 9, y:0 }}
      > */}
            <View style={{ margin: 10 }}>
              <Text
                style={{
                  color: "white",
                  fontWeight: 900,
                  fontSize: 15,
                  marginTop: 10,
                }}
              >
                Events I'm invited to
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 3,
                }}
              >
                <Text style={{ color: "#D0D4CA", fontSize: 11 }}>
                  Event where you were invited to attend
                </Text>
                <Text style={{ color: "#8000FF", fontSize: 11 }}>View all</Text>
              </View>
            </View>

            {/* --------------------imageBackGround 1----------------- */}
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{ maxHeight: 200 }}
            >
              <View style={{ flexDirection: "row", height: 300 }}>
                <View
                  style={{
                    justifyContent: "center",

                    marginLeft: 12,
                    // width:400,
                    width: 330,
                    height: 200,
                    // backgroundColor:'yellow',
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                >
                  <ImageBackground
                    style={{ width: "100%", height: 200 }}
                    imageStyle={{ borderRadius: 10 }}
                    source={require("./img/party_background.jpg")}
                  >
                    {/* ---icon---- */}
                    <View style={{ alignItems: "flex-end" }}>
                      <View
                        style={{
                          backgroundColor: "#8020FF",
                          padding: 7,
                          borderRadius: 20,
                          marginTop: 20,
                          marginRight: 20,
                        }}
                      >
                        <Image
                          style={{ width: 25, height: 25 }}
                          source={require("./img/heart4.png")}
                        ></Image>
                      </View>
                    </View>
                    {/* ------/icon---- */}
                    <View
                      style={{
                        flexDirection: "row",
                        height: "65%",
                        // backgroundColor:'yellow',
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        padding: 10,
                      }}
                    >
                      <View>
                        <Text style={{ color: "#fff", fontWeight: 900 }}>
                          Event Name
                        </Text>
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 10,
                            fontWeight: 900,
                          }}
                        >
                          March 1,2023-6:00pm
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          style={{ width: 40, height: 40, borderRadius: 20 }}
                          source={require("./img/Danieal_Ancuta.jpg")}
                        ></Image>
                        <Image
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            marginLeft: 10,
                            marginRight: 10,
                          }}
                          source={require("./img/profile1.jpg")}
                        ></Image>
                        <Image
                          style={{ width: 40, height: 40, borderRadius: 20 }}
                          source={require("./img/profile2.jpg")}
                        ></Image>
                      </View>
                    </View>
                  </ImageBackground>
                </View>

                {/* ---------/background-1-----2strt------- */}
                <View
                  style={{
                    justifyContent: "center",
                    margin: 1,
                    marginLeft: 20,
                    marginRight: 20,
                    width: 330,
                    height: 200,
                    backgroundColor: "blue",
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                >
                  <ImageBackground
                    style={{ width: "100%", height: 200 }}
                    imageStyle={{ borderRadius: 10 }}
                    source={require("./img/party_background2.jpg")}
                  >
                    {/* ---icon---- */}
                    <View style={{ alignItems: "flex-end" }}>
                      <View
                        style={{
                          backgroundColor: "#8020FF",
                          padding: 7,
                          borderRadius: 20,
                          marginTop: 20,
                          marginRight: 20,
                        }}
                      >
                        <Image
                          style={{ width: 25, height: 25 }}
                          source={require("./img/heart4.png")}
                        ></Image>
                      </View>
                    </View>
                    {/* ------/icon---- */}
                    <View
                      style={{
                        flexDirection: "row",
                        height: "65%",
                        // backgroundColor:'yellow',
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        padding: 10,
                      }}
                    >
                      <View>
                        <Text style={{ color: "#fff", fontWeight: 900 }}>
                          Event Name
                        </Text>
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 10,
                            fontWeight: 900,
                          }}
                        >
                          March 1,2023-6:00pm
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          style={{ width: 40, height: 40, borderRadius: 20 }}
                          source={require("./img/profile3.jpg")}
                        ></Image>
                        <Image
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            marginLeft: 10,
                            marginRight: 10,
                          }}
                          source={require("./img/profile4.jpg")}
                        ></Image>
                        <Image
                          style={{ width: 40, height: 40, borderRadius: 20 }}
                          source={require("./img/profile5.jpg")}
                        ></Image>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
                {/* --------/-background2------ */}
                <View
                  style={{
                    justifyContent: "center",
                    margin: 1,
                    width: 330,
                    height: 200,
                    backgroundColor: "red",
                    alignItems: "center",
                    borderRadius: 10,
                  }}
                >
                  <ImageBackground
                    style={{ width: "100%", height: 200 }}
                    imageStyle={{ borderRadius: 10 }}
                    source={require("./img/party_background3.jpg")}
                  >
                    {/* ---icon---- */}
                    <View style={{ alignItems: "flex-end" }}>
                      <View
                        style={{
                          backgroundColor: "#8020FF",
                          padding: 7,
                          borderRadius: 20,
                          marginTop: 20,
                          marginRight: 20,
                        }}
                      >
                        <Image
                          style={{ width: 25, height: 25 }}
                          source={require("./img/heart4.png")}
                        ></Image>
                      </View>
                    </View>
                    {/* ------/icon---- */}
                    <View
                      style={{
                        flexDirection: "row",
                        height: "65%",
                        // backgroundColor:'yellow',
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        padding: 10,
                      }}
                    >
                      <View>
                        <Text style={{ color: "#fff", fontWeight: 900 }}>
                          Event Name
                        </Text>
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 10,
                            fontWeight: 900,
                          }}
                        >
                          March 1,2023-6:00pm
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          style={{ width: 40, height: 40, borderRadius: 20 }}
                          source={require("./img/profile6.jpg")}
                        ></Image>
                        <Image
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20,
                            marginLeft: 10,
                            marginRight: 10,
                          }}
                          source={require("./img/profile7.jpg")}
                        ></Image>
                        <Image
                          style={{ width: 40, height: 40, borderRadius: 20 }}
                          source={require("./img/profile8.jpg")}
                        ></Image>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              </View>
            </ScrollView>
            {/* </LinearGradient> */}

            {/* -----/--background3------ */}
            {/* ---------------------------------------------------------------- */}
            {/* <LinearGradient
        colors={["black", "#8020FF", "black"]}
        style={{ height: "100%" }}
        start={{ x: 1, y:0  }}
        end={{ x: 0, y: 0}}
      > */}
            <Text
              style={{
                color: "#fff",
                fontSize: 17,
                fontWeight: 900,
                marginTop: 35,
                marginLeft: 10,
              }}
            >
              Highly anticipated events
            </Text>
            <Text
              style={{
                color: "#D0D4CA",
                fontSize: 11,
                marginLeft: 10,
                marginTop: 7,
              }}
            >
              Most anticipated events based on user preferences
            </Text>

            {/* --------------- */}
            <View
              style={{
                marginTop: 15,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#191717",
                  borderRadius: 7,
                  flex: 1,
                  padding: 6,
                  marginLeft: 10,
                }}
              >
                <Image
                  style={{ width: 17, height: 17 }}
                  source={require("./img/sort.png")}
                ></Image>
                <Text style={{ color: "#fff", marginLeft: 10, fontSize: 11 }}>
                  SORT
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#191717",
                  borderRadius: 7,
                  // width: 100,
                  flex: 1,
                  padding: 8,
                  marginLeft: 10,
                  marginRight: 10,
                }}
              >
                <TouchableOpacity
                  style={{ flexDirection: "row" }}
                  onPress={onOpen}
                >
                  <Image
                    style={{ width: 17, height: 17 }}
                    source={require("./img/filter.png")}
                  ></Image>
                  <Text style={{ color: "#fff", marginLeft: 10, fontSize: 11 }}>
                    FILTER
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#191717",
                  borderRadius: 7,
                  // width: 100,
                  flex: 1,
                  padding: 6,
                  paddingTop: 10,
                  marginRight: 10,
                }}
              >
                <Image
                  style={{ width: 17, height: 17 }}
                  source={require("./img/location.png")}
                ></Image>
                <Text style={{ color: "#fff", marginLeft: 10, fontSize: 10 }}>
                  VIEW ON MAP
                </Text>
              </View>
            </View>

            {/* -------------footer--- */}
            <View
              style={{
                justifyContent: "center",

                marginLeft: 15,
                marginTop: 20,
                // width:400,
                width: 360,
                height: 200,
                // backgroundColor:'yellow',
                alignItems: "center",
                borderRadius: 10,
                borderColor: "blue",
                borderRadius: 4,
              }}
            >
              <ImageBackground
                style={{ width: "100%", height: 200 }}
                imageStyle={{ borderRadius: 10 }}
                source={require("./img/party_background4.jpg")}
              >
                {/* ---icon---- */}
                <View style={{ alignItems: "flex-end" }}>
                  <View
                    style={{
                      backgroundColor: "#8020FF",
                      padding: 7,
                      borderRadius: 20,
                      marginTop: 20,
                      marginRight: 20,
                    }}
                  >
                    <Image
                      style={{ width: 25, height: 25 }}
                      source={require("./img/heart4.png")}
                    ></Image>
                  </View>
                </View>
                {/* ------/icon---- */}
                <View
                  style={{
                    flexDirection: "row",
                    height: "65%",
                    // backgroundColor:'yellow',
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    padding: 10,
                  }}
                >
                  <View>
                    <Text style={{ color: "#fff", fontWeight: 900 }}>
                      Event Name
                    </Text>
                    <Text
                      style={{ color: "#fff", fontSize: 10, fontWeight: 900 }}
                    >
                      March 1,2023-6:00pm
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      style={{ width: 40, height: 40, borderRadius: 20 }}
                      source={require("./img/Danieal_Ancuta.jpg")}
                    ></Image>
                    <Image
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        marginLeft: 10,
                        marginRight: 10,
                      }}
                      source={require("./img/profile9.jpg")}
                    ></Image>
                    <Image
                      style={{ width: 40, height: 40, borderRadius: 20 }}
                      source={require("./img/profile10.jpg")}
                    ></Image>
                  </View>
                </View>
              </ImageBackground>
            </View>

            {/* </LinearGradient> */}
          </LinearGradient>
          <Center>
           
            <Actionsheet
              isOpen={isOpen}
              onClose={onClose}
             
            >
              <Actionsheet.Content
                style={{ backgroundColor: "#191717", color: "green",
               height:400,
               paddingTop:20,
                justifyContent:'center',
                alignItems:'center'
              }}
              >
                <Text style={{fontWeight:900,fontSize:20,color:'#8020FF',margin:30,marginTop:0}}>Choose Options</Text>
                <ScrollView style={{width:'100%'}}>
                <Actionsheet.Item style={{ backgroundColor: "#191717"}}>
                <Text style={{ color: "#fff"}}>
                    Events
                  </Text>
                </Actionsheet.Item>
                <Actionsheet.Item style={{ backgroundColor: "#191717" }}>
                <Text style={{ color: "#fff"}}>
                    Sessions
                  </Text>
                </Actionsheet.Item>
                <Actionsheet.Item style={{ backgroundColor: "#191717" }}>
                  <Text style={{ color: "#fff", backgroundColor: "#191717" }}>
                    Favorites
                  </Text>
                </Actionsheet.Item>
                <Actionsheet.Item style={{ backgroundColor: "#191717" }}>
                <Text style={{ color: "#fff", backgroundColor: "#191717" }}>
                    Delete
                  </Text>
                </Actionsheet.Item>
                <Actionsheet.Item style={{ backgroundColor: "#191717" }}>
                <Text style={{ color: "#fff", backgroundColor: "#191717" }}>
                    More
                  </Text>
                </Actionsheet.Item>
                <Actionsheet.Item style={{ backgroundColor: "#191717" }}>
                <Text style={{ color: "#fff" }}>
                    Settings
                  </Text>
                </Actionsheet.Item>

                 <Actionsheet.Item style={{ backgroundColor: "#191717" }}>
                <Text style={{ color: "#fff", backgroundColor: "#191717" }}>
                    Edits
                  </Text>
                </Actionsheet.Item>
                <Actionsheet.Item style={{ backgroundColor: "#191717" }}>
                <Text style={{ color: "#fff", backgroundColor: "#191717" }}>
                    Choose
                  </Text>
                </Actionsheet.Item>
                <Actionsheet.Item style={{ backgroundColor: "#191717" }}>
                <Text style={{ color: "#fff" }}>
                    Settings
                  </Text>
                </Actionsheet.Item>
                <Actionsheet.Item style={{ backgroundColor: "#191717" }}>
                <Text style={{ color: "#fff" }}>
                    View
                  </Text>
                </Actionsheet.Item>
                <Actionsheet.Item style={{ backgroundColor: "#191717" }}>
                <Text style={{ color: "#fff" }}>
                    Get Info
                  </Text>
                </Actionsheet.Item>
                </ScrollView>
              </Actionsheet.Content>
            </Actionsheet>
          </Center>
        </ScrollView>
      </View>
    </Center>
  );
}
export default () => {
  return (
    <NativeBaseProvider>
      <Center >
        <Screen2 />
      </Center>
    </NativeBaseProvider>
  );
};