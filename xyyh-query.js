// ==================== 印花数据现在从外部文件导入 ====================

// 消费记录数据
/*const consumeData = [
    {id: 1, bidder: "peach", item: "印花定制贴纸", price: 50},
    {id: 2, bidder: "lucas", item: "专属徽章", price: 3},
    {id: 3, bidder: "啵啵", item: "限量版周边", price: 2},
    {id: 4, bidder: "pa寶", item: "精美相册", price: 4},
    {id: 5, bidder: "路人甲乙丙丁", item: "定制书签", price: 5},
    {id: 6, bidder: "羽羊", item: "粉红花花单人拍立得", price: 9},
    {id: 7, bidder: "用戶91063", item: "小卡妆造单人拍立得", price: 5}
];

// 更新印花数据中的消费记录
function updateStampDataWithConsumeRecords() {
    // 重置所有用户的本轮消费记录
    stampData.forEach(user => {
        user.current_round_used = 0;
    });
    
    // 根据消费记录更新用户的印花消费量
    consumeData.forEach(record => {
        const userIndex = stampData.findIndex(user => user.nickname === record.bidder);
        if (userIndex !== -1) {
            // 累加该用户的消费记录
            stampData[userIndex].current_round_used += record.price;
            // 重新计算剩余印花
            stampData[userIndex].current_round_remaining = 
                stampData[userIndex].prev_round_stamps + 
                stampData[userIndex].current_round_earned - 
                stampData[userIndex].current_round_used;
        }
    });
}

// 初始化时更新数据
updateStampDataWithConsumeRecords();*/ //(记得恢复此功能时取消注释)

// DOM元素
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsContainer = document.getElementById('resultsContainer');
const userDetail = document.getElementById('userDetail');
const detailNickname = document.getElementById('detailNickname');
const stampStats = document.getElementById('stampStats');
const closeDetail = document.getElementById('closeDetail');

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

// 获取用户的消费详情
/*function getUserConsumeDetails(nickname) {
    return consumeData.filter(record => record.bidder === nickname);
}*/

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
            <p>🔍 正在搜索... "${escapeHtml(toSimplified(nickname))}" ...</p>
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

    // 设置为空字符串，因为拍卖相关功能已注释
    const consumeDetailsHtml = '';

    stampStats.innerHTML = `
        <div class="stat-item">
            <div class="stat-label">上一轮剩余印花</div>
            <div class="stat-value">${user.prev_round_stamps}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">本轮获得印花</div>
            <div class="stat-value" style="color: #4CAF50;">+${user.current_round_earned}</div>
        </div>
      <div class="stat-item" style="position: relative;">
            <div class="stat-label">本轮消费印花</div>
            <div class="stat-value" style="color: #ff6b6b;">
                -${user.current_round_used}
            </div>
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

// 显示消费详情弹窗(记得恢复此功能时取消注释)
/*function showConsumePopup(element) {
    const popup = element.querySelector('.consume-popup');
    if (popup) {
        popup.style.display = 'block';
    }
}

// 隐藏消费详情弹窗(记得恢复此功能时取消注释)
function hideConsumePopup(element) {
    const popup = element.querySelector('.consume-popup');
    if (popup) {
        popup.style.display = 'none';
    }
}*/

// 显示错误
function showError(message) {
    resultsContainer.innerHTML = `
        <div class="error">
            ❌ ${escapeHtml(message)}
        </div>
    `;
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

// 页面加载完成后自动聚焦到搜索框
document.addEventListener('DOMContentLoaded', function() {
    searchInput.focus();

    // 添加ESC键关闭详情功能
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // 关闭详情面板
            userDetail.style.display = 'none';
            
            // 清空搜索框
            searchInput.value = '';
            
            // 重置结果容器
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
//window.showConsumePopup = showConsumePopup;  //(记得恢复此功能时取消注释)
//window.hideConsumePopup = hideConsumePopup;  //(记得恢复此功能时取消注释)

// 初始状态
resultsContainer.innerHTML = `
    <div class="empty">
        <p>请输入昵称</p>
    </div>
`;
