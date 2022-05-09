
const path = require('path');

module.exports = {
    
    // Arquivo de entrada onde o Javascript for criado
    entry:'./src/index.js',
    
    // Arquivo(s) de saída que será linkado ao "index.html" no diretório "dist"
    output:{
        filename:'script.js',
        path: path.resolve(__dirname, 'dist')
    },
    //mode:'production' >> mais leve
    mode:'development',
    module: {
        rules: 
        [
            // Regra 1 - Css
            { test:/\.css$/, use:['style-loader', 'css-loader']},
            // Regra 2 - Sass
            {test:/\.scss$/, use:['style-loader', 'css-loader', 'sass-loader']}
        ]
    }
};