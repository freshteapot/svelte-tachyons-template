
let production = !process.env.ROLLUP_WATCH;
const purgeCss = require("@fullhuman/postcss-purgecss")({
    content: ["./src/**/*.svelte"],
    whitelistPatterns: [/svelte-/, /fa-icon/],
    //defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    defaultExtractor: content => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
    ],
})

module.exports = {
    plugins: [
        require("postcss-import")(),
        //require("autoprefixer"),
        // Only purge css on production
        purgeCss
    ]
};
