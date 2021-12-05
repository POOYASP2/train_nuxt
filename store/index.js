export const state = () => ({
  links: [
    {
      name: 'خانه',
      id: 'index',
    },
    {
      name: 'درباره ما',
      id: 'aboutus',
    },
    {
      name: 'سرویس‌ها',
      id: 'services',
    },
    {
      name: 'اخبار',
      id: 'news',
    },
  ],
  users: [],
})
export const mutations = {
  updateUsers: (state, data) => {
    state.users = data
  },
}
export const actions = {
  async getUsers({ commit, state }) {
    // if (state.users.length) return
    try {
      const res = await this.$axios.$get('https://jsonplaceholder.ir/users')
      commit('updateUsers', res)
    } catch (err) {
      console.error(err)
    }
  },
}
