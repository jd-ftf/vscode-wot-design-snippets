# Wot Design Snippets for Visual Studio Code

This extension adds Wot Design Code Snippets and Syntax Highlight into Visual Studio Code.

本代码片段搜集了 Wot Design 的代码片段，详细清单请参考下文列表。

## Wot Design 组件

### 基础组件

| Prefix | Snippet Content |
| --- | --- |
|`wd-badge with type`|&lt;wd-badge :value="<code>&#124;</code>``value``" :max="<code>&#124;</code>``99``" type="<code>&#124;</code>``[primary,warning,success,danger,info]``"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;${TM_SELECTED_TEXT:<code>&#124;</code>``<wd-button size="small">评论</wd-button>``}<br />&lt;/wd-badge&gt;<br />|
|`wd-badge with bg-color`|&lt;wd-badge :value="<code>&#124;</code>``value``" :max="<code>&#124;</code>``99``" bg-color="<code>&#124;</code>``pink``"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;${TM_SELECTED_TEXT:<code>&#124;</code>``<wd-button size="small">回复</wd-button>``}<br />&lt;/wd-badge&gt;<br />|
|`wd-badge use dot`|&lt;wd-badge is-dot&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;${TM_SELECTED_TEXT:<code>&#124;</code>``<wd-button size="small">数据查询</wd-button>``}<br />&lt;/wd-badge&gt;<br />|
|`wd-button`|&lt;wd-button type="<code>&#124;</code>``[primary,success,info,warning,error,text,icon]``" size="<code>&#124;</code>``[small,medium,large]``"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;${TM_SELECTED_TEXT:<code>&#124;</code>``按钮文字``}<br />&lt;/wd-button&gt;<br />|
|`wd-button disabled`|&lt;wd-button disabled&gt;${TM_SELECTED_TEXT:<code>&#124;</code>``按钮文字``}&lt;/wd-button&gt;<br />|
|`wd-button plain`|&lt;wd-button plain&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;${TM_SELECTED_TEXT:<code>&#124;</code>``幽灵按钮``}<br />&lt;/wd-button&gt;<br />|
|`wd-button loading`|&lt;wd-button loading&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;${TM_SELECTED_TEXT:<code>&#124;</code>``加载中``}<br />&lt;/wd-button&gt;<br />|
|`wd-button text`|&lt;wd-button type="text"&gt;${TM_SELECTED_TEXT:<code>&#124;</code>``按钮文字``}&lt;/wd-button&gt;<br />|
|`wd-button icon`|&lt;wd-button icon="<code>&#124;</code>``[arrow-thin-up,arrow-thin-down,arrow-right,arrow-down,arrow-up,arrow-left,fill-camera,clock,computer,eye-close,view,translate,download,picture,evaluation,goods,lenovo,list,note,video,warning,setting,camera,chat,delete-thin,add-circle,add,scan,translate-bold,close,search,delete,more,thin-arrow-left,filter,phone,refresh,check,phone-compute,transfer,keywords,star-on,check-bold,error-fill,warn-bold,close-outline,close-bold,check-outline,wifi-error,subscribe,detection,read,fill-arrow-down,dong,edit-outline,copy,bags,decrease,jdm,spool]``"&gt;<code>&#124;</code>``按钮文字``&lt;/wd-button&gt;<br />|
|`wd-button block`|&lt;wd-button block&gt;<code>&#124;</code>``块状按钮``&lt;/wd-button&gt;<br />|
|`wd-icon`|&lt;wd-icon size="<code>&#124;</code>``20px``" color="<code>&#124;</code>``#0083ff``" name="<code>&#124;</code>``[arrow-thin-up,arrow-thin-down,arrow-right,arrow-down,arrow-up,arrow-left,fill-camera,clock,computer,eye-close,view,translate,download,picture,evaluation,goods,lenovo,list,note,video,warning,setting,camera,chat,delete-thin,add-circle,add,scan,translate-bold,close,search,delete,more,thin-arrow-left,filter,phone,refresh,check,phone-compute,transfer,keywords,star-on,check-bold,error-fill,warn-bold,close-outline,close-bold,check-outline,wifi-error,subscribe,detection,read,fill-arrow-down,dong,edit-outline,copy,bags,decrease,jdm,spool]``"&gt;<code>&#124;</code>``按钮文字``&lt;/wd-icon&gt;<br />|
|`wd-icon with tag`|&lt;wd-icon size="<code>&#124;</code>``20px``" color="<code>&#124;</code>``#0083ff``" tag="<code>&#124;</code>``div``" name="<code>&#124;</code>``[arrow-thin-up,arrow-thin-down,arrow-right,arrow-down,arrow-up,arrow-left,fill-camera,clock,computer,eye-close,view,translate,download,picture,evaluation,goods,lenovo,list,note,video,warning,setting,camera,chat,delete-thin,add-circle,add,scan,translate-bold,close,search,delete,more,thin-arrow-left,filter,phone,refresh,check,phone-compute,transfer,keywords,star-on,check-bold,error-fill,warn-bold,close-outline,close-bold,check-outline,wifi-error,subscribe,detection,read,fill-arrow-down,dong,edit-outline,copy,bags,decrease,jdm,spool]``"&gt;<code>&#124;</code>``按钮文字``&lt;/wd-icon&gt;<br />|
|`wd-icon i`|&lt;i class="<code>&#124;</code>``[arrow-thin-up,arrow-thin-down,arrow-right,arrow-down,arrow-up,arrow-left,fill-camera,clock,computer,eye-close,view,translate,download,picture,evaluation,goods,lenovo,list,note,video,warning,setting,camera,chat,delete-thin,add-circle,add,scan,translate-bold,close,search,delete,more,thin-arrow-left,filter,phone,refresh,check,phone-compute,transfer,keywords,star-on,check-bold,error-fill,warn-bold,close-outline,close-bold,check-outline,wifi-error,subscribe,detection,read,fill-arrow-down,dong,edit-outline,copy,bags,decrease,jdm,spool]``"&gt;<code>&#124;</code>``按钮文字``&lt;/i&gt;<br />|
|`wd-popup basic`|&lt;wd-popup v-model="<code>&#124;</code>``show``" :style="{ 'padding': '<code>&#124;</code>``30px`` <code>&#124;</code>``40px``' }"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;${TM_SELECTED_TEXT:<code>&#124;</code>``内容``}<br />&lt;/wd-popup&gt;<br />|
|`wd-popup position`|&lt;wd-popup v-model="<code>&#124;</code>``show``" position="<code>&#124;</code>``[top,right,bottom,left]``" :style="{ 'height': '<code>&#124;</code>``200px``' }" <code>&#124;</code>``closable``&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;${TM_SELECTED_TEXT:<code>&#124;</code>``内容``}<br />&lt;/wd-popup&gt;<br />|

### 导航组件

| Prefix | Snippet Content |
| --- | --- |
|`wd-action-sheet`|&lt;wd-action-sheet /&gt;<br />|

### 表单组件

| Prefix | Snippet Content |
| --- | --- |
|`wd-checkbox`|&lt;wd-checkbox /&gt;<br />|

### 交互组件

| Prefix | Snippet Content |
| --- | --- |
|`wd-action-sheet`|&lt;wd-action-sheet /&gt;<br />|

### 展示组件

| Prefix | Snippet Content |
| --- | --- |
|`wd-card`|&lt;wd-card title="<code>&#124;</code>``卡片标题``"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;${TM_SELECTED_TEXT:<code>&#124;</code>``卡片内容``}<br />&lt;/wd-card&gt;<br />|
|`wd-card rectangle`|&lt;wd-card type="rectangle"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;${TM_SELECTED_TEXT:<code>&#124;</code>``卡片内容``}<br />&lt;/wd-card&gt;<br />|
|`wd-collapse`|&lt;wd-collapse v-model="<code>&#124;</code>``value``"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;wd-collapse-item title="<code>&#124;</code>``折叠栏的标题``" name="<code>&#124;</code>``折叠栏的标识符``"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${TM_SELECTED_TEXT:<code>&#124;</code>``折叠栏内容``}<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;/wd-collapse-item&gt;<br />&lt;/wd-collapse&gt;<br />|
|`wd-collapse accordion`|&lt;wd-collapse v-model="<code>&#124;</code>``value``" accordion&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;wd-collapse-item title="<code>&#124;</code>``折叠栏的标题``" name="<code>&#124;</code>``折叠栏的标识符``"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${TM_SELECTED_TEXT:<code>&#124;</code>``折叠栏内容``}<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;/wd-collapse-item&gt;<br />&lt;/wd-collapse&gt;<br />|
|`wd-collapse disabled`|&lt;wd-collapse v-model="<code>&#124;</code>``value``"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;wd-collapse-item title="<code>&#124;</code>``折叠栏的标题``" name="<code>&#124;</code>``折叠栏的标识符``" disabled&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${TM_SELECTED_TEXT:<code>&#124;</code>``折叠栏内容``}<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;/wd-collapse-item&gt;<br />&lt;/wd-collapse&gt;<br />|
|`wd-collapse viewmore`|&lt;wd-collapse viewmore v-model="<code>&#124;</code>``value``"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;${TM_SELECTED_TEXT:<code>&#124;</code>``折叠栏内容``}<br />&lt;/wd-collapse&gt;<br />|
|`wd-curtain`|&lt;wd-curtain v-model="<code>&#124;</code>``true``" src="<code>&#124;</code>" to="<code>&#124;</code>"&gt;&lt;/wd-curtain&gt;<br />|
|`wd-curtain width`|&lt;wd-curtain v-model="<code>&#124;</code>``true``" src="<code>&#124;</code>" to="<code>&#124;</code>" width="<code>&#124;</code>``280px``"&gt;&lt;/wd-curtain&gt;<br />|
|`wd-curtain close-position`|&lt;wd-curtain v-model="<code>&#124;</code>``true``" src="<code>&#124;</code>" to="<code>&#124;</code>" close-position="<code>&#124;</code>``[inset, top, bottom, bottom, top-left, top-right, bottom-left, bottom-right]``"&gt;&lt;/wd-curtain&gt;<br />|
|`wd-curtain close-on-click-modal`|&lt;wd-curtain v-model="<code>&#124;</code>``true``" src="<code>&#124;</code>" to="<code>&#124;</code>" close-position="<code>&#124;</code>``[true, false]``"&gt;&lt;/wd-curtain&gt;<br />|
|`wd-divider`|&lt;wd-divider&gt;&lt;/wd-divider&gt;<br />|
|`wd-img`|&lt;wd-img width="<code>&#124;</code>``100``" height="<code>&#124;</code>``100``" src="<code>&#124;</code>"/&gt;<br />|
|`wd-img fit`|&lt;wd-img width="<code>&#124;</code>``100``" height="<code>&#124;</code>``100``" src="<code>&#124;</code>" fit="<code>&#124;</code>``[contain, cover, fill, none, scale-down]``"/&gt;<br />|
|`wd-img round`|&lt;wd-img width="<code>&#124;</code>``100``" height="<code>&#124;</code>``100``" src="<code>&#124;</code>" round/&gt;<br />|
|`wd-img lazy`|&lt;wd-img v-lazy="<code>&#124;</code>"/&gt;<br />|
|`wd-img-preview`|&lt;wd-img-preview v-model="<code>&#124;</code>``true``" :urls="<code>&#124;</code>" @open="<code>&#124;</code>" @close="<code>&#124;</code>" :on-long-tap="<code>&#124;</code>" &gt;&lt;/wd-img-preview&gt;<br />|
|`wd-notice-bar`|&lt;wd-notice-bar text="${TM_SELECTED_TEXT:<code>&#124;</code>``提示消息内容``}" prefix="<code>&#124;</code>``[arrow-thin-up,arrow-thin-down,arrow-right,arrow-down,arrow-up,arrow-left,fill-camera,clock,computer,eye-close,view,translate,download,picture,evaluation,goods,lenovo,list,note,video,warning,setting,camera,chat,delete-thin,add-circle,add,scan,translate-bold,close,search,delete,more,thin-arrow-left,filter,phone,refresh,check,phone-compute,transfer,keywords,star-on,check-bold,error-fill,warn-bold,close-outline,close-bold,check-outline,wifi-error,subscribe,detection,read,fill-arrow-down,dong,edit-outline,copy,bags,decrease,jdm,spool]``" &gt;&lt;/wd-notice-bar&gt;<br />|
|`wd-notice-bar type`|&lt;wd-notice-bar text="${TM_SELECTED_TEXT:<code>&#124;</code>``提示消息内容``}" prefix="<code>&#124;</code>``[arrow-thin-up,arrow-thin-down,arrow-right,arrow-down,arrow-up,arrow-left,fill-camera,clock,computer,eye-close,view,translate,download,picture,evaluation,goods,lenovo,list,note,video,warning,setting,camera,chat,delete-thin,add-circle,add,scan,translate-bold,close,search,delete,more,thin-arrow-left,filter,phone,refresh,check,phone-compute,transfer,keywords,star-on,check-bold,error-fill,warn-bold,close-outline,close-bold,check-outline,wifi-error,subscribe,detection,read,fill-arrow-down,dong,edit-outline,copy,bags,decrease,jdm,spool]``" type="<code>&#124;</code>``[info, warning, danger]``"&gt;&lt;/wd-notice-bar&gt;<br />|
|`wd-notice-bar scrollable`|&lt;wd-notice-bar text="${TM_SELECTED_TEXT:<code>&#124;</code>``提示消息内容``}" :scrollable="<code>&#124;</code>``[false,true]``"&gt;&lt;/wd-notice-bar&gt;<br />|
|`wd-notice-bar slot`|&lt;wd-notice-bar&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;div slot="prefix"&gt;<code>&#124;</code>``前置插槽``&lt;/div&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;<code>&#124;</code>``提示消息内容``<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;div slot="suffix"&gt;<code>&#124;</code>``后置插槽``&lt;/div&gt;<br />&lt;/wd-notice-bar&gt;<br />|
|`wd-notice-bar closable`|&lt;wd-notice-bar text="${TM_SELECTED_TEXT:<code>&#124;</code>``提示消息内容``}" closable&gt;&lt;/wd-notice-bar&gt;<br />|
|`wd-notice-bar color`|&lt;wd-notice-bar text="${TM_SELECTED_TEXT:<code>&#124;</code>``提示消息内容``}" color="<code>&#124;</code>``#34D19D``" background-color="<code>&#124;</code>``#f0f9eb``" &gt;&lt;/wd-notice-bar&gt;<br />|
|`wd-popover`|&lt;wd-popover content="${TM_SELECTED_TEXT:<code>&#124;</code>``气泡消息内容``}"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;wd-button&gt;<code>&#124;</code>``点击展示``&lt;/wd-button&gt;<br />&lt;/wd-popover&gt;<br />|
|`wd-popover mode`|&lt;wd-popover mode="<code>&#124;</code>``[normal, menu]``" :content="<code>&#124;</code>" @menu-click="<code>&#124;</code>"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;wd-button&gt;<code>&#124;</code>``点击展示``&lt;/wd-button&gt;<br />&lt;/wd-popover&gt;<br />|
|`wd-progress`|&lt;wd-progress :percentage="<code>&#124;</code>``30``"&gt;&lt;/wd-progress&gt;<br />|
|`wd-progress hide-text`|&lt;wd-progress :percentage="<code>&#124;</code>``30``" hide-text&gt;&lt;/wd-progress&gt;<br />|
|`wd-progress status`|&lt;wd-progress :percentage="<code>&#124;</code>``30``" hide-text status="<code>&#124;</code>``[success,danger]``"&gt;&lt;/wd-progress&gt;<br />|
|`wd-progress color`|&lt;wd-progress :percentage="<code>&#124;</code>``30``" color="<code>&#124;</code>``#00c740``"&gt;&lt;/wd-progress&gt;<br />|
|`wd-status-tip`|&lt;wd-status-tip type="<code>&#124;</code>``[search, network, content, collect, comment, halo, message]``" tip="${TM_SELECTED_TEXT:<code>&#124;</code>``提示文案``}"/&gt;<br />|
|`wd-sort-button`|&lt;wd-sort-button v-model="<code>&#124;</code>``value``" title="<code>&#124;</code>``排序按钮展示文案``"/&gt;<br />|
|`wd-sort-button allow-reset`|&lt;wd-sort-button v-model="<code>&#124;</code>``value``" title="<code>&#124;</code>``排序按钮展示文案``" allow-reset/&gt;<br />|
|`wd-sort-button desc-first`|&lt;wd-sort-button v-model="<code>&#124;</code>``value``" title="<code>&#124;</code>``排序按钮展示文案``" desc-first/&gt;<br />|
|`wd-steps`|&lt;wd-steps :active="<code>&#124;</code>``0``"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;wd-step&gt;&lt;/wd-step&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;wd-step&gt;&lt;/wd-step&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;wd-step&gt;&lt;/wd-step&gt;<br />&lt;/wd-steps&gt;<br />|
|`wd-steps align-center`|&lt;wd-steps :active="<code>&#124;</code>``0``" align-center&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;wd-step&gt;&lt;/wd-step&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;wd-step&gt;&lt;/wd-step&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;wd-step&gt;&lt;/wd-step&gt;<br />&lt;/wd-steps&gt;<br />|
|`wd-steps title description`|&lt;wd-steps :active="<code>&#124;</code>``0``" align-center&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;wd-step title="<code>&#124;</code>``步骤标题``" description="<code>&#124;</code>``描述信息``"&gt;&lt;/wd-step&gt;<br />&lt;/wd-steps&gt;<br />|
|`wd-steps icon`|&lt;wd-steps :active="<code>&#124;</code>``0``" align-center&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;wd-step icon="wd-icon-<code>&#124;</code>``[arrow-thin-up,arrow-thin-down,arrow-right,arrow-down,arrow-up,arrow-left,fill-camera,clock,computer,eye-close,view,translate,download,picture,evaluation,goods,lenovo,list,note,video,warning,setting,camera,chat,delete-thin,add-circle,add,scan,translate-bold,close,search,delete,more,thin-arrow-left,filter,phone,refresh,check,phone-compute,transfer,keywords,star-on,check-bold,error-fill,warn-bold,close-outline,close-bold,check-outline,wifi-error,subscribe,detection,read,fill-arrow-down,dong,edit-outline,copy,bags,decrease,jdm,spool]``" type="<code>&#124;</code>``[info, warning, danger]``}"&gt;&lt;/wd-step&gt;<br />&lt;/wd-steps&gt;<br />|
|`wd-steps vertical`|&lt;wd-steps :active="<code>&#124;</code>``0``" vertical&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;wd-step description="<code>&#124;</code>``描述信息``"&gt;&lt;/wd-step&gt;<br />&lt;/wd-steps&gt;<br />|
|`wd-steps dot`|&lt;wd-steps :active="<code>&#124;</code>``0``" align-center dot&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;wd-step description="<code>&#124;</code>``描述信息``"&gt;&lt;/wd-step&gt;<br />&lt;/wd-steps&gt;<br />|
|`wd-steps status`|&lt;wd-steps :active="<code>&#124;</code>``0``" align-center&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;wd-step title="<code>&#124;</code>``步骤标题``" status="<code>&#124;</code>``[finished, process, error]``"&gt;&lt;/wd-step&gt;<br />&lt;/wd-steps&gt;<br />|
|`Sticky`|&lt;Sticky&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;${TM_SELECTED_TEXT:<code>&#124;</code>``内容``}&lt;/p&gt;<br />&lt;/Sticky&gt;<br />|
|`Sticky offset-top`|&lt;Sticky :offset-top="<code>&#124;</code>``44``"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;${TM_SELECTED_TEXT:<code>&#124;</code>``内容``}&lt;/p&gt;<br />&lt;/Sticky&gt;<br />|
|`wd-tag`|&lt;wd-tag&gt;${TM_SELECTED_TEXT:<code>&#124;</code>``标签内容``}&lt;/wd-tag&gt;<br />|
|`wd-tag type`|&lt;wd-tag type="<code>&#124;</code>``[primary, danger, warning, success]``"&gt;${TM_SELECTED_TEXT:<code>&#124;</code>``标签内容``}&lt;/wd-tag&gt;<br />|
|`wd-tag plain`|&lt;wd-tag plain&gt;${TM_SELECTED_TEXT:<code>&#124;</code>``标签内容``}&lt;/wd-tag&gt;<br />|
|`wd-tag mark`|&lt;wd-tag mark&gt;${TM_SELECTED_TEXT:<code>&#124;</code>``标签内容``}&lt;/wd-tag&gt;<br />|
|`wd-tag round`|&lt;wd-tag round&gt;${TM_SELECTED_TEXT:<code>&#124;</code>``标签内容``}&lt;/wd-tag&gt;<br />|
|`wd-tag icon`|&lt;wd-tag icon="wd-icon-<code>&#124;</code>``[arrow-thin-up,arrow-thin-down,arrow-right,arrow-down,arrow-up,arrow-left,fill-camera,clock,computer,eye-close,view,translate,download,picture,evaluation,goods,lenovo,list,note,video,warning,setting,camera,chat,delete-thin,add-circle,add,scan,translate-bold,close,search,delete,more,thin-arrow-left,filter,phone,refresh,check,phone-compute,transfer,keywords,star-on,check-bold,error-fill,warn-bold,close-outline,close-bold,check-outline,wifi-error,subscribe,detection,read,fill-arrow-down,dong,edit-outline,copy,bags,decrease,jdm,spool]``" type="<code>&#124;</code>``[info, warning, danger]``" mark&gt;${TM_SELECTED_TEXT:<code>&#124;</code>``标签内容``}&lt;/wd-tag&gt;<br />|
|`wd-tag color`|&lt;wd-tag color="<code>&#124;</code>``#0083ff``" bg-color="<code>&#124;</code>``#d0e8ff``"&gt;${TM_SELECTED_TEXT:<code>&#124;</code>``标签内容``}&lt;/wd-tag&gt;<br />|
|`wd-tag closable`|&lt;wd-tag v-if=="<code>&#124;</code>``true``" closable round @close="<code>&#124;</code>"&gt;${TM_SELECTED_TEXT:<code>&#124;</code>``标签内容``}&lt;/wd-tag&gt;<br />|
|`wd-tag dynamic`|&lt;wd-tag dynamic round&gt;&lt;/wd-tag&gt;<br />|
|`wd-tooltip`|&lt;wd-tooltip placement="<code>&#124;</code>``[top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end]``" content="<code>&#124;</code>``提示内容``"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;wd-button&gt;<code>&#124;</code>``top``&lt;/wd-button&gt;<br />&lt;/wd-tooltip&gt;<br />|
|`wd-tooltip show-close`|&lt;wd-tooltip content="<code>&#124;</code>``提示内容``" show-close&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;wd-button&gt;<code>&#124;</code>``关闭``&lt;/wd-button&gt;<br />&lt;/wd-tooltip&gt;<br />|
|`wd-tooltip content`|&lt;wd-tooltip placement="<code>&#124;</code>``[top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end]``"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;div slot="content"&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<code>&#124;</code>``多行文本``&lt;/div&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />&nbsp;&nbsp;&nbsp;&nbsp;&lt;wd-button&gt;<code>&#124;</code>``多行文本``&lt;/wd-button&gt;<br />&lt;/wd-tooltip&gt;<br />|



## License

MIT
