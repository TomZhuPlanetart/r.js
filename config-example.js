requirejs.config({
    basesUrl: 'js',
    // 这里面的路径是相对于baseUrl的
    // 除非
    //  * 路径中包含协议，如: 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min'
    //  * 路径中包含.js后缀，如: 'jquery.min.js'
    paths: {
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min',
    },
    // 这个key是一些前缀
    // 当这些模块加载map里面key的模块时，会使用map里面value的模块
    // 例如: newModule里面的模块加载jquery时，会使用jquery-1.7.2.min
    // 例如: oldModule里面的模块加载jquery时，会使用jquery-1.2.6.min
    maps: {
        '*': {
            'jquery': 'jquery-2.min'
        },
        'newModule': {
            'jquery': 'jquery-1.7.2.min'
        },
        'oldModule': {
            'jquery': 'jquery-1.2.6.min'
        }
    },
    // 
    bundles: {
        'bundle': ['jquery']
    }
});