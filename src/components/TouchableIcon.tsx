import {TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {colors} from '../theme/appTheme';

interface Props {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  onClick: () => void;
}

const TouchableIcon = ({
  iconName,
  iconColor = colors.primary,
  iconSize = 80,
  onClick,
}: Props) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};

export default TouchableIcon;
