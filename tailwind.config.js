module.exports = {
    purge: {
        enabled: !process.env.ROLLUP_WATCH,
        content: ["./public/index.html", "./src/**/*.svelte"],
        options: {defaultExtractor: e => [...e.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [], ...e.match(/(?<=class:)[^=>\/\s]*/g) || []]}
    }, darkMode: !1, theme: {extend: {}}, variants: {extend: {}}, plugins: []
};
