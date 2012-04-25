/** * @author  */imports("Controls.Core.ContainerControl");using("Controls.Core.ScrollableControl");var ContainerControl = ScrollableControl.extend({		initHeader: function(header){		Dom.get(this.dom).insert('afterBegin', header);		header.setHtml('<h2></h2>');	},		toggleHeader: function (value) {		if(this.header){			if(!value) {				this.header.remove();				this.header = null;			}		} else if(value){			this.initHeader(this.header = Dom.create('div', 'x-' + this.xType + '-header'));		}	},		getTitle: function(){		return (this.header.find('h2, h3, h4, h5') || this.header.find('a')).getText();	},		setTitle: function(value){		if(value != null){			this.toggleHeader(true);			(this.header.find('h2, h3, h4, h5') || this.header.find('a')).setText(value);		} else {			this.toggleHeader(false);		}		return this;	},		init: function(){		var fix = '.x-' + this.xType;		this.header = this.find(fix + '-header');		this.container = this.find(fix + '-body');	},		getText: function(){		return this.container.getText();	},		getHtml: function(){		return this.controls.length === 1 ? this.controls[0].getHtml() : this.container.getHtml();	},		setText: function(value){		this.empty().append(Dom.create('div', 'x-' + this.xType + '-container').setText(value));		return this;	},		setHtml: function(value){		this.empty().append(Dom.create('div', 'x-' + this.xType + '-container').setHtml(value));		return this;	}});