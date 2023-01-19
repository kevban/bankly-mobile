import { View, Text } from 'react-native';

const MyAvatar = ({ icon, size=40, color='grey' }) => {
  const avatarStyles = {
    width: size,
    height: size,
    borderRadius: size / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color
  };

  return (
    <View style={avatarStyles}>
      {icon}
    </View>
  );
};

export default MyAvatar