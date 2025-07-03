const sessionTheme = localStorage.getItem(globalConfig.SESSION_LOGIN_THEME)
  ? JSON.parse(localStorage.getItem(globalConfig.SESSION_LOGIN_THEME)!)
  : undefined;
const initTheme = sessionTheme ? sessionTheme : globalConfig.initTheme;

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    dark: initTheme.dark as boolean,
    colorPrimary: initTheme.colorPrimary as string | null,
  },
  reducers: {
    setDark: (state, action) => {
      state.dark = action.payload;
      localStorage.setItem(
        globalConfig.SESSION_LOGIN_THEME,
        JSON.stringify(state)
      );
    },
    setColorPrimary: (state, action) => {
      state.colorPrimary = action.payload;
      localStorage.setItem(
        globalConfig.SESSION_LOGIN_THEME,
        JSON.stringify(state)
      );
    },
  },
});

export const { setDark, setColorPrimary } = themeSlice.actions;
export default themeSlice.reducer;
