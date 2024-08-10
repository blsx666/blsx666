'use strict';
var vm = new Vue({
    data: {
        patterns: [{
            ERP物料代码: '123123123000 \n如同每个人都有\n一个身份证号码,\n这是该物料在使用工厂\n的内部身份证号.',
            物料分类: '见如下行示例',
            物料子类: '见如下行示例',
            中文名称: '中文商品全称,核对和包装,\nsds第1.1节的保持一致.',
            英文名称: '英文商品全称.\n为什么呢? 因为目前\n认证基本都是国外的,\n以英文全称来认证.',
            生产厂家中文全称: '生产该物料的工厂中文全称',
            生产厂家英文全称: '生产该物料的工厂英文全称\n为什么呢?因为目前认证基本都是国外的,\n以英文全称来认证.',
            联系方式: '生产工厂地址',
            联系电话: '生产工厂\n业务员电话\n注:仅供内部使用\n体现管理细节',
            联系人: '生产工厂\n业务员姓名\n注:仅供内部使用\n体现管理细节',
            走代理: '如通过\n代理购\n买则Y',
            代理商公司全称: '代理公司全称中文\n英文皆可',
            代理起始日期: '授权开始日期',
            代理到期日期: '授权结束日期',
            代理商联系方式: '代理公司\n地址\n注:仅供内部使用\n体现管理细节',
            代理商联系电话: '代理公司\n业务员电话\n注:仅供内部使用\n体现管理细节',
            代理商联系人: '代理公司\n业务员姓名\n注:仅供内部使用\n体现管理细节',
            SDS中文版编制日期: '可选',
            SDS中文版修订日期: '中文简体版本\n必填.少于3年\n因GBZ 2.1-2019\n于20200401生效.\n即国标有更新,sds\n应20200401前后修订.',
            下次索要日期: '用于sds管理\n及时向供应商\n索要3年内编\n制或修订的版本',
            与SDS一致: '核对物料全称\n是否和sds一致',
            与标签一致: '核对物料全称\n是否和包装一致',
            SDS英文版修订日期: '可选\n有外籍员工和\n认证时备用',
            TDS中文版: '中文简体版本\n必填.',
            TDS英文版: '可选\n有外籍员工和\n认证时备用',
            危险化学品: '来自sds第二部分',
            紧急情况概述: '来自sds第二部分',
            信号词: '来自sds第2.2节',
            GHS分类: '来自sds第2.1节',
            爆炸弹: '来自sds第2.2节',
            火焰: '来自sds第2.2节',
            圆圈上方火焰: '来自sds第2.2节',
            高压气瓶: '来自sds第2.2节',
            腐蚀: '来自sds第2.2节',
            骷髅和交叉骨: '来自sds第2.2节',
            感叹号: '来自sds第2.2节',
            健康危害: '来自sds第2.2节',
            环境危害: '来自sds第2.2节',
            GHS健康危害: '来自sds第2.3节',
            GHS物理危害: '来自sds第2.4节',
            GHS环境危害: '来自sds第2.5节。',
            GHS预防措施: '来自sds第2.2节',
            GHS事故响应: '来自sds第2.2节',
            GHS存储: '来自sds第2.2节',
            GHS废弃处置: '来自sds第2.2节',
            洗眼器: '来自sds第4部分',
            淋浴器: '来自sds第4部分',
            防护眼镜: '来自sds第8部分',
            防毒面具: '来自sds第8部分',
            防护手套: '来自sds第8部分',
            防护服: '来自sds第8部分',
            通风: '来自sds第8部分',
            防尘口罩: '来自sds第8部分',
            危险组分: '来自sds第3部分',
            职业危害物质: '化学物质来自\nsds第8部分. \n粉尘来自\nGBZ 2.1-2019表2',
            GBZ212019: '来自GBZ 2.1-2019',
            职业接触限值: '来自sds第8部分',
        }, {
            ERP物料代码: '123123123002',
            物料分类: '合成染料',
            物料子类: '分散染料',
            中文名称: '龙盛牌分散红EE 300%',
            英文名称: 'Lonsperse Red EE 300%',
            生产厂家中文全称: '浙江龙盛分散染料化工有限公司',
            生产厂家英文全称: 'Zhejiang Longsheng Disperse Dyes Chemical Co., Ltd.',
            联系方式: '',
            联系电话: '',
            联系人: '',
            走代理: 'N',
            代理商公司全称: '',
            代理起始日期: '',
            代理到期日期: '',
            代理商联系方式: '',
            代理商联系电话: '',
            代理商联系人: '',
            SDS中文版编制日期: '20060606',
            SDS中文版修订日期: '20210301',
            下次索要日期: '20240101',
            与SDS一致: 'Y',
            与标签一致: 'Y',
            SDS英文版修订日期: '20210301',
            TDS中文版: '染料色卡',
            TDS英文版: '无',
            危险化学品: 'N',
            紧急情况概述: '',
            信号词: '',
            GHS分类: '',
            爆炸弹: '',
            火焰: '',
            圆圈上方火焰: '',
            高压气瓶: '',
            腐蚀: '',
            骷髅和交叉骨: '',
            感叹号: '',
            健康危害: '',
            环境危害: '',
            GHS健康危害: '',
            GHS物理危害: '',
            GHS环境危害: '',
            GHS预防措施: '',
            GHS事故响应: '',
            GHS存储: '',
            GHS废弃处置: '',
            洗眼器: '',
            淋浴器: '',
            防护眼镜: '',
            防毒面具: '',
            防护手套: '',
            防护服: '',
            通风: 'Y',
            防尘口罩: 'Y',
            危险组分: 'N',
            职业危害物质: '其他粉尘',
            GBZ212019: '表2 49',
            职业接触限值: 'PC-TWA 总尘 8',
        }, {
            ERP物料代码: '123123123001',
            物料分类: '基础化工',
            物料子类: '酸',
            中文名称: '醋酸88%',
            英文名称: 'Acetic Acid 88%',
            生产厂家中文全称: '江南醋酸化工有限公司',
            生产厂家英文全称: 'Jiangnan Acetic Acid Chemical Co., Ltd.',
            联系方式: '填写生产工厂地址',
            联系电话: '填写业务员电话',
            联系人: '填写业务员姓名',
            走代理: 'Y',
            代理商公司全称: '中文英文皆可',
            代理起始日期: '20220101',
            代理到期日期: '20221231',
            代理商联系方式: '',
            代理商联系电话: '',
            代理商联系人: '',
            SDS中文版编制日期: '',
            SDS中文版修订日期: '',
            下次索要日期: '',
            与SDS一致: '',
            与标签一致: '',
            SDS英文版修订日期: '',
            TDS中文版: '',
            TDS英文版: '',
            危险化学品: 'Y',
            紧急情况概述: '无色恶心的液体.\n易燃液体和蒸气.\n吞咽可能有害.\n造成严重皮肤灼伤和眼损伤.\n急救人员需自我保护.\n向到现场的医生出示sds.',
            信号词: '危险',
            GHS分类: '易燃液体 (类别 3), H226 \n急性毒性, 经口 (类别 5), H303 \n皮肤腐蚀/刺激 (类别 1A), H314 \n严重眼睛损伤/眼睛刺激性 (类别 1), H318 ',
            爆炸弹: '',
            火焰: 'Y',
            圆圈上方火焰: '',
            高压气瓶: '',
            腐蚀: 'Y',
            骷髅和交叉骨: '',
            感叹号: '',
            健康危害: '',
            环境危害: '',
            GHS健康危害: 'H303  吞咽可能有害。\nH314  造成严重皮肤灼伤和眼损伤。\nH318  造成严重眼损伤。',
            GHS物理危害: 'H226  易燃液体和蒸气。',
            GHS环境危害: '目前掌握信息，没有环境的危害。',
            GHS预防措施: 'P210  远离热源/火花/明火/热表面。禁止吸烟。\nP233  保持容器密闭。\nP240  容器和装载设备接地/等势联接。\nP241  使用防爆的电气/通风/照明设备。\nP242  只能使用不产生火花的工具。\nP243  采取防止静电放电的措施。\nP264  作业后彻底清洗皮肤。\nP280  戴防护手套/穿防护服/戴防护眼罩/戴防护面具。',
            GHS事故响应: 'P301 + P330 + P331  如误吞咽：漱口。不要诱导呕吐。\nP303 + P361 + P353  如皮肤（或头发）沾染：立即脱掉所有沾污的衣物。用水清洗皮肤/淋浴。\nP304 + P340 + P310  如误吸入：将人转移到空气新鲜处，保持呼吸舒适体位。立即呼叫急救中心/医生。\nP305 + P351 + P338 + P310  如进入眼睛：用水小心冲洗几分钟。如戴隐形眼镜并可方便地取出，取出隐形眼镜。继续冲洗。立即呼叫急救中心/医生。\nP312  如感觉不适，呼叫急救中心/医生。\nP363  沾染的衣服清洗后方可重新使用。\nP370 + P378  火灾时：使用干砂、干粉或抗醇泡沫灭火。',
            GHS存储: 'P403 + P235  存放在通风良好的地方，保持低温。\nP405  存放处须加锁。',
            GHS废弃处置: 'P501  将内装物/容器送到批准的废物处理厂处理。',
            洗眼器: 'Y',
            淋浴器: 'Y',
            防护眼镜: 'Y',
            防毒面具: 'Y',
            防护手套: 'Y',
            防护服: 'Y',
            通风: 'Y',
            防尘口罩: 'N',
            危险组分: '醋酸',
            职业危害物质: '醋酸',
            GBZ212019: '表1 327',
            职业接触限值: 'PC-TWA 10, PC-STEL 20',
        }],
        currentPage: 1,
        elementsPerPage: 10,
        ascending: false,
        sortColumn: '',
        isGHS01: 'none',
        isGHS02: 'none',
        isGHS03: 'none',
        isGHS04: 'none',
        isGHS05: 'none',
        isGHS06: 'none',
        isGHS07: 'none',
        isGHS08: 'none',
        isGHS09: 'none',
        isEyeProtection: 'none',
        isFaceProtection: 'none',
        isHandProtection: 'none',
        isBodyProtection: 'none',
        isVentilation: 'none',
        gyp爆炸弹: null,
        gyp火焰: null,
        gyp圆圈上方火焰: null,
        gyp高压气瓶: null,
        gyp腐蚀: null,
        gyp骷髅和交叉骨: null,
        gyp感叹号: null,
        gyp健康危害: null,
        gyp环境危害: null,
        gyp防护眼镜: null,
        gyp防毒面具: null,
        gyp防护手套: null,
        gyp防护服: null,
        gyp通风: null,
        gyp防尘口罩: null,
        selectedPattern: null
    },

    filters: {
        lineBreak: function(data) {
            // return data.replace('<br>', '\n');
            // return data.replaceAll(" ", "&nbsp;").replaceAll('<br>', '\n')
            // return data.replaceAll('Y', '<img src="../image/heat stress.png" style="width:88% ">')

        }
    },

    computed: {
        // modalStyle: function modalStyle() {
        //     return {
        //         backgroundColor: this.modal.bgColor,
        //         backgroundImage: this.bgPattern(this.selectedPattern, this.modal.fgColor, this.modal.opacity)
        //     };
        // },
        // css: function css(pattern) {
        //     return ('background-color: ' + this.modal.bgColor + ';\nbackground-image: ' + this.bgPattern(this.selectedPattern, this.modal.fgColor, this.modal.opacity) + ';').trim();
        // },
        "columns": function columns() {
            if (this.patterns.length == 0) {
                return [];
            }
            return Object.keys(this.patterns[0])
        }
    },
    methods: {
        reset: function reset() {
            this.modal.fgColor = this.fgColor;
            this.modal.bgColor = this.bgColor;
            this.modal.opacity = this.opacity;
            $(vm.$els.modalFgColor).spectrum("set", this.fgColor);
            $(vm.$els.modalBgColor).spectrum("set", this.bgColor);
        },
        selectPattern: function selectPattern(pattern) {
            this.selectedPattern = pattern;
            if (pattern.爆炸弹 === 'Y') {
                pattern.gyp爆炸弹 = '../image/explos.gif';
                this.isGHS01 = 'block'
            } else {
                this.isGHS01 = 'none'
            }
            if (pattern.火焰 === 'Y') {
                pattern.gyp火焰 = '../image/flamme.gif';
                this.isGHS02 = 'block'
            } else {
                this.isGHS02 = 'none'
            }
            if (pattern.圆圈上方火焰 === 'Y') {
                pattern.gyp圆圈上方火焰 = '../image/rondflam.gif';
                this.isGHS03 = 'block'
            } else {
                this.isGHS03 = 'none'
            }
            if (pattern.高压气体 === 'Y') {
                pattern.gyp高压气体 = '../image/bottle.gif';
                this.isGHS04 = 'block'
            } else {
                this.isGHS04 = 'none'
            }

            if (pattern.腐蚀 === 'Y') {
                pattern.gyp腐蚀 = '../image/acid_red.gif';
                this.isGHS05 = 'block'
            } else {
                this.isGHS05 = 'none'
            }
            if (pattern.骷髅和交叉骨 === 'Y') {
                pattern.gyp骷髅和交叉骨 = '../image/skull.gif';
                this.isGHS06 = 'block'
            } else {
                this.isGHS06 = 'none'
            }
            if (pattern.感叹号 === 'Y') {
                pattern.gyp感叹号 = '../image/exclam.gif';
                this.isGHS07 = 'block'
            } else {
                this.isGHS07 = 'none'
            }

            if (pattern.健康危害 === 'Y') {
                pattern.gyp健康危害 = '../image/silhouete.gif';
                this.isGHS08 = 'block'
            } else {
                this.isGHS08 = 'none'
            }
            if (pattern.环境危害 === 'Y') {
                pattern.gyp环境危害 = '../image/Aquatic-pollut-red.gif';
                this.isGHS09 = 'block'
            } else {
                this.isGHS09 = 'none'
            }

            if (pattern.防护眼镜 === 'Y') {
                pattern.gyp防护眼镜 = '../image/eyeprotection.svg';
                this.isEyeProtection = 'block'
            } else {
                this.isEyeProtection = 'none'
            }

            if (pattern.防毒面具 === 'Y') {
                pattern.gyp防毒面具 = '../image/faceprotection.svg';
                this.isFaceProtection = 'block'
            } else {
                this.isFaceProtection = 'none'
            }
            if (pattern.防护手套 === 'Y') {
                pattern.gyp防护手套 = '../image/handprotection.svg';
                this.isHandProtection = 'block'
            } else {
                this.isHandProtection = 'none'
            }
            if (pattern.防护服 === 'Y') {
                pattern.gyp防护服 = '../image/bodyprotection.svg';
                this.isBodyProtection = 'block'
            } else {
                this.isBodyProtection = 'none'
            }
            if (pattern.通风 === 'Y') {
                pattern.gyp通风 = '../image/ventilation.svg';
                this.isVentilation = 'block'
            } else {
                this.isVentilation = 'none'
            }

            // this.reset();
        },
        // style: function style(pattern) {
        //     return {
        //         backgroundColor: this.bgColor,
        //         backgroundImage: this.bgPattern(pattern, this.fgColor, this.opacity)
        //     };
        // },
        // bgPattern: function bgPattern(pattern, fgColor, opacity) {
        //     var svg = pattern.image.replace('fill="#000"', 'fill="' + fgColor + '" fill-opacity="' + opacity + '"').replace(/\"/g, '\'').replace(/\</g, '%3C').replace(/\>/g, '%3E').replace(/\&/g, '%26').replace(/\#/g, '%23');
        //     return 'url("data:image/svg+xml,' + svg + '")';
        // },
        "sortTable": function sortTable(col) {
            if (this.sortColumn === col) {
                this.ascending = !this.ascending;
            } else {
                this.ascending = true;
                this.sortColumn = col;
            }

            var ascending = this.ascending;

            this.patterns.sort(function(a, b) {
                if (a[col] > b[col]) {
                    return ascending ? 1 : -1
                } else if (a[col] < b[col]) {
                    return ascending ? -1 : 1
                }
                return 0;
            })
        },
        "num_pages": function num_pages() {
            return Math.ceil(this.patterns.length / this.elementsPerPage);
        },
        "get_rows": function get_rows() {
            var start = (this.currentPage - 1) * this.elementsPerPage;
            var end = start + this.elementsPerPage;
            return this.patterns.slice(start, end);
        },
        "change_page": function change_page(page) {
            this.currentPage = page;
        }
    },
    created: function created() {
            this.selectedPattern = this.patterns[0];
        }
        // ready: function ready() {
        //     $(vm.$els.modalFgColor).spectrum({
        //         appendTo: '#mymodal',
        //         showInput: true,
        //         preferredFormat: "hex",
        //         replacerClassName: 'color-input-swatch',
        //         clickoutFiresChange: true,
        //         color: vm.modal.fgColor,
        //         move: function move(color) {
        //             vm.modal.fgColor = color.toHexString();
        //         },
        //         change: function change(color) {
        //             vm.modal.fgColor = color.toHexString();
        //         }
        //     });

    //     $(vm.$els.modalBgColor).spectrum({
    //         appendTo: '#mymodal',
    //         showInput: true,
    //         preferredFormat: "hex",
    //         replacerClassName: 'color-input-swatch',
    //         clickoutFiresChange: true,
    //         color: vm.modal.bgColor,
    //         move: function move(color) {
    //             vm.modal.bgColor = color.toHexString();
    //         },
    //         change: function change(color) {
    //             vm.modal.bgColor = color.toHexString();
    //         }
    //     });
    // }
});

vm.$mount('#app');