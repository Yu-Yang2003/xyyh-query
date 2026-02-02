// ==================== 印花数据现在从外部文件导入 ====================

// 消费记录数据由外部数据源提供（使用下面统一的更新函数）

// DOM元素
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsContainer = document.getElementById('resultsContainer');
const userDetail = document.getElementById('userDetail');
const detailNickname = document.getElementById('detailNickname');
const stampStats = document.getElementById('stampStats');
const closeDetail = document.getElementById('closeDetail');
const consumeBtnContainer = document.getElementById('consumeBtnContainer'); // 拍卖记录按钮容器

// 防抖函数
const debouncedSearch = Utils.debounce(searchUsers, 500);

// 初始化
function initApp() {
    // 页面加载完成后自动聚焦到搜索框
    searchInput.focus();
    showWelcomeMessage(); // 显示欢迎消息和统计数据

    // 事件监听
    searchBtn.addEventListener('click', searchUsers);
    searchInput.addEventListener('input', debouncedSearch);
    searchInput.addEventListener('keypress', handleKeyPress);
    closeDetail.addEventListener('click', closeUserDetail);
    
    // 添加ESC键关闭详情功能
    document.addEventListener('keydown', handleKeyDown);
    
    // 初始状态
    UIManager.showEmpty('resultsContainer', '请输入昵称');
}

// 处理回车键
function handleKeyPress(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // 防止表单提交
        searchUsers();
    }
}

// 处理键盘事件
function handleKeyDown(e) {
    if (e.key === 'Escape') {
        closeUserDetail();
    }
}

// 搜索用户
function searchUsers() {
    const keyword = searchInput.value.trim();
    
    if (!keyword) {
        UIManager.showEmpty('resultsContainer', '请输入昵称');
        return;
    }

    // 显示加载状态
    UIManager.showLoading('resultsContainer');

    // 模拟异步操作
    setTimeout(() => {
        try {
            const results = DataManager.search(keyword);
            displayResults(results);
        } catch (error) {
            console.error('搜索出错:', error);
            UIManager.showError('resultsContainer', '搜索失败，请稍后重试');
        }
    }, 100);
}

// 显示搜索结果
function displayResults(results) {
    if (!results || results.length === 0) {
        UIManager.showEmpty('resultsContainer', '未找到匹配的用户');
        return;
    }

    let html = '<ul class="results-list">';
    results.forEach(user => {
        const consumeRecords = getUserConsumeRecords(user.nickname);
        const hasConsume = consumeRecords.length > 0;
        
        html += `
            <li class="user-item" data-nickname="${user.nickname}" tabindex="0" role="button" aria-label="点击查看详情">
                <div class="user-info">
                    <strong>${Utils.escapeHtml(user.nickname)}</strong>
                    <div class="stamp-count">当前剩余印花: ${user.current_round_remaining}</div>
                </div>
                ${hasConsume ? `
                <div class="consume-details-popup">
                    <div class="consume-record-summary">
                        消费记录: ${consumeRecords.length} 笔
                    </div>
                    <div class="consume-popup" style="display: none;">
                        <div class="popup-title">近期消费记录</div>
                        ${consumeRecords.slice(0, 5).map(record => `
                            <div class="consume-record">
                                <span class="item">${Utils.escapeHtml(record.item)}</span> 
                                <span class="price">¥${record.price}</span>
                            </div>
                        `).join('')}
                        ${consumeRecords.length > 5 ? `<div class="more-records">... 还有 ${consumeRecords.length - 5} 条记录</div>` : ''}
                    </div>
                </div>
                ` : ''}
            </li>
        `;
    });

    html += '</ul>';
    resultsContainer.innerHTML = html;

    // 添加事件委托和弹窗监听
    attachResultListeners();
}

// 为结果列表添加事件委托和弹窗鼠标监听
function attachResultListeners() {
    // 点击或按回车打开详情
    resultsContainer.addEventListener('click', function (e) {
        const li = e.target.closest('.user-item');
        if (li && resultsContainer.contains(li)) {
            const nick = li.getAttribute('data-nickname');
            if (nick) showUserDetailByNickname(nick);
        }
    });

    resultsContainer.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const li = e.target.closest('.user-item');
            if (li && resultsContainer.contains(li)) {
                const nick = li.getAttribute('data-nickname');
                if (nick) showUserDetailByNickname(nick);
            }
        }
    });

    // 悬停显示消费弹窗
    const popups = resultsContainer.querySelectorAll('.consume-details-popup');
    popups.forEach(el => {
        el.addEventListener('mouseenter', () => {
            const popup = el.querySelector('.consume-popup');
            if (popup) popup.style.display = 'block';
        });
        el.addEventListener('mouseleave', () => {
            const popup = el.querySelector('.consume-popup');
            if (popup) popup.style.display = 'none';
        });
    });
}

// 获取用户的消费记录
function getUserConsumeRecords(nickname) {
    if (typeof ConsumeDataManager !== 'undefined') {
        const latestPeriod = ConsumeDataManager.getLatestPeriod();
        if (latestPeriod) {
            const latestData = ConsumeDataManager.getDataByPeriod(latestPeriod);
            return latestData.filter(record => record.bidder === nickname);
        }
    }
    return [];
}

// 通过昵称显示用户详情
function showUserDetailByNickname(nickname) {
    const user = DataManager.getUserDetail(nickname);
    if (!user) {
        UIManager.showError('resultsContainer', '找不到该用户');
        return;
    }

    showUserDetail(user);
}

// 显示用户详情
function showUserDetail(user) {
    detailNickname.textContent = user.nickname;
    
    const statsHtml = `
        <div class="stat-item">
            <div class="stat-label">当前剩余印花</div>
            <div class="stat-value" title="上轮剩余 + 本轮获得 - 本轮使用">${user.current_round_remaining}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">上轮剩余</div>
            <div class="stat-value" title="上一轮结束时的印花数量">${user.prev_round_stamps}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">本轮获得</div>
            <div class="stat-value" title="本轮活动中获得的印花">${user.current_round_earned}</div>
        </div>
        <div class="stat-item">
            <div class="stat-label">本轮使用</div>
            <div class="stat-value" title="本轮活动中使用的印花">${user.current_round_used}</div>
        </div>
    `;
    
    stampStats.innerHTML = statsHtml;
    
    // 显示详情面板
    userDetail.style.display = 'block';
    userDetail.setAttribute('aria-hidden', 'false');
    
    // 隐藏搜索结果和提示文字
    resultsContainer.innerHTML = '';
    const tipsElement = document.querySelector('.tips');
    if (tipsElement) {
        tipsElement.style.display = 'none';
    }
    
    // 隐藏拍卖消费记录按钮
    if (consumeBtnContainer) {
        consumeBtnContainer.style.display = 'none';
    }
}

// 关闭用户详情
function closeUserDetail() {
    userDetail.style.display = 'none';
    userDetail.setAttribute('aria-hidden', 'true');
    searchInput.value = '';
    resultsContainer.innerHTML = `
        <div class="empty" aria-label="输入昵称开始查询">
            <p>输入昵称开始查询</p>
        </div>
    `;
    
    // 重新显示提示文字
    const tipsElement = document.querySelector('.tips');
    if (tipsElement) {
        tipsElement.style.display = 'block';
    }
    
    // 重新显示拍卖消费记录按钮
    if (consumeBtnContainer) {
        consumeBtnContainer.style.display = 'block';
    }
}

// 显示欢迎消息和统计数据
function showWelcomeMessage() {
    const stats = DataManager.getStats();
    if (stats.totalUsers > 0) {
        document.getElementById('totalUsers').textContent = stats.totalUsers;
        document.getElementById('totalStamps').textContent = stats.totalStamps;
        document.getElementById('topUser').textContent = `${stats.topUser} (${stats.topUserStamps})`;
    }
}

// 初始化应用
document.addEventListener('DOMContentLoaded', initApp);