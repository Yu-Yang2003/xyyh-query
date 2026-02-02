// 通用工具函数
const Utils = {
    // 防抖函数
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // HTML转义函数
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    },

    // 格式化数字
    formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num.toString();
    },

    // 获取URL参数
    getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
};

// 通用数据管理器
class DataManager {
    constructor(data) {
        this.data = data || [];
    }

    // 搜索功能
    search(keyword) {
        if (!keyword) return this.data;
        keyword = keyword.toLowerCase();
        return this.data.filter(item => 
            item.nickname.toLowerCase().includes(keyword)
        );
    }

    // 获取统计数据
    getStats() {
        if (!this.data || this.data.length === 0) return {};
        
        const totalUsers = this.data.length;
        const totalStamps = this.data.reduce((sum, user) => sum + user.current_round_remaining, 0);
        const topUser = this.data.reduce((max, user) => 
            user.current_round_remaining > max.current_round_remaining ? user : max, 
            {current_round_remaining: -1}
        );
        
        return {
            totalUsers,
            totalStamps,
            topUser: topUser.nickname,
            topUserStamps: topUser.current_round_remaining
        };
    }

    // 获取用户详细信息
    getUserDetail(nickname) {
        return this.data.find(user => user.nickname === nickname);
    }
}

// 通用UI管理器
class UIManager {
    static showLoading(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = '<div class="loading">加载中...</div>';
        }
    }

    static showError(elementId, message) {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = `
                <div class="error" role="alert" aria-label="错误信息：${message}">
                    ❌ ${Utils.escapeHtml(message)}
                </div>
            `;
        }
    }

    static showEmpty(elementId, message = '暂无数据') {
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = `
                <div class="empty" aria-label="${message}">
                    <p>${message}</p>
                </div>
            `;
        }
    }

    static fadeIn(element) {
        element.style.opacity = 0;
        element.style.transition = 'opacity 0.3s ease-in-out';
        setTimeout(() => {
            element.style.opacity = 1;
        }, 10);
    }

    static fadeOut(element, callback) {
        element.style.transition = 'opacity 0.3s ease-in-out';
        element.style.opacity = 0;
        setTimeout(() => {
            if (callback) callback();
        }, 300);
    }
}