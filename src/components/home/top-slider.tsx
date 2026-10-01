import { useCallback, useEffect, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  Image,
  ImageSourcePropType,
  LayoutChangeEvent,
  Pressable,
  View,
} from "react-native";

export type HeroSlide = {
  id: string;
  Image: ImageSourcePropType;
  onPress?: () => void;
};

type Props = {
  slides?: HeroSlide[];
  height?: number;
  autoPlay?: boolean;
  interval?: number;
};

const DEFAULT_SLIDES: HeroSlide[] = [
  { id: "1", Image: require("../../assets/images/fake.jpg") },
  { id: "2", Image: require("../../assets/images/fake.jpg") },
  { id: "3", Image: require("../../assets/images/fake.jpg") },
  { id: "4", Image: require("../../assets/images/fake.jpg") },
];

const ACCENT = "#E11D2E";
const DOT = 8;
const DOT_ACTIVE = 22;

const TopSlider = ({
  slides = DEFAULT_SLIDES,
  height = 190,
  autoPlay = true,
  interval = 4000,
}: Props) => {
  const [width, setWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const listRef = useRef<FlatList<HeroSlide>>(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const dragging = useRef(false);

  const onLayout = (e: LayoutChangeEvent) => {
    setWidth(e.nativeEvent.layout.width);
  };

  const goTo = useCallback(
    (i: number) => {
      if (!width) return;
      listRef.current?.scrollToOffset({ offset: i * width, animated: true });
      setIndex(i);
    },
    [width],
  );

  useEffect(() => {
    if (!autoPlay || slides.length < 2 || !width) return;
    const timer = setInterval(() => {
      if (dragging.current) return;
      goTo((index + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length, width, index, goTo]);

  return (
    <View onLayout={onLayout} style={{ width: "100%" }}>
      {width > 0 && (
        <View
          style={{
            height,
            borderRadius: 16,
            overflow: "hidden",
            backgroundColor: "#1D1D1D",
          }}
        >
          <Animated.FlatList
            ref={listRef as any}
            data={slides}
            horizontal
            pagingEnabled
            bounces={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            getItemLayout={(_, i) => ({
              length: width,
              offset: width * i,
              index: i,
            })}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false },
            )}
            onScrollBeginDrag={() => (dragging.current = true)}
            onScrollEndDrag={() => (dragging.current = false)}
            onMomentumScrollEnd={(e) =>
              setIndex(Math.round(e.nativeEvent.contentOffset.x / width))
            }
            renderItem={({ item }) => (
              <Pressable
                onPress={item.onPress}
                style={{ width, height }}
                accessibilityRole="button"
              >
                <Image
                  source={item.Image}
                  resizeMode="cover"
                  style={{ width, height }}
                />
              </Pressable>
            )}
          />

          <View
            pointerEvents="box-none"
            style={{
              position: "absolute",
              bottom: 12,
              left: 0,
              right: 0,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 6,
            }}
          >
            {slides.map((_, i) => {
              const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
              const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [DOT, DOT_ACTIVE, DOT],
                extrapolate: "clamp",
              });
              const activeOpacity = scrollX.interpolate({
                inputRange,
                outputRange: [0, 1, 0],
                extrapolate: "clamp",
              });
              return (
                <Pressable key={i} onPress={() => goTo(i)} hitSlop={8}>
                  <Animated.View
                    style={{
                      width: dotWidth,
                      height: DOT,
                      borderRadius: DOT / 2,
                      backgroundColor: "rgba(255,255,255,0.45)",
                      overflow: "hidden",
                    }}
                  >
                    <Animated.View
                      style={{
                        flex: 1,
                        backgroundColor: ACCENT,
                        opacity: activeOpacity,
                      }}
                    />
                  </Animated.View>
                </Pressable>
              );
            })}
          </View>
        </View>
      )}
    </View>
  );
};

export default TopSlider;
