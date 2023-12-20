import React, {useState, useRef} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Animated,
  PanResponder,
} from 'react-native';
import {Text} from '../../components';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utils/dimensions';
import sizing from '../../utils/sizing';
import {Icon} from '../icon';
import style from './style';

// haveSelect durumu içinde seçimli işler için kullanılır.
// DropDown gibi kullanım sunar. Seçim yapıldığında componentin kapanmasını sağlar
export const AccordionItem = ({title, children, haveSelect = false}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bodySectionHeight, setBodySectionHeight] = useState(0);

  const animatedController = useRef(new Animated.Value(0)).current;

  const bodyHeight = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  });
  const arrowRatotion = animatedController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0rad', `${Math.PI}rad`],
  });
  const itemVisible = () => {
    if (isOpen) {
      Animated.timing(animatedController, {
        duration: 200,
        toValue: 0,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animatedController, {
        duration: 200,
        toValue: 1,
        useNativeDriver: false,
      }).start();
    }
    setIsOpen(!isOpen);
  };

  return (
    <TouchableWithoutFeedback onPress={() => itemVisible()}>
      <View>
        <View style={style.root}>
          <Text overStyle={style.title} text={title} />
          <Animated.View style={{transform: [{rotateZ: arrowRatotion}]}}>
            <Icon icon="Stroke" />
          </Animated.View>
        </View>
        <TouchableWithoutFeedback onPress={() => haveSelect && itemVisible()}>
          <Animated.View
            panResponder={!isOpen}
            onStartShouldSetPanResponder={() => true}
            style={[style.bodyBackground, {height: bodyHeight}]}>
            <View
              onLayout={e => {
                setBodySectionHeight(e.nativeEvent.layout.height);
              }}
              style={style.body}>
              {children}
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};
