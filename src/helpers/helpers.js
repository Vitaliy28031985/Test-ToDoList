export const helpers = {
  count: 0,

  handleToggle(setToggle) {
    setToggle((toggle) => !toggle);
  },

  counter() {
    this.count += 1;
    return this.count;
  },
};
