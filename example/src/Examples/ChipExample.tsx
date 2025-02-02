import * as React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Chip, List, withTheme, Theme } from 'react-native-paper';
import color from 'color';

type Props = {
  theme: Theme;
};

class ChipExample extends React.Component<Props> {
  static title = 'Chip';

  render() {
    const { colors } = this.props.theme;

    return (
      <ScrollView
        style={[styles.container, { backgroundColor: colors.surface }]}
      >
        <List.Section title="Flat chip">
          <View style={styles.row}>
            <Chip
              mode="outlined"
              selected
              onPress={() => {}}
              style={styles.chip}
            >
              Simple
            </Chip>
            <Chip onPress={() => {}} onClose={() => {}} style={styles.chip}>
              Close button
            </Chip>
            <Chip
              icon="favorite"
              onPress={() => {}}
              onClose={() => {}}
              style={styles.chip}
            >
              Icon
            </Chip>
            <Chip
              avatar={
                <Image source={require('../../assets/images/avatar.png')} />
              }
              onPress={() => {}}
              onClose={() => {}}
              style={styles.chip}
            >
              Avatar
            </Chip>
            <Chip
              selected
              avatar={
                <Image source={require('../../assets/images/avatar.png')} />
              }
              onPress={() => {}}
              style={styles.chip}
            >
              Avatar (selected)
            </Chip>
            <Chip
              disabled
              icon="favorite"
              onClose={() => {}}
              style={styles.chip}
            >
              Icon (disabled)
            </Chip>
            <Chip
              disabled
              avatar={
                <Image source={require('../../assets/images/avatar.png')} />
              }
              style={styles.chip}
            >
              Avatar (disabled)
            </Chip>
          </View>
        </List.Section>
        <List.Section title="Outlined chip">
          <View style={styles.row}>
            <Chip mode="outlined" onPress={() => {}} style={styles.chip}>
              Simple
            </Chip>
            <Chip
              mode="outlined"
              onPress={() => {}}
              onClose={() => {}}
              style={styles.chip}
            >
              Close button
            </Chip>
            <Chip
              mode="outlined"
              icon="favorite"
              onPress={() => {}}
              onClose={() => {}}
              style={styles.chip}
            >
              Icon
            </Chip>
            <Chip
              mode="outlined"
              avatar={
                <Image source={require('../../assets/images/avatar.png')} />
              }
              onPress={() => {}}
              style={styles.chip}
            >
              Avatar
            </Chip>
            <Chip
              selected
              mode="outlined"
              avatar={
                <Image source={require('../../assets/images/avatar.png')} />
              }
              onPress={() => {}}
              style={styles.chip}
            >
              Avatar (selected)
            </Chip>
            <Chip
              disabled
              mode="outlined"
              icon="favorite"
              onClose={() => {}}
              style={styles.chip}
            >
              Icon (disabled)
            </Chip>
            <Chip
              disabled
              mode="outlined"
              avatar={
                <Image source={require('../../assets/images/avatar.png')} />
              }
              style={styles.chip}
            >
              Avatar (disabled)
            </Chip>
          </View>
        </List.Section>
        <List.Section title="Custom chip">
          <View style={styles.row}>
            <Chip
              selected
              onPress={() => {}}
              style={[
                styles.chip,
                {
                  backgroundColor: color(colors.primary)
                    .alpha(0.2)
                    .rgb()
                    .string(),
                },
              ]}
              selectedColor={colors.primary}
            >
              Flat selected chip with custom color
            </Chip>
            <Chip
              onPress={() => {}}
              style={styles.chip}
              selectedColor={colors.primary}
            >
              Flat unselected chip with custom color
            </Chip>
            <Chip
              selected
              mode="outlined"
              onPress={() => {}}
              style={[
                styles.chip,
                {
                  backgroundColor: color(colors.primary)
                    .alpha(0.2)
                    .rgb()
                    .string(),
                },
              ]}
              selectedColor={colors.primary}
            >
              Outlined selected chip with custom color
            </Chip>
            <Chip
              mode="outlined"
              onPress={() => {}}
              style={styles.chip}
              selectedColor={colors.primary}
            >
              Outlined unselected chip with custom color
            </Chip>
            <Chip
              onPress={() => {}}
              style={styles.chip}
              textStyle={styles.tiny}
            >
              With custom size
            </Chip>
          </View>
        </List.Section>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
  },
  chip: {
    margin: 4,
  },
  tiny: {
    marginVertical: 2,
    marginRight: 2,
    marginLeft: 2,
    minHeight: 19,
    lineHeight: 19,
  },
});

export default withTheme(ChipExample);
