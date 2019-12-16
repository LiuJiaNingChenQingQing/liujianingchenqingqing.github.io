module.exports = {
    title: 'java notebook',
    description: '任你查',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        repo: 'https://github.com/LiuJiaNingChenQingQing/liujianingchenqingqing.github.io',
        //导航
        nav: [
            { text: 'Java速查', link: '/1.quickcheck/' },
            { text: 'Java体系', link: '/2.note/' },
            
        ],
        // 侧边栏
        sidebar: {
            
            '/1.quickcheck': [
                {
                    title: '1.java方法',
                    
                    children: [
                        '1.quickcheck/1.java方法/1.java常用方法.md',
                            '1.quickcheck/1.java方法/2.java.md',
                            '1.quickcheck/1.java方法/3.java_Mybatis.md',
                            '1.quickcheck/1.java方法/4.spring.md',
                            '1.quickcheck/1.java方法/5.java三大特性.md',
                            '1.quickcheck/1.java方法/6.java文件上传.md',
                            '1.quickcheck/1.java方法/7.MD5加密解密.md',
                            '1.quickcheck/1.java方法/8.Spring+Quartz实现动态添加定时任务.md',
                            
                    ]
                },
                {
                    title: '2.MySQL方法',
                    
                    children: [
                        '1.quickcheck/2.MySQL方法/1.MySQL基础方法速查.md',
                            
                    ]
                },
                {
                    title: '3.linux方法',
                    
                    children: [
                        '1.quickcheck/3.linux方法/1.linux常见命令.md',
                            
                    ]
                },
                {
                    title: '4.html常用的方法',
                    
                    children: [
                        '1.quickcheck/4.html常用的方法/1.input常用方法.md',
                            '1.quickcheck/4.html常用的方法/2.js常用方法.md',
                            
                    ]
                },
                
            ],
        
            '/2.note': [
                {
                    title: '1.javaSE',
                    
                    children: [
                        '2.note/1.javaSE/1.基础1.md',
                            '2.note/1.javaSE/2.基础2.md',
                            '2.note/1.javaSE/3.基础3_String.md',
                            
                    ]
                },
                {
                    title: '2.java轻量级框架',
                    
                    children: [
                        '2.note/2.java轻量级框架/1.spring轻量级框架.md',
                            
                    ]
                },
                
            ],
        
        }
    },
    serviceWorker: true,
    markdown: {
        lineNumbers: false // 开启行号
    },
    plugins: [
        '',
    ],
}