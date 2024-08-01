import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router';

export default function profile() {
  return (
    <View>
      <Text>profile</Text>
      <Button
        title="Press me"
        color='#000000'
        onPress={() => router.back()}
      />
    </View>
  )
}