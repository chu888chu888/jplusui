/** * @author  */using("System.Browser.Cookie");using("System.Utils.JSON");Object.extend(Browser, {		setData: window.localStorage ? function(name, value){		localStorage[name] = value;	} : Browser.setCookie,		getData: window.localStorage ? function (name) {		return localStorage[name];	} : Browser.getCookie,		setJSON: function (name, value) {		Browser.setData(name, JSON.encode(value));	},		getJSON: function (name) {		name = Browser.getData(name);		if(name)			try{				return JSON.decode(name);			}catch(e){}							return null;	}	});