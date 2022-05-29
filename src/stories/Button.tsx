import React from 'react'
import { Button, ScrollView, View } from 'react-native'

export type ButtonNativeProps = {
  color: string
  title: string
  age?: number
}

/**
 * Primary UI component for user interaction
 */
export const ButtonNative = (props: ButtonNativeProps) => {
  const { color, title, ...rest } = props
  return (
    <ScrollView style={{ height: 1000 }}>
      <View style={{ width: 300 }}>
        <Button color={color} title={title} {...rest} />
      </View>
    </ScrollView>
  )
}
