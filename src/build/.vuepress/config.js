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
                            
                    ]
                },
                {
                    title: '2.MySQL方法',
                    
                    children: [
                        '1.quickcheck/2.MySQL方法/1.MySQL基础方法速查.md',
                            
                    ]
                },
                
            ],
        
            '/2.note': [
                {
                    title: '1.javaSE',
                    
                    children: [
                        '2.note/1.javaSE/1.基础.md',
                            
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