export const colors = {
  primary: '#61199E',
  primaryLight: '#7B2EB8',
  primaryDark: '#4A1278',
  secondary: '#212020',
  tertiary: '#FAF7FF',
  text: '#212020',
  textLight: '#666666',
  textInverse: '#FAF7FF',
}

export const antdTheme = {
  token: {
    colorPrimary: colors.primary,
    colorBgContainer: colors.tertiary,
    colorText: colors.text,
    colorTextSecondary: colors.textLight,
    fontFamily: "'DM Sans', sans-serif",
    borderRadius: 8,
  },
  components: {
    Button: {
      controlHeight: 44,
      fontWeight: 500,
    },
    Input: {
      controlHeight: 44,
    },
  },
}
