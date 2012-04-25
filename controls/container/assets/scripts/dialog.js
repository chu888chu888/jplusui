/** * @author  *//** * @author  */imports("Controls.Container.Dialog");using("Controls.Core.ContainerControl");var Dialog =  ContainerControl.extend({		xType: 'dialog',		resizable: true,		draggable: true,		options: {				resizable: true,				draggable: true			},		tpl: '<div class="x-dialog">\				<div class="x-dialog-body">\				</div>\			</div>',		initHeader: function(header){		Dom.get(this.dom).insert('afterBegin', header);		header.setHtml('<a class="x-closebutton">×</a><h3></h3>');		header.find('.x-closebutton').on('click', this.close, this);	},		onClosing: function () {		return this.trigger('closing');	},		onClose: function () {
		this.trigger('close');
	},		init: function(options){				var t ;				// 允许直接传入一个节点。		if(!this.hasClass('x-dialog')){						// 判断节点是否已渲染过。			//var p = this.getParent();			//if(p && p.hasClass('x-facedialog-body'))						// 保存当前节点。			t = this.dom;			this.dom = this.create(options);		}		this.setStyle('display', 'none');				this.header = this.find('.x-dialog-header');		this.container = this.find('.x-dialog-body');				// 移除 script 脚本。		this.query('script').remove();				if(t){			this.container.dom.appendChild(t);		}	},		showMask: function(opacity){		var mask = this.mask || (this.mask = document.find('.x-mask-dialog') || Dom.create('div', 'x-mask x-mask-dialog').appendTo());			mask.setSize(document.getScrollSize());				if(opacity != null)			mask.setOpacity(opacity);					mask.show();		return this;	},		setOffset: function(p){		if(p.x != null) {			this._autoCenterType &= ~2;			this.setStyle('margin-left', 0);		}				if(p.y != null) {			this._autoCenterType &= ~1;			this.setStyle('margin-top', 0);		}				return this.base('setOffset');	},		setWidth: function(){		return this.base('setWidth').center();	},		setHeight: function(){		return this.base('setHeight').center();	},		setHtml: function(){		return this.base('setHtml').center();	},		setText: function(){		return this.base('setText').center();	},		_autoCenterType: 1 | 2,		/**	 * 刷新当前对话框的位置以确保居中。	 */	center: function(){		if(this._autoCenterType & 1)			this.setStyle('margin-top', - this.getHeight() / 2 + document.getScroll().y);					if(this._autoCenterType & 2)			this.setStyle('margin-left', - this.getWidth() / 2 + document.getScroll().x);					return this;	},	show: function(){				if(!this.getParent('body')){			this.appendTo();			}				return this.base('show').center();	},		showDialog: function(callback){		return    this.showMask().show(this.fadeInDuration, callback);	},		hide: function(){		this.base('hide');		if(this.mask) this.mask.hide();		return this;	},		dispose: function(){		var me = this;		this.onClose();		if(this.mask) this.mask.remove();	},		setContentSize: function(x, y){		this.setWidth('auto');		this.container.setWidth(x).setHeight(y);		this.center();		return this;	},		fadeInDuration: 300,		close: function(){		if(this.onClosing())			this.hide(this.fadeInDuration, Function.bind(this.onClose, this));	},		hideCloseButton: function(){		this.find('.x-closebutton').remove();		return this;	}	});