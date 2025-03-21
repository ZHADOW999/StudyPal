import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import icons from '@/constants/icons'

export const TabIcon= ({text, icon,focused,iconColored}:{text:string,icon:any, focused:boolean,iconColored:any}) => {
    return(
        <View className='flex-1 mt-3 flex flex-col items-center'>
                            {focused ? (<Image
                                source={iconColored}
                                // tintColor={focused ? '#FFD233' : undefined}
                                resizeMode='contain'
                                className='size-7'
                            />): (<Image
                                source={icon}
                                // tintColor={focused ? '#FFD233' : undefined}
                                resizeMode='contain'
                                className='size-7'
                            />)
}
                            <Text className={`${focused ? 'text-base text-studyYellow-100 font-Raleway-SemiBold' : 'text-studyBlack-300 '} text-xs w-full text-center mt-1`}>
                                {text}
                            </Text>
                        </View>
    )
}

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle:{
                    backgroundColor: '#fff',
                    position:'absolute',
                    minHeight:80,
                    borderTopColor:'#0061FF1A',
                    borderTopWidth:1,
                    
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'discover',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon text="Discover" icon={icons.discover} focused={focused} iconColored={icons.discoverColored}/>
                    )
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    title: 'Chat',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon text="Chat" icon={icons.chat} focused={focused}  iconColored={icons.chatColored}/>
                    )
                }}
            />
            <Tabs.Screen
                name="resources"
                options={{
                    title: 'Resources',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon text="Resouces" icon={icons.search} focused={focused} iconColored={icons.searchColored}/>
                    )
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: 'Account',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon text="Account" icon={icons.account} focused={focused} iconColored={icons.accountColor}/>
                    )
                }}
            />
        </Tabs>
    )
}

export default _layout