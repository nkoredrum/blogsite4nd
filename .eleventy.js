module.exports = function(eleventyConfig) {
    // Copy assets directly to output
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/admin");
    
    // Watch for changes in assets
    eleventyConfig.addWatchTarget("./src/assets/");
    
    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
            layouts: "_layouts"
        },
        templateFormats: ["njk", "md", "html"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
}; 