1.3.8-alpha.0
- fix: 修复c7n大数据表格个性化报错
- fix: 修复c7n表格个性化性能问题

1.3.7-alpha.6
- fix: 链接组件无刷新跳转功能回退至修改前

1.3.7-alpha.5
- fix: 链接组件无法跳转(修复引号))

1.3.7-alpha.4
- fix: hzero个性化扩展字段取值逻辑调整，修复部分情况下初次渲染无值的问题

1.3.7-alpha.3
- fix: 链接组件无法跳转

1.3.7-alpha.2
- fix: 修复多选lov全选查询少查一页的问题
- perf: 调整链接组件页面内跳转不进行整体刷新

1.3.7-alpha.1
- feat: 适配c7n大数据表格，个性化函数名 `customizeVTable`
- fix: 修复c7n表格扩展字段渲染逻辑潜在问题（editor和renderer优先级问题）

1.3.7
- fix: 日期格式配置支持文本/只读模式
- fix: hzero-ui个性化修复标准字段placeholder无效

1.3.6-10
- feat: c7n表格和表单支持readOnly属性

1.3.6-9
- fix: 修复hzero表格标准字段无法渲染数字0

1.3.6-7
- fix: 修复表格扩展字段不受readOnly属性控制

1.3.6-6
- fix: 修复hzero个性化表单最大列配置失效
- fix: 修复c7n表格扩展字段visible为-1时依旧显示的问题

1.3.6-5
- feat: 条件计算增加日期不等判断

1.3.6-4
- feat: 条件计算增加日期判等

1.3.6-3
- fix: 修复c7n表单扩展字段报错

1.3.6-2
- fix: 修复下拉组件出现一直loading的情况

1.3.6-1
- fix: 修复lov多选组件左侧列表切换分页大小时显示异常

1.3.6
- feat: hzero-ui表格类型的单元增加可排序标识处理
- feat: 表单增加跨列配置
- feat: 组件配置增加placeholder, c7n表格editor为true时不支持placeholder

1.3.5-6
- fix: 修复hzero个性化下拉框组件部分情况下触发页面崩溃

1.3.5-5
- fix: 修复c7n个性化表单字段因别名配置错误触发页面崩溃

1.3.5-4
- fix: 修复组件类型配置不存在时，c7n用string类型覆盖原有type的问题
- feat: （c7n扩展字段）日期组件会根据选择的日期格式控制是否启用时间选择，时间选择固定24小时制
- fix: c7n链接组件支持配置变量
- fix: 修复表格字段配置必输时，缺少相应的样式
- fix: 修复hzero个性化下拉框组件多次查询值集的问题
- fix: 修复c7n表单个性化部分字段未配置位置导致字段乱序

1.3.5-3
- perf: c7n个性化事件监听添加方式调整
- feat: hzero-ui个性化适配标准代码一个字段对应多个组件的场景
- feat: hzero-ui个性化优化下拉组件多次查询值集编码

1.3.5-2
- fix: c7n-ui隐藏字段时必输校验仍生效的问题
- fix: c7n-ui修复表格个性化load时必输配置不生效

1.3.5、1.3.5-1
- fix: hzero-ui个性化修复标准字段自定义校验无限制添加问题
- fix: hzero-ui个性化扩展字段componentProps缺失dataSource问题
- fix: 修复hzero-ui和c7n-ui自定义校验后端返回null值时页面崩溃
- fix: c7n-ui隐藏字段时必输校验仍生效的问题（实际未解决）

1.3.4-6
- fix: 修复用户个性化多语言缺失
- perf: hzero-ui个性化使用ts改写
- feat: hzero-ui个性化配置查询时加入字段排序

1.3.4-5
- fix: 修复hzero-ui表单个性化标准字段lov默认值不展示
- fix: 修复hzero-ui表单个性化标准字段lov默认值翻译为空时不展示默认值
- fix: 修复标准字段多选lov组件默认值翻译无效
- fix: 修复默认值某些情况下会覆盖接口数据的问题


1.3.4-4
- fix: c7n查询表单标准字段被错误处理为扩展字段
- feat: c7n查询表单组件配置取个性化配置和代码配置的并集，同名且非空的属性个性化配置优先级高于代码配置
- fix: hzero-ui时间传输格式调整，统一为YYYY-MM-DD 00:00:00(或HH:mm:ss)
- fix: hzero-ui个性化parseContentProps函数缺失部分字段配置；

1.3.4-3
- fix: 修复表格扩展字段缺失值集映射配置；优化扩展字段配置处理逻辑
- fix: 修复表单隐藏字段引起字段取值错误；修复初始值错误的将undefined转换为0；修复链接组件变量替换造成的无效表单注册；连接组件标题支持变量配置
- fix: 修复标准字段lov默认值缺失meaning
- fix: 修复hzero表格个性化工具参数错位
- feat: 多选lov全选改为追加方式；个性化工具函数增加readOnly控制；表格和表单扩展字段增加特定className
- feat: hzero个性化链接组件强制使用组件渲染；个性化移除自动生成filterForm功能
- fix: 修复lov多选左侧重置点击无效
- fix: hzero个性化修复强制组件渲染时，value取值错误
- feat: hzero-ui个性化精度控制支持文本模式
- feat: 个性化日期传输格式调整
- feat: 单元配置查询支持手动方式
- feat: 参数配置支持url类型
- fix: hzero个性化修复缓存取值问题
- feat: ui接口支持query参数
- feat: 修复校验功能拿不到当前单元数据
- feat: 更新依赖；hzero个性化日期组件统一数据格式
- fix: 修复表格lov多选拿不到参数
- fix: 修复表格只读字段无值问题；修复表单扩展字段缺失wrapper；修复c7n表格扩展字段编辑异常问题
- fix: 修复c7nlabel显示异常
- fix: 修复lov多选不受isEdit控制
- fix: 修复c7n查询表单label缺失；修复hzero合并代码字段配置时触发页面崩溃
- fix: 调整只读的实现方式；修复lov多选弹框有INT查询字段时崩溃；修复上下文参数取值逻辑错误
- fix: 修复多选弹框宽度错误；全选数据时更改为依据左侧查询全选
- fix: 修复扩展字段错误显示为编辑组件；修复lov多选分页大小错误
- feat: 多选lov切换实现方案；修复条件计算触发页面崩溃；上传组件和多选lov始终使用组件渲染
- fix: 条件类控制以当前form为准，仅显示字段取form和dataSource的并集
- fix: 修复链接组件缺失form、dataSource
- fix: 修复多选组件在文本状态的翻译
- fix: 下拉多选修复清除操作会存空字符串问题
- fix: 补充缺失的依赖
