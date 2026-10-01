import AppShell from "@/components/AppShell";
import { Lucide } from "@react-native-vector-icons/lucide";
import { useMemo, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Tabs = [
  {
    TabName: "Popular",
  },
  {
    TabName: "New",
  },
  {
    TabName: "Coming Soon",
  },
  {
    TabName: "Dubbed",
  },
  {
    TabName: "Female",
  },
];

const Genres = ["Drama", "Anime"];

const MovieList = [
  {
    Image: require("../../assets/images/fake.jpg"),
    MovieTitle: "Avengers Endgame",
    MovieType: "Action",
  },
  {
    Image: require("../../assets/images/fake.jpg"),
    MovieTitle: "Jake the Giant Slayer",
    MovieType: "Adventure",
  },
  {
    Image: require("../../assets/images/fake.jpg"),
    MovieTitle: "The Killer",
    MovieType: "Action",
  },
  {
    Image: require("../../assets/images/fake.jpg"),
    MovieTitle: "Dr DoLittle",
    MovieType: "Adventure",
  },
  {
    Image: require("../../assets/images/fake.jpg"),
    MovieTitle: "One Piece",
    MovieType: "Anime",
  },
  {
    Image: require("../../assets/images/fake.jpg"),
    MovieTitle: "Fast X",
    MovieType: "Action",
  },
];

const explore = () => {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [activeGenre, setActiveGenre] = useState("Drama");
  const [activeTab, setActiveTab] = useState("Popular");

  // Filter by search text; pad odd lists with a spacer so the last card
  // keeps its column width instead of stretching across the row.
  const movies = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered: ((typeof MovieList)[number] | null)[] = MovieList.filter(
      (m) => m.MovieTitle.toLowerCase().includes(q),
    );
    if (filtered.length % 2 === 1) filtered.push(null);
    return filtered;
  }, [query]);

  const hasResults = movies.some(Boolean);

  return (
    <AppShell>
      {/* TEXT INPUT SECTION STARTS HERE */}
      <View
        style={{
          backgroundColor: "#2F2D30",
          borderRadius: 14,
          paddingVertical: 4,
          flexDirection: "row",
          paddingHorizontal: 14,
          alignItems: "center",
          borderWidth: 1,
          borderColor: focused ? "#6B6870" : "transparent",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 8,
          gap: 10,
        }}
      >
        <Lucide
          name="search"
          color={focused ? "#E5E5E7" : "#9ca3af"}
          size={18}
        />
        <TextInput
          value={query}
          onChangeText={setQuery}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="Explore More Movies..."
          placeholderTextColor={"#9ca3af"}
          returnKeyType="search"
          autoCorrect={false}
          selectionColor="#ffffff"
          style={{ flex: 1, fontSize: 16, color: "#fff", paddingVertical: 10 }}
        />
        {query.length > 0 && (
          <Pressable
            onPress={() => setQuery("")}
            hitSlop={12}
            accessibilityLabel="Clear search"
          >
            <Lucide name="x" color="#9ca3af" size={18} />
          </Pressable>
        )}
      </View>
      {/* TEXT INPUT SECTION ENDS HERE */}

      {/* MOVIE TYPE SECTION STARTS HERE */}
      <View
        style={{
          paddingTop: 18,
          paddingBottom: 12,
          flexDirection: "row",
          gap: 24,
        }}
      >
        {Genres.map((genre) => {
          const active = genre === activeGenre;
          return (
            <Pressable
              key={genre}
              onPress={() => setActiveGenre(genre)}
              hitSlop={8}
              style={{ paddingBottom: 6 }}
            >
              <Text
                className={`text-[22px] ${
                  active
                    ? "text-white font-semibold"
                    : "text-[#8F8D90] font-normal"
                }`}
              >
                {genre}
              </Text>
              {/* underline indicator marks the selected genre */}
              <View
                style={{
                  height: 3,
                  marginTop: 4,
                  borderRadius: 2,
                  backgroundColor: active ? "#fff" : "transparent",
                }}
              />
            </Pressable>
          );
        })}
      </View>
      {/* MOVIE TYPE SECTION ENDS HERE */}

      {/* TABS SECTION STARTS HERE */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0, flexShrink: 0 }}
        contentContainerStyle={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          paddingRight: 16,
          paddingVertical: 2,
        }}
      >
        {Tabs.map((movieTab, index) => {
          const active = movieTab.TabName === activeTab;
          return (
            <Pressable
              key={index}
              onPress={() => setActiveTab(movieTab.TabName)}
              style={({ pressed }) => ({ opacity: pressed ? 0.7 : 1 })}
            >
              {/* background + padding live on the View so the text never gets clipped */}
              <View
                style={{
                  backgroundColor: active ? "#FFFFFF" : "#232124",
                  paddingHorizontal: 16,
                  paddingVertical: 9,
                  borderRadius: 999,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 15,
                    lineHeight: 20,
                    fontWeight: active ? "600" : "400",
                    color: active ? "#000000" : "#8F8D90",
                  }}
                >
                  {movieTab.TabName}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </ScrollView>
      {/* TABS SECTION ENDS HERE */}

      {/* EXPLORE MOVIES CARDS SECTIONS STARTS HERE */}
      <FlatList
        data={movies}
        numColumns={2}
        keyExtractor={(item, index) =>
          item ? item.MovieTitle : `spacer-${index}`
        }
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        style={{ marginTop: 20 }}
        contentContainerStyle={{ paddingBottom: 120 }}
        ListEmptyComponent={null}
        ListHeaderComponent={
          !hasResults ? (
            <View style={{ alignItems: "center", paddingVertical: 48, gap: 8 }}>
              <Lucide name="film" color="#8F8D90" size={32} />
              <Text className="text-white text-[16px] font-semibold">
                No movies found
              </Text>
              <Text className="text-[#8F8D90] text-[14px] text-center">
                Nothing matches "{query}". Try a different title.
              </Text>
            </View>
          ) : null
        }
        renderItem={({ item: movies }) =>
          movies ? (
            <TouchableOpacity
              activeOpacity={0.8}
              className="flex-1 px-1.5 pb-4"
            >
              <View className="rounded-2xl overflow-hidden bg-[#1D1D1D]">
                <Image
                  source={movies.Image}
                  resizeMode="cover"
                  className="w-full h-[250px]"
                />
                <View className="px-3 py-3 gap-2">
                  <Text
                    numberOfLines={1}
                    className="text-white text-[15px] font-semibold"
                  >
                    {movies.MovieTitle}
                  </Text>
                  <Text className="text-[#C9C7CB] text-[12px] bg-[#3A383B] px-2.5 py-1 rounded-full self-start overflow-hidden">
                    {movies.MovieType}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ) : (
            <View className="flex-1 px-1.5 pb-4" />
          )
        }
      />

      {/* EXPLORE MOVIES CARDS SECTIONS ENDS HERE */}
    </AppShell>
  );
};

export default explore;
