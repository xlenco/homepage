// 存储 nuxt.config 和 app.config 共用的配置

const author = {
    name: 'Xlenco',
    avatar: 'https://q.qlogo.cn/headimg_dl?dst_uin=1043865083&spec=640&img_type=webp',
    email: 'xlenco@hotmail.com',
    homepage: 'https://xlenco.top',
}

export default {
    title: 'Xlenco',
    description: '总有人间一两风，吹我十万八千梦。',
    author,
    language: 'zh-CN',
    timezone: 'Asia/Shanghai',
    favicon: 'https://q1.qlogo.cn/g?b=qq&nk=1043865083&s=100',
    url: 'https://xlenco.top',
    blogAtom: 'https://blog.xlenco.top/atom.xml',
    footer: {
        copyright: `© ${new Date().getFullYear()} xlenco`,
        message: 'aka Xlenco',
    },
    imageDomains: [
        'blog.xlenco.top',
        // '7.isyangs.cn',
    ],
    injectHeadLinks: [
        // { rel: 'stylesheet', href: '//s1.hdslb.com/bfs/static/jinkela/long/font/medium.css', media: 'none', onload: 'this.media="all"' },
    ],
    nav: <NavGroup[]> [
        {
            title: '',
            list: [
                { icon: 'ph:house-duotone', title: '主页', link: '/' },
                { icon: 'ph:pen-nib-duotone', title: '文章', link: '/article' },
                // { icon: "ph:pen-nib-duotone", title: "文章", link: "https://blog.zhilu.cyou", external: true },
                // { icon: "ph:code-duotone", title: "项目", link: "/project" },
                // { icon: 'ph:code-duotone', title: '项目', link: 'https://github.com/L33Z22L11/#user-33976233-pinned-items-reorder-form', external: true },
                // { icon: 'ph:globe-duotone', title: '站点', link: '/site' },
                // { icon: 'ph:files-duotone', title: '日志', link: '/log' },
            ],
        },
        {
            title: '社交',
            list: [
                // { icon: 'ri:qq-fill', title: '群: 169994096', link: 'https://jq.qq.com/?_wv=1027&k=lQfNSeEd', external: true },
                { icon: 'ph:github-logo-duotone', title: 'Github', link: 'https://github.com/xlenco', external: true },
                // { icon: 'ph:telegram-logo-duotone', title: 'Telegram', link: 'https://t.me/L33Z22L11', external: true },
            ],
        },
    ],
}
