import Reflux from 'reflux';
import tools from '../utils/tools';
import ActionMenu from '../actions/menu.js';

var storeMenu = Reflux.createStore({
    init: function () {
        this.listenTo(ActionMenu.toggleMenu, this.onToggleMenu);
        this.listenTo(ActionMenu.showSidebar, this.onShowSidebar);
        this.listenTo(ActionMenu.tabsSize, this.onTabsSize);
        //this.listenTo(ActionMenu.windowResize, this.onWindowResize);
        this.listenTo(ActionMenu.refresh, this.onRefresh);
    },
    onCallAi: function () {

    },
    onLogout: function () {

    },
    onFullScreen: function () {

    },
    onToggleMenu: function (data, fixed) {
        if(fixed == null || fixed == undefined || fixed == false){
            this.trigger(data, false);
        }else{
            this.trigger(data, fixed);
        }
    },
    onShowSidebar: function (data) {
        this.trigger(data);
    },
    onTabsSize: function(height){
        this.trigger(height);
    },
    onWindowResize: function(width, height){
        this.trigger(width, height);
    },
    onRefresh: function(){
        this.trigger();
    }
});

export default storeMenu;