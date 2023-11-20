module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    // Đường dẫn đến các tệp chứa mã nguồn để Tailwind quét và tạo CSS.
  ],
  theme: {
    extend: {
      colors: {
        'toma-primary-color': '#fed447'
      },

      backgroundImage: () => ({
        'toma-primary-gradient': 'linear-gradient(190deg, #FDED4F 0%, #FFB649 100%)'
      }),
    },
    fontFamily: {
      sans: ['Roboto'],
    }
    // Tùy chọn tùy chỉnh cho hệ thống thiết kế của bạn.
  },
  plugins: [
    // Các plugin của bên thứ ba có thể được thêm vào đây.
  ],
};
