// ==================== 印花数据在这里录入 ====================
// 将表格数据转换为JSON格式
const stampData = [
    {"nickname": "peach", "prev_round_stamps": 80, "current_round_earned": 87, "current_round_used": 0, "current_round_remaining": 167},
    {"nickname": "lucas", "prev_round_stamps": 82, "current_round_earned": 27, "current_round_used": 0, "current_round_remaining": 109},
    {"nickname": "啵啵", "prev_round_stamps": 70, "current_round_earned": 17, "current_round_used": 0, "current_round_remaining": 87},
    {"nickname": "pa寶", "prev_round_stamps": 63, "current_round_earned": 13, "current_round_used": 0, "current_round_remaining": 76},
    {"nickname": "路人甲乙丙丁", "prev_round_stamps": 29, "current_round_earned": 16, "current_round_used": 0, "current_round_remaining": 45},
    {"nickname": "小咩不乖", "prev_round_stamps": 25, "current_round_earned": 18, "current_round_used": 0, "current_round_remaining": 43},
    {"nickname": "狂戀苦艾", "prev_round_stamps": 1, "current_round_earned": 38, "current_round_used": 0, "current_round_remaining": 39},
    {"nickname": "Andy", "prev_round_stamps": 36, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 38},
    {"nickname": "why", "prev_round_stamps": 30, "current_round_earned": 4, "current_round_used": 0, "current_round_remaining": 34},
    {"nickname": "樓總", "prev_round_stamps": 25, "current_round_earned": 7, "current_round_used": 0, "current_round_remaining": 32},
    {"nickname": "兜兜轉轉", "prev_round_stamps": 9, "current_round_earned": 22, "current_round_used": 0, "current_round_remaining": 31},
    {"nickname": "迪士尼公主", "prev_round_stamps": 19, "current_round_earned": 8, "current_round_used": 0, "current_round_remaining": 27},
    {"nickname": "羽羊", "prev_round_stamps": 12, "current_round_earned": 14, "current_round_used": 0, "current_round_remaining": 26},
    {"nickname": "木魚喂喂喂", "prev_round_stamps": 19, "current_round_earned": 7, "current_round_used": 0, "current_round_remaining": 26},
    {"nickname": "用戶91063", "prev_round_stamps": 17, "current_round_earned": 8, "current_round_used": 0, "current_round_remaining": 25},
    {"nickname": "7747", "prev_round_stamps": 18, "current_round_earned": 7, "current_round_used": 0, "current_round_remaining": 25},
    {"nickname": "不吃鰻魚", "prev_round_stamps": 19, "current_round_earned": 6, "current_round_used": 0, "current_round_remaining": 25},
    {"nickname": "低語", "prev_round_stamps": 2, "current_round_earned": 22, "current_round_used": 0, "current_round_remaining": 24},
    {"nickname": "在下風爭最高", "prev_round_stamps": 11, "current_round_earned": 11, "current_round_used": 0, "current_round_remaining": 22},
    {"nickname": "小浣熊", "prev_round_stamps": 22, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 22},
    {"nickname": "cyannn", "prev_round_stamps": 10, "current_round_earned": 9, "current_round_used": 0, "current_round_remaining": 19},
    {"nickname": "嵐寶寶", "prev_round_stamps": 13, "current_round_earned": 6, "current_round_used": 0, "current_round_remaining": 19},
    {"nickname": "狼", "prev_round_stamps": 6, "current_round_earned": 12, "current_round_used": 0, "current_round_remaining": 18},
    {"nickname": "烟鎖秦樓", "prev_round_stamps": 10, "current_round_earned": 8, "current_round_used": 0, "current_round_remaining": 18},
    {"nickname": "♣", "prev_round_stamps": 14, "current_round_earned": 3, "current_round_used": 0, "current_round_remaining": 17},
    {"nickname": "布偶", "prev_round_stamps": 15, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 15},
    {"nickname": "jojo", "prev_round_stamps": 13, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 14},
    {"nickname": "樂樂", "prev_round_stamps": 5, "current_round_earned": 8, "current_round_used": 0, "current_round_remaining": 13},
    {"nickname": "候小豚", "prev_round_stamps": 8, "current_round_earned": 5, "current_round_used": 0, "current_round_remaining": 13},
    {"nickname": "OscarLu", "prev_round_stamps": 11, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 13},
    {"nickname": "開泫", "prev_round_stamps": 3, "current_round_earned": 9, "current_round_used": 0, "current_round_remaining": 12},
    {"nickname": "涼城淺夢", "prev_round_stamps": 6, "current_round_earned": 6, "current_round_used": 0, "current_round_remaining": 12},
    {"nickname": "junsoo", "prev_round_stamps": 8, "current_round_earned": 4, "current_round_used": 0, "current_round_remaining": 12},
    {"nickname": "蝸牛", "prev_round_stamps": 8, "current_round_earned": 4, "current_round_used": 0, "current_round_remaining": 12},
    {"nickname": "王哈哈", "prev_round_stamps": 0, "current_round_earned": 11, "current_round_used": 0, "current_round_remaining": 11},
    {"nickname": "lavie", "prev_round_stamps": 9, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 11},
    {"nickname": "lxj", "prev_round_stamps": 9, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 11},
    {"nickname": "SJ", "prev_round_stamps": 11, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 11},
    {"nickname": "pula", "prev_round_stamps": 5, "current_round_earned": 5, "current_round_used": 0, "current_round_remaining": 10},
    {"nickname": "小小小小車", "prev_round_stamps": 0, "current_round_earned": 9, "current_round_used": 0, "current_round_remaining": 9},
    {"nickname": "白開水不加糖", "prev_round_stamps": 0, "current_round_earned": 9, "current_round_used": 0, "current_round_remaining": 9},
    {"nickname": "北錚", "prev_round_stamps": 1, "current_round_earned": 8, "current_round_used": 0, "current_round_remaining": 9},
    {"nickname": "土豆餅", "prev_round_stamps": 3, "current_round_earned": 6, "current_round_used": 0, "current_round_remaining": 9},
    {"nickname": "水宴", "prev_round_stamps": 3, "current_round_earned": 6, "current_round_used": 0, "current_round_remaining": 9},
    {"nickname": "做咩呀", "prev_round_stamps": 4, "current_round_earned": 5, "current_round_used": 0, "current_round_remaining": 9},
    {"nickname": "羅律師", "prev_round_stamps": 4, "current_round_earned": 5, "current_round_used": 0, "current_round_remaining": 9},
    {"nickname": "趙天星", "prev_round_stamps": 6, "current_round_earned": 3, "current_round_used": 0, "current_round_remaining": 9},
    {"nickname": "歡喜", "prev_round_stamps": 6, "current_round_earned": 3, "current_round_used": 0, "current_round_remaining": 9},
    {"nickname": "一個三，不要", "prev_round_stamps": 7, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 9},
    {"nickname": "沃撈弓（錦魚）", "prev_round_stamps": 7, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 9},
    {"nickname": "魚寶", "prev_round_stamps": 7, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 9},
    {"nickname": "Ghostyu", "prev_round_stamps": 9, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 9},
    {"nickname": "眠⁵²ºº", "prev_round_stamps": 0, "current_round_earned": 8, "current_round_used": 0, "current_round_remaining": 8},
    {"nickname": "ice", "prev_round_stamps": 4, "current_round_earned": 4, "current_round_used": 0, "current_round_remaining": 8},
    {"nickname": "你微笑時好美", "prev_round_stamps": 5, "current_round_earned": 3, "current_round_used": 0, "current_round_remaining": 8},
    {"nickname": "小孫某某", "prev_round_stamps": 5, "current_round_earned": 3, "current_round_used": 0, "current_round_remaining": 8},
    {"nickname": "玉露少爺", "prev_round_stamps": 6, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 8},
    {"nickname": "果盤", "prev_round_stamps": 6, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 8},
    {"nickname": "萱萱", "prev_round_stamps": 6, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 8},
    {"nickname": "喵喵", "prev_round_stamps": 6, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 8},
    {"nickname": "sico魚子", "prev_round_stamps": 7, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 8},
    {"nickname": "閃", "prev_round_stamps": 8, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 8},
    {"nickname": "哥本哈根的貓", "prev_round_stamps": 1, "current_round_earned": 6, "current_round_used": 0, "current_round_remaining": 7},
    {"nickname": "芝士溜溜", "prev_round_stamps": 3, "current_round_earned": 4, "current_round_used": 0, "current_round_remaining": 7},
    {"nickname": "冰激凌", "prev_round_stamps": 4, "current_round_earned": 3, "current_round_used": 0, "current_round_remaining": 7},
    {"nickname": "洋洋", "prev_round_stamps": 5, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 7},
    {"nickname": "沬笙", "prev_round_stamps": 6, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 7},
    {"nickname": "Ricky.L", "prev_round_stamps": 7, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 7},
    {"nickname": "默", "prev_round_stamps": 2, "current_round_earned": 4, "current_round_used": 0, "current_round_remaining": 6},
    {"nickname": "三只小熊", "prev_round_stamps": 4, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 6},
    {"nickname": "有財他爺爺", "prev_round_stamps": 4, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 6},
    {"nickname": "唐葫蘆", "prev_round_stamps": 4, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 6},
    {"nickname": "Ansonn", "prev_round_stamps": 4, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 6},
    {"nickname": "呆呆杲杲", "prev_round_stamps": 4, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 6},
    {"nickname": "橘子鹿", "prev_round_stamps": 4, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 6},
    {"nickname": "源羽", "prev_round_stamps": 4, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 6},
    {"nickname": "正秋廿六", "prev_round_stamps": 4, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 6},
    {"nickname": "Myf", "prev_round_stamps": 4, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 6},
    {"nickname": "mucho", "prev_round_stamps": 4, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 6},
    {"nickname": "小藍貓", "prev_round_stamps": 6, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 6},
    {"nickname": "等風來", "prev_round_stamps": 2, "current_round_earned": 3, "current_round_used": 0, "current_round_remaining": 5},
    {"nickname": "猎人", "prev_round_stamps": 3, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 5},
    {"nickname": "迷迭君", "prev_round_stamps": 3, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 5},
    {"nickname": "寒天", "prev_round_stamps": 3, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 5},
    {"nickname": "劉一手", "prev_round_stamps": 3, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 5},
    {"nickname": "珂洛伊呀", "prev_round_stamps": 3, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 5},
    {"nickname": "陽光", "prev_round_stamps": 3, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 5},
    {"nickname": "qonk", "prev_round_stamps": 3, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 5},
    {"nickname": "在路上", "prev_round_stamps": 3, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 5},
    {"nickname": "wpaulin", "prev_round_stamps": 3, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 5},
    {"nickname": "bail$", "prev_round_stamps": 3, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 5},
    {"nickname": "笙歌落", "prev_round_stamps": 3, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 5},
    {"nickname": "慢慢", "prev_round_stamps": 4, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 5},
    {"nickname": "insane", "prev_round_stamps": 5, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 5},
    {"nickname": "小鹿醬", "prev_round_stamps": 5, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 5},
    {"nickname": "是MK呀", "prev_round_stamps": 5, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 5},
    {"nickname": "ziy南刀", "prev_round_stamps": 0, "current_round_earned": 4, "current_round_used": 0, "current_round_remaining": 4},
    {"nickname": "🌏🐬🐬", "prev_round_stamps": 0, "current_round_earned": 4, "current_round_used": 0, "current_round_remaining": 4},
    {"nickname": "男施主請自重", "prev_round_stamps": 1, "current_round_earned": 3, "current_round_used": 0, "current_round_remaining": 4},
    {"nickname": "zy", "prev_round_stamps": 2, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 4},
    {"nickname": "執念", "prev_round_stamps": 2, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 4},
    {"nickname": "青鼹", "prev_round_stamps": 2, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 4},
    {"nickname": "夕影", "prev_round_stamps": 2, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 4},
    {"nickname": "高配", "prev_round_stamps": 3, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 4},
    {"nickname": "派", "prev_round_stamps": 3, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 4},
    {"nickname": "雪梨", "prev_round_stamps": 3, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 4},
    {"nickname": "叶子", "prev_round_stamps": 3, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 4},
    {"nickname": "stwsa", "prev_round_stamps": 3, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 4},
    {"nickname": "森仔", "prev_round_stamps": 3, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 4},
    {"nickname": "波蘿", "prev_round_stamps": 3, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 4},
    {"nickname": "白衣", "prev_round_stamps": 3, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 4},
    {"nickname": "墨", "prev_round_stamps": 3, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 4},
    {"nickname": "頂級玩家", "prev_round_stamps": 3, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 4},
    {"nickname": "雪球", "prev_round_stamps": 3, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 4},
    {"nickname": "易烟韵", "prev_round_stamps": 4, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 4},
    {"nickname": "水泥庫庫", "prev_round_stamps": 4, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 4},
    {"nickname": "沫笙", "prev_round_stamps": 4, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 4},
    {"nickname": "靖929", "prev_round_stamps": 0, "current_round_earned": 3, "current_round_used": 0, "current_round_remaining": 3},
    {"nickname": "ismile", "prev_round_stamps": 0, "current_round_earned": 3, "current_round_used": 0, "current_round_remaining": 3},
    {"nickname": "一直吃不飽", "prev_round_stamps": 0, "current_round_earned": 3, "current_round_used": 0, "current_round_remaining": 3},
    {"nickname": "燃燒的馬鈴薯", "prev_round_stamps": 1, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 3},
    {"nickname": "潛龍勿用", "prev_round_stamps": 1, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 3},
    {"nickname": "趙不懂", "prev_round_stamps": 1, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 3},
    {"nickname": "廣東的廣東仔", "prev_round_stamps": 1, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 3},
    {"nickname": "拍拍狗頭", "prev_round_stamps": 1, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 3},
    {"nickname": "wendy", "prev_round_stamps": 1, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 3},
    {"nickname": "緬北之王", "prev_round_stamps": 2, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 3},
    {"nickname": "寧寧", "prev_round_stamps": 2, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 3},
    {"nickname": "陽仔", "prev_round_stamps": 2, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 3},
    {"nickname": "小屋子", "prev_round_stamps": 2, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 3},
    {"nickname": "瑤光", "prev_round_stamps": 2, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 3},
    {"nickname": "雪梅", "prev_round_stamps": 2, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 3},
    {"nickname": "lollipop", "prev_round_stamps": 3, "current_round_earned": 5, "current_round_used": 0, "current_round_remaining": 8},
    {"nickname": "秋不雨", "prev_round_stamps": 3, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 3},
    {"nickname": "定福庄西街吳彥祖", "prev_round_stamps": 3, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 3},
    {"nickname": "Ctrlc+Ctrly", "prev_round_stamps": 3, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 3},
    {"nickname": "小松獅", "prev_round_stamps": 3, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 3},
    {"nickname": "乱乱的康阿几", "prev_round_stamps": 3, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 3},
    {"nickname": "Nevada", "prev_round_stamps": 3, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 3},
    {"nickname": "用戶610267", "prev_round_stamps": 0, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "山落離渊", "prev_round_stamps": 0, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "朝木", "prev_round_stamps": 0, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "泡腳泥御用飼料", "prev_round_stamps": 0, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "喪星星", "prev_round_stamps": 0, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "小劉吃不飽", "prev_round_stamps": 0, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "每天看三把", "prev_round_stamps": 0, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "沒錯我就是如花", "prev_round_stamps": 0, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "葡萄不吃", "prev_round_stamps": 0, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "羊king", "prev_round_stamps": 0, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "loopyzzhan", "prev_round_stamps": 3, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 5},
    {"nickname": "草莓褲頭", "prev_round_stamps": 0, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "nini", "prev_round_stamps": 0, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "比耶", "prev_round_stamps": 0, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "至高無上", "prev_round_stamps": 0, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "朝朝暮暮", "prev_round_stamps": 0, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "亦尋亦尋", "prev_round_stamps": 0, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "一直吃飽飽", "prev_round_stamps": 0, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "-B-", "prev_round_stamps": 0, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "Eternity", "prev_round_stamps": 0, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "一生一世", "prev_round_stamps": 0, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "呼呼哈嘿嘿", "prev_round_stamps": 0, "current_round_earned": 2, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "沒錯我是如花啊", "prev_round_stamps": 1, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "海龜", "prev_round_stamps": 1, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "夏至念鈺", "prev_round_stamps": 1, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "小五", "prev_round_stamps": 1, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "姜橙路", "prev_round_stamps": 1, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "去北緯45°找你", "prev_round_stamps": 3, "current_round_earned": 3, "current_round_used": 0, "current_round_remaining": 6},
    {"nickname": "Freddy", "prev_round_stamps": 1, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "人間精品", "prev_round_stamps": 1, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "向北", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "卷心菜", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "你看到我的奶茶了麼", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "粟裳葵葵", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "jameskeller", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "小鯉魚", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "墨菲哥", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "flows", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "香芋地瓜丸", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "清羽", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "七分甜", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "沈kk豆", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "恩恩米克斯", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "游王子空", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "熊本熊", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "王畫畫所長", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "冰冷的西紅柿", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "人生海海", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "孤城", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "第一木", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "这条小鱼在乎", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "siro", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "汀汀鹿", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "東方夜", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "7", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "天是紅河岸", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "酸奶罐罐", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "7ovoo", "prev_round_stamps": 2, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 2},
    {"nickname": "小空格", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "橙c冰美事", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "馬丁", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "威力斯", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "波蘿蓋澆面", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "達人知命", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "episkey", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "愛吃香菜", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "感性", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "小黑小", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "123", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "Richhh", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "猛踹", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "小居喵喵", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "追逐夢想和希望", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "純碱不是", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "咕咕嘎嘎", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "shining", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "冬天好冷", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "魚團", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "鷗鷗子守護者", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "樓樓兒", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "心淡", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "榕榕", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "云", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "🍉", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "pinky", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "你开心那就好了...", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "追逐梦想", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "嘻嘻鸭", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "小雪初下", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "阳仔piapia", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "7km", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "疯癫小叶", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "。。，", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "花凉水暖", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "九幽", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "瓜怂", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "m", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "六号小水星", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "二创树树", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "彤彤", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "宝箱怪", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "小香", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "你看到我奶茶...", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "hhhg", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "鱼鱼咪", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "今美线", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "微辣微辣微微辣", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "犇🐮🐮🐮", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "燕子回时", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "劳工", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "会发光的溜溜酱", "prev_round_stamps": 0, "current_round_earned": 1, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "导彈", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "踩月亮的貓", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "我300斤", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "小卡拉咪", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "心與心的距離", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "肥屁屁", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "胖丁嘟嘟", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "嫩牛五方", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "蕃茄咪", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "冰原狼", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "洛城", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "雨下", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "k哥", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "羽若有所約", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "張開懷抱", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "秋秋丸", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "湯湯", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "yuki", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "是小楊同學呀", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "飛", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "老農老怒", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "ismole", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "亦洵", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "一頭小貓咪", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "至糕無上", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "獲獎的伯斯口", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "kiki", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "電熱毯拯救北方的……", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "葬花", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "凱文", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "小明葛格", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "肆隱", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "豉油王炒面", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "Huu呼呼", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "風之心", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "CCCc", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "蔓⁷⁷⁹⁹", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "司徒|兀突荻", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "祁画九天攬月", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "吹泡泡的豬", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "盜宝平民", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "Amaran", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "遺憾怎麼寫", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "nino", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "zly-南刀", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "窜稀乐子", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "creeperE", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "珂洛伊吖", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "melody", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "狗浩", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "月亮", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "摆烂男明星", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "老居", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "六娃", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "鯉魚", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "小魚灌餅", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "一口一口吃掉忧愁", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "小銘同學", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "bobby", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "小韓", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "輝先生", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "jay", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "柏co", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "青檸", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "泳池", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "my karth", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "隱姓埋名", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "子歆", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "拉菲醬", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "huszi", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "grimreaper", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "Catherine", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "肩包", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "肥嘟嘟佑門衛", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "張灯結彩", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "kevin", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1},
    {"nickname": "time", "prev_round_stamps": 1, "current_round_earned": 0, "current_round_used": 0, "current_round_remaining": 1}
];
// ==================== 数据录入结束 ====================

// DOM元素
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsContainer = document.getElementById('resultsContainer');
const userDetail = document.getElementById('userDetail');
const detailNickname = document.getElementById('detailNickname');
const stampStats = document.getElementById('stampStats');
const closeDetail = document.getElementById('closeDetail');
const adminSection = document.getElementById('adminSection');
const adminToggle = document.getElementById('adminToggle');
const dataCount = document.getElementById('dataCount');

// 初始化数据统计
dataCount.textContent = stampData.length;

// 完善简繁体转换映射
const traditionalToSimplified = {
    // 常见繁体字转换
'寶' : '宝', '戀' : '恋', '樓' : '楼', '總' : '总', '轉' : '转',
'戶' : '户', '鰻' : '鳗', '魚' : '鱼', '語' : '语', '風' : '风',
'爭' : '争', '嵐' : '岚', '鎖' : '锁', '樂' : '乐', '開' : '开',
'涼' : '凉', '淺' : '浅', '夢' : '梦', '蝸' : '蜗', '車' : '车',
'錚' : '铮', '餅' : '饼', '羅' : '罗', '師' : '师', '趙' : '赵',
'歡' : '欢', '個' : '个', '撈' : '捞', '錦' : '锦', '時' : '时',
'孫' : '孙', '爺' : '爷', '盤' : '盘', '閃' : '闪', '貓' : '猫',
'財' : '财', '蘆' : '芦', '藍' : '蓝', '劉' : '刘', '陽' : '阳',
'醬' : '酱', '請' : '请', '執' : '执', '蘿' : '萝', '頂' : '顶',
'級' : '级', '庫' : '库', '飽' : '饱', '燒' : '烧', '馬' : '马',
'鈴' : '铃', '潛' : '潜', '龍' : '龙', '廣' : '广', '東' : '东',
'頭' : '头', '緬' : '缅', '寧' : '宁', '瑤' : '瑶', '吳' : '吴',
'彥' : '彦', '獅' : '狮', '腳' : '脚', '飼' : '饲', '喪' : '丧',
'錯' : '错', '褲' : '裤', '無' : '无', '尋' : '寻', '龜' : '龟',
'鈺' : '钰', '緯' : '纬', '間' : '间', '麼' : '么', '鯉' : '鲤',
'畫' : '画', '長' : '长', '紅' : '红', '蓋' : '盖', '澆' : '浇',
'達' : '达', '愛' : '爱', '純' : '纯', '團' : '团', '鷗' : '鸥',
'護' : '护', '導' : '导', '彈' : '弹', '與' : '与', '離' : '离',
'約' : '约', '張' : '张', '懷' : '怀', '湯' : '汤', '楊' : '杨',
'學' : '学', '飛' : '飞', '農' : '农', '獲' : '获', '獎' : '奖',
'電' : '电', '熱' : '热', '凱' : '凯', '隱' : '隐', '攬' : '揽',
'豬' : '猪', '盜' : '盗', '遺' : '遗', '寫' : '写', '銘' : '铭',
'韓' : '韩', '輝' : '辉', '檸' : '柠', '門' : '门', '衛' : '卫',
'結' : '结', '兒' : '儿'
};

// 防止XSS攻击的函数
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// 简繁体转换函数
function toSimplified(text) {
    return text.split('').map(char => traditionalToSimplified[char] || char).join('');
}

// 搜索函数
function searchUsers() {
    const nickname = searchInput.value.trim();

    if (!nickname) {
        showError('请输入要查询的昵称');
        return;
    }

    if (nickname.length < 1) {
        showError('查询关键词至少需要1个字符');
        return;
    }

    // 隐藏提示文字
    const tipsElement = document.querySelector('.tips');
    if (tipsElement) {
        tipsElement.style.display = 'none';
    }

    // 清除上一次的查询结果
    userDetail.style.display = 'none'; // 隐藏详情面板
    
    // 显示加载中
    resultsContainer.innerHTML = `
        <div class="loading">
            <p>🔍 正在搜索 "${escapeHtml(toSimplified(nickname))}" ...</p>
        </div>
    `;

    // 模拟网络请求延迟
    setTimeout(() => {
        try {
            // 将搜索词转换为简体
            const simplifiedSearch = toSimplified(nickname.toLowerCase());

            // 在数据中搜索 - 支持更灵活的匹配
            const results = stampData.filter(user => {
                // 将用户昵称转换为简体进行匹配
                const simplifiedNickname = toSimplified(user.nickname.toLowerCase());
                return simplifiedNickname.includes(simplifiedSearch) || 
                       user.nickname.toLowerCase().includes(nickname.toLowerCase()) ||
                       user.nickname.toLowerCase().indexOf(nickname.toLowerCase()) !== -1;
            });

            displaySearchResults(results);

        } catch (error) {
            console.error('搜索时发生错误:', error);
            showError('搜索时发生错误，请稍后重试');
        }
    }, 300);
}

// 对搜索结果排序
function sortResults(results) {
    // 按印花数量降序排列，让用户更容易找到高价值用户
    return results.sort((a, b) => b.current_round_remaining - a.current_round_remaining);
}

// 显示搜索结果
function displaySearchResults(results) {
    // 先对结果进行排序
    results = sortResults(results);

    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="empty">
                <p>😔 未找到匹配的用户</p>
                <p style="margin-top: 10px; font-size: 14px; color: #888;">
                    请尝试输入其他关键词，支持简繁体查询
                </p>
            </div>
        `;
        return;
    }

    if (results.length === 1) {
        // 如果只有一个结果，直接显示详情
        showUserDetail(results[0]);
        return;
    }

    // 多个结果，显示列表
    let html = `
        <div class="tips" style="margin-bottom: 15px;">
            🎯 找到 <strong>${results.length}</strong> 个匹配的用户，
            按拥有印花的数量排序，请点击查看详情：
        </div>
        <ul class="results-list">
    `;

    results.forEach(user => {
        // 在显示结果时将昵称转换为简体
        const simplifiedNickname = toSimplified(user.nickname);
        html += `
            <li class="user-item" onclick="showUserDetailByNickname('${escapeHtml(user.nickname)}')">
                <strong>${escapeHtml(simplifiedNickname)}</strong>
                <div style="margin-top: 5px; font-size: 14px; color: #666;">
                    印花数: <span style="color: #764ba2; font-weight: bold;">${user.current_round_remaining}</span> 个 | 
                    本轮获得: <span style="color: #4CAF50;">${user.current_round_earned}</span>
                </div>
            </li>
        `;
    });

    html += '</ul>';
    resultsContainer.innerHTML = html;
}

// 通过昵称显示用户详情
function showUserDetailByNickname(nickname) {
    const user = stampData.find(u => u.nickname === nickname);
    if (user) {
        showUserDetail(user);
    }
}

// 显示用户详情
function showUserDetail(user) {
    // 显示简体字昵称
    detailNickname.textContent = toSimplified(user.nickname);

    stampStats.innerHTML = `
        <div class="stat-item">
            <div class="stat-label">上一轮剩余印花</div>
            <div class="stat-value">${user.prev_round_stamps}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">本轮获得印花</div>
            <div class="stat-value" style="color: #4CAF50;">+${user.current_round_earned}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">本轮消费印花</div>
            <div class="stat-value" style="color: #ff6b6b;">-${user.current_round_used}</div>
        </div>
        <div class="stat-item" style="background: #f0f7ff;">
            <div class="stat-label">本轮剩余印花</div>
            <div class="stat-value" style="color: #764ba2; font-size: 28px;">
                ${user.current_round_remaining}
            </div>
        </div>
    `;

    // 显示详情面板
    userDetail.style.display = 'block';
    resultsContainer.innerHTML = '';
}

// 显示错误
function showError(message) {
    resultsContainer.innerHTML = `
        <div class="error">
            ❌ ${escapeHtml(message)}
        </div>
    `;
}

// 计算数据统计
function calculateStatistics() {
    const totalUsers = stampData.length;
    const totalStamps = stampData.reduce((sum, user) => sum + user.current_round_remaining, 0);
    const avgStamps = totalUsers > 0 ? (totalStamps / totalUsers).toFixed(2) : 0;
    const maxStamps = Math.max(...stampData.map(user => user.current_round_remaining), 0);
    const minStamps = Math.min(...stampData.map(user => user.current_round_remaining), 0);

    return {
        totalUsers,
        totalStamps,
        avgStamps,
        maxStamps,
        minStamps
    };
}

// 切换管理面板
function toggleAdminSection() {
    const isVisible = adminSection.style.display === 'block';
    adminSection.style.display = isVisible ? 'none' : 'block';
    adminToggle.textContent = isVisible ? '显示数据管理' : '隐藏数据管理';

    if (!isVisible) {
        // 显示详细数据预览
        const stats = calculateStatistics();
        const preview = adminSection.querySelector('.data-preview');

        let previewHtml = `
            <strong>📊 数据统计概览</strong><br>
            总用户数: <strong>${stats.totalUsers}</strong><br>
            总印花数: <strong>${stats.totalStamps}</strong><br>
            平均印花: <strong>${stats.avgStamps}</strong><br>
            最高印花: <strong>${stats.maxStamps}</strong><br>
            最低印花: <strong>${stats.minStamps}</strong><br><br>

            <strong>📋 前10条数据预览:</strong><br>
        `;

        for (let i = 0; i < Math.min(10, stampData.length); i++) {
            const user = stampData[i];
            // 在预览中显示简体字昵称
            const simplifiedNickname = toSimplified(user.nickname);
            previewHtml += `${i+1}. ${escapeHtml(simplifiedNickname)}: ${user.current_round_remaining}个<br>`;
        }

        if (stampData.length > 10) {
            previewHtml += `<br>... 还有${stampData.length - 10}条数据`;
        }

        preview.innerHTML = previewHtml;
    }
}

// 事件监听
searchBtn.addEventListener('click', searchUsers);

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchUsers();
    }
});

closeDetail.addEventListener('click', () => {
    userDetail.style.display = 'none';
    searchInput.value = '';
    resultsContainer.innerHTML = `
        <div class="empty">
            <p>输入昵称开始查询</p>
        </div>
    `;
    
    // 重新显示提示文字
    const tipsElement = document.querySelector('.tips');
    if (tipsElement) {
        tipsElement.style.display = 'block';
    }
});

adminToggle.addEventListener('click', toggleAdminSection);

// 页面加载完成后自动聚焦到搜索框
document.addEventListener('DOMContentLoaded', function() {
    searchInput.focus();

    // 添加ESC键关闭详情功能
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && userDetail.style.display === 'block') {
            userDetail.style.display = 'none';
            resultsContainer.innerHTML = `
                <div class="empty">
                    <p>输入昵称开始查询</p>
                </div>
            `;
            
            // 重新显示提示文字
            const tipsElement = document.querySelector('.tips');
            if (tipsElement) {
                tipsElement.style.display = 'block';
            }
        }
    });
});

// 将函数暴露给全局作用域，供onclick使用
window.showUserDetailByNickname = showUserDetailByNickname;

// 初始状态
resultsContainer.innerHTML = `
    <div class="empty">
        <p>请输入昵称</p>
    </div>
`;
