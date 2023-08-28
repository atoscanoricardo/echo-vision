/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: [{
                echo: {
                  primary: "#1FACE3",
                  secondary: "#FCC400",
                  accent: "#E5007E",
                  neutral: "#999",
                  info: "#28B4B7",
                  success: "#83C17D",
                  warning: "#F49929",
                  error: "#E7404E",
                },
              },
              "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", 
              "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", 
              "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", 
              "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", 
              "night", "coffee", "winter"
            ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: ""
  },
}

