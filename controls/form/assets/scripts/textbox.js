/** * @author  *//** * @author  xuld */imports("Controls.Form.TextBox");using("Controls.Form.IInput");var TextBox = Control.extend({		xType: 'textbox',		tpl: '<input type="text" class="x-textbox">',		onChange: function(old, text){		this.trigger('change', old);	},		setText: function (value) {		var old = this.getText();		this.base('setText');				if(old !== value)			this.onChange(old, value);	}	}).implement(IInput);