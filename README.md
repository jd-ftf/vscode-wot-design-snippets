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
|`wd-card`|&lt;wd-card /&gt;<br />|



## License

MIT
