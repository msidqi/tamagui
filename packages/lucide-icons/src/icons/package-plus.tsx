import type { IconProps } from '@tamagui/helpers-icon'
import { themed } from '@tamagui/helpers-icon'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {
  Defs,
  Ellipse,
  G,
  Line,
  LinearGradient,
  Path,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Use,
  Circle as _Circle,
  Text as _Text,
} from 'react-native-svg'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <Path d="M16 16h6" stroke={color} />
      <Path d="M19 13v6" stroke={color} />
      <Path
        d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
        stroke={color}
      />
      <Path d="m7.5 4.27 9 5.15" stroke={color} />
      <Polyline points="3.29 7 12 12 20.71 7" stroke={color} />
      <Line x1="12" x2="12" y1="22" y2="12" stroke={color} />
    </Svg>
  )
}

Icon.displayName = 'PackagePlus'

export const PackagePlus = memo<IconProps>(themed(Icon))
