export interface UserModel {
  userId: string;
  nickname: string;
  token: string;
}

const sessionUser = localStorage.getItem(globalConfig.SESSION_LOGIN_INFO)
  ? JSON.parse(localStorage.getItem(globalConfig.SESSION_LOGIN_INFO)!)
  : undefined;

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: sessionUser?.userInfo as UserModel | null,
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem(
        globalConfig.SESSION_LOGIN_INFO,
        JSON.stringify(state)
      );
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem(globalConfig.SESSION_LOGIN_INFO);
      // TODO: 登出跳转
    },
  },
});

export const { setUserInfo, logout } = userSlice.actions;
export default userSlice.reducer;
